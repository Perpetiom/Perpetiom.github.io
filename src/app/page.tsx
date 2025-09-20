'use client'

import '../styles/globals.css'
import Navbar from '../components/Navbar';
import CardLink from '../components/CardLink';
import '../styles/Home.css';
import { useI18n } from "@/i18n/I18nProvider";


export default function Home() {
    const { t } = useI18n();
    return (
        <>
            <Navbar/>
            <div className="home-container">
                <h1 className="home-title">{t.homepage.welcome}</h1>
                <div className="home-cards">
                    {/* Karta pro zobrazení nabídek */}
                    <CardLink
                        href="/offers"
                        title={t.homepage.viewOffer}
                        description={t.homepage.viewOffer}
                    />
                </div>
                <div className="vip">
                    {/* Karta pro vytvoření nové nabídky */}
                    <CardLink
                        href="/createOffer"
                        title={t.homepage.createOffer}
                        description={t.homepage.createOffer}
                    />
                </div>
            </div>
            <div>
                <h3>
                    nejaka omackaasa
                </h3>
            </div>
        </>
    );
}