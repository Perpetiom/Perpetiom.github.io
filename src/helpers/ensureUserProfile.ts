import { supabase } from "@/lib/supabase";

export async function ensureUserProfile() {
    // 1) získej přihlášeného uživatele (musí existovat aktivní session)
    const { data: { user }, error: userErr } = await supabase.auth.getUser();
    if (userErr) throw userErr;
    if (!user) return; // nepřihlášený => nic

    // 2) upsert (bez duplicit): pokud řádek existuje, jen se ignoruje/aktualizuje
    const payload = {
        id: user.id,
        email: user.email,
        // ...sem můžeš doplnit další výchozí pole (name apod.)
    };

    const { error: upsertErr } = await supabase
        .from("users")
        .upsert([payload], { onConflict: "id" }); // vyžaduje uniq. index/PK na "id"

    if (upsertErr) throw upsertErr;
}
