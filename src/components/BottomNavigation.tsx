"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarDays,
  CalendarPlus,
  Home,
  Stethoscope,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { getPrimaryNavigation } from "@/lib/navigation";

type BottomNavigationProps = {
  dictionary: Dictionary;
  locale: Locale;
};

const iconMap: Record<string, LucideIcon> = {
  home: Home,
  services: Stethoscope,
  booking: CalendarPlus,
  appointments: CalendarDays,
  profile: UserRound,
};

function isActive(pathname: string, href: string): boolean {
  const normalize = (p: string) => p.replace(/^\/(en|ar)(?=\/|$)/, "") || "/";
  return normalize(pathname) === normalize(href);
}

export function BottomNavigation({ dictionary, locale }: BottomNavigationProps) {
  const pathname = usePathname();
  const items = getPrimaryNavigation(locale, dictionary);

  return (
    <nav aria-label={dictionary.nav.home} className="bottomNav">
      {items.map((item) => {
        const active = isActive(pathname, item.href);
        const Icon = iconMap[item.key];

        return (
          <Link
            className={`bottomNavItem${active ? " bottomNavItemActive" : ""}`}
            href={item.href}
            key={item.key}
          >
            <Icon
              aria-hidden="true"
              className="bottomNavIcon"
              size={22}
              strokeWidth={active ? 2.5 : 1.8}
            />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
