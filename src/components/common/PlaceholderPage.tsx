import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/common/SEO";

type PlaceholderPageProps = {
  title: string;
  description: string;
};

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <Layout>
      <SEO title={title} description={description} />
      <section className="mx-auto flex min-h-[60vh] max-w-5xl flex-col justify-center px-[clamp(1.5rem,5vw,4rem)] py-20">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#091c2f]">
          Coming soon
        </p>
        <h1 className="mt-4 text-[clamp(2.25rem,5vw,4.75rem)] font-medium leading-tight text-[#03101c]">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-[clamp(1rem,1.35vw,1.25rem)] leading-7 text-[#3c3d4b]">
          {description}
        </p>
      </section>
    </Layout>
  );
}
