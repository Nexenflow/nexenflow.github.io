import fr from './fr.json';

const translations: Record<string, Record<string, string>> = { fr };

export function getLangFromUrl(url: URL): string {
    const [, lang] = url.pathname.split('/');
    if (lang && lang in translations) return lang;
    return 'fr';
}

export function useTranslations(lang: string) {
    return function t(key: string): string {
        return translations[lang]?.[key] ?? translations['fr']?.[key] ?? key;
    };
}

export function getLocalePath(lang: string, path: string): string {
    return `/${lang}${path.startsWith('/') ? path : '/' + path}`;
}
