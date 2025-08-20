import React from 'react';
import '../styles/OfferCard.css';

interface OfferCardProps {
    title: string;
    description: string;
    price?: string;
}

export default function OfferCard({ title, description, price }: OfferCardProps) {
    return (
        <div className="offer-card">
            <h3 className="offer-card-title">{title}</h3>
            <p className="offer-card-description">{description}</p>
            {price && <p className="offer-card-price">{price}</p>}
        </div>
    );
}
