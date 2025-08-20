'use client';

import Navbar from "@/components/Navbar";
import FormInput from "@/components/FormInput";
import '../../styles/CreateOffer.css';
import {useState} from "react";

export default function CreateOffer() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({title, description, price});
        // tady později zavoláme API nebo uložíme do stavu
    };

    return (
        <>
            <Navbar />
            <div className="create-offer-container">
                <h1>Vytvořit novou nabídku</h1>
                <form onSubmit={handleSubmit} className="create-offer-form">
                    <FormInput
                        label="Název nabídky"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <FormInput
                        label="Popis"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <FormInput
                        label="Cena"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <button type="submit">Vytvořit nabídku</button>
                </form>
            </div>
        </>
    );
}