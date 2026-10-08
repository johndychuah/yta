import { useTranslation } from "@/i18n/Locale";
import Image from "next/image";
import { LocalisedLink as Link } from "@/i18n/Locale";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Our Services", href: "/services" },
  { label: "Professional Bodies", href: "/professional-bodies" },
  { label: "Career", href: "/career" },
  { label: "Contact us", href: "/contact" },
];

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-[#03101c]/10 bg-[#f8f9fb] px-[clamp(1.5rem,6vw,7.5rem)] pt-[clamp(4rem,6.25vw,7.5rem)] text-[#03101c]">
      <div className="mx-auto max-w-[1386px]">
        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-[1.4fr_0.7fr_1.1fr_1fr] xl:gap-10">
          <div>
            <h2 className="text-[clamp(1.6rem,1.55vw,1.875rem)] font-medium leading-[1.4] tracking-normal">{t("About YT Associates, Peter Tang & Associates")}</h2>
            <p className="mt-5 max-w-[24.25rem] text-[clamp(0.95rem,0.85vw,1rem)] leading-[1.58] tracking-[0.03em] text-[#3c3d4b]">{t("Audit, corporate advisory, restructuring, accounting, and payroll support for SMEs, family-owned businesses, and other organisations navigating reporting, transactions, and business change.")}</p>
          </div>

          <div>
            <h3 className="text-[clamp(1rem,0.96vw,1.15rem)] font-medium leading-7">{t("Quick links")}</h3>
            <nav aria-label={t("Footer navigation")} className="mt-5 grid grid-cols-2 gap-x-4 gap-y-1 sm:mt-8 sm:grid-cols-1 sm:gap-3">
              {t(quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex min-h-11 items-center text-[clamp(0.95rem,0.85vw,1rem)] leading-6 tracking-[0.03em] text-[#3c3d4b] transition hover:text-[#03101c]"
                >
                  {t(link.label)}
                </Link>
              )))}
            </nav>
          </div>

          <div>
            <h3 className="text-[clamp(1rem,0.96vw,1.15rem)] font-medium leading-7">{t("Get in touch")}</h3>
            <address className="mt-8 not-italic text-[clamp(0.95rem,0.85vw,1rem)] leading-[1.58] tracking-[0.03em] text-[#3c3d4b]">
              <p>{t("KL Eco City Office")}</p>
              <p>{t("SO-29-1 Menara 1, KL Eco City")}<br />{t("3 Jalan Bangsar")}<br />{t("59200 Kuala Lumpur, Malaysia")}</p>
              <p className="mt-5">{t("Phone:")}{t(" ")}
                <a href="tel:+60327284819" className="inline-flex min-h-11 items-center hover:text-[#03101c]">
                  +603 2728 4819
                </a>
                <br />{t("Email:")}{t(" ")}
                <a
                  href="mailto:info@yta.com.my"
                  className="inline-flex min-h-11 items-center underline underline-offset-2 hover:text-[#03101c]"
                >{t("info@yta.com.my")}</a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="text-[clamp(1rem,0.96vw,1.15rem)] font-medium leading-7">{t("Office Hours")}</h3>
            <div className="mt-8 text-[clamp(0.95rem,0.85vw,1rem)] leading-[1.58] tracking-[0.03em] text-[#3c3d4b]">
              <p>{t("Monday - Friday: 8:30 AM - 5:30 PM")}</p>
              <p>{t("Saturday - Sunday: Closed")}</p>
            </div>
          </div>
        </div>

        <div className="mt-[clamp(3rem,5vw,5rem)] flex flex-col gap-6 border-t border-[#0b1c18]/20 py-5 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-wrap items-center gap-6">
            <Image
              src="/yta-logo.png"
              alt={t("YT Associates")}
              width={128}
              height={74}
              className="h-auto w-[clamp(6rem,6.3vw,8rem)]"
            />
            <Image
              src="/peter-tang-associates-logo.png"
              alt={t("Peter Tang & Associates")}
              width={200}
              height={60}
              className="h-auto w-[clamp(9rem,9.85vw,12.5rem)]"
            />
          </div>

          <p className="text-[clamp(0.85rem,0.85vw,1rem)] leading-[1.58] tracking-[0.03em] text-[#3c3d4b]">
            © {t(new Date().getFullYear())}{t("YT Associates (AF1112), Peter Tang & Associates (AF1873)")}</p>


        </div>
        <div className="flex flex-col gap-4 py-5 text-sm text-[#596575] sm:flex-row sm:items-center sm:justify-between">
          <nav aria-label={t("Legal information")} className="flex flex-wrap gap-x-6 gap-y-1">
            <Link href="/privacy-policy" className="inline-flex min-h-11 items-center hover:underline">{t("Privacy Policy")}</Link>
            <Link href="/terms-and-conditions" className="inline-flex min-h-11 items-center hover:underline">{t("Terms & Conditions")}</Link>
            <Link href="/cookie-policy" className="inline-flex min-h-11 items-center hover:underline">{t("Cookie Policy")}</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
