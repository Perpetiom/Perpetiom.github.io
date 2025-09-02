// utils/formHelpers.ts

import React from "react";

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

// Tuto funkci můžete použít pro jakýkoliv formulářový submit
export const handleFormSubmit = <T>(e: React.FormEvent, data: T) => {
    e.preventDefault();
    console.log(data);
    // Zde můžete volat jakoukoliv callback funkci, např. API call
};