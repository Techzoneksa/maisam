import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getPublicPath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { getFooterNavigation } from "@/lib/navigation";
import { LanguageToggle } from "./LanguageToggle";

type HeaderProps = {
  dictionary: Dictionary;
  locale: Locale;
};

export function Header({ dictionary, locale }: HeaderProps) {
  const desktopLinks = getFooterNavigation(locale, dictionary);

  return (
    <header className="siteHeader">
      <div className="shell headerShell">
        <Link
          aria-label={dictionary.brand.fullName}
          className="brandLink"
          href={getPublicPath(locale)}
        >
          <Image
            alt={dictionary.brand.fullName}
            className="brandLogo"
            height={56}
            priority
            src="/logo.webp"
            width={56}
          />
          <span className="brandText">
            <span className="brandName">{dictionary.brand.shortName}</span>
            <span className="brandSubName">{dictionary.brand.englishName}</span>
          </span>
        </Link>

        <nav aria-label={dictionary.footer.quickLinks} className="desktopNav">
          {desktopLinks.map((item) => (
            <Link href={item.href} key={item.key}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="headerActions">
          <LanguageToggle
            ariaLabel={dictionary.actions.switchLanguage}
            locale={locale}
          />
          <Link
            className="button buttonPrimary buttonCompact"
            href={getPublicPath(locale, "booking")}
          >
            {dictionary.actions.bookNow}
          </Link>
        </div>
      </div>
    </header>
  );
}
