'use client';

import { useState } from 'react';
import '../styles/OfferCard.css';
import { useI18n } from "@/i18n/I18nProvider";

type LangCode = "cs" | "pl" | "de" | "sk" | "en";

interface OfferCardProps {
    id: string | number;
    title: string;
    description: string;
    price: string;
    tags?: string[];
    contact: string;
    moreDetails: {
        location: string;
        profession: string;
        details: string;
    };
}

export default function OfferCard({ title, description, price, tags, contact, moreDetails }: OfferCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [hasPaid, setHasPaid] = useState(false);

    const { t } = useI18n();

    const handleExpandClick = () => {
        setIsExpanded(!isExpanded);
    };

    const handlePayClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setHasPaid(true);
        alert('Děkujeme za platbu! Kontakt je nyní viditelný.');
    };

    return (
        <div className={`offer-card ${isExpanded ? 'expanded' : ''}`} onClick={handleExpandClick}>
            {/* Základní zobrazení karty, které je vždy viditelné */}
            <h3 className="offer-card-title">{title}</h3>
            <p className="offer-card-price">Cena: {price}</p>
            <p className="offer-card-tags">
                {tags && tags.length > 0 && tags.join(', ')}
            </p>

            {isExpanded && (
                <div className="offer-card-details">
                    <h4>Více informací</h4>
                    <p>
                        <strong>Lokalita:</strong> {moreDetails.location}
                    </p>
                    <p>
                        <strong>Obor:</strong> {moreDetails.profession}
                    </p>
                    <p>
                        <strong>Detaily:</strong> {description}
                    </p>

                    {/* Podmíněné zobrazení kontaktu */}
                    {hasPaid ? (
                        contact ? (
                            <p>
                                <strong>Kontakt:</strong> {contact}
                            </p>
                        ) : null
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