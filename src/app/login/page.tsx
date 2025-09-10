'use client';

import Navbar from "@/components/Navbar";
import FormInput from "@/components/FormInput";
import {useState} from "react";
import {handleFormChange, handleFormSubmit, handleLogin} from "@/helpers/formHelpers";


export default function LoginPage() {

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        handleLogin(e, loginData);
    };

    return (
        <>
            <Navbar/>
            <div className="create-offer-container">
                <h1>Přihlásit se</h1>
                <form onSubmit={handleSubmit} className="create-offer-form">
                    <FormInput
                        label="Email:"
                        name="email"
                        placeholder="jan.novak@email.cz"
                        value={loginData.email}
                        onChange={(e) => handleFormChange(e, setLoginData)}
                    />
                    <FormInput
                        label="Heslo:"
                        name="password"
                        placeholder="heslo"
                        type="password"
                        value={loginData.password}
                        onChange={(e) => handleFormChange(e, setLoginData)}
                    />
                    <button type="submit">Přihlásit se</button>
                </form>
            </div>
        </>

    );
}
