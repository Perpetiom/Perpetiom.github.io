import Navbar from "@/components/Navbar";
import OffersClient from "@/components/OffersClient";
import { Suspense } from 'react';
import '../../styles/Offers.css';

export default function OffersPage() {
    return (
        <>
            <Navbar/>
            <Suspense fallback={null}>
                <OffersClient/>
            </Suspense>
        </>
    );
}