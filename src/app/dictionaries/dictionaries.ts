import 'server-only';

export type Locale = keyof typeof dictionaries;
export type LangDictionary = typeof import('./en.json');

const dictionaries = {
    en: () => import('./en.json').then((module) => module.default),
    es: () => import('./es.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]();