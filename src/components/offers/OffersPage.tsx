import Image from "next/image";
import Link from "next/link";
import {
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

        <div className="offersGridNew">
          {content.items.map((offer) => (
            <article className="offerCardNew" key={offer.title}>
              <div className="offerCardImgWrap">
                <Image
                  alt={offer.title}
                  src={offer.image}
                  fill
                  className="offerCardImg"
                  sizes="(max-width: 680px) 100vw, 50vw"
                />
                <span className="offerDiscountTag">
                  {dictionary.actions.discount} {offer.discount}
                </span>
              </div>
              <div className="offerCardBodyNew">
                <div className="offerCardHead">
                  <span className="badge badgePink">{offer.badge}</span>
                </div>
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
                {offer.priceBefore && offer.priceAfter && (
                  <div className="offerPricingRow">
                    <span className="offerPriceOld">{offer.priceBefore}</span>
                    <span className="offerPriceNew">{offer.priceAfter}</span>
                  </div>
                )}
                <div className="offerMetaRow">
                  <CalendarCheck size={14} strokeWidth={2} />
                  <span>{offer.validity}</span>
                </div>
                <Link
                  className="button buttonPrimary buttonCompact"
                  href={getPublicPath(locale, "booking" as Section)}
                >
                  {dictionary.actions.bookNow}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
