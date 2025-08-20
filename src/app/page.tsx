import '../styles/globals.css'
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';

import Link from 'next/link';
import OfferCard from '../components/OfferCard';
import '../styles/Home.css';

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="home-container">
                <h1 className="home-title">Vítejte na portálu nabídek</h1>
                <div className="home-cards">
                    {/* Karta pro zobrazení nabídek */}
                    <Link href="/offers">
                        <div className="home-card">
                            <OfferCard
                                title="Prohlédnout nabídky"
                                description="Podívejte se na aktuální poptávky a nabídky."
                            />
                        </div>
                    </Link>

                    {/* Karta pro vytvoření nové nabídky */}
                    <Link href="/createOffer">
                        <div className="home-card">
                            <OfferCard
                                title="Vytvořit novou nabídku"
                                description="Přidejte svou nabídku a dejte ostatním vědět."
                            />
                        </div>
                    </Link>
                </div>
            </div>
            <div>
                <h3>
                    nejaka omacka
                </h3>
            </div>
        </>
    );
}

