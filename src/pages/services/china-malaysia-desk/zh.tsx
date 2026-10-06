import { SEO } from "@/components/common/SEO";
import { Layout } from "@/components/layout/Layout";
import { ServiceDetailTemplate } from "@/components/services/ServiceDetailTemplate";
import { chinaDeskZh } from "@/data/chinaDeskZh";

export default function ChinaDeskZhPage() {
  return (
    <Layout>
      <SEO
        title={chinaDeskZh.seoTitle}
        description={chinaDeskZh.seoDescription}
        alternates={chinaDeskZh.languages}
      />
      <ServiceDetailTemplate service={chinaDeskZh} lang="zh" />
    </Layout>
  );
}
