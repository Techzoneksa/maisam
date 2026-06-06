import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type HomeProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: HomeProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ar";
  const dictionary = getDictionary(locale);

  return {
    title: dictionary.meta.homeTitle,
    description: dictionary.meta.homeDescription,
  };
}

export default async function Page({ params }: HomeProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ar";
  const dictionary = getDictionary(locale);

  return <HomePage dictionary={dictionary} locale={locale} />;
}
