'use client';

import Navbar from "@/components/Navbar";
import FormInput from "@/components/FormInput";
import {useState} from "react";
import { handleFormChange, handleFormSubmit } from "../helpers/formHelpers";

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

    const handleSubmit = (e: React.FormEvent) => {
        handleFormSubmit(e, registerData);
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
        </>
    );
}