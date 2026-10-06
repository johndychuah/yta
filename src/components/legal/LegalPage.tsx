import Link from "next/link";
import type { ReactNode } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/common/SEO";

export type LegalSection = { id: string; title: string; paragraphs: string[] };

export function LegalPage({ title, intro, sections, language = "en", languageLink, children }: {
  title: string;
  intro: string;
  sections: LegalSection[];
  language?: "en" | "ms";
  languageLink?: { href: string; label: string };
  children?: ReactNode;
}) {
  const malay = language === "ms";
  return (
    <Layout>
      <SEO title={title} description={intro} />
      <article lang={language}>
        <header className="bg-[#091c2f] px-6 py-16 text-white sm:py-20">
          <div className="mx-auto max-w-[1180px]">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ffad50]">YT Associates · Peter Tang &amp; Associates</p>
            <h1 className="mt-5 text-[clamp(2.25rem,5vw,4rem)] font-medium leading-tight">{title}</h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-white/80 sm:text-lg">{intro}</p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <p>{malay ? "Dikemas kini" : "Last updated"}: <time dateTime="2026-10-07">{malay ? "7 Oktober 2026" : "7 October 2026"}</time></p>
              {languageLink ? <Link href={languageLink.href} className="inline-flex min-h-11 items-center font-bold text-[#ffad50] underline underline-offset-4">{languageLink.label} ↗</Link> : null}
            </div>
          </div>
        </header>
        <div className="mx-auto grid max-w-[1228px] gap-12 px-6 py-14 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16 lg:py-20">
          <aside>
            <nav aria-label={malay ? "Kandungan polisi" : "Policy contents"} className="rounded-xl bg-[#f3f3f3] p-6 lg:sticky lg:top-28">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[#596575]">{malay ? "Pada halaman ini" : "On this page"}</p>
              <ol className="space-y-1">
                {sections.map((section, index) => <li key={section.id}><a href={`#${section.id}`} className="flex min-h-11 gap-3 py-2 text-sm leading-6 text-[#03101c] hover:underline"><span className="text-[#8b6333]">{String(index + 1).padStart(2, "0")}</span><span>{section.title}</span></a></li>)}
              </ol>
            </nav>
          </aside>
          <div className="min-w-0">
            <div className="space-y-10">
              {sections.map((section, index) => <section key={section.id} id={section.id} className="scroll-mt-28 border-b border-[#03101c]/10 pb-10">
                <h2 className="text-xl font-bold leading-snug text-[#03101c] sm:text-2xl"><span className="mr-3 text-[#a27138]">{String(index + 1).padStart(2, "0")}</span>{section.title}</h2>
                <div className="mt-5 space-y-4 text-base leading-8 text-[#3c3d4b]">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              </section>)}
            </div>
            {children}
            <div className="mt-10 rounded-xl bg-[#f3f3f3] p-6 sm:p-8">
              <h2 className="text-xl font-bold text-[#03101c]">{malay ? "Hubungi kami" : "Questions or requests?"}</h2>
              <p className="mt-3 leading-7 text-[#3c3d4b]">{malay ? "Untuk pertanyaan privasi, nyatakan ‘Privasi’ dalam tajuk e-mel anda." : "For privacy requests, include ‘Privacy’ in your email subject."}</p>
              <a href="mailto:info@yta.com.my" className="mt-3 inline-flex min-h-11 items-center font-bold text-[#1f5f9e] underline underline-offset-4">info@yta.com.my</a>
              <p className="mt-2 leading-7 text-[#3c3d4b]">SO-11-5 Menara 1, KL Eco City, 3 Jalan Bangsar, 59200 Kuala Lumpur, Malaysia</p>
              <a href="tel:+60327284819" className="inline-flex min-h-11 items-center text-[#1f5f9e] underline underline-offset-4">+603 2728 4819</a>
            </div>
            <nav aria-label="Related policies" className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-[#1f5f9e]">
              <Link className="inline-flex min-h-11 items-center hover:underline" href="/privacy-policy">Privacy Policy</Link>
              <Link className="inline-flex min-h-11 items-center hover:underline" href="/terms-and-conditions">Terms &amp; Conditions</Link>
              <Link className="inline-flex min-h-11 items-center hover:underline" href="/cookie-policy">Cookie Policy</Link>
            </nav>
          </div>
        </div>
      </article>
    </Layout>
  );
}
