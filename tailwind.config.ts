import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'

const config: Config = {
    darkMode: 'class',
    content: ['./src/**/*.{ts,tsx,js,jsx,mdx}'],
    theme: {
        extend: {
            // Použijeme tvoje OKLCH proměnné
            colors: {
                border: 'oklch(var(--border))',
                input: 'oklch(var(--input))',
                ring: 'oklch(var(--ring))',
                background: 'oklch(var(--background))',
                foreground: 'oklch(var(--foreground))',
                card: 'oklch(var(--card))',
                'card-foreground': 'oklch(var(--card-foreground))',
                popover: 'oklch(var(--popover))',
                'popover-foreground': 'oklch(var(--popover-foreground))',
                primary: 'oklch(var(--primary))',
                'primary-foreground': 'oklch(var(--primary-foreground))',
                secondary: 'oklch(var(--secondary))',
                'secondary-foreground': 'oklch(var(--secondary-foreground))',
                muted: 'oklch(var(--muted))',
                'muted-foreground': 'oklch(var(--muted-foreground))',
                accent: 'oklch(var(--accent))',
                'accent-foreground': 'oklch(var(--accent-foreground))',
                destructive: 'oklch(var(--destructive))',
            },
            borderRadius: {
                sm: 'calc(var(--radius) - 4px)',
                md: 'calc(var(--radius) - 2px)',
                lg: 'var(--radius)',
                xl: 'calc(var(--radius) + 4px)',
            },
        },
    },
    plugins: [animate],
}

export default config
