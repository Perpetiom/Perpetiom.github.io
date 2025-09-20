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
        descriptionPH: string;
        locationPH: string;
        budgetPH: string;
        contactPersonPH: string;
        phoneNumberPH: string;
        createOfferPH: string;
        createRequestPH: string;
        emailPH: string;
        submitting: string;
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
        submitting: string;
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
    offerPage: {
        price: string;
        moreInfo: string;
        location: string;
        field: string;
        details: string;
        contact: string;
    };
    errorMessages: {
        registrationError: string;
        loginAfterRegistrationError: string;
        registrationSuccessProfileSaved: string;
        unexpectedError: string;
        loginError: string;
        loginSuccess: string;
        listingValidationFailed: string;
        mustBeLoggedIn: string;
        listingSaveError: string;
        listingSaved: string;
        profileSaveAfterLoginError: string;
        profileCreateError: string;
        profileSaveSuccess: string;
        passwordsDoNotMatch: string;
        registrationGenericError: string;
        registrationEmailConfirm: string;
    };
    registerPage: {
        title: string;
        firstName: string;
        lastName: string;
        ico: string;
        email: string;
        phoneNumber: string;
        password: string;
        passwordConfirmation: string;
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
            submitting: "Odesílám…",
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
            submitting: "Odesílám…",
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
        offerPage: {
            price: "Cena",
            moreInfo: "Více informací",
            location: "Lokalita",
            field: "Obor",
            details: "Detaily",
            contact: "Kontakt",
        },
        errorMessages: {
            registrationError: "Chyba při registraci",
            loginAfterRegistrationError: "Chyba při přihlášení po registraci",
            registrationSuccessProfileSaved: "Registrace a uložení profilu úspěšné!",
            unexpectedError: "Došlo k neočekávané chybě",
            loginError: "Chyba při přihlašování",
            loginSuccess: "Přihlášení úspěšné!",
            listingValidationFailed: "Nabídka/poptávka neprošla validací",
            mustBeLoggedIn: "Musíte být přihlášeni",
            listingSaveError: "Chyba při ukládání nabídky/poptávky",
            listingSaved: "Nabídka uložena",
            profileSaveAfterLoginError: "Chyba při ukládání profilu po přihlášení",
            profileCreateError: "Chyba při vytváření profilu. Zkuste to prosím později.",
            profileSaveSuccess: "Profil úspěšně uložen!",
            passwordsDoNotMatch: "Hesla se neshodují",
            registrationGenericError: "Chyba při registraci",
            registrationEmailConfirm: "Registrace proběhla úspěšně! Zkontrolujte svůj e-mail pro potvrzení.",
        },
        registerPage: {
            title: "Registrovat se",
            firstName: "Jméno",
            lastName: "Příjmení",
            ico: "IČO",
            email: "E-mail",
            phoneNumber: "Telefonní číslo",
            password: "Heslo",
            passwordConfirmation: "Heslo znovu",
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
            submitting: "Wysyłam…"
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
            submitting: "Wysyłam…",
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
        offerPage: {
            price: "Cena",
            moreInfo: "Więcej informacji",
            location: "Lokalizacja",
            field: "Branża",
            details: "Szczegóły",
            contact: "Kontakt",
        },
        errorMessages: {
            registrationError: "Błąd podczas rejestracji",
            loginAfterRegistrationError: "Błąd logowania po rejestracji",
            registrationSuccessProfileSaved: "Rejestracja i zapis profilu zakończone sukcesem!",
            unexpectedError: "Wystąpił nieoczekiwany błąd",
            loginError: "Błąd logowania",
            loginSuccess: "Logowanie zakończone sukcesem!",
            listingValidationFailed: "Oferta/zapytanie nie przeszło walidacji",
            mustBeLoggedIn: "Musisz być zalogowany",
            listingSaveError: "Błąd podczas zapisywania oferty/zapytania",
            listingSaved: "Oferta została zapisana",
            profileSaveAfterLoginError: "Błąd podczas zapisywania profilu po zalogowaniu",
            profileCreateError: "Błąd podczas tworzenia profilu. Spróbuj ponownie później.",
            profileSaveSuccess: "Profil został pomyślnie zapisany!",
            passwordsDoNotMatch: "Hasła nie są identyczne",
            registrationGenericError: "Błąd rejestracji",
            registrationEmailConfirm: "Rejestracja zakończona sukcesem! Sprawdź swój e-mail, aby potwierdzić.",
        },
        registerPage: {
            title: "Zarejestruj się",
            firstName: "Imię",
            lastName: "Nazwisko",
            ico: "NIP",
            email: "E-mail",
            phoneNumber: "Numer telefonu",
            password: "Hasło",
            passwordConfirmation: "Powtórz hasło",
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
            submitting: "Sende…",
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
            submitting: "Sende…",

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
        offerPage: {
            price: "Preis",
            moreInfo: "Mehr Informationen",
            location: "Standort",
            field: "Branche",
            details: "Details",
            contact: "Kontakt",
        },
        errorMessages: {
            registrationError: "Fehler bei der Registrierung",
            loginAfterRegistrationError: "Fehler beim Anmelden nach der Registrierung",
            registrationSuccessProfileSaved: "Registrierung und Profilspeicherung erfolgreich!",
            unexpectedError: "Ein unerwarteter Fehler ist aufgetreten",
            loginError: "Fehler bei der Anmeldung",
            loginSuccess: "Anmeldung erfolgreich!",
            listingValidationFailed: "Angebot/Anfrage hat die Validierung nicht bestanden",
            mustBeLoggedIn: "Sie müssen angemeldet sein",
            listingSaveError: "Fehler beim Speichern des Angebots/der Anfrage",
            listingSaved: "Angebot gespeichert",
            profileSaveAfterLoginError: "Fehler beim Speichern des Profils nach der Anmeldung",
            profileCreateError: "Fehler beim Erstellen des Profils. Bitte versuchen Sie es später erneut.",
            profileSaveSuccess: "Profil erfolgreich gespeichert!",
            passwordsDoNotMatch: "Passwörter stimmen nicht überein",
            registrationGenericError: "Fehler bei der Registrierung",
            registrationEmailConfirm: "Registrierung erfolgreich! Bitte überprüfen Sie Ihre E-Mail zur Bestätigung.",
        },
        registerPage: {
            title: "Registrieren",
            firstName: "Vorname",
            lastName: "Nachname",
            ico: "USt-IdNr.",
            email: "E-Mail",
            phoneNumber: "Telefonnummer",
            password: "Passwort",
            passwordConfirmation: "Passwort wiederholen",
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
            submitting: "Odosielam…",
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
            submitting: "Odosielam…",
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
        offerPage: {
            price: "Cena",
            moreInfo: "Viac informácií",
            location: "Lokalita",
            field: "Odbor",
            details: "Detaily",
            contact: "Kontakt",
        },
        errorMessages: {
            registrationError: "Chyba pri registrácii",
            loginAfterRegistrationError: "Chyba pri prihlásení po registrácii",
            registrationSuccessProfileSaved: "Registrácia a uloženie profilu úspešné!",
            unexpectedError: "Došlo k neočakávanej chybe",
            loginError: "Chyba pri prihlasovaní",
            loginSuccess: "Prihlásenie úspešné!",
            listingValidationFailed: "Ponuka/dopyt neprešla validáciou",
            mustBeLoggedIn: "Musíte byť prihlásení",
            listingSaveError: "Chyba pri ukladaní ponuky/dopytu",
            listingSaved: "Ponuka uložená",
            profileSaveAfterLoginError: "Chyba pri ukladaní profilu po prihlásení",
            profileCreateError: "Chyba pri vytváraní profilu. Skúste to znova neskôr.",
            profileSaveSuccess: "Profil úspešne uložený!",
            passwordsDoNotMatch: "Heslá sa nezhodujú",
            registrationGenericError: "Chyba pri registrácii",
            registrationEmailConfirm: "Registrácia prebehla úspešne! Skontrolujte svoj e-mail pre potvrdenie.",
        },
        registerPage: {
            title: "Registrovať sa",
            firstName: "Meno",
            lastName: "Priezvisko",
            ico: "IČO",
            email: "E-mail",
            phoneNumber: "Telefónne číslo",
            password: "Heslo",
            passwordConfirmation: "Heslo znova",
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
            submitting: "Sending…",
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
            submitting: "Sending…",
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
        offerPage: {
            price: "Price",
            moreInfo: "More information",
            location: "Location",
            field: "Field",
            details: "Details",
            contact: "Contact",
        },
        errorMessages: {
            registrationError: "Error during registration",
            loginAfterRegistrationError: "Error logging in after registration",
            registrationSuccessProfileSaved: "Registration and profile saved successfully!",
            unexpectedError: "An unexpected error occurred",
            loginError: "Login error",
            loginSuccess: "Login successful!",
            listingValidationFailed: "Offer/request failed validation",
            mustBeLoggedIn: "You must be logged in",
            listingSaveError: "Error saving offer/request",
            listingSaved: "Offer saved",
            profileSaveAfterLoginError: "Error saving profile after login",
            profileCreateError: "Error creating profile. Please try again later.",
            profileSaveSuccess: "Profile saved successfully!",
            passwordsDoNotMatch: "Passwords do not match",
            registrationGenericError: "Registration error",
            registrationEmailConfirm: "Registration successful! Please check your email to confirm.",
        },
        registerPage: {
            title: "Register",
            firstName: "First name",
            lastName: "Last name",
            ico: "Company ID",
            email: "E-mail",
            phoneNumber: "Phone number",
            password: "Password",
            passwordConfirmation: "Repeat password",
        },
    },
} satisfies Record<LangCode, Dictionary>;


export const getLang = (lang: LangCode): Dictionary => {
    return dict[lang]
}