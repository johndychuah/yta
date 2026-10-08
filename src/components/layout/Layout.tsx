import { useTranslation } from "@/i18n/Locale";
import type { PropsWithChildren } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export function Layout({ children }: PropsWithChildren) {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-white text-neutral-950">
      <a href="#main-content" className="sr-only fixed left-4 top-4 z-50 rounded-lg bg-[#091c2f] px-5 py-3 font-semibold text-white focus:not-sr-only">{t("Skip to content")}</a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>{t(children)}</main>
      <Footer />
    </div>
  );
}
