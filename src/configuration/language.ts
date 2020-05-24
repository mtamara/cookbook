import locale_en_us from "../translations/en-US.json";
import locale_sr from "../translations/sr.json";
import locale_es from "../translations/es.json";

export const languageData: any = {
    'en-US': locale_en_us,
    'sr': locale_sr,
    'es': locale_es,
};

export const getTranslations = (locale: string) => {
    const userLocale = locale.split(/[-_]/)[0];
    if (!languageData[userLocale]) {
        // return default en-US locale
        return languageData['en-US'];
    }
    return languageData[locale] ? languageData[locale] : languageData[userLocale];
};

/*
sr-Cyrl-BA
sr-Cyrl-CS
sr-Cyrl-ME
sr-Cyrl-RS
sr-Latn-BA
sr-Latn-CS
sr-Latn-ME
sr-Latn-RS
*/