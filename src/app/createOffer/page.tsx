'use client';

import Navbar from "@/components/Navbar";
import FormInput from "@/components/FormInput";
import '../../styles/CreateOffer.css';
import { useState } from "react";
import { handleFormChange, handleRequestSubmit, handleOfferSubmit } from "@/helpers/formHelpers";
import { Switch } from "@radix-ui/react-switch";
import { useI18n } from "@/i18n/I18nProvider";
import type { Dictionary } from "@/app/constants/dict";

type TDict = Dictionary;

// ✱ TIP: sjednoť typy s formulářem – date a price/budget jako stringy:
type OfferFormState = {
    title: string;
    profession: string;
    date: string;        // <-- string 'YYYY-MM-DD'
    location: string;
    budget: string;
    contactPerson: string;
    phoneNumber: string;
    email: string;
    description: string;
    is_vip: boolean;
};

type RequestFormState = {
    title: string;
    profession: string;
    description: string;
    location: string;
    price: string;
    contactPerson: string;
    phoneNumber: string;
    email: string;
    is_vip: boolean;
};

export default function CreateOffer() {
    const [formType, setFormType] = useState<'offer' | 'request'>('offer');
    const [submitting, setSubmitting] = useState(false);
    const { t } = useI18n();

    const [offerData, setOfferData] = useState<OfferFormState>({
        title: '',
        profession: '',
        date: '', // 'YYYY-MM-DD'
        location: '',
        budget: '',
        contactPerson: '',
        phoneNumber: '',
        email: '',
        description: '',
        is_vip: false,
    });

    const [requestData, setRequestData] = useState<RequestFormState>({
        title: '',
        profession: '',
        description: '',
        location: '',
        price: '',
        contactPerson: '',
        phoneNumber: '',
        email: '',
        is_vip: false,
    });

    // ✅ Nepředávej t jako parametr; je z closure
    const onSubmitOffer = async (e: React.FormEvent) => {
        e.preventDefault();
        if (submitting) return;
        setSubmitting(true);
        try {
            // helper čeká OfferData (má u tebe date: Date|null). Dvě možnosti:
            // A) změnit typ OfferData na date: string | null
            // B) převést string -> Date|null zde. Ukážu variantu B:
            const dateValue = offerData.date ? new Date(offerData.date) : null;

            await handleOfferSubmit(
                e,
                {
                    title: offerData.title,
                    profession: offerData.profession,
                    date: isNaN(dateValue as any) ? null : dateValue, // ochrana před nevalidním datem
                    description: offerData.description,
                    location: offerData.location,
                    budget: offerData.budget,
                    is_vip: offerData.is_vip,
                },
                t
            );
        } finally {
            setSubmitting(false);
        }
    };

    const onSubmitRequest = async (e: React.FormEvent) => {
        e.preventDefault();
        if (submitting) return;
        setSubmitting(true);
        try {
            await handleRequestSubmit(
                e,
                {
                    title: requestData.title,
                    profession: requestData.profession,
                    description: requestData.description,
                    location: requestData.location,
                    price: requestData.price,
                    is_vip: requestData.is_vip,
                },
                t
            );
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <Navbar />

            <div className="form-selector">
                <button
                    onClick={() => setFormType('offer')}
                    className={formType === 'offer' ? 'active' : ''}
                >
                    {t.createOfferForm.submit}
                </button>
                <button
                    onClick={() => setFormType('request')}
                    className={formType === 'request' ? 'active' : ''}
                >
                    {t.createRequestForm.submit}
                </button>
            </div>

            <div className="create-offer-container">
                {formType === 'offer' ? (
                    <form onSubmit={onSubmitOffer} className="create-offer-form">
                        <FormInput
                            label={t.createOfferForm.title}
                            name="title"
                            placeholder={t.createOfferForm.titlePH}
                            value={offerData.title}
                            onChange={(e) => handleFormChange(e, setOfferData)}
                        />
                        <FormInput
                            label={t.createOfferForm.profession}
                            name="profession"
                            placeholder={t.createOfferForm.professionPH}
                            value={offerData.profession}
                            onChange={(e) => handleFormChange(e, setOfferData)}
                        />
                        <FormInput
                            label={t.createOfferForm.description}
                            name="description"
                            placeholder={t.createOfferForm.descriptionPH}
                            value={offerData.description}
                            onChange={(e) => handleFormChange(e, setOfferData)}
                        />
                        <FormInput
                            label={t.createOfferForm.date}
                            name="date"
                            placeholder="YYYY-MM-DD"
                            value={offerData.date}
                            onChange={(e) => handleFormChange(e, setOfferData)}
                            type="date"
                        />
                        <FormInput
                            label={t.createOfferForm.location}
                            name="location"
                            placeholder={t.createOfferForm.locationPH}
                            value={offerData.location}
                            onChange={(e) => handleFormChange(e, setOfferData)}
                        />
                        <FormInput
                            label={t.createOfferForm.price}
                            name="budget"
                            placeholder={t.createOfferForm.budgetPH}
                            value={offerData.budget}
                            onChange={(e) => handleFormChange(e, setOfferData)}
                            type="number"
                        />
                        <div className="flex items-center space-x-2">
                            <Switch
                                id="is_vip"
                                defaultChecked={offerData.is_vip}
                                onCheckedChange={(value) =>
                                    setOfferData((prev) => ({ ...prev, is_vip: value }))
                                }
                            />
                            <label htmlFor="is_vip">VIP</label>
                        </div>
                        <button type="submit" disabled={submitting}>
                            {submitting ? t.createOfferForm.submitting : t.createOfferForm.submit}
                        </button>
                    </form>
                ) : (
                    <form onSubmit={onSubmitRequest} className="create-offer-form">
                        <FormInput
                            label={t.createRequestForm.title}
                            name="title"
                            placeholder={t.createRequestForm.titlePH}
                            value={requestData.title}
                            onChange={(e) => handleFormChange(e, setRequestData)}
                        />
                        <FormInput
                            label={t.createRequestForm.profession}
                            name="profession"
                            placeholder={t.createRequestForm.professionPH}
                            value={requestData.profession}
                            onChange={(e) => handleFormChange(e, setRequestData)}
                        />
                        <FormInput
                            label={t.createRequestForm.description}
                            name="description"
                            placeholder={t.createRequestForm.descriptionPH}
                            value={requestData.description}
                            onChange={(e) => handleFormChange(e, setRequestData)}
                        />
                        <FormInput
                            label={t.createRequestForm.location}
                            name="location"
                            placeholder={t.createRequestForm.locationPH}
                            value={requestData.location}
                            onChange={(e) => handleFormChange(e, setRequestData)}
                        />
                        <FormInput
                            label={t.createRequestForm.priceHowIValue}
                            name="price"
                            placeholder={t.createRequestForm.pricePH}
                            value={requestData.price}
                            onChange={(e) => handleFormChange(e, setRequestData)}
                            type="number"
                        />
                        <div className="flex items-center space-x-2">
                            <Switch
                                id="is_vip"
                                defaultChecked={requestData.is_vip}
                                onCheckedChange={(value) =>
                                    setRequestData((prev) => ({ ...prev, is_vip: value }))
                                }
                            />
                            <label htmlFor="is_vip">VIP</label>
                        </div>
                        <button type="submit" disabled={submitting}>
                            {submitting ? t.createRequestForm.submitting : t.createRequestForm.submit}
                        </button>
                    </form>
                )}
            </div>
        </>
    );
}
