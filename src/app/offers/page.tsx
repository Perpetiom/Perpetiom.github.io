import Navbar from "@/components/Navbar";
import OfferCard from '../../components/OfferCard';

export default function page() {
    const offers = Array.from({ length: 63 }, (_, i) => ({
        title: `Nabídka ${i + 1}`,
        description: `Popis nabídky číslo ${i + 1}`,
        price: `${(i + 1) * 1000} Kč`
    }));


    return (
        <>
          <Navbar />
            <div style={{display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))'}}>
                {offers.map((offer, index) => (
                    <OfferCard
                        key={index}
                        title={offer.title}
                        description={offer.description}
                        price={offer.price}
                    />
                ))}
            </div>
        </>
    );
}
