import Head from "next/head";

type SEOProps = {
  title: string;
  description?: string;
};

export function SEO({ title, description }: SEOProps) {
  const pageTitle = title ? `${title} | YT Associates` : "YT Associates";

  return (
    <Head>
      <title>{pageTitle}</title>
      {description ? <meta name="description" content={description} /> : null}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}
