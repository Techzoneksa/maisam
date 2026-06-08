import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  MapPin,
  Stethoscope,
} from "lucide-react";
import type { Locale, Section } from "@/i18n/config";
import { getPublicPath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type DoctorsPageProps = {
  dictionary: Dictionary;
  locale: Locale;
  section: Section;
};

export function DoctorsPage({ dictionary, locale }: DoctorsPageProps) {
  const { pageContent } = dictionary;
  const content = pageContent.doctors;

  return (
    <section className="pageBand">
      <div className="shell">
        <div className="sectionHeader">
          <h1>{content.header}</h1>
          <p>{content.subheader}</p>
        </div>

        <div className="doctorCardsGridNew">
          {content.items.map((doctor) => (
            <article className="doctorCardNew" key={doctor.name}>
              <div className="doctorCardImgWrap">
                <Image
                  alt={doctor.name}
                  src={doctor.image}
                  fill
                  className="doctorCardImg"
                  sizes="(max-width: 680px) 100vw, 33vw"
                />
                <span
                  className={`doctorAvailabilityBadge ${doctor.available ? "available" : "unavailable"}`}
                >
                  {doctor.available
                    ? dictionary.badges.today
                    : dictionary.badges.soon}
                </span>
              </div>
              <div className="doctorCardBodyNew">
                <h3>{doctor.name}</h3>
                <span className="doctorSpecialty">
                  <Stethoscope size={14} strokeWidth={2} />
                  {doctor.specialty}
                </span>
                <p>{doctor.description}</p>
                <div className="doctorMetaInfo">
                  {doctor.branch && (
                    <span>
                      <MapPin size={14} strokeWidth={1.8} />
                      {doctor.branch}
                    </span>
                  )}
                  {doctor.experience && (
                    <span>
                      <CalendarDays size={14} strokeWidth={1.8} />
                      {doctor.experience}
                    </span>
                  )}
                </div>
                <Link
                  className="button buttonPrimary buttonCompact"
                  href={getPublicPath(locale, "booking" as Section)}
                >
                  {dictionary.actions.bookAppointment}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
