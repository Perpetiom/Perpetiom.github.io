// src/components/Navbar.tsx
'use client';

import Link from 'next/link';

import '../styles/Navbar.css';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { User } from '@supabase/supabase-js';
import logo from '../../public/assets/images/perpetiom-logo.png';

import { useI18n } from "@/i18n/I18nProvider";
import Dropdown from '@/components/ui/Dropdown'

interface UserWithProfile extends User {
    profile?: {
        name: string;
        surname: string;
    };
}

const RAW_LANGS = [
    { code: "cs", label: "Čeština", emoji: "🇨🇿" },
    { code: "sk", label: "Slovenčina", emoji: "🇸🇰" },
    { code: "pl", label: "Polski", emoji: "🇵🇱" },
    { code: "de", label: "Deutsch", emoji: "🇩🇪" },
    { code: "en", label: "English", emoji: "🇬🇧" },
];

const items = RAW_LANGS.map(l => ({
    value: l.code,
    label: l.label,
    icon: <span>{l.emoji}</span>,
}));

export default function Navbar() {
    const [user, setUser] = useState<UserWithProfile | null>(null);
    const { langCode, setLangCode } = useI18n();

    const { t } = useI18n();

    useEffect(() => {
        const fetchUserAndProfile = async () => {
            const { data: { user: authUser } } = await supabase.auth.getUser(); // Přejmenováno na authUser, aby se nepletlo s naším stavem user

            if (authUser) {
                const { data: profile, error } = await supabase
                    .from('users')
                    .select('name, surname')
                    .eq('id', authUser.id)
                    .single();

                if (error) {
                    console.error('Chyba při načítání profilu:', error.message);
                    // Pokud profil neexistuje, nastavíme uživatele bez profilu, ale stále přihlášeného
                    setUser(authUser);
                } else {
                    // Profil nalezen, spojíme ho s uživatelem
                    setUser({ ...authUser, profile });
                }
            } else {
                setUser(null); // Žádný přihlášený uživatel
            }
        };

        fetchUserAndProfile();

        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (event, session) => {
                if (session?.user) {
                    // Při změně stavu (přihlášení/odhlášení) znovu načteme uživatele a jeho profil
                    fetchUserAndProfile();
                } else {
                    setUser(null);
                }
            }
        );

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        setUser(null);
    };


    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link href="/" className="logo-link"> {/* Přidali jsme třídu pro logo */}
                    <img src={logo.src} alt="perpetiom-logo" width={120} height={30} />
                </Link>

                {/* Vlevo zobrazení pro přihlášeného uživatele, vpravo odkazy pro nepřihlášeného */}
                <div className="nav-content">
                    {user ? (
                        <div className="user-info">
                            <span>{t.navbar.loggedInAs} {user.profile?.name ?? user.email} {user.profile?.surname || ''}</span>
                            <button onClick={handleLogout} className="logout-button">{t.navbar.signOut}</button>
                        </div>
                    ) : (
                        <div className="navbar-links">
                            <Link href="/login">{t.navbar.signIn}</Link>
                            <Link href="/register">{t.navbar.register}</Link>
                        </div>
                    )}
                </div>
                <Dropdown
                    items={items}
                    value={langCode}
                    onChange={(val) => setLangCode(val as any)}
                    placeholder="Select language"
                />
            </div>
        </nav>
    );
}