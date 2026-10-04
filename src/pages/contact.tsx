import { SEO } from "@/components/common/SEO";
import { ContactPageContent } from "@/components/contact/ContactPageContent";
import { Layout } from "@/components/layout/Layout";

export default function ContactPage() {
  return (
    <Layout>
      <SEO
        title="Contact us"
        description="Contact YT Associates and Peter Tang & Associates about audit, corporate advisory, restructuring, accounting, payroll, or career opportunities in Kuala Lumpur."
      />
      <ContactPageContent />
    </Layout>
  );
}
