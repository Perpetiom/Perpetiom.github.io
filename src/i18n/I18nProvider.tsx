"use client";
import React, {createContext, useContext, useEffect, useMemo, useState} from "react";
import { getLang } from "@/app/constants/dict";

export type LangCode = "cs" | "pl" | "de" | "sk" | "en";

type I18nContextValue = {
    langCode: LangCode;
    setLangCode: (l: LangCode) => void;
    t: ReturnType<typeof getLang>;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [langCode, setLangCode] = useState<LangCode>("cs");

    // načtení z localStorage (client only)
    useEffect(() => {
        const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as LangCode | null;
        if (saved) setLangCode(saved);
    }, []);

    const t = useMemo(() => getLang(langCode), [langCode]);

    const value = useMemo<I18nContextValue>(() => ({
        langCode,
        setLangCode: (l) => {
            setLangCode(l);
            if (typeof window !== "undefined") localStorage.setItem("lang", l);
        },
        t,
    }), [langCode, t]);

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;

};

export const useI18n = () => {
    const ctx = useContext(I18nContext);
    if (!ctx) throw new Error("useI18n must be used within I18nProvider");
    return ctx;
};
