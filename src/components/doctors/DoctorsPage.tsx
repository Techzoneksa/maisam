import {
  CalendarDays,
  Stethoscope,
} from "lucide-react";
import type { Locale, Section } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type DoctorsPageProps = {
  dictionary: Dictionary;
  locale: Locale;
  section: Section;
};

function getInitials(name: string): string {
  return name
    .split(/[\s.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0] || "")
    .join("");
}

export function DoctorsPage({ dictionary }: DoctorsPageProps) {
  const { pageContent } = dictionary;
  const content = pageContent.doctors;

  return (
    <section className="pageBand">
      <div className="shell">
        <div className="sectionHeader">
          <h1>{content.header}</h1>
          <p>{content.subheader}</p>
        </div>

        <div className="cardsGrid twoColumns">
          {content.items.map((doctor) => (
            <article className="doctorCard" key={doctor.name}>
              <div className="doctorAvatarInit" aria-hidden="true">
                {getInitials(doctor.name)}
              </div>
              <div className="doctorInfo">
                <h3>{doctor.name}</h3>
                <span className="doctorSpecialty">
                  <Stethoscope size={14} strokeWidth={2} />
                  {doctor.specialty}
                </span>
                <p>{doctor.description}</p>
                <div className="doctorAvailability">
                  <CalendarDays size={14} strokeWidth={2} />
                  {doctor.availability}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
