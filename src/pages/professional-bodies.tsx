import { SEO } from "@/components/common/SEO";
import { Layout } from "@/components/layout/Layout";
import { ProfessionalBodiesPageContent } from "@/components/professional-bodies/ProfessionalBodiesPageContent";

export default function ProfessionalBodiesPage() {
  return (
    <Layout>
      <SEO
        title="Professional Bodies"
        description="Useful professional body links for accounting, taxation, audit, and assurance standards."
      />
      <ProfessionalBodiesPageContent />
    </Layout>
  );
}
