'use client';

import Navbar from "@/components/Navbar";
import FormInput from "@/components/FormInput";
import {useState} from "react";

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({email, phoneNumber, name, surname});
        // tady později zavoláme API nebo uložíme do stavu
    };
    return (
        <>
            <Navbar/>
            <div className="create-offer-container">
                <h1>Vytvořit novou nabídku</h1>
                <form onSubmit={handleSubmit} className="create-offer-form">
                    <FormInput
                        label="Jméno:"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <FormInput
                        label="Příjmení:"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                    <FormInput
                        label="Email:"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FormInput
                        label="Telefon:"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <FormInput
                        label="Heslo:"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormInput
                        label="Heslo znovu:"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button type="submit">Zaregistrovat se</button>
                </form>
            </div>
        </>

    );
}
