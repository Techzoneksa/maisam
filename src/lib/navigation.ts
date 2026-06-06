import type { Dictionary } from "@/i18n/dictionaries";
import { getPublicPath, type Locale, type Section } from "@/i18n/config";

export type NavigationItem = {
  key: "home" | Section;
  label: string;
  href: string;
};

export function getPrimaryNavigation(
  locale: Locale,
  dictionary: Dictionary,
): NavigationItem[] {
  return [
    {
      key: "home",
      label: dictionary.nav.home,
      href: getPublicPath(locale),
    },
    {
      key: "services",
      label: dictionary.nav.services,
      href: getPublicPath(locale, "services"),
    },
    {
      key: "booking",
      label: dictionary.nav.booking,
      href: getPublicPath(locale, "booking"),
    },
    {
      key: "appointments",
      label: dictionary.nav.appointments,
      href: getPublicPath(locale, "appointments"),
    },
    {
      key: "profile",
      label: dictionary.nav.profile,
      href: getPublicPath(locale, "profile"),
    },
  ];
}

export function getFooterNavigation(
  locale: Locale,
  dictionary: Dictionary,
): NavigationItem[] {
  return [
    {
      key: "services",
      label: dictionary.nav.services,
      href: getPublicPath(locale, "services"),
    },
    {
      key: "offers",
      label: dictionary.nav.offers,
      href: getPublicPath(locale, "offers"),
    },
    {
      key: "doctors",
      label: dictionary.nav.doctors,
      href: getPublicPath(locale, "doctors"),
    },
    {
      key: "branches",
      label: dictionary.nav.branches,
      href: getPublicPath(locale, "branches"),
    },
  ];
}
