"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ensureUserProfile } from "@/helpers/ensureUserProfile";

export default function AuthCallbackPage() {
    const router = useRouter();

    useEffect(() => {
        // po návratu z e-mailu: vytvořit profil a přesměrovat dál
        (async () => {
            try {
                await ensureUserProfile();
            } finally {
                router.replace("/"); // kam chceš poslat uživatele
            }
        })();
    }, [router]);

    return <p>Dokončujeme přihlášení…</p>;
}
