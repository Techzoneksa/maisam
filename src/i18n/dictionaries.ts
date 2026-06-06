import arMessages from "./messages/ar.json";
import enMessages from "./messages/en.json";
import type { Locale } from "./config";

export type Dictionary = typeof arMessages;

const dictionaries: Record<Locale, Dictionary> = {
  ar: arMessages,
  en: enMessages,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
