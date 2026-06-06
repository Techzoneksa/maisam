import Link from "next/link";
import type { Locale, Section } from "@/i18n/config";
import { getPublicPath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type PagePlaceholderProps = {
  dictionary: Dictionary;
  locale: Locale;
  section: Section;
};

export function PagePlaceholder({
  dictionary,
  locale,
  section,
}: PagePlaceholderProps) {
  const page = dictionary.pages[section];

  return (
    <section className="placeholderPage">
      <div className="shell placeholderShell">
        <span className="badge badgeTurquoise">{page.status}</span>
        <h1>{page.title}</h1>
        <p>{page.description}</p>
        <div className="placeholderPanel">
          <div className="placeholderLine wide" />
          <div className="placeholderLine" />
          <div className="placeholderLine short" />
        </div>
        <Link className="button buttonSecondary" href={getPublicPath(locale)}>
          {dictionary.actions.backHome}
        </Link>
      </div>
    </section>
  );
}
