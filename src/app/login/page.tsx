'use client';

import Navbar from "@/components/Navbar";
import FormInput from "@/components/FormInput";
import {useState} from "react";
import {handleFormChange, handleLogin} from "@/helpers/formHelpers";
import {useI18n} from "@/i18n/I18nProvider";
import type { Dictionary } from "@/app/constants/dict";

type TDict = Dictionary;

export default function LoginPage() {

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })

    const handleSubmit = (e: React.FormEvent, t: TDict) => {
        handleLogin(e, loginData, t);
    };

    const { t } = useI18n();

    return (
        <>
            <Navbar/>
            <div className="create-offer-container">
                <h1>{t.login.title}</h1>
                <form onSubmit={(e) => handleSubmit(e, t)} className="create-offer-form">
                    <FormInput
                        label="Email:"
                        name="email"
                        placeholder="jan.novak@email.cz"
                        value={loginData.email}
                        onChange={(e) => handleFormChange(e, setLoginData)}
                    />
                    <FormInput
                        label={t.login.password}
                        name="password"
                        placeholder="heslo"
                        type="password"
                        value={loginData.password}
                        onChange={(e) => handleFormChange(e, setLoginData)}
                    />
                    <button type="submit">{t.login.title}</button>
                </form>
            </div>
        </>

    );
}
