'use client';

import Navbar from "@/components/Navbar";
import FormInput from "@/components/FormInput";
import {useState} from "react";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({email});
        // tady později zavoláme API nebo uložíme do stavu
    };
    return (
        <>
            <Navbar/>
            <div className="create-offer-container">
                <h1>Vytvořit novou nabídku</h1>
                <form onSubmit={handleSubmit} className="create-offer-form">
                    <FormInput
                        label="Email:"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FormInput
                        label="Heslo:"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Přihlásit se</button>
                </form>
            </div>
        </>

    );
}
