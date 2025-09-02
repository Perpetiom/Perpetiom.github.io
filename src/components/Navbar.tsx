import Link from 'next/link';
import '../styles/Navbar.css'
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link href="/">
                    <Image
                        src="/assets/images/perpetiom-logo.png"
                        alt="logo"
                        width={64}
                        height={64}
                    />
                </Link>
                {/* Navigační odkazy */}
                <div className="navbar-links">
                    <Link href="/login">Přihlásit se</Link>
                    <Link href="/register">Registrace</Link>

                </div>
            </div>
        </nav>
    );
}
