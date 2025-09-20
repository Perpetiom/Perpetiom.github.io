const EMAIL_RE = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi;
const PHONE_RE = /^\+?[1-9]\d{9,14}$/;
const URL_RE = /\bhttps?:\/\/[^\s/$.?#].[^\s]*\b/gi;

const SOCIAL_WORDS = [
    "instagram", "ig", "facebook", "fb", "messenger", "whatsapp", "wa", "telegram", "tg",
    "tiktok", "snapchat", "wechat", "signal"
];

// nahradí PII placeholderem
export function scrubPII(input: string) {
    let txt = input;
    const found: { emails: string[]; phones: string[]; urls: string[]; socials: string[] } = {
        emails: [], phones: [], urls: [], socials: []
    };

    txt = txt.replace(EMAIL_RE, (m) => { found.emails.push(m); return "[email removed]"; });
    txt = txt.replace(PHONE_RE, (m) => { found.phones.push(m); return "[phone removed]"; });
    txt = txt.replace(URL_RE, (m) => { found.urls.push(m); return "[url removed]"; });

    // social keywords – pouze vyhodíme slovo (nech text čitelný)
    const words = txt.split(/\b/);
    for (let i = 0; i < words.length; i++) {
        const w = words[i];
        if (SOCIAL_WORDS.includes(w.toLowerCase())) {
            found.socials.push(w);
            words[i] = "[social removed]";
        }
    }
    txt = words.join("");

    return { text: txt, found };
}

export function scrubObjectStrings<T extends Record<string, any>>(obj: T) {
    const foundAll = {
        emails: [] as string[],
        phones: [] as string[],
        urls: [] as string[],
        socials: [] as string[],
    };

    const mergeFound = (f: typeof foundAll) => {
        foundAll.emails.push(...f.emails);
        foundAll.phones.push(...f.phones);
        foundAll.urls.push(...f.urls);
        foundAll.socials.push(...f.socials);
    };

    const visit = (val: any): any => {
        if (typeof val === "string") {
            const { text, found } = scrubPII(val);
            mergeFound(found);
            return text;
        }
        if (Array.isArray(val)) {
            return val.map(visit);
        }
        if (val && typeof val === "object") {
            const out: any = {};
            for (const [k, v] of Object.entries(val)) {
                out[k] = visit(v);
            }
            return out;
        }
        return val; // number | boolean | null | undefined | Date | ...
    };

    const sanitized = visit(obj) as T;

    return { sanitized, found: foundAll };
}
