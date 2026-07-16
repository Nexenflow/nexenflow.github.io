// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://nexenflow.github.io',
    base: '/cactus',

    // i18n routing: /fr/... (default) and /en/...
    i18n: {
        defaultLocale: 'fr',
        locales: ['fr', 'en'],
        routing: {
            prefixDefaultLocale: true,
            redirectToDefaultLocale: true,
        },
    },

    // Integrations
    integrations: [
        sitemap({
            i18n: {
                defaultLocale: 'fr',
                locales: {
                    fr: 'fr-MA',
                    en: 'en-US',
                },
            },
        }),
    ],

    // Vite plugins (Tailwind CSS v4)
    vite: {
        plugins: [tailwindcss()],
    },
});
