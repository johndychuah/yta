import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/common/SEO";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesAccordionSection } from "@/components/home/ServicesAccordionSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { HomeCtaSection } from "@/components/home/HomeCtaSection";

export default function HomePage() {
  return (
    <Layout>
      <SEO
        title="YTA"
        description="Audit, corporate advisory, restructuring, accounting, and payroll support for Malaysian SMEs and business owners."
      />
      <HeroSection />
      <ServicesAccordionSection />
      <WhyChooseUsSection />
      <HomeCtaSection />
    </Layout>
  );
}
