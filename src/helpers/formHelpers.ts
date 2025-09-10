// utils/formHelpers.ts

import React from "react";
import { supabase } from '@/lib/supabase';

type RegistrationData = {
    email: string;
    phoneNumber: string;
    name: string;
    surname: string;
    password: string;
    passwordConfirmation: string;
    ico: string;
}

type LoginData = {
    email: string;
    password: string;
}

type OfferData = {
    title: string;
    profession: string;
    date: string;
    description: string;
    location: string;
    budget: string;
    contactPerson: string;
    phoneNumber: string;
    email: string;
    is_vip: boolean;
}

type RequestData = {
    title: string;
    profession: string;
    description: string;
    location: string;
    price: string;
    contactPerson: string;
    phoneNumber: string;
    email: string;
    is_vip: boolean;
}

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

// v handleFormSubmit ve formHelpers.ts
export const handleFormSubmit = async (e: React.FormEvent, data: RegistrationData) => {
    e.preventDefault();
    const { email, password } = data;

    try {
        // 1. Registrace uživatele
        const { data: signUpData, error: authError } = await supabase.auth.signUp({
            email,
            password,
        });

        if (authError) {
            console.error('Chyba při registraci:', authError.message);
            return;
        }

        if (signUpData.user) {
            const userId = signUpData.user.id;

            // 2. Pokus o přihlášení IHNED po registraci, aby byla session aktivní
            // Toto je klíčový krok, pokud máte problémy s RLS po signUp
            const { error: signInError } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (signInError) {
                console.error('Chyba při přihlášení po registraci:', signInError.message);
                // Toto by nemělo nastat, pokud registrace proběhla úspěšně
                return;
            }

            console.log('Registrace a uložení profilu úspěšné!');
            // Přesměrování
        }
    } catch (error) {
        console.error('Došlo k neočekávané chybě:', error);
    }
};

export const handleLogin = async (e: React.FormEvent, data: LoginData) => {
    e.preventDefault();

    try {
        const { data: userData, error: authError } = await supabase.auth.signInWithPassword({
            email: data.email,
            password: data.password,
        });

        if (authError) {
            console.error('Chyba při přihlašování:', authError.message);
            // Zobrazit chybovou zprávu
            return;
        }

        console.log('Přihlášení úspěšné!', userData);
        // Zde můžete přesměrovat uživatele na jeho profil nebo dashboard
    } catch (error) {
        console.error('Došlo k neočekávané chybě:', error);
    }
};

export const handleOfferSubmit = async (e: React.FormEvent, data: OfferData) => {
    e.preventDefault();

    try {
        const { error } = await supabase
            .from('listings')
            .insert([{
                title: data.title,
                profession: data.profession,
                description: data.description,
                location: data.location,
                price: data.budget,
                contact_person: data.contactPerson,
                is_offer: true,
                is_vip: false,
                phone_number: data.phoneNumber,
                email: data.email,
            }]);

        if (error) {
            console.error('Chyba při ukládání nabídky:', error.message);
            return;
        }

        console.log('Nabídka byla úspěšně uložena!');
    } catch (error) {
        console.error('Neočekávaná chyba při ukládání nabídky:', error);
    }
};

export const handleRequestSubmit = async (e: React.FormEvent, data: RequestData) => {
    e.preventDefault();

    try {
        const { error } = await supabase
            .from('listings')
            .insert([{
                title: data.title,
                profession: data.profession,
                description: data.description,
                location: data.location,
                price: data.price,
                contact_person: data.contactPerson,
                is_offer: false,
                is_vip: false,
                phone_number: data.phoneNumber,
                email: data.email,
            }]);

        if (error) {
            console.error('Chyba při ukládání poptávky:', error.message);
            return;
        }

        console.log('Poptávka byla úspěšně uložena!');
    } catch (error) {
        console.error('Neočekávaná chyba při ukládání poptávky:', error);
    }
};
