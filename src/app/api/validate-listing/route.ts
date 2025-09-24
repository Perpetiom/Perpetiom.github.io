// app/api/validate-listing/route.ts
import { NextResponse } from "next/server";
import { scrubObjectStrings } from "@/app/api/validate-listing/scrub";



async function withRetry<T>(fn: () => Promise<T>, tries = 3) {
    let lastErr: any;
    for (let i = 0; i < tries; i++) {
        try {
            return await fn();
        } catch (e: any) {
            const status = e?.status ?? e?.response?.status;
            if (status !== 429) throw e;
            await new Promise(r => setTimeout(r, 400 * (i + 1)));
            lastErr = e;
        }
    }
    throw lastErr;
}

export async function POST(req: Request) {
    // Lazy import + instanciace až uvnitř handleru
    const { default: OpenAI } = await import("openai");
    const apiKey = process.env.OPENAI_API_KEY;

    // V CI / na GitHub Pages klíč nemáš → vrať kontrolovanou chybu
    if (!apiKey) {
        return NextResponse.json(
            { ok: false, reason: "Server misconfigured: OPENAI_API_KEY missing" },
            { status: 500 }
        );
    }

    const openai = new OpenAI({ apiKey });

    try {
        const raw = await req.json();

        // 0) lokální PII scrub
        const { sanitized, found } = scrubObjectStrings(raw);

        // 1) validace + překlady v jednom požadavku
        const completion = await withRetry(() =>
            openai.chat.completions.create({
                model: "gpt-4o-mini",
                messages: [
                    {
                        role: "system",
                        content: [
                            "You validate marketplace listings.",
                            "Return ONLY JSON matching the provided JSON schema.",
                            "Sanitize any contact info (email, phone, URLs, social handles/keywords).",
                            "If any PII remains, replace with [email removed]/[phone removed]/[url removed]/[social removed].",
                            "Also produce translations of title/profession/description/location into cs, pl, de, sk, en under `translations`.",
                            "Reject unsafe or spammy content by setting allowed=false and explain in reasons.",
                        ].join(" "),
                    },
                    { role: "user", content: JSON.stringify(sanitized) },
                ],
                response_format: {
                    type: "json_schema",
                    json_schema: {
                        name: "ListingValidation",
                        schema: {
                            type: "object",
                            additionalProperties: false,
                            properties: {
                                allowed: { type: "boolean" },
                                reasons: { type: "array", items: { type: "string" } },
                                normalized: {
                                    type: "object",
                                    additionalProperties: false,
                                    properties: {
                                        title: { type: "string" },
                                        profession: { type: "string" },
                                        description: { type: "string" },
                                        location: { type: "string" },
                                        price: { type: "string" },
                                        contactPerson: { type: ["string", "null"] },
                                        phoneNumber: { type: ["string", "null"] },
                                        email: { type: ["string", "null"] },
                                        is_offer: { type: "boolean" },
                                        is_vip: { type: "boolean" },
                                        date: { type: ["string", "null"] }
                                    },
                                    required: ["title","profession","description","location","price","is_offer","is_vip"]
                                },
                                translations: {
                                    type: "object",
                                    additionalProperties: false,
                                    properties: {
                                        cs: { $ref: "#/$defs/baseFields" },
                                        pl: { $ref: "#/$defs/baseFields" },
                                        de: { $ref: "#/$defs/baseFields" },
                                        sk: { $ref: "#/$defs/baseFields" },
                                        en: { $ref: "#/$defs/baseFields" }
                                    },
                                    required: ["cs","pl","de","sk","en"]
                                },
                                softIssues: {
                                    type: "array",
                                    items: {
                                        type: "object",
                                        properties: {
                                            field: { type: "string" },
                                            message: { type: "string" },
                                            suggestion: { type: "string" }
                                        },
                                        required: ["field","message"],
                                        additionalProperties: false
                                    }
                                },
                                foundContactsInDescription: { type: "boolean" }
                            },
                            required: ["allowed","reasons","normalized","translations","softIssues","foundContactsInDescription"],
                            $defs: {
                                baseFields: {
                                    type: "object",
                                    additionalProperties: false,
                                    properties: {
                                        title: { type: "string" },
                                        profession: { type: "string" },
                                        description: { type: "string" },
                                        location: { type: "string" }
                                    },
                                    required: ["title","description","location"]
                                }
                            }
                        }
                    }
                },
                temperature: 0.2
            })
        );

        const text = completion.choices[0]?.message?.content ?? "{}";
        const parsed = JSON.parse(text);

        if (!parsed.allowed) {
            return NextResponse.json(
                { ok: false, reason: "Validation failed", details: parsed, found },
                { status: 400 }
            );
        }

        const hardNormalized = scrubObjectStrings(parsed.normalized).sanitized;

        return NextResponse.json({
            ok: true,
            result: { ...parsed, normalized: hardNormalized },
            found
        });
    } catch (err: any) {
        const status = err?.status ?? err?.response?.status ?? 500;
        const msg = err?.message ?? String(err?.response?.data ?? err);
        const code = err?.code ?? err?.error?.type ?? "unknown";
        console.error("validate-listing error:", status, code, msg);
        return NextResponse.json(
            { ok: false, reason: "Validator error", code, error: msg },
            { status }
        );
    }
}
