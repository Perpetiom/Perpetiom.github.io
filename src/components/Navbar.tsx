import Link from 'next/link';
import '../styles/Navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Navigační odkazy */}
                <div className="navbar-links">
                    <Link href="/">Hlavní stránka</Link>
                    <Link href="/login">Přihlášení</Link>
                    <Link href="/register">Registrace</Link>
                    <Link href="/createOffer">Vytvořit nabídku</Link>
                    <Link href="/offers">Nabídky</Link>
                </div>
            </div>
        </nav>
    );
}
