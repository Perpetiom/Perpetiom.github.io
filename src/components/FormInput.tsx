import React from 'react';
import '../styles/FormInput.css';

interface FormInputProps {
    label: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput({ label, type = 'text', placeholder, value, onChange }: FormInputProps) {
    return (
        <div className="form-input">
            <label className="form-input-label">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="form-input-field"
            />
        </div>
    );
}
