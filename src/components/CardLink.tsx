import Link from 'next/link';
import '../styles/CardLink.css'

interface CardLinkProps {
    title: string;
    description: string;
    href: string;
}

export default function CardLink({ href, title, description }: CardLinkProps) {
    return (
        <Link href={href} passHref className="card-link">
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </Link>
    );
}