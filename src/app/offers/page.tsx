'use client';

import Navbar from "@/components/Navbar";
import OfferCard from '../../components/OfferCard';
import { useSearchParams } from 'next/navigation';
import {useState, useMemo, useEffect} from 'react';
import { MOCK_DATA } from '@/data/offers';
import { ALL_TAGS } from '@/data/tags'; // Možná už nebudete potřebovat, pokud budete generovat tagy dynamicky
import '../../styles/Offers.css';

export default function OffersPage() {
    const searchParams = useSearchParams();
    const initialFilter = searchParams.get('filter');

    // Stavy pro filtrování
    const [activeTags, setActiveTags] = useState<string[]>([]);
    const [searchLocation, setSearchLocation] = useState<string>('');
    const [searchField, setSearchField] = useState<string>('');
    const [searchPrice, setSearchPrice] = useState<string>('');

    // Nový stav pro zobrazení/skrytí panelu
    const [isFilterPanelVisible, setIsFilterPanelVisible] = useState(false);

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

        // 1. Filtrování podle textových polí
        if (searchLocation) {
            result = result.filter(offer =>
                offer.moreDetails.location.toLowerCase().includes(searchLocation.toLowerCase())
            );
        }
        if (searchField) {
            result = result.filter(offer =>
                offer.moreDetails.profession.toLowerCase().includes(searchField.toLowerCase())
            );
        }
        if (searchPrice) {
            result = result.filter(offer =>
                offer.price.toString().includes(searchPrice)
            );
        }

        // 2. Filtrování podle aktivních tagů
        if (activeTags.length > 0) {
            result = result.filter(offer =>
                activeTags.every(tag => offer.tags.includes(tag))
            );
        }

        return result;
    }, [searchLocation, searchField, searchPrice, activeTags]);

    const availableTags = useMemo(() => {
        const tagsSet = new Set<string>();
        filteredOffers.forEach(offer => {
            offer.tags.forEach(tag => tagsSet.add(tag));
        });
        return Array.from(tagsSet);
    }, [filteredOffers]);

    return (
        <>
            <Navbar />
            <div className="offers-page-container">
                {/* Tlačítko pro přepínání */}
                <button
                    className="filter-toggle-btn"
                    onClick={() => setIsFilterPanelVisible(!isFilterPanelVisible)}
                >
                    {isFilterPanelVisible ? 'Skrýt filtry' : 'Filtrovat'}
                </button>

                {/* Podmíněně vykreslený filtrovací panel */}
                {isFilterPanelVisible && (
                    <div className="offers-filter-panel">
                        <div className="filter-inputs">
                            <input
                                type="text"
                                placeholder="Lokalita..."
                                value={searchLocation}
                                onChange={e => setSearchLocation(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Obor..."
                                value={searchField}
                                onChange={e => setSearchField(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Cena (přibližně)..."
                                value={searchPrice}
                                onChange={e => setSearchPrice(e.target.value)}
                            />
                        </div>
                        <div className="offers-tags">
                            {availableTags.map(tag => (
                                <button
                                    key={tag}
                                    onClick={() => handleTagClick(tag)}
                                    className={activeTags.includes(tag) ? 'active' : ''}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

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