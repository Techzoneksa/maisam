import type { ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { BottomNavigation } from "./BottomNavigation";
import { Footer } from "./Footer";
import { Header } from "./Header";

type AppShellProps = {
  children: ReactNode;
  dictionary: Dictionary;
  locale: Locale;
};

export function AppShell({ children, dictionary, locale }: AppShellProps) {
  return (
    <>
      <Header dictionary={dictionary} locale={locale} />
      <main className="appMain">{children}</main>
      <Footer dictionary={dictionary} locale={locale} />
      <BottomNavigation dictionary={dictionary} locale={locale} />
    </>
  );
}
