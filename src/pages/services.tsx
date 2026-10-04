import { SEO } from "@/components/common/SEO";
import { Layout } from "@/components/layout/Layout";
import { ServicesHeroSection } from "@/components/services/ServicesHeroSection";
import { ServicesOverviewSection } from "@/components/services/ServicesOverviewSection";

export default function ServicesPage() {
  return (
    <Layout>
      <SEO
        title="Our Services"
        description="Explore audit, corporate advisory, restructuring, accounting, and payroll services from YT Associates and Peter Tang & Associates."
      />
      <ServicesHeroSection />
      <ServicesOverviewSection />
    </Layout>
  );
}
