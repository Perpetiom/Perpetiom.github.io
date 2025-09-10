type LangCode = 'cs' | 'pl' | 'de' | 'sk'
export type LangNode = { [key: string]: string | LangNode };

const dict = {
    cs: {
        "email": "email"
    },
    pl: {

    },
    de: {

    },
    sk: {

    }
} satisfies Record<LangCode, LangNode>;





export const getLang = (lang: LangCode): LangNode => {
    return dict[lang]
}