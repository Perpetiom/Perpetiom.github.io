'use client';

import Navbar from "@/components/Navbar";
import FormInput from "@/components/FormInput";
import {useEffect, useState} from "react";
import { handleFormChange } from "@/helpers/formHelpers";
import { supabase } from '@/lib/supabase';
import Modal from "@/components/Modal";
import {useRouter} from "next/navigation";

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
    const router = useRouter(); // Hook pro přesměrování

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
                            console.error('Chyba při ukládání profilu po přihlášení:', dbError.message);
                            setModalMessage('Chyba při vytváření profilu. Zkuste to prosím později.');
                            setShowModal(true);
                        } else {
                            console.log('Profil úspěšně uložen!');
                            localStorage.removeItem('registerData'); // Vyčistíme data
                            // Přesměrovat uživatele na dashboard atd.
                            router.push('/dashboard'); // Nebo jinam
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
            setModalMessage('Hesla se neshodují.');
            setShowModal(true);
            return;
        }

        // Uložte data pro pozdější použití po potvrzení e-mailu
        localStorage.setItem('registerData', JSON.stringify(registerData));

        const { error } = await supabase.auth.signUp({
            email: registerData.email,
            password: registerData.password,
        });

        if (error) {
            setModalMessage(`Chyba při registraci: ${error.message}`);
            setShowModal(true);
        } else {
            // Zde už neukládáme profil, to se stane až po potvrzení e-mailu
            setModalMessage('Registrace proběhla úspěšně! Zkontrolujte svůj e-mail pro potvrzení.');
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
                <h1>Registrovat se</h1>
                <form onSubmit={handleSubmit} className="create-offer-form">
                    <FormInput
                        label="Jméno:"
                        name="name"
                        placeholder="Jan"
                        value={registerData.name}
                        onChange={(e) => handleFormChange(e, setRegisterData)}
                    />
                    <FormInput
                        label="Příjmení:"
                        name="surname"
                        placeholder="Novák"
                        value={registerData.surname}
                        onChange={(e) => handleFormChange(e, setRegisterData)}
                    />
                    <FormInput
                        label="IČO:"
                        name="ico"
                        placeholder="12345678"
                        value={registerData.ico}
                        onChange={(e) => handleFormChange(e, setRegisterData)}
                    />
                    <FormInput
                        label="E-mail:"
                        name="email"
                        type="email"
                        placeholder="jan.novak@email.cz"
                        value={registerData.email}
                        onChange={(e) => handleFormChange(e, setRegisterData)}
                    />
                    <FormInput
                        label="Telefon:"
                        name="phoneNumber"
                        type="tel"
                        placeholder="+420123456789"
                        value={registerData.phoneNumber}
                        onChange={(e) => handleFormChange(e, setRegisterData)}
                    />
                    <FormInput
                        label="Heslo:"
                        name="password"
                        type="password"
                        placeholder="heslo"
                        value={registerData.password}
                        onChange={(e) => handleFormChange(e, setRegisterData)}
                    />
                    <FormInput
                        label="Heslo znovu:"
                        name="passwordConfirmation"
                        type="password"
                        placeholder="heslo"
                        value={registerData.passwordConfirmation}
                        onChange={(e) => handleFormChange(e, setRegisterData)}
                    />
                    <button type="submit">Zaregistrovat se</button>
                </form>
            </div>
            {showModal && <Modal message={modalMessage} onClose={closeModal} />}
        </>
    );
}