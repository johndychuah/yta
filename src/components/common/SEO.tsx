import Head from "next/head";

type SEOProps = {
  title: string;
  description?: string;
  /** Paths of the English and Simplified Chinese versions of this page. */
  alternates?: { en: string; zh: string };
};

export function SEO({ title, description, alternates }: SEOProps) {
  const pageTitle = title ? `${title} | YT Associates` : "YT Associates";

  return (
    <Head>
      <title>{pageTitle}</title>
      {description ? <meta name="description" content={description} /> : null}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {alternates ? (
        <>
          <link rel="alternate" hrefLang="en" href={alternates.en} />
          <link rel="alternate" hrefLang="zh-Hans" href={alternates.zh} />
          <link rel="alternate" hrefLang="x-default" href={alternates.en} />
        </>
      ) : null}
    </Head>
  );
}
