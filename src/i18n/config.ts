export const locales = ["ar", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ar";

export const localeDirections: Record<Locale, "rtl" | "ltr"> = {
  ar: "rtl",
  en: "ltr",
};

export const routeSections = [
  "services",
  "offers",
  "doctors",
  "branches",
  "booking",
  "appointments",
  "invoices",
  "complaints",
  "profile",
  "admin",
] as const;

export type Section = (typeof routeSections)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function isSection(value: string): value is Section {
  return routeSections.includes(value as Section);
}

export function getPublicPath(locale: Locale, section?: Section): string {
  const prefix = locale === "en" ? "/en" : "";

  if (!section) {
    return prefix || "/";
  }

  return `${prefix}/${section}`;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "ar" ? "en" : "ar";
}
