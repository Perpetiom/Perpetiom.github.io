export const ALL_TAGS = [
    'VIP',
    'Malíř',
    'Zedník',
    'Instalatér',
    'Elektrikář',
    'Truhlář',
    'Poptávka',
    'Nabídka',
    'Praha',
    'Brno',
    'Ostrava'
] as const;

export type Tag = typeof ALL_TAGS[number];