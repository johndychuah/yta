import { SEO } from "@/components/common/SEO";
import { Layout } from "@/components/layout/Layout";
import { ProfessionalBodiesPageContent } from "@/components/professional-bodies/ProfessionalBodiesPageContent";

export default function ProfessionalBodiesPage() {
  return (
    <Layout>
      <SEO
        title="Professional Bodies"
        description="Useful professional, tax, and Malaysian government organisation links for accounting, audit, and advisory reference."
      />
      <ProfessionalBodiesPageContent />
    </Layout>
  );
}
