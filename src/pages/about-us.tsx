import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/common/SEO";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { AboutStatsHighlightsSection } from "@/components/about/AboutStatsHighlightsSection";
import { AboutStorySection } from "@/components/about/AboutStorySection";
import { AboutValuesSection } from "@/components/about/AboutValuesSection";
import { AboutExpertsSection } from "@/components/about/AboutExpertsSection";
import { AboutWhoWeServeSection } from "@/components/about/AboutWhoWeServeSection";
import { AboutPrecisionSection } from "@/components/about/AboutPrecisionSection";
import { AboutCredentialsSection } from "@/components/about/AboutCredentialsSection";
import { AboutLocationSection } from "@/components/about/AboutLocationSection";
import { AboutInsightsSection } from "@/components/about/AboutInsightsSection";
import { AboutCtaSection } from "@/components/about/AboutCtaSection";

export default function AboutUsPage() {
  return (
    <Layout>
      <SEO
        title="About us"
        description="Learn about YT Associates and Peter Tang & Associates, serving Malaysian organisations with audit, accounting, corporate finance, restructuring, and advisory experience."
      />
      <AboutHeroSection />
      <AboutStatsHighlightsSection />
      <AboutStorySection />
      <AboutValuesSection />
      <AboutExpertsSection />
      <AboutCredentialsSection />
      <AboutWhoWeServeSection />
      <AboutPrecisionSection />
      <AboutLocationSection />
      <AboutInsightsSection />
      <AboutCtaSection />
    </Layout>
  );
}
