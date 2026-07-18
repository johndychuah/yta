import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/common/SEO";

export default function HomePage() {
  return (
    <Layout>
      <SEO
        title="YTA"
        description="Website framework prepared for the YTA design."
      />
      <section className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wide text-neutral-500">
            Website framework
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-neutral-950 sm:text-5xl">
            Ready for design
          </h1>
          <p className="mt-5 text-base leading-7 text-neutral-600">
            The Next.js Pages Router foundation is in place. We can now build
            the visual design section by section.
          </p>
        </div>
      </section>
    </Layout>
  );
}
