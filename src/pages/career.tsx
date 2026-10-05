import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/common/SEO";
import { CareerSection } from "@/components/contact/CareerSection";

export default function CareerPage() {
  return (
    <Layout>
      <SEO title="Careers in Audit & Advisory" description="Develop your career in audit, tax, accounting and advisory with YT Associates in Kuala Lumpur. Contact our team with your resume." />
      <CareerSection standalone />
    </Layout>
  );
}
