import type { GetStaticPaths, GetStaticProps } from "next";
import { SEO } from "@/components/common/SEO";
import { Layout } from "@/components/layout/Layout";
import { ServiceDetailTemplate } from "@/components/services/ServiceDetailTemplate";
import {
  serviceDetails,
  serviceNavItems,
  type ServiceDetail,
  type ServiceSlug,
} from "@/data/serviceDetails";

type ServiceDetailPageProps = {
  service: ServiceDetail;
};

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  return (
    <Layout>
      <SEO
        title={service.seoTitle}
        description={service.seoDescription}
      />
      <ServiceDetailTemplate service={service} />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: serviceNavItems.map((item) => ({
    params: { slug: item.slug },
  })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<ServiceDetailPageProps> = ({
  params,
}) => {
  const slug = params?.slug;

  if (typeof slug !== "string" || !(slug in serviceDetails)) {
    return { notFound: true };
  }

  return {
    props: {
      service: serviceDetails[slug as ServiceSlug],
    },
  };
};
