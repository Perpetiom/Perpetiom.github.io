'use client';

import Navbar from "@/components/Navbar";
import FormInput from "@/components/FormInput";
import {useEffect, useState} from "react";
import { handleFormChange } from "@/helpers/formHelpers";
import { supabase } from '@/lib/supabase';
import Modal from "@/components/Modal";
import {useRouter} from "next/navigation";
import {useI18n} from "@/i18n/I18nProvider";

export default function RegisterPage() {
    const [registerData, setRegisterData] = useState({
        email: "",
        phoneNumber: "",
        name: "",
        surname: "",
        password: "",
        passwordConfirmation: "",
        ico: ""
    });

    const [showModal, setShowModal] = useState(false);
    const [ modalMessage, setModalMessage] = useState('');
    const router = useRouter();
    const { t } = useI18n();

    useEffect(() => {
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (event, session) => {
                // Tato část se spustí, až když je uživatel skutečně přihlášený (po potvrzení e-mailu)
                if (event === 'SIGNED_IN' && session && session.user?.id) {
                    const insertProfile = async () => {
                        const storedRegisterData = localStorage.getItem('registerData');
                        const regData = storedRegisterData ? JSON.parse(storedRegisterData) : {};

                        const { error: dbError } = await supabase
                            .from('users')
                            .insert({
                                id: session.user.id,
                                name: regData.name,
                                surname: regData.surname,
                                ico: regData.ico,
                                phone_number: regData.phoneNumber,
                                email: session.user.email, // email z session je spolehlivější
                            });
                        if (dbError) {
                            setModalMessage(t.errorMessages.profileCreateError);
                            setShowModal(true);
                        } else {
                            localStorage.removeItem('registerData'); // Vyčistíme data
                            // Přesměrovat uživatele na dashboard atd.
                            router.push('/'); // Nebo jinam
                        }
                    };
                    insertProfile();
                }
            }
        );

        return () => {
            subscription.unsubscribe();
        };
    }, []); // Dependencies mohou být prázdné, nebo podle toho, co potřebujete

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (registerData.password !== registerData.passwordConfirmation) {
            setModalMessage(t.errorMessages.passwordsDoNotMatch);
            setShowModal(true);
        }

        // Uložte data pro pozdější použití po potvrzení e-mailu
        localStorage.setItem('registerData', JSON.stringify(registerData));

        const { error } = await supabase.auth.signUp({
            email: registerData.email,
            password: registerData.password,
        });

        if (error) {
            setModalMessage(t.errorMessages.registrationError + error.message);
            setShowModal(true);
        } else {
            // Zde už neukládáme profil, to se stane až po potvrzení e-mailu
            setModalMessage(t.errorMessages.registrationEmailConfirm);
            setShowModal(true);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <Navbar/>
            <div className="create-offer-container">
                <h1>{t.registerPage.title}</h1>
                <form onSubmit={handleSubmit} className="create-offer-form">
                    <FormInput
                        label={t.registerPage.firstName}
                        name="name"
                        placeholder="Jan"
                        value={registerData.name}
                        onChange={(e) => handleFormChange(e, setRegisterData)}
                    />
                    <FormInput
                        label={t.registerPage.lastName}
                        name="surname"
                        placeholder="Novák"
                        value={registerData.surname}
                        onChange={(e) => handleFormChange(e, setRegisterData)}
                    />
                    <FormInput
                        label={t.registerPage.ico}
                        name="ico"
                        placeholder="12345678"
                        value={registerData.ico}
                        onChange={(e) => handleFormChange(e, setRegisterData)}
                    />
                    <FormInput
                        label={t.registerPage.email}
                        name="email"
                        type="email"
                        placeholder="jan.novak@email.cz"
                        value={registerData.email}
                        onChange={(e) => handleFormChange(e, setRegisterData)}
                    />
                    <FormInput
                        label={t.registerPage.phoneNumber}
                        name="phoneNumber"
                        type="tel"
                        placeholder="+420123456789"
                        value={registerData.phoneNumber}
                        onChange={(e) => handleFormChange(e, setRegisterData)}
                    />
                    <FormInput
                        label={t.registerPage.password}
                        name="password"
                        type="password"
                        placeholder="heslo"
                        value={registerData.password}
                        onChange={(e) => handleFormChange(e, setRegisterData)}
                    />
                    <FormInput
                        label={t.registerPage.passwordConfirmation}
                        name="passwordConfirmation"
                        type="password"
                        placeholder="heslo"
                        value={registerData.passwordConfirmation}
                        onChange={(e) => handleFormChange(e, setRegisterData)}
                    />
                    <button type="submit">{t.registerPage.title}</button>
                </form>
            </div>
            {showModal && <Modal message={modalMessage} onClose={closeModal} />}
        </>
    );
}