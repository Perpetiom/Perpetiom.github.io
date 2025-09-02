'use client';

import Navbar from "@/components/Navbar";
import OfferCard from '../../components/OfferCard';
import { useSearchParams } from 'next/navigation';
import {useState, useMemo, useEffect} from 'react';
import { MOCK_DATA } from '@/data/offers';
import { ALL_TAGS } from '@/data/tags';
import '../../styles/Offers.css';

export default function OffersPage() {
    const searchParams = useSearchParams();
    const initialFilter = searchParams.get('filter');

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [activeTags, setActiveTags] = useState<string[]>([]);

    useEffect(() => {
        if (initialFilter) {
            setActiveTags([initialFilter]);
        }
    }, [initialFilter]);

    const handleTagClick = (tag: string) => {
        setActiveTags(prevTags =>
            prevTags.includes(tag) ? prevTags.filter(t => t !== tag) : [...prevTags, tag]
        );
    };

    const filteredOffers = useMemo(() => {
        let result = MOCK_DATA;

        // Filtrování podle tagů
        if (activeTags.length > 0) {
            result = result.filter(offer =>
                activeTags.every(tag => offer.tags.includes(tag))
            );
        }

        // Filtrování podle vyhledávacího textu
        if (searchTerm) {
            result = result.filter(offer =>
                offer.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        return result;
    }, [searchTerm, activeTags]);

    return (
        <>
            <Navbar />
            <div className="offers-page-container">
                {/* Vstup pro vyhledávání */}
                <input
                    type="text"
                    placeholder="Hledat nabídky..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="offers-search-input"
                />

                {/* Tlačítka s tagy */}
                <div className="offers-tags">
                    {ALL_TAGS.map(tag => (
                        <button
                            key={tag}
                            onClick={() => handleTagClick(tag)}
                            className={activeTags.includes(tag) ? 'active' : ''}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Zobrazení nabídek */}
                <div className="offers">
                    {filteredOffers.map((offer, index) => (
                        <OfferCard
                            key={index}
                            id={offer.id || index}
                            title={offer.title}
                            description={offer.description}
                            price={offer.price}
                            tags={offer.tags}
                            contact={offer.contact}
                            moreDetails={offer.moreDetails}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
