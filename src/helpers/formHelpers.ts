import React from "react";
import { supabase } from '@/lib/supabase';
import type { Dictionary } from "@/app/constants/dict";

type TDict = Dictionary;

type LoginData = {
    email: string;
    password: string;
}

type OfferData = {
    title: string;
    profession: string;
    date: Date | null;
    description: string;
    location: string;
    budget: string;
    is_vip: boolean;
}

type RequestData = {
    title: string;
    profession: string;
    description: string;
    location: string;
    price: string;
    is_vip: boolean;
}

const d = new Date();
const yyyy = d.getFullYear();
const mm = String(d.getMonth() + 1).padStart(2, '0');
const dd = String(d.getDate()).padStart(2, '0');
const ymd = `${yyyy}.${mm}.${dd}`;



export const handleFormChange = <T>(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setState: React.Dispatch<React.SetStateAction<T>>
) => {
    const { name, value } = e.target;
    setState(prevState => ({
        ...prevState,
        [name]: value
    }));
};


export const handleLogin = async (e: React.FormEvent, data: LoginData, t:TDict) => {
    e.preventDefault();

    try {
        const { data: userData, error: authError } = await supabase.auth.signInWithPassword({
            email: data.email,
            password: data.password,
        });

        if (authError) {
            alert(`${t.errorMessages.loginError}: ${authError.message}`);
            return;
        }

    } catch (error) {
        alert(`${t.errorMessages.unexpectedError}: ${String(error)}`);
    }
};

export const handleOfferSubmit = async (
    e: React.FormEvent,
    data: OfferData,
    t: TDict
) => {
    e.preventDefault();

    try {
        // 0) UX: zkontrolovat přihlášení hned na začátku
        const { data: userRes, error: userErr } = await supabase.auth.getUser();
        if (userErr || !userRes?.user) {
            alert(t.errorMessages.mustBeLoggedIn);
            return; // důležité, ať kód nepokračuje
        }

        // 1) GPT validátor (voláme až když víme, že user je přihlášen)
        const res = await fetch("/api/validate-listing", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ...data,
                is_offer: true,
                is_vip: Boolean(data.is_vip),
            }),
        });

        const check = await res.json();

        if (!res.ok || !check.ok) {
            alert(
                check?.details?.reasons?.join("\n") ||
                check?.reason ||
                t.errorMessages.listingValidationFailed
            );
            return; // zastav, validace neprošla
        }

        const { normalized, translations, reasons, piiFound } = check.result;

        // 2) i18n JSONB
        const title_i18n = translations
            ? {
                cs: translations.cs.title,
                pl: translations.pl.title,
                de: translations.de.title,
                sk: translations.sk.title,
                en: translations.en.title,
            }
            : null;

        const profession_i18n = translations
            ? {
                cs: translations.cs.profession,
                pl: translations.pl.profession,
                de: translations.de.profession,
                sk: translations.sk.profession,
                en: translations.en.profession,
            }
            : null;

        const description_i18n = translations
            ? {
                cs: translations.cs.description,
                pl: translations.pl.description,
                de: translations.de.description,
                sk: translations.sk.description,
                en: translations.en.description,
            }
            : null;

        const location_i18n = translations
            ? {
                cs: translations.cs.location,
                pl: translations.pl.location,
                de: translations.de.location,
                sk: translations.sk.location,
                en: translations.en.location,
            }
            : null;

        // 3) uložení do DB
        const { error } = await supabase.from("listings").insert([
            {
                user_id: userRes.user.id,
                title: normalized.title,
                profession: normalized.profession,
                description: normalized.description,
                location: normalized.location,
                price: normalized.price,
                date: normalized.date ?? null,
                created_at: ymd,
                is_offer: true,
                is_vip: normalized.is_vip ?? false,

                title_i18n,
                profession_i18n,
                description_i18n,
                location_i18n,

                validation_ok: true,
                validation_reasons: reasons ?? [],
                pii_found: piiFound ?? { emails: [], phones: [], urls: [], socials: [] },
            },
        ]);

        if (error) {
            alert(`${t.errorMessages.listingSaveError}: ${String(error.message ?? error)}`);
            return;
        }

        alert(t.errorMessages.listingSaved);
    } catch (err: any) {
        // sem spadne síťová chyba, 500 z API, atd.
        alert(`${t.errorMessages.unexpectedError}: ${err?.message ?? String(err)}`);
        return;
    }
};



export const handleRequestSubmit = async (
    e: React.FormEvent,
    data: RequestData,
    t: TDict
) => {
    e.preventDefault();

    try {
        // 0) UX: zkontrolovat přihlášení hned na začátku
        const { data: userRes, error: userErr } = await supabase.auth.getUser();
        if (userErr || !userRes?.user) {
            alert(t.errorMessages.mustBeLoggedIn);
            return; // důležité, ať kód nepokračuje
        }

        // 1) GPT validátor (is_offer: false)
        const res = await fetch("/api/validate-listing", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ...data,
                is_vip: Boolean(data.is_vip),
                is_offer: false,
            }),
        });

        const check = await res.json();

        if (!res.ok || !check.ok) {
            alert(
                check?.details?.reasons?.join("\n") ||
                check?.reason ||
                t.errorMessages.listingValidationFailed
            );
            return;
        }

        const { normalized, translations, reasons, piiFound } = check.result;

        // 2) i18n JSONB (pokud přišly překlady)
        const title_i18n = translations
            ? {
                cs: translations.cs.title,
                pl: translations.pl.title,
                de: translations.de.title,
                sk: translations.sk.title,
                en: translations.en.title,
            }
            : null;

        const profession_i18n = translations
            ? {
                cs: translations.cs.profession,
                pl: translations.pl.profession,
                de: translations.de.profession,
                sk: translations.sk.profession,
                en: translations.en.profession,
            }
            : null;

        const description_i18n = translations
            ? {
                cs: translations.cs.description,
                pl: translations.pl.description,
                de: translations.de.description,
                sk: translations.sk.description,
                en: translations.en.description,
            }
            : null;

        const location_i18n = translations
            ? {
                cs: translations.cs.location,
                pl: translations.pl.location,
                de: translations.de.location,
                sk: translations.sk.location,
                en: translations.en.location,
            }
            : null;

        // 3) insert do DB
        const { error } = await supabase.from("listings").insert([
            {
                user_id: userRes.user.id,
                title: normalized.title,
                profession: normalized.profession,
                description: normalized.description,
                location: normalized.location,
                price: normalized.price,
                created_at: ymd,
                is_offer: false,
                is_vip: normalized.is_vip ?? false,

                title_i18n,
                profession_i18n,
                description_i18n,
                location_i18n,

                validation_ok: true,
                validation_reasons: reasons ?? [],
                pii_found: piiFound ?? { emails: [], phones: [], urls: [], socials: [] },
            },
        ]);

        if (error) {
            alert(`${t.errorMessages.listingSaveError}: ${error.message}`);
            return;
        }

        alert(t.errorMessages.listingSaved);
    } catch (err: any) {
        alert(`${t.errorMessages.unexpectedError}: ${err?.message ?? String(err)}`);
        return;
    }
};

