import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BranchesPage } from "@/components/branches/BranchesPage";
import { DoctorsPage } from "@/components/doctors/DoctorsPage";
import { OffersPage } from "@/components/offers/OffersPage";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { ServicesPage } from "@/components/services/ServicesPage";
import {
  isLocale,
  isSection,
  locales,
  routeSections,
  type Locale,
  type Section,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type SectionPageProps = {
  params: Promise<{
    locale: string;
    section: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    routeSections.map((section) => ({
      locale,
      section,
    })),
  );
}

function resolveParams(rawLocale: string, rawSection: string) {
  if (!isLocale(rawLocale) || !isSection(rawSection)) {
    notFound();
  }

  return {
    locale: rawLocale as Locale,
    section: rawSection as Section,
  };
}

export async function generateMetadata({
  params,
}: SectionPageProps): Promise<Metadata> {
  const { locale: rawLocale, section: rawSection } = await params;
  const { locale, section } = resolveParams(rawLocale, rawSection);
  const dictionary = getDictionary(locale);
  const pageMeta = dictionary.meta.pages[section];

  return {
    title: pageMeta.title,
    description: pageMeta.description,
  };
}

const pageComponents: Partial<Record<Section, typeof PagePlaceholder>> = {
  services: ServicesPage,
  offers: OffersPage,
  doctors: DoctorsPage,
  branches: BranchesPage,
};

export default async function SectionPage({ params }: SectionPageProps) {
  const { locale: rawLocale, section: rawSection } = await params;
  const { locale, section } = resolveParams(rawLocale, rawSection);
  const dictionary = getDictionary(locale);

  const PageComponent = pageComponents[section] ?? PagePlaceholder;

  return (
    <PageComponent
      dictionary={dictionary}
      locale={locale}
      section={section}
    />
  );
}
