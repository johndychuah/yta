import { useTranslation } from "@/i18n/Locale";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/common/SEO";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { ServicesAccordionSection } from "@/components/home/ServicesAccordionSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { HomeCtaSection } from "@/components/home/HomeCtaSection";

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <Layout>
      <SEO
        title={t("Audit & Advisory Firm in Kuala Lumpur")}
        description={t("Partner-led audit, corporate advisory, restructuring, accounting, and payroll services for Malaysian businesses, from SMEs to Bursa-listed groups.")}
      />
      <HeroSection />
      <IntroSection />
      <ServicesAccordionSection />
      <WhyChooseUsSection />
      <FaqSection />
      <HomeCtaSection />
    </Layout>
  );
}
