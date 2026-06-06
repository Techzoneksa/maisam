"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";

type LanguageToggleProps = {
  ariaLabel: string;
  locale: Locale;
};

function getTargetPath(pathname: string, locale: Locale): string {
  if (locale === "ar") {
    return pathname === "/" ? "/en" : `/en${pathname}`;
  }

  return pathname.replace(/^\/en/, "") || "/";
}

export function LanguageToggle({ ariaLabel, locale }: LanguageToggleProps) {
  const pathname = usePathname();
  const nextLocale: Locale = locale === "ar" ? "en" : "ar";
  const targetPath = getTargetPath(pathname, locale);

  function rememberLanguage() {
    window.localStorage.setItem("maisam_locale", nextLocale);
    document.cookie = `maisam_locale=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
  }

  return (
    <Link
      aria-label={ariaLabel}
      className="languageToggle"
      href={targetPath}
      onClick={rememberLanguage}
    >
      {nextLocale.toUpperCase()}
    </Link>
  );
}
