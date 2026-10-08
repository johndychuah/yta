import { useTranslation } from "@/i18n/Locale";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/common/SEO";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { AboutStatsHighlightsSection } from "@/components/about/AboutStatsHighlightsSection";
import { AboutStorySection } from "@/components/about/AboutStorySection";
import { AboutMilestonesSection } from "@/components/about/AboutMilestonesSection";
import { AboutValuesSection } from "@/components/about/AboutValuesSection";
import { AboutExpertsSection } from "@/components/about/AboutExpertsSection";
import { AboutWhoWeServeSection } from "@/components/about/AboutWhoWeServeSection";
import { AboutPrecisionSection } from "@/components/about/AboutPrecisionSection";
import { AboutCredentialsSection } from "@/components/about/AboutCredentialsSection";
import { AboutLocationSection } from "@/components/about/AboutLocationSection";
import { AboutInsightsSection } from "@/components/about/AboutInsightsSection";
import { AboutCtaSection } from "@/components/about/AboutCtaSection";

export default function AboutUsPage() {
  const { t } = useTranslation();
  return (
    <Layout>
      <SEO
        title={t("About us")}
        description={t("Founded in 1992, YT Associates and Peter Tang & Associates combine Big Four-trained leadership with personal attention, serving Malaysian businesses from KL Eco City.")}
      />
      <AboutHeroSection />
      <AboutStatsHighlightsSection />
      <AboutStorySection />
      <AboutMilestonesSection />
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
