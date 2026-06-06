import {
  Clock,
  MapPin,
  Phone,
} from "lucide-react";
import type { Locale, Section } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type BranchesPageProps = {
  dictionary: Dictionary;
  locale: Locale;
  section: Section;
};

export function BranchesPage({ dictionary }: BranchesPageProps) {
  const { pageContent } = dictionary;
  const content = pageContent.branches;

  return (
    <section className="pageBand">
      <div className="shell">
        <div className="sectionHeader">
          <h1>{content.header}</h1>
          <p>{content.subheader}</p>
        </div>

        <div className="cardsGrid twoColumns">
          {content.items.map((branch) => (
            <article className="infoCard branchCard" key={branch.name}>
              <h3>{branch.name}</h3>
              <div className="branchDetail">
                <MapPin size={16} strokeWidth={1.8} />
                <span>{branch.address}</span>
              </div>
              <div className="branchDetail">
                <Phone size={16} strokeWidth={1.8} />
                <span dir="ltr">{branch.phone}</span>
              </div>
              <div className="branchDetail">
                <Clock size={16} strokeWidth={1.8} />
                <span>{branch.hours}</span>
              </div>
              {branch.features.length > 0 && (
                <div className="branchFeatures">
                  {branch.features.map((feature) => (
                    <span className="badge badgeTurquoise" key={feature}>
                      {feature}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
