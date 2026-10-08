import { useTranslation } from "@/i18n/Locale";
import { SEO } from "@/components/common/SEO";
import { Layout } from "@/components/layout/Layout";
import { ServicesHeroSection } from "@/components/services/ServicesHeroSection";
import { ServicesOverviewSection } from "@/components/services/ServicesOverviewSection";
import { AboutCtaSection } from "@/components/about/AboutCtaSection";

export default function ServicesPage() {
  const { t } = useTranslation();
  return (
    <Layout>
      <SEO
        title={t("Audit, Advisory & Restructuring Services")}
        description={t("Partner-led audit and assurance, IPO and M&A advisory, restructuring and insolvency, tax, a China-Malaysia Desk, and accounting and payroll outsourcing for Malaysian businesses.")}
      />
      <ServicesHeroSection />
      <ServicesOverviewSection />
      <AboutCtaSection />
    </Layout>
  );
}
