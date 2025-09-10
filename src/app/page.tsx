import '../styles/globals.css'
import Navbar from '../components/Navbar';
import CardLink from '../components/CardLink';
import '../styles/Home.css';
import {Switch} from "@/components/ui/switch";


export default function Home() {
    return (
        <>
            <Navbar/>
            <div className="home-container">
                <h1 className="home-title">Vítejte na portálu nabídek</h1>
                <div className="home-cards">
                    {/* Karta pro zobrazení nabídek */}
                    <CardLink
                        href="/offers"
                        title="Prohlédnout nabídky"
                        description="Podívejte se na aktuální poptávky a nabídky."
                    />

                    {/* Karta pro vytvoření nové nabídky */}
                    <CardLink
                        href="/createOffer"
                        title="Vytvořit novou nabídku"
                        description="Přidejte svou nabídku a dejte ostatním vědět."
                    />
                </div>
                <div className="vip">
                    {/* Karta pro zobrazení VIP nabídek */}
                    <CardLink
                        href="/offers?filter=VIP"
                        title="VIP nabídky"
                        description="VIP nabídky pro ověřené uživatele."
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