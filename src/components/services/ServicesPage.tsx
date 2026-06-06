import Link from "next/link";
import {
  Baby,
  Bone,
  Ear,
  Eye,
  FlaskConical,
  HeartPulse,
  Microscope,
  ScanHeart,
  Stethoscope,
  Syringe,
  type LucideIcon,
} from "lucide-react";
import type { Locale, Section } from "@/i18n/config";
import { getPublicPath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type ServicesPageProps = {
  dictionary: Dictionary;
  locale: Locale;
  section: Section;
};

const serviceIconMap: Record<string, LucideIcon> = {
  "طب الأسرة": HeartPulse,
  "Family Medicine": HeartPulse,
  "طب الأطفال": Baby,
  Pediatrics: Baby,
  "طب النساء": Stethoscope,
  Gynecology: Stethoscope,
  الأسنان: ScanHeart,
  Dentistry: ScanHeart,
  "الجلدية والتجميل": Eye,
  "Dermatology & Aesthetics": Eye,
  الليزر: Syringe,
  Laser: Syringe,
  "التحاليل الطبية": FlaskConical,
  "Lab Tests": FlaskConical,
  "الأشعة والتصوير": Microscope,
  "Radiology & Imaging": Microscope,
  "العلاج الطبيعي": Bone,
  "Physical Therapy": Bone,
};

const fallbackIcon = Ear;

export function ServicesPage({ dictionary, locale }: ServicesPageProps) {
  const { pageContent } = dictionary;
  const content = pageContent.services;

  return (
    <section className="pageBand">
      <div className="shell">
        <div className="sectionHeader">
          <h1>{content.header}</h1>
          <p>{content.subheader}</p>
        </div>

        {content.categories.map((category) => (
          <div className="serviceCategory" key={category.title}>
            <h2 className="categoryTitle">{category.title}</h2>
            <div className="cardsGrid">
              {category.items.map((service) => {
                const Icon = serviceIconMap[service.title] || fallbackIcon;

                return (
                  <article className="infoCard serviceCard" key={service.title}>
                    <div className="serviceCardHead">
                      <span className="serviceCardIcon">
                        <Icon size={28} strokeWidth={1.8} />
                      </span>
                      <span className={`badge ${service.badge === "متاح" || service.badge === "Available" ? "badgeTurquoise" : "badgePink"}`}>
                        {service.badge}
                      </span>
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className="serviceCardFooter">
                      <span className="servicePrice">{service.price}</span>
                      <Link
                        className="button buttonCompact buttonPrimary"
                        href={getPublicPath(locale, "booking" as Section)}
                      >
                        {dictionary.actions.bookNow}
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
