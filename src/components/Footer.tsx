import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getPublicPath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { getFooterNavigation } from "@/lib/navigation";

type FooterProps = {
  dictionary: Dictionary;
  locale: Locale;
};

export function Footer({ dictionary, locale }: FooterProps) {
  const links = getFooterNavigation(locale, dictionary);
  const year = new Date().getFullYear();

  return (
    <footer className="siteFooter">
      <div className="shell footerShell">
        <div>
          <Link className="footerBrand" href={getPublicPath(locale)}>
            {dictionary.brand.fullName}
          </Link>
          <p>{dictionary.footer.tagline}</p>
        </div>
        <div className="footerLinksBlock">
          <h2>{dictionary.footer.quickLinks}</h2>
          <div className="footerLinks">
            {links.map((link) => (
              <Link href={link.href} key={link.key}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <p className="footerRights">
          {dictionary.footer.rights} © {year}
        </p>
      </div>
    </footer>
  );
}
