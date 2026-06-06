import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import {
  isLocale,
  localeDirections,
  locales,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import "../globals.css";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale: Locale = rawLocale;
  const dictionary = getDictionary(locale);

  return (
    <html dir={localeDirections[locale]} lang={locale}>
      <body>
        <AppShell dictionary={dictionary} locale={locale}>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
