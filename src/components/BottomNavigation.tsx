import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { getPrimaryNavigation } from "@/lib/navigation";

type BottomNavigationProps = {
  dictionary: Dictionary;
  locale: Locale;
};

export function BottomNavigation({ dictionary, locale }: BottomNavigationProps) {
  const items = getPrimaryNavigation(locale, dictionary);

  return (
    <nav aria-label={dictionary.nav.home} className="bottomNav">
      {items.map((item) => (
        <Link className="bottomNavItem" href={item.href} key={item.key}>
          <span
            aria-hidden="true"
            className={`bottomNavIcon bottomNavIcon-${item.key}`}
          />
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
