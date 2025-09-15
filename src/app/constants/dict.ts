type LangCode = 'cs' | 'pl' | 'de' | 'sk' | 'en';

export type Dictionary = {
    registration: {
        title: string;
        firstName: string;
        lastName: string;
        ico: string;
        email: string;
        phoneNumber: string;
        password: string;
        passwordConfirmation: string;
    };
    login: {
        title: string;
        email: string;
        password: string;
    };
    offer: {
        title: string;
        name: string;
        profession: string;
        description: string;
        location: string;
        price: string;
        contactPerson: string;
        phoneNumber: string;
        email: string;
        date: string;
    };
    homepage: {
        welcome: string;
        viewOffer: string;
        createOffer: string;
    };
    navbar: {
        signIn: string;
        register: string;
        signOut: string;
        loggedInAs: string,
    };
    createOfferForm: {
        title: string;
        profession: string;
        description: string;
        date: string;
        location: string;
        price: string;
        contactPerson: string;
        phoneNumber: string;
        submit: string;
        titlePH: string;
        professionPH: string;
        descriptionPH:string;
        locationPH: string;
        budgetPH: string;
        contactPersonPH: string;
        phoneNumberPH: string;
        createOfferPH: string;
        createRequestPH: string;
        emailPH: string;
    };
    createRequestForm: {
        title: string;
        profession: string;
        description: string;
        location: string;
        priceHowIValue: string;
        contactPerson: string;
        phoneNumber: string;
        phoneNumberPH: string,
        submit: string;
        titlePH: string;
        professionPH: string;
        descriptionPH: string;
        locationPH: string;
        pricePH: string;
        contactPersonPH: string;
        emailPH: string;
    };
    listings: {
        filter: string;
        hideFilter: string,
        price: string;
        location: string;
        field: string;
        details: string;
        payToViewContact: string;
    };
};

