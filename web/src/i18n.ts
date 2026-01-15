import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files
import enTranslation from "./locales/en/translation.json";
import esTranslation from "./locales/es/translation.json";
import frTranslation from "./locales/fr/translation.json";
import arTranslation from "./locales/ar/translation.json";
import zhTranslation from "./locales/zh/translation.json";
import deTranslation from "./locales/de/translation.json";
import nlTranslation from "./locales/nl/translation.json";
import caTranslation from "./locales/ca/translation.json";
import ptTranslation from "./locales/pt/translation.json";
import itTranslation from "./locales/it/translation.json";
import ruTranslation from "./locales/ru/translation.json";
import jaTranslation from "./locales/ja/translation.json";
import koTranslation from "./locales/ko/translation.json";
import hiTranslation from "./locales/hi/translation.json";
import trTranslation from "./locales/tr/translation.json";
import plTranslation from "./locales/pl/translation.json";
import ukTranslation from "./locales/uk/translation.json";
import viTranslation from "./locales/vi/translation.json";
import thTranslation from "./locales/th/translation.json";
import heTranslation from "./locales/he/translation.json";
import idTranslation from "./locales/id/translation.json";
import msTranslation from "./locales/ms/translation.json";
import faTranslation from "./locales/fa/translation.json";
import urTranslation from "./locales/ur/translation.json";
import svTranslation from "./locales/sv/translation.json";
import noTranslation from "./locales/no/translation.json";
import daTranslation from "./locales/da/translation.json";
import fiTranslation from "./locales/fi/translation.json";
import csTranslation from "./locales/cs/translation.json";
import roTranslation from "./locales/ro/translation.json";
import elTranslation from "./locales/el/translation.json";
import huTranslation from "./locales/hu/translation.json";

const resources = {
  en: { translation: enTranslation },
  es: { translation: esTranslation },
  fr: { translation: frTranslation },
  ar: { translation: arTranslation },
  zh: { translation: zhTranslation },
  de: { translation: deTranslation },
  nl: { translation: nlTranslation },
  ca: { translation: caTranslation },
  pt: { translation: ptTranslation },
  it: { translation: itTranslation },
  ru: { translation: ruTranslation },
  ja: { translation: jaTranslation },
  ko: { translation: koTranslation },
  hi: { translation: hiTranslation },
  tr: { translation: trTranslation },
  pl: { translation: plTranslation },
  uk: { translation: ukTranslation },
  vi: { translation: viTranslation },
  th: { translation: thTranslation },
  he: { translation: heTranslation },
  id: { translation: idTranslation },
  ms: { translation: msTranslation },
  fa: { translation: faTranslation },
  ur: { translation: urTranslation },
  sv: { translation: svTranslation },
  no: { translation: noTranslation },
  da: { translation: daTranslation },
  fi: { translation: fiTranslation },
  cs: { translation: csTranslation },
  ro: { translation: roTranslation },
  el: { translation: elTranslation },
  hu: { translation: huTranslation },
};

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    resources,
    fallbackLng: "en", // Default language
    debug: false, // Set to true for development debugging

    interpolation: {
      escapeValue: false, // React already escapes values
    },

    // Explicit list of supported languages (helps detection and routing)
    supportedLngs: Object.keys(resources),
    load: "languageOnly",

    detection: {
      // Prioritize browser navigator language first
      order: ["navigator", "querystring", "localStorage", "cookie", "htmlTag"],

      // Keys or params to lookup language from
      lookupQuerystring: "lng",
      lookupCookie: "i18next",
      lookupLocalStorage: "i18nextLng",

      // Cache user language on
      caches: ["localStorage", "cookie"],
    },
  });

// If detection somehow doesn't pick a language, explicitly use the browser language
if (typeof window !== "undefined") {
  const detected =
    i18n.language || (window.navigator && window.navigator.language);
  if (detected) {
    const short = detected.split("-")[0];
    if (short && Object.prototype.hasOwnProperty.call(resources, short)) {
      i18n.changeLanguage(short);
    }
  }
}

export default i18n;
