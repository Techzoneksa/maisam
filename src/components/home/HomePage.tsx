import Image from "next/image";
import Link from "next/link";
import {
  BadgePercent,
  CalendarPlus,
  MapPin,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import type { Locale, Section } from "@/i18n/config";
import { getPublicPath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type HomePageProps = {
  dictionary: Dictionary;
  locale: Locale;
};

function SectionHeader({
  subtitle,
  title,
}: {
  subtitle: string;
  title: string;
}) {
  return (
    <div className="sectionHeader">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

export function HomePage({ dictionary, locale }: HomePageProps) {
  return (
    <>
      <section className="heroSection">
        <div className="shell heroShell">
          <div className="heroCopy">
            <p className="eyebrow">{dictionary.home.hero.eyebrow}</p>
            <h1>{dictionary.home.hero.title}</h1>
            <p className="heroSubtitle">{dictionary.home.hero.subtitle}</p>
            <div className="heroActions">
              <Link className="button buttonPrimary" href={getPublicPath(locale, "booking")}>
                {dictionary.actions.bookAppointment}
              </Link>
              <Link className="button buttonSecondary" href={getPublicPath(locale, "services")}>
                {dictionary.actions.exploreServices}
              </Link>
            </div>
          </div>
          <div className="heroVisual" aria-hidden="true">
            <Image
              alt=""
              className="heroLogo"
              height={180}
              priority
              src="/logo.webp"
              width={180}
            />
            <div className="heroSignal">
              <span>{dictionary.badges.available}</span>
              <strong>{dictionary.badges.onlinePayment}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="quickActionsSection">
        <div className="shell">
          <h2 className="compactTitle">{dictionary.home.quickActions.title}</h2>
          <div className="quickActionsGrid">
            {dictionary.home.quickActions.items.map((item) => {
              const iconMap: Record<string, LucideIcon> = {
                booking: CalendarPlus,
                services: Stethoscope,
                offers: BadgePercent,
                branches: MapPin,
              };
              const Icon = iconMap[item.route] || Stethoscope;

              return (
                <Link
                  className="quickAction"
                  href={getPublicPath(locale, item.route as Section)}
                  key={item.route}
                >
                  <Icon aria-hidden="true" className="quickActionIcon" size={22} strokeWidth={1.8} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pageBand">
        <div className="shell">
          <SectionHeader
            subtitle={dictionary.home.services.subtitle}
            title={dictionary.home.services.title}
          />
          <div className="cardsGrid">
            {dictionary.home.services.items.map((service) => (
              <article className="infoCard" key={service.title}>
                <span className="badge badgeTurquoise">{service.badge}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pageBand pageBandSoft">
        <div className="shell splitSection">
          <div>
            <SectionHeader
              subtitle={dictionary.home.booking.subtitle}
              title={dictionary.home.booking.title}
            />
          </div>
          <ol className="stepsList">
            {dictionary.home.booking.steps.map((step, index) => (
              <li key={step}>
                <span>{index + 1}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="pageBand">
        <div className="shell paymentShell">
          <SectionHeader
            subtitle={dictionary.home.payment.subtitle}
            title={dictionary.home.payment.title}
          />
          <div className="paymentOptions">
            {dictionary.home.payment.items.map((item, index) => (
              <article className="paymentCard" key={item}>
                <span className={index === 0 ? "paymentIcon online" : "paymentIcon clinic"} />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pageBand pageBandSoft">
        <div className="shell">
          <SectionHeader
            subtitle={dictionary.home.offers.subtitle}
            title={dictionary.home.offers.title}
          />
          <div className="cardsGrid twoColumns">
            {dictionary.home.offers.items.map((offer) => (
              <article className="infoCard offerCard" key={offer.title}>
                <span className="badge badgePink">{dictionary.badges.offer}</span>
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pageBand">
        <div className="shell">
          <SectionHeader
            subtitle={dictionary.home.doctors.subtitle}
            title={dictionary.home.doctors.title}
          />
          <div className="cardsGrid twoColumns">
            {dictionary.home.doctors.items.map((doctor) => (
              <article className="doctorCard" key={doctor.name}>
                <span className="doctorAvatar" aria-hidden="true" />
                <div>
                  <h3>{doctor.name}</h3>
                  <p>{doctor.specialty}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pageBand pageBandSoft">
        <div className="shell">
          <SectionHeader
            subtitle={dictionary.home.branches.subtitle}
            title={dictionary.home.branches.title}
          />
          <div className="cardsGrid twoColumns">
            {dictionary.home.branches.items.map((branch) => (
              <article className="infoCard" key={branch.name}>
                <span className="badge badgeTurquoise">{dictionary.badges.soon}</span>
                <h3>{branch.name}</h3>
                <p>{branch.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div className="shell finalCtaShell">
          <div>
            <h2>{dictionary.home.finalCta.title}</h2>
            <p>{dictionary.home.finalCta.subtitle}</p>
          </div>
          <Link className="button buttonPrimary" href={getPublicPath(locale, "booking")}>
            {dictionary.actions.bookAppointment}
          </Link>
        </div>
      </section>
    </>
  );
}
