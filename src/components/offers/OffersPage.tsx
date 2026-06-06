import Link from "next/link";
import {
  BadgePercent,
  CalendarCheck,
} from "lucide-react";
import type { Locale, Section } from "@/i18n/config";
import { getPublicPath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type OffersPageProps = {
  dictionary: Dictionary;
  locale: Locale;
  section: Section;
};

export function OffersPage({ dictionary, locale }: OffersPageProps) {
  const { pageContent } = dictionary;
  const content = pageContent.offers;

  return (
    <section className="pageBand">
      <div className="shell">
        <div className="sectionHeader">
          <h1>{content.header}</h1>
          <p>{content.subheader}</p>
        </div>

        <div className="cardsGrid twoColumns">
          {content.items.map((offer) => (
            <article className="infoCard offerCard" key={offer.title}>
              <div className="offerCardHead">
                <span className="offerCardIcon">
                  <BadgePercent size={28} strokeWidth={1.8} />
                </span>
                <span className="badge badgePink">{offer.badge}</span>
              </div>
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
              <div className="offerCardMeta">
                <strong className="offerPrice">{offer.price}</strong>
                <span className="offerValidity">
                  <CalendarCheck size={14} strokeWidth={2} />
                  {offer.validity}
                </span>
              </div>
              <Link
                className="button buttonPrimary buttonCompact"
                href={getPublicPath(locale, "booking" as Section)}
              >
                {dictionary.actions.bookNow}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
