// src/services/listingService.ts
import { supabase } from "@/lib/supabase";

/**
 * Zavolá API route /api/validate-listing a vrátí výsledek validace.
 */
export async function validateListing(payload: any) {
    const res = await fetch("/api/validate-listing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (!res.ok) {
        throw new Error(data?.reason || "Validation failed");
    }

    return data.result; // obsahuje { normalized, reasons, softIssues, ... }
}

/**
 * Validuje data přes GPT validátor a pokud projdou, uloží do databáze.
 */
export async function saveListingThroughValidator(
    payload: any,
    userId: string
) {
    // 1) validace
    const validated = await validateListing(payload);

    // 2) získáme normalizovaná data z validátoru
    const normalized = validated.normalized;

    // 3) vložení do Supabase (tabulka listings)
    const { error } = await supabase.from("listings").insert([
        {
            user_id: userId,
            ...normalized, // title, profession, description, location, price, is_offer, is_vip, date
        },
    ]);

    if (error) {
        throw new Error(error.message);
    }

    return { ok: true, data: normalized };
}
