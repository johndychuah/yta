import { useTranslation } from "@/i18n/Locale";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/common/SEO";
import { CareerSection } from "@/components/contact/CareerSection";

export default function CareerPage() {
  const { t } = useTranslation();
  return (
    <Layout>
      <SEO title={t("Careers in Audit & Advisory")} description={t("Develop your career in audit, tax, accounting and advisory with YT Associates in Kuala Lumpur. Contact our team with your resume.")} />
      <CareerSection standalone />
    </Layout>
  );
}
