import { useTranslation } from "@/i18n/Locale";
import { SEO } from "@/components/common/SEO";
import { Layout } from "@/components/layout/Layout";
import { ProfessionalBodiesPageContent } from "@/components/professional-bodies/ProfessionalBodiesPageContent";

export default function ProfessionalBodiesPage() {
  const { t } = useTranslation();
  return (
    <Layout>
      <SEO
        title={t("Professional Bodies")}
        description={t("Useful professional body links for accounting, taxation, audit, and assurance standards.")}
      />
      <ProfessionalBodiesPageContent />
    </Layout>
  );
}
