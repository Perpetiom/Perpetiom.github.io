'use client'; // Nezapomeň, že pro stav potřebujeme Client komponentu

import { useState } from 'react';
import '../styles/OfferCard.css'; // Můžeš použít vlastní styly

interface OfferCardProps {
    id: string | number;
    title: string;
    description: string;
    price: string;
    tags?: string[];
    contact: string;
    moreDetails: string;
}

export default function OfferCard({ title, description, price, tags, contact, moreDetails }: OfferCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [hasPaid, setHasPaid] = useState(false);

    const handleExpandClick = () => {
        setIsExpanded(!isExpanded); // Přepíná stav mezi true a false
    };

    const handlePayClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // Zastaví rozkliknutí karty
        setHasPaid(true);
        alert('Děkujeme za platbu! Kontakt je nyní viditelný.');
    };

    return (
        <div className={`offer-card ${isExpanded ? 'expanded' : ''}`} onClick={handleExpandClick}>
            {/* Základní zobrazení karty, které je vždy viditelné */}
            <h3 className="offer-card-title">{title}</h3>
            <p className="offer-card-description">{description}</p>
            <p className="offer-card-price">{price}</p>
            <p className="offer-card-tags">
                {tags && tags.length > 0 && tags.join(', ')}
            </p>

            {/* Tento blok se zobrazí pouze, když je isExpanded rovno true */}
            {isExpanded && (
                <div className="offer-card-details">
                    <h4>Více informací</h4>
                    <p>
                        {moreDetails || "Žádné další informace nejsou k dispozici."}
                    </p>

                    {/* Podmíněné zobrazení kontaktu */}
                    {hasPaid ? (
                        <p>
                            <strong>Kontakt:</strong> {contact || "Není k dispozici."}
                        </p>
                    ) : (
                        <button className="pay-button" onClick={handlePayClick}>
                            Zaplatit pro zobrazení kontaktu
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}