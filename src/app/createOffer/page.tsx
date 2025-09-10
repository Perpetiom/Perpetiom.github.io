'use client';

import Navbar from "@/components/Navbar";
import FormInput from "@/components/FormInput";
import '../../styles/CreateOffer.css';
import {useEffect, useState} from "react";
import { handleFormChange, handleFormSubmit, handleRequestSubmit, handleOfferSubmit } from "@/helpers/formHelpers";
import {Switch} from "@radix-ui/react-switch";


export default function CreateOffer() {
    const [formType, setFormType] = useState<'offer' | 'request'>('offer');
    const [isVip, setIsVip] = useState(false);

    const [offerData, setOfferData] = useState({
        title: '',
        profession: '',
        date: '',
        location: '',
        budget: '',
        contactPerson: '',
        phoneNumber: '',
        email: '',
        description: '',
        is_vip: false
    });

    const [requestData, setRequestData] = useState({
        title: '',
        profession: '',
        description: '',
        location: '',
        price: '',
        contactPerson: '',
        phoneNumber: '',
        email: '',
        is_vip: false
    });

    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const formattedDate = `${day}.${month}.${year}`;

    useEffect(() => {
        console.log(offerData)
    }, [offerData]);


    return (
        <>
            <Navbar/>

            <div className="form-selector">
                <button
                    onClick={() => setFormType('offer')}
                    className={formType === 'offer' ? 'active' : ''}
                >
                    Vytvořit nabídku
                </button>
                <button
                    onClick={() => setFormType('request')}
                    className={formType === 'request' ? 'active' : ''}
                >
                    Vytvořit poptávku
                </button>
            </div>

            <div className="create-offer-container">
                {formType === 'offer' ?
                    (<form onSubmit={(e) => handleOfferSubmit(e, offerData)} className="create-offer-form">
                        <FormInput
                            label="Název nabídky"
                            name="title"
                            placeholder="Stavba zdi"
                            value={offerData.title}
                            onChange={(e) => handleFormChange(e, setOfferData)}
                        />
                        <FormInput
                            label="Profese"
                            name="profession"
                            placeholder="Zedník"
                            value={offerData.profession}
                            onChange={(e) => handleFormChange(e, setOfferData)}
                        />
                        <FormInput
                            label="Popis"
                            name="description"
                            placeholder="Potřebuji postavit 2,5 metrů vysokou zeď o délce asi 5 metrů zahradě"
                            value={offerData.description}
                            onChange={(e) => handleFormChange(e, setOfferData)}
                        />
                        <FormInput
                            label="Termín"
                            name="date"
                            placeholder={formattedDate}
                            value={offerData.date}
                            onChange={(e) => handleFormChange(e, setOfferData)}
                        />
                        <FormInput
                            label="Místo"
                            name="location"
                            placeholder="Praha 5"
                            value={offerData.location}
                            onChange={(e) => handleFormChange(e, setOfferData)}
                        />
                        <FormInput
                            label="Cena"
                            name="budget"
                            placeholder="30000Kč"
                            value={offerData.budget}
                            onChange={(e) => handleFormChange(e, setOfferData)}
                        />
                        <FormInput
                            label="Kontaktní osoba"
                            name="contactPerson"
                            placeholder='Jan Novák'
                            value={offerData.contactPerson}
                            onChange={(e) => handleFormChange(e, setOfferData)}
                        />
                        <FormInput
                            label="Telefonní číslo"
                            name="phoneNumber"
                            placeholder="+420123456789"
                            value={offerData.phoneNumber}
                            onChange={(e) => handleFormChange(e, setOfferData)}
                            type="tel"
                        />
                        <FormInput
                            label="E-mail"
                            name="email"
                            placeholder="jan.novak@email.cz"
                            value={offerData.email}
                            onChange={(e) => handleFormChange(e, setOfferData)}
                            type="email"
                        />
                        <div className="flex items-center space-x-2">
                            <Switch
                                id="is_vip"
                                defaultChecked={requestData.is_vip}
                                onCheckedChange={(value) => {
                                    setOfferData({...offerData, is_vip: value});
                                }}
                            />
                            <label htmlFor="is_vip">VIP</label>
                        </div>
                        <button type="submit">Vytvořit nabídku</button>
                    </form>)
                    :
                    (<form onSubmit={(e) => handleRequestSubmit(e, requestData)} className="create-offer-form">
                        <FormInput
                            label="Název nabídky"
                            name="title"
                            placeholder="Umim stavět zdi"
                            value={requestData.title}
                            onChange={(e) => handleFormChange(e, setRequestData)}
                        />
                        <FormInput
                            label="Profese"
                            name="profession"
                            placeholder="Zedník"
                            value={requestData.profession}
                            onChange={(e) => handleFormChange(e, setRequestData)}
                        />
                        <FormInput
                            label="Popis"
                            name="description"
                            placeholder="Umím to a to..."
                            value={requestData.description}
                            onChange={(e) => handleFormChange(e, setRequestData)}
                        />
                        <FormInput
                            label="Místo"
                            name="location"
                            placeholder="Praha 5"
                            value={requestData.location}
                            onChange={(e) => handleFormChange(e, setRequestData)}
                        />
                        <FormInput
                            label="Cena - jak se cením"
                            name="price"
                            placeholder="30000Kč (domluvou)"
                            value={requestData.price}
                            onChange={(e) => handleFormChange(e, setRequestData)}
                        />
                        <FormInput
                            label="Kontaktní osoba"
                            name="contactPerson"
                            placeholder='Jan Novák'
                            value={requestData.contactPerson}
                            onChange={(e) => handleFormChange(e, setRequestData)}
                        />
                        <FormInput
                            label="Telefonní číslo"
                            name="phoneNumber"
                            placeholder="+420123456789"
                            value={requestData.phoneNumber}
                            onChange={(e) => handleFormChange(e, setRequestData)}
                            type="tel"
                        />
                        <FormInput
                            label="E-mail"
                            name="email"
                            placeholder="jan.novak@email.cz"
                            value={requestData.email}
                            onChange={(e) => handleFormChange(e, setRequestData)}
                            type="email"
                        />
                        <div className="flex items-center space-x-2">
                            <Switch
                                id="is_vip"
                                defaultChecked={requestData.is_vip}
                                onCheckedChange={(value) => {
                                    setOfferData({...offerData, is_vip: value});
                                }}
                            />
                            <label htmlFor="is_vip">VIP</label>
                        </div>
                        <button type="submit">Vytvořit poptávku</button>
                    </form>)
                }

            </div>
        </>
    );
}