const dict = {
    cs: {
        registration: {
            title: "Registrace",
            firstName: "Jméno",
            lastName: "Příjmení",
            ico: "IČO",
            email: "E-mail",
            phoneNumber: "Telefonní číslo",
            password: "Heslo",
            passwordConfirmation: "Heslo znovu",
        },
        login: {
            title: "Přihlášení",
            email: "E-mail",
            password: "Heslo",
        },
        offer: {
            title: "Vytvořit nabídku",
            name: "Název nabídky",
            profession: "Profese",
            description: "Popis",
            location: "Místo",
            price: "Cena",
            contactPerson: "Kontaktní osoba",
            phoneNumber: "Telefonní číslo",
            email: "E-mail",
            date: "Termín",
        },
        homepage: {
            welcome: "Vítejte na Perpetiom, zde můžete inzerovat cokoliv, odkudkoliv",
            viewOffer: "Prohlédnout inzerát",
            createOffer: "Vytvořit inzerát",
        },
        navbar: {
            signIn: "Přihlásit se",
            register: "Registrace",
            signOut: "Odhlásit se",
            loggedInAs: "Přihlášen jako ",
        },
        createOfferForm: {
            title: "Název nabídky",
            profession: "Profese",
            description: "Popis",
            date: "Termín",
            location: "Místo",
            price: "Cena",
            contactPerson: "Kontaktní osoba",
            phoneNumber: "Telefonní číslo",
            submit: "Vytvořit nabídku",
            titlePH: "Stavba zdi",
            professionPH: "Zedník",
            descriptionPH: "Potřebuji postavit 2,5 metru vysokou zeď",
            locationPH: "Praha",
            budgetPH: "30000 Kč",
            contactPersonPH: "Jan Novák",
            phoneNumberPH: "+420123456789",
            createOfferPH: "Vytvořit nabídku",
            createRequestPH: "Vytvořit poptávku",
            emailPH: "jan.novak@email.cz",
        },
        createRequestForm: {
            title: "Název nabídky",
            profession: "Profese",
            description: "Popis",
            location: "Místo",
            priceHowIValue: "Cena – jak se cením",
            contactPerson: "Kontaktní osoba",
            phoneNumberPH: "+420123456789",
            phoneNumber: "Telefonní číslo",
            titlePH: "Umím stavět zdi",
            submit: "Vytvořit poptávku",
            professionPH: "Zedník",
            descriptionPH: "Umím to a to...",
            locationPH: "Praha",
            pricePH: "30000 Kč, a nebo dohodou",
            contactPersonPH: "Jan Novák",
            emailPH: "jan.novak@email.cz",
        },
        listings: {
            filter: "Filtrovat",
            hideFilter: "Skrýt filtry",
            price: "Cena",
            location: "Lokalita",
            field: "Obor",
            details: "Detaily",
            payToViewContact: "Zaplatit pro zobrazení kontaktu",
        },
    },

    pl: {
        registration: {
            title: "Rejestracja",
            firstName: "Imię",
            lastName: "Nazwisko",
            ico: "NIP",
            email: "E-mail",
            phoneNumber: "Numer telefonu",
            password: "Hasło",
            passwordConfirmation: "Powtórz hasło",
        },
        login: {
            title: "Logowanie",
            email: "E-mail",
            password: "Hasło",
        },
        offer: {
            title: "Utwórz ofertę",
            name: "Nazwa oferty",
            profession: "Zawód",
            description: "Opis",
            location: "Miejsce",
            price: "Cena",
            contactPerson: "Osoba kontaktowa",
            phoneNumber: "Numer telefonu",
            email: "E-mail",
            date: "Termin",
        },
        homepage: {
            welcome: "Witamy w Perpetiom, tutaj możesz ogłaszać cokolwiek, skądkolwiek",
            viewOffer: "Zobacz ogłoszenie",
            createOffer: "Utwórz ogłoszenie",
        },
        navbar: {
            signIn: "Zaloguj się",
            register: "Rejestracja",
            signOut: "Wyloguj się",
            loggedInAs: "Zalogowany jako",
        },
        createOfferForm: {
            title: "Nazwa oferty",
            profession: "Zawód",
            description: "Opis",
            date: "Termin",
            location: "Miejsce",
            price: "Cena",
            contactPerson: "Osoba kontaktowa",
            phoneNumber: "Numer telefonu",
            submit: "Utwórz ofertę",
            titlePH: "Budowa muru",
            professionPH: "Murarz",
            descriptionPH: "Potrzebuję zbudować mur o wysokości 2,5 metra",
            locationPH: "Warszawa",
            budgetPH: "30000 PLN",
            contactPersonPH: "Jan Kowalski",
            phoneNumberPH: "+481345678912",
            createOfferPH: "Utwórz ofertę",
            createRequestPH: "Utwórz zapytanie",
            emailPH: "jan.kowalski@email.pl",
        },
        createRequestForm: {
            title: "Nazwa oferty",
            profession: "Zawód",
            description: "Opis",
            location: "Miejsce",
            priceHowIValue: "Cena – jak się wyceniam",
            contactPerson: "Osoba kontaktowa",
            phoneNumber: "Numer telefonu",
            phoneNumberPH: "+481345678912",
            titlePH: "Umiem budować mury",
            submit: "Utwórz zapytanie",
            professionPH: "Murarz",
            descriptionPH: "Umiem to i tamto...",
            locationPH: "Warszawa",
            pricePH: "30000 PLN, albo do uzgodnienia",
            contactPersonPH: "Jan Kowalski",
            emailPH: "jan.kowalski@email.pl",
        },
        listings: {
            filter: "Filtruj",
            hideFilter: "Ukryj filtry",
            price: "Cena",
            location: "Lokalizacja",
            field: "Branża",
            details: "Szczegóły",
            payToViewContact: "Zapłać, aby zobaczyć kontakt",
        },
    },

    de: {
        registration: {
            title: "Registrierung",
            firstName: "Vorname",
            lastName: "Nachname",
            ico: "USt-IdNr.",
            email: "E-Mail",
            phoneNumber: "Telefonnummer",
            password: "Passwort",
            passwordConfirmation: "Passwort wiederholen",
        },
        login: {
            title: "Anmeldung",
            email: "E-Mail",
            password: "Passwort",
        },
        offer: {
            title: "Angebot erstellen",
            name: "Angebotsname",
            profession: "Beruf",
            description: "Beschreibung",
            location: "Ort",
            price: "Preis",
            contactPerson: "Kontaktperson",
            phoneNumber: "Telefonnummer",
            email: "E-Mail",
            date: "Termin",
        },
        homepage: {
            welcome: "Willkommen bei Perpetiom, hier können Sie alles inserieren, von überall",
            viewOffer: "Anzeige ansehen",
            createOffer: "Anzeige erstellen",
        },
        navbar: {
            signIn: "Anmelden",
            register: "Registrierung",
            signOut: "Abmelden",
            loggedInAs: "Angemeldet als",
        },
        createOfferForm: {
            title: "Angebotsname",
            profession: "Beruf",
            description: "Beschreibung",
            date: "Termin",
            location: "Ort",
            price: "Preis",
            contactPerson: "Kontaktperson",
            phoneNumber: "Telefonnummer",
            submit: "Angebot erstellen",
            titlePH: "Mauerbau",
            professionPH: "Maurer",
            descriptionPH: "Ich brauche eine 2,5 Meter hohe Mauer",
            locationPH: "Berlin",
            budgetPH: "30000 €",
            contactPersonPH: "Max Müller",
            phoneNumberPH: "+491345678912",
            createOfferPH: "Angebot erstellen",
            createRequestPH: "Anfrage erstellen",
            emailPH: "max.mueller@email.de",

        },
        createRequestForm: {
            title: "Angebotsname",
            profession: "Beruf",
            description: "Beschreibung",
            location: "Ort",
            priceHowIValue: "Preis – wie ich mich bepreise",
            contactPerson: "Kontaktperson",
            phoneNumber: "Telefonnummer",
            phoneNumberPH: "+491345678912",
            submit: "Anfrage erstellen",
            titlePH: "Ich kann Mauern bauen",
            professionPH: "Maurer",
            descriptionPH: "Ich kann dies und das...",
            locationPH: "Berlin",
            pricePH: "30000 €, oder nach Vereinbarung",
            contactPersonPH: "Max Müller",
            emailPH: "max.mueller@email.de",

        },
        listings: {
            filter: "Filtern",
            hideFilter: "Filter ausblenden",
            price: "Preis",
            location: "Standort",
            field: "Branche",
            details: "Details",
            payToViewContact: "Für Kontaktanzeige bezahlen",
        },
    },

    sk: {
        registration: {
            title: "Registrácia",
            firstName: "Meno",
            lastName: "Priezvisko",
            ico: "IČO",
            email: "E-mail",
            phoneNumber: "Telefónne číslo",
            password: "Heslo",
            passwordConfirmation: "Heslo znova",
        },
        login: {
            title: "Prihlásenie",
            email: "E-mail",
            password: "Heslo",
        },
        offer: {
            title: "Vytvoriť ponuku",
            name: "Názov ponuky",
            profession: "Profesia",
            description: "Popis",
            location: "Miesto",
            price: "Cena",
            contactPerson: "Kontaktná osoba",
            phoneNumber: "Telefónne číslo",
            email: "E-mail",
            date: "Termín",
        },
        homepage: {
            welcome: "Vitajte na Perpetiom, tu môžete inzerovať čokoľvek, odkiaľkoľvek",
            viewOffer: "Zobraziť inzerát",
            createOffer: "Vytvoriť inzerát",
        },
        navbar: {
            signIn: "Prihlásiť sa",
            register: "Registrácia",
            signOut: "Odhlásiť sa",
            loggedInAs: "Prihlásený ako",
        },
        createOfferForm: {
            title: "Názov ponuky",
            profession: "Profesia",
            description: "Popis",
            date: "Termín",
            location: "Miesto",
            price: "Cena",
            contactPerson: "Kontaktná osoba",
            phoneNumber: "Telefónne číslo",
            submit: "Vytvoriť ponuku",
            titlePH: "Stavba múru",
            professionPH: "Murar",
            descriptionPH: "Potrebujem postaviť 2,5 metra vysoký múr",
            locationPH: "Bratislava",
            budgetPH: "30000 €",
            contactPersonPH: "Ján Novák",
            phoneNumberPH: "+421912345678",
            createOfferPH: "Vytvoriť ponuku",
            createRequestPH: "Vytvoriť dopyt",
            emailPH: "jan.novak@email.sk",
        },
        createRequestForm: {
            title: "Názov ponuky",
            profession: "Profesia",
            description: "Popis",
            location: "Miesto",
            priceHowIValue: "Cena – ako sa cením",
            contactPerson: "Kontaktná osoba",
            phoneNumber: "Telefónne číslo",
            phoneNumberPH: "+421912345678",
            submit: "Vytvoriť dopyt",
            titlePH: "Viem stavať múry",
            professionPH: "Murar",
            descriptionPH: "Viem to a to...",
            locationPH: "Bratislava",
            pricePH: "30000 €, alebo dohodou",
            contactPersonPH: "Ján Novák",
            emailPH: "jan.novak@email.sk",
        },
        listings: {
            filter: "Filtrovať",
            hideFilter: "Skryť filtre",
            price: "Cena",
            location: "Lokalita",
            field: "Odbor",
            details: "Detaily",
            payToViewContact: "Zaplatiť za zobrazenie kontaktu",
        },
    },

    en: {
        registration: {
            title: "Registration",
            firstName: "First name",
            lastName: "Last name",
            ico: "Company ID",
            email: "E-mail",
            phoneNumber: "Phone number",
            password: "Password",
            passwordConfirmation: "Repeat password",
        },
        login: {
            title: "Login",
            email: "E-mail",
            password: "Password",
        },
        offer: {
            title: "Create offer",
            name: "Offer name",
            profession: "Profession",
            description: "Description",
            location: "Location",
            price: "Price",
            contactPerson: "Contact person",
            phoneNumber: "Phone number",
            email: "E-mail",
            date: "Date",
        },
        homepage: {
            welcome: "Welcome to Perpetiom, here you can advertise anything from anywhere",
            viewOffer: "View ad",
            createOffer: "Create ad",
        },
        navbar: {
            signIn: "Sign in",
            register: "Registration",
            signOut: "Sign out",
            loggedInAs: "Logged in as",
        },
        createOfferForm: {
            title: "Offer name",
            profession: "Profession",
            description: "Description",
            date: "Date",
            location: "Location",
            price: "Price",
            contactPerson: "Contact person",
            phoneNumber: "Phone number",
            submit: "Create offer",
            titlePH: "Wall construction",
            professionPH: "Bricklayer",
            descriptionPH: "I need to build a 2.5 meter high wall",
            locationPH: "London",
            budgetPH: "30000 £",
            contactPersonPH: "John Smith",
            phoneNumberPH: "+447123456789",
            createOfferPH: "Create offer",
            createRequestPH: "Create request",
            emailPH: "john.smith@email.co.uk",
        },
        createRequestForm: {
            title: "Offer name",
            profession: "Profession",
            description: "Description",
            location: "Location",
            priceHowIValue: "Price – how I price myself",
            contactPerson: "Contact person",
            phoneNumber: "Phone number",
            phoneNumberPH: "+447123456789",
            submit: "Create request",
            titlePH: "I can build walls",
            professionPH: "Bricklayer",
            descriptionPH: "I can do this and that...",
            locationPH: "London",
            pricePH: "30000 £, or negotiable",
            contactPersonPH: "John Smith",
            emailPH: "john.smith@email.co.uk",
        },
        listings: {
            filter: "Filter",
            hideFilter: "Hide filters",
            price: "Price",
            location: "Location",
            field: "Field",
            details: "Details",
            payToViewContact: "Pay to view contact",
        },
    },
} satisfies Record<LangCode, Dictionary>;





export const getLang = (lang: LangCode): Dictionary => {
    return dict[lang]
}