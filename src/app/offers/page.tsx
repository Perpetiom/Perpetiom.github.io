'use client';

import Navbar from "@/components/Navbar";
import OfferCard from '../../components/OfferCard';
import { useSearchParams } from 'next/navigation';
import {useState, useMemo, useEffect} from 'react';
import {supabase} from '@/lib/supabase';
import { useI18n } from "@/i18n/I18nProvider";
import '../../styles/Offers.css';

type LangCode = "cs" | "pl" | "de" | "sk" | "en";

function pickI18n(base: string | null, i18n: Record<LangCode, string> | null | undefined, lang: LangCode) {
    return (i18n && i18n[lang]) || base || "";
}

type DbListing = {
    id: string;
    title: string | null;
    profession: string | null;
    description: string | null;
    location: string | null;
    price: string | null;
    contact_person: string | null;
    phone_number: string | null;
    email: string | null;
    is_offer: boolean;
    is_vip: boolean;
    title_i18n: Record<LangCode, string> | null;
    profession_i18n: Record<LangCode, string> | null;
    description_i18n: Record<LangCode, string> | null;
    location_i18n: Record<LangCode, string> | null;
};

export default function OffersPage() {
    const searchParams = useSearchParams();
    const initialFilter = searchParams.get('filter');
    const { t, langCode } = useI18n();

    const [isFilterPanelVisible, setIsFilterPanelVisible] = useState(false);
    const [activeTags, setActiveTags] = useState<string[]>([]);
    const [searchLocation, setSearchLocation] = useState("");
    const [searchField, setSearchField] = useState("");
    const [searchPrice, setSearchPrice] = useState("");
    const [offers, setOffers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if (initialFilter) {
            setActiveTags([initialFilter]);
        }
    }, [initialFilter]);

    useEffect(() => {
        let mounted = true;
        (async () => {
            setLoading(true);
            const { data, error } = await supabase
                .from("listings")
                .select(
                    `
          id, title, profession, description, location, price,
          is_offer, is_vip,
          title_i18n, profession_i18n, description_i18n, location_i18n,
          user:users!inner (
          id,
          name,
          surname,
          phone_number,
          email
    )
        `
                )
                .order("created_at", { ascending: false });

            if (!mounted) return;
            if (error) {
                console.error("Chyba při načítání inzerátů:", error.message);
                setOffers([]);
                setLoading(false);
                return;
            }
            type DbListingJoined = DbListing & {
                user?: {
                    id: string;
                    name: string;
                    surname: string;
                    phone_number: string;
                    email: string;
                }
            };

            const normalized = (data as unknown as DbListingJoined[]).map((row) => {
                const title = pickI18n(row.title, row.title_i18n, langCode);
                const profession = pickI18n(row.profession, row.profession_i18n, langCode);
                const description = pickI18n(row.description, row.description_i18n, langCode);
                const location = pickI18n(row.location, row.location_i18n, langCode);

                const tags = [
                    row.is_offer ? "offer" : "request",
                    row.is_vip ? "vip" : "",
                    profession,
                    location,
                ].filter(Boolean);

                // složený kontakt z users
                const contact = [
                    [row.user?.name, row.user?.surname].filter(Boolean).join(" "),
                    row.user?.phone_number,
                    row.user?.email,
                ]
                    .filter(Boolean)
                    .join(" • ");
                return {
                    id: row.id,
                    title,
                    description,
                    price: row.price ?? "",
                    tags,
                    contact, // string pro OfferCard
                    moreDetails: { profession, location, details: description },
                };
            });

            setOffers(normalized);
            setLoading(false);
        })();

        return () => {
            mounted = false;
        };
    }, [langCode]);

    const handleTagClick = (tag: string) => {
        setActiveTags(prevTags =>
            prevTags.includes(tag) ? prevTags.filter(t => t !== tag) : [...prevTags, tag]
        );
    };

    const filteredOffers = useMemo(() => {
        let result = offers;

        if (searchLocation) {
            result = result.filter((offer) =>
                offer.moreDetails.location.toLowerCase().includes(searchLocation.toLowerCase())
            );
        }
        if (searchField) {
            result = result.filter((offer) =>
                offer.moreDetails.profession.toLowerCase().includes(searchField.toLowerCase())
            );
        }
        if (searchPrice) {
            result = result.filter((offer) => String(offer.price).includes(searchPrice));
        }
        if (activeTags.length > 0) {
            result = result.filter((offer) => activeTags.every((tag) => offer.tags.includes(tag)));
        }

        return result;
    }, [offers, searchLocation, searchField, searchPrice, activeTags]);

    const availableTags = useMemo(() => {
        const tagsSet = new Set<string>();
        filteredOffers.forEach((offer) => {
            offer.tags.forEach((tag: string) => tagsSet.add(tag));
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
                    {isFilterPanelVisible ? t.listings.hideFilter : t.listings.filter}
                </button>

                {/* Podmíněně vykreslený filtrovací panel */}
                {isFilterPanelVisible && (
                    <div className="offers-filter-panel">
                        <div className="filter-inputs">
                            <input
                                type="text"
                                placeholder={t.listings.location}
                                value={searchLocation}
                                onChange={e => setSearchLocation(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder={t.listings.field}
                                value={searchField}
                                onChange={e => setSearchField(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder={t.listings.price}
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