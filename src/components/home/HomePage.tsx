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
import { HeroSlider } from "@/components/HeroSlider";

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
      <HeroSlider dictionary={dictionary} locale={locale} />

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
          <div className="homeServiceGrid">
            {dictionary.home.services.items.map((service) => (
              <article className="homeServiceCard" key={service.title}>
                <div className="homeServiceImageWrap">
                  <Image
                    alt={service.title}
                    src={service.image}
                    fill
                    className="homeServiceImage"
                    sizes="(max-width: 680px) 100vw, 25vw"
                  />
                </div>
                <div className="homeServiceBody">
                  <span className="badge badgeTurquoise">{service.badge}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  {service.price && (
                    <div className="homeServiceFooter">
                      <span className="servicePriceHome">{service.price} {locale === "ar" ? "ر.س" : "SAR"}</span>
                      <Link
                        className="button buttonPrimary buttonCompact"
                        href={getPublicPath(locale, "services")}
                      >
                        {dictionary.actions.details}
                      </Link>
                    </div>
                  )}
                </div>
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
        <div className="shell">
          <SectionHeader
            subtitle={dictionary.home.offers.subtitle}
            title={dictionary.home.offers.title}
          />
          <Link href={getPublicPath(locale, "offers")} className="homeOfferBanner">
            <div className="homeOfferBannerImageWrap">
              <Image
                alt={dictionary.home.offers.title}
                src={dictionary.home.offers.image}
                fill
                className="homeOfferBannerImage"
                sizes="100vw"
              />
            </div>
            <div className="homeOfferBannerOverlay" />
            <div className="homeOfferBannerContent">
              <h3>{dictionary.home.offers.title}</h3>
              <span className="button buttonPrimary buttonCompact">{dictionary.actions.bookNow}</span>
            </div>
          </Link>
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

      <section className="pageBand pageBandSoft">
        <div className="shell">
          <SectionHeader
            subtitle={dictionary.home.doctors.subtitle}
            title={dictionary.home.doctors.title}
          />
          <div className="homeDoctorGrid">
            {dictionary.home.doctors.items.slice(0, 4).map((doctor) => (
              <article className="homeDoctorCard" key={doctor.name}>
                <div className="homeDoctorImageWrap">
                  <Image
                    alt={doctor.name}
                    src={doctor.image}
                    fill
                    className="homeDoctorImage"
                    sizes="(max-width: 680px) 50vw, 25vw"
                  />
                  <span
                    className={`homeDoctorBadge ${doctor.available ? "available" : "unavailable"}`}
                  >
                    {doctor.available ? dictionary.badges.today : dictionary.badges.soon}
                  </span>
                </div>
                <div className="homeDoctorBody">
                  <h3>{doctor.name}</h3>
                  <p>{doctor.specialty}</p>
                  <Link
                    className="button buttonPrimary buttonCompact"
                    href={getPublicPath(locale, "booking")}
                  >
                    {dictionary.actions.bookAppointment}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pageBand">
        <div className="shell paymentShell">
          <SectionHeader
            subtitle={dictionary.home.payment.subtitle}
            title={dictionary.home.payment.title}
          />
          <div className="paymentOptions">
            <div className="paymentBannerCard">
              <div className="paymentBannerImageWrap">
                <Image
                  alt={dictionary.home.paymentBanner.title}
                  src={dictionary.home.paymentBanner.image}
                  fill
                  className="paymentBannerImage"
                  sizes="(max-width: 680px) 100vw, 50vw"
                />
              </div>
              <div className="paymentBannerContent">
                <h3>{dictionary.home.paymentBanner.title}</h3>
                <p>{dictionary.home.paymentBanner.subtitle}</p>
                <Link
                  className="button buttonPrimary buttonCompact"
                  href={getPublicPath(locale, "booking")}
                >
                  {dictionary.home.paymentBanner.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pageBand pageBandSoft">
        <div className="shell">
          <SectionHeader
            subtitle={dictionary.home.branches.subtitle}
            title={dictionary.home.branches.title}
          />
          <div className="homeBranchGrid">
            {dictionary.home.branches.items.map((branch) => (
              <article className="homeBranchCard" key={branch.name}>
                <div className="homeBranchImageWrap">
                  <Image
                    alt={branch.name}
                    src={branch.image}
                    fill
                    className="homeBranchImage"
                    sizes="(max-width: 680px) 100vw, 50vw"
                  />
                </div>
                <div className="homeBranchBody">
                  <h3>{branch.name}</h3>
                  <p>{branch.description}</p>
                  <Link
                    className="button buttonSecondary buttonCompact"
                    href={getPublicPath(locale, "branches")}
                  >
                    {dictionary.actions.directions}
                  </Link>
                </div>
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
