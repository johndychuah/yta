import Image from "next/image";
import Link from "next/link";
import { AboutCtaSection } from "@/components/about/AboutCtaSection";
import {
  serviceNavItems,
  type ServiceContentBlock,
  type ServiceDetail,
} from "@/data/serviceDetails";

export type Lang = "en" | "zh";

const ui = {
  en: {
    home: "Home",
    services: "Our services",
    guideEyebrow: "A practical guide for business owners",
    guideHeading: "Is this the right support for your business?",
    situations: "This service may be relevant when",
    scope: "The engagement can cover",
    guideNote:
      "The right scope depends on your business and what you need it for. Talk to us and we will recommend an approach before any work begins.",
    contact: "Contact us",
    ctaTitle: undefined,
    ctaButton: undefined,
  },
  zh: {
    home: "首页",
    services: "我们的服务",
    guideEyebrow: "企业主实用指南",
    guideHeading: "这项服务适合您的企业吗？",
    situations: "以下情况可能适合您",
    scope: "服务范围可包括",
    guideNote:
      "具体服务范围取决于您的业务及需求。欢迎与我们联系，我们会在开始工作前为您建议合适的方案。",
    contact: "联系我们",
    ctaTitle: "正在寻找值得信赖的审计与咨询伙伴？欢迎与我们的团队联系",
    ctaButton: "预约咨询",
  },
};

const zhNavTitles: Record<string, string> = {
  "audit-assurance": "审计与鉴证",
  "corporate-advisory": "企业咨询",
  "restructuring-advisory": "重组与破产",
  "tax-advisory": "税务咨询与合规",
  "china-malaysia-desk": "中马业务部",
  "accounting-payroll-outsourcing": "会计与薪资外包",
};

function LanguageToggle({
  lang,
  languages,
}: {
  lang: Lang;
  languages: { en: string; zh: string };
}) {
  const options = [
    { lang: "en" as const, label: "English", href: languages.en, hrefLang: "en" },
    { lang: "zh" as const, label: "简体中文", href: languages.zh, hrefLang: "zh-Hans" },
  ];

  return (
    <div
      role="group"
      aria-label={lang === "zh" ? "选择语言" : "Choose language"}
      className="inline-flex rounded-full border border-white/30 bg-white/10 p-1 text-[0.85rem] font-semibold backdrop-blur"
    >
      {options.map((option) => {
        const active = option.lang === lang;
        return (
          <Link
            key={option.lang}
            href={option.href}
            hrefLang={option.hrefLang}
            lang={option.hrefLang}
            aria-current={active ? "page" : undefined}
            className={`inline-flex min-h-9 items-center rounded-full px-4 transition ${
              active
                ? "bg-[#ffad50] text-[#03101c]"
                : "text-white/85 hover:text-white"
            }`}
          >
            {option.label}
          </Link>
        );
      })}
    </div>
  );
}

const industries = [
  "Trading, Retail & Distribution",
  "Manufacturing & Construction",
  "Healthcare & Hospitality",
  "Logistic & Transportation",
  "Technology, Media & Communication",
  "Family Business",
  "Education",
  "Professional Services Organization",
];

function Marker({ icon }: { icon?: "check" | "diamond" | "circle" }) {
  if (icon === "diamond") {
    return (
      <span className="mt-1 inline-flex size-3 shrink-0 rotate-45 bg-[#1f5f9e]" />
    );
  }

  if (icon === "circle") {
    return (
      <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-[#03101c] text-[0.62rem] text-white">
        •
      </span>
    );
  }

  return (
    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-[#f3f3f3] text-[0.72rem] text-[#3c4a5b]">
      ✓
    </span>
  );
}

function IndustryIcon({ index }: { index: number }) {
  return (
    <span className="mx-auto flex size-[clamp(5rem,6vw,7rem)] items-center justify-center rounded-full bg-[#ffad50] text-white">
      <svg viewBox="0 0 64 64" fill="none" className="size-[58%]" aria-hidden="true">
        {index === 0 ? (
          <path
            d="M18 34h28v16H18V34Zm5 0v-8a9 9 0 0 1 18 0v8M14 43H9v10h11M50 43h5v10H44"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : index === 1 ? (
          <path
            d="M12 50h40M16 50V32l10 6V26l10 8V18h10v32"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        ) : index === 2 ? (
          <>
            <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="3" />
            <path
              d="M32 13v38M13 32h38"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </>
        ) : index === 3 ? (
          <path
            d="M11 37h27V20h9l6 9v8h-5M19 45a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM43 45a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM11 25h15M11 31h20"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : index === 4 ? (
          <>
            <circle cx="32" cy="32" r="21" stroke="currentColor" strokeWidth="3" />
            <path
              d="M11 32h42M32 11c7 6 10 13 10 21s-3 15-10 21M32 11c-7 6-10 13-10 21s3 15 10 21"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </>
        ) : index === 6 ? (
          <path
            d="M8 25l24-12 24 12-24 12L8 25Zm10 5v14c9 7 19 7 28 0V30M56 25v20"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : index === 7 ? (
          <path
            d="M12 25h40v27H12V25Zm12 0v-9h16v9M12 35c12 7 28 7 40 0M28 35h8v8h-8v-8Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M24 24a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm18 7a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM33 48a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM13 53c2-8 8-11 20-8 9-3 16 0 18 8"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        )}
      </svg>
    </span>
  );
}

function ImageBlock({ block }: { block: Extract<ServiceContentBlock, { type: "image" }> }) {
  return (
    <div className="relative mt-10 aspect-[7/4] w-full max-w-[45rem] overflow-hidden rounded-[6px]">
      <Image
        src={block.src}
        alt={block.alt}
        fill
        sizes="(min-width: 1024px) 720px, 88vw"
        className="object-cover object-center"
      />
      {block.overlay ? (
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#03101c]/70 via-transparent to-transparent p-6">
          <p className="text-[clamp(1rem,1.5vw,1.25rem)] font-semibold leading-snug tracking-[0.04em] text-white">
            {block.overlay}
          </p>
        </div>
      ) : null}
    </div>
  );
}

function TextBlock({ block }: { block: Extract<ServiceContentBlock, { type: "text" }> }) {
  return (
    <div
      className={`mt-9 max-w-[54rem] space-y-5 text-[clamp(0.95rem,0.82vw,1rem)] leading-[1.7] tracking-[0.02em] ${
        block.strong
          ? "font-semibold text-[#03101c]"
          : "font-medium text-[#3c3d4b]"
      }`}
    >
      {block.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

function SectionListBlock({
  block,
}: {
  block: Extract<ServiceContentBlock, { type: "section-list" }>;
}) {
  return (
    <div className="mt-9 max-w-[62rem]">
      {block.heading ? (
        <h2 className="mb-7 text-[clamp(1.05rem,0.95vw,1.18rem)] font-semibold text-[#03101c]">
          {block.heading}
        </h2>
      ) : null}

      <div>
        {block.sections.map((section) => (
          <article key={section.title} className="border-b border-black/15 py-5">
            <div className="flex items-start gap-4">
              <Marker icon={block.icon} />
              <div>
                <h3 className="text-[clamp(0.95rem,0.85vw,1rem)] font-semibold leading-snug text-[#03101c]">
                  {section.title}
                </h3>
                <ul className="mt-5 list-disc space-y-2 pl-4 text-[clamp(0.95rem,0.85vw,1rem)] font-medium leading-[1.65] tracking-[0.02em] text-[#4b4d5c]">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

        ))}
      </div>
    </div>
  );
}

function IndustryBlock() {
  return (
    <div className="mt-10">
      <h2 className="text-[clamp(1.2rem,1vw,1.35rem)] font-semibold text-[#03101c]">
        Industry Expertise
      </h2>

      <div className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((industry, index) => (
          <div key={industry} className="text-center">
            <IndustryIcon index={index} />
            <p className="mt-5 text-[clamp(0.7rem,0.64vw,0.78rem)] font-semibold uppercase leading-tight tracking-[0.04em] text-[#03101c]">
              {industry}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContentBlock({ block }: { block: ServiceContentBlock }) {
  if (block.type === "image") {
    return <ImageBlock block={block} />;
  }

  if (block.type === "text") {
    return <TextBlock block={block} />;
  }

  if (block.type === "heading") {
    return (
      <div className="mt-12 max-w-[54rem]">
        <h2 className="text-[clamp(1.25rem,1.1vw,1.4rem)] font-semibold text-[#03101c]">
          {block.title}
        </h2>
        {block.intro ? (
          <div className="mt-5 space-y-5 text-[clamp(0.95rem,0.82vw,1rem)] font-medium leading-[1.7] tracking-[0.02em] text-[#3c3d4b]">
            {block.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ) : null}
      </div>
    );
  }

  if (block.type === "section-list") {
    return <SectionListBlock block={block} />;
  }

  return <IndustryBlock />;
}

function DecisionGuide({ service, lang }: { service: ServiceDetail; lang: Lang }) {
  const t = ui[lang];
  const columns = [
    {
      title: t.situations,
      items: service.decisionGuide.situations,
    },
    {
      title: t.scope,
      items: service.decisionGuide.scope,
    },
  ];

  return (
    <section
      className="mt-10 max-w-[62rem] rounded-[10px] bg-[#f3f3f3] p-[clamp(1.5rem,3vw,3rem)]"
      aria-labelledby="service-fit-heading"
    >
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#596575]">
        {t.guideEyebrow}
      </p>
      <h2
        id="service-fit-heading"
        className="mt-4 text-[clamp(1.35rem,1.35vw,1.65rem)] font-semibold leading-tight text-[#03101c]"
      >
        {t.guideHeading}
      </h2>

      <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-10">
        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="text-[1rem] font-semibold leading-snug text-[#03101c]">
              {column.title}
            </h3>
            <ul className="mt-5 space-y-4">
              {column.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[clamp(0.9rem,0.78vw,0.96rem)] font-medium leading-[1.6] text-[#4b4d5c]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-white text-[0.72rem] text-[#1f5f9e]"
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-8 border-t border-[#03101c]/12 pt-6 text-[0.86rem] font-medium leading-[1.6] text-[#596575]">
        {t.guideNote}
      </p>
    </section>
  );
}

export function ServiceDetailTemplate({
  service,
  lang = "en",
}: {
  service: ServiceDetail;
  lang?: Lang;
}) {
  const t = ui[lang];
  const contactHref = `/contact?service=${service.slug}#enquiry`;

  return (
    <div lang={lang === "zh" ? "zh-Hans" : undefined}>
      <section className="relative isolate sm:min-h-[clamp(19rem,22vw,26rem)] overflow-hidden bg-[#03101c] px-[clamp(1.5rem,8vw,12rem)] py-10 text-white sm:py-[clamp(5rem,7vw,8rem)]">
        <Image
          src={service.heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[65%_15%]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#03101c]/90 via-[#03101c]/75 to-[#03101c]/30" />

        <div className="relative z-10 mx-auto max-w-[1180px]">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <nav aria-label="Breadcrumb" className="text-sm text-white/85">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/" className="inline-flex min-h-11 items-center hover:underline">{t.home}</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/services" className="inline-flex min-h-11 items-center hover:underline">{t.services}</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">{service.navTitle}</li>
              </ol>
            </nav>
            {service.languages ? (
              <LanguageToggle lang={lang} languages={service.languages} />
            ) : null}
          </div>
          <p className="text-[clamp(0.7rem,0.62vw,0.78rem)] font-semibold uppercase tracking-[0.18em] text-white/75">
            {service.eyebrow}
          </p>
          <h1 className="mt-4 text-[clamp(2rem,2vw,2.5rem)] font-medium leading-tight tracking-normal">
            {service.title}
          </h1>
          <p className="mt-5 max-w-[40rem] text-[clamp(0.98rem,0.9vw,1.08rem)] font-medium leading-[1.6] tracking-[0.02em] text-white/85">
            {service.summary}
          </p>
        </div>
      </section>

      <section className="bg-white px-[clamp(1.5rem,8vw,12rem)] py-[clamp(4rem,7vw,7rem)]">
        <div className="mx-auto grid max-w-[1320px] gap-[clamp(3rem,5vw,6rem)] lg:grid-cols-[16rem_minmax(0,1fr)]">

          <article className="min-w-0 lg:col-start-2 lg:row-start-1">
            <div className="max-w-[54rem]">
              <h2 className="text-[clamp(1.35rem,1.25vw,1.55rem)] font-semibold leading-tight text-[#03101c]">
                {service.title}
              </h2>
              <div className="mt-5 space-y-5 text-[clamp(0.95rem,0.82vw,1rem)] font-medium leading-[1.7] tracking-[0.02em] text-[#3c3d4b]">
                {service.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <DecisionGuide service={service} lang={lang} />

            {service.contentBlocks.map((block, index) => (
              <ContentBlock key={`${block.type}-${index}`} block={block} />
            ))}
            <p className="mt-10 max-w-[62rem] border-t border-[#03101c]/10 pt-6 text-sm leading-7 text-[#596575]">
              {lang === "zh" ? "本页为一般服务介绍，并非针对您的情况提供的专业意见。具体服务范围、负责机构及适用资格须在书面委托中确认；审批及结果不作保证。审计及非审计服务须遵守适用的独立性及监管要求。" : "This is a general service description, not advice for your circumstances. The scope, responsible provider and applicable authorisations must be confirmed in a written engagement; approvals and outcomes are not guaranteed. Audit and non-audit work remain subject to applicable independence and regulatory requirements."}
            </p>
          </article>

          <aside className="lg:col-start-1 lg:row-start-1 lg:sticky lg:top-28 lg:self-start">
            <nav className="rounded-[6px] bg-[#f3f3f3] p-5" aria-label={t.services}>
              <p className="mb-4 text-[0.92rem] font-semibold text-[#03101c]">
                {t.services}
              </p>
              <div className="grid gap-2">
                {serviceNavItems.map((item) => {
                  const active = item.slug === service.slug;
                  const href =
                    active && service.languages ? service.languages[lang] : item.href;
                  return (
                    <Link
                      key={item.slug}
                      href={href}
                      aria-current={active ? "page" : undefined}
                      className={`flex min-h-11 items-center justify-between rounded-lg px-4 py-2 text-[0.9rem] font-semibold transition ${
                        active
                          ? "bg-[#ffad50] text-[#03101c]"
                          : "text-[#27303a] hover:bg-white"
                      }`}
                    >
                      <span>{lang === "zh" ? zhNavTitles[item.slug] : item.title}</span>
                      <span aria-hidden="true">›</span>
                    </Link>
                  );
                })}
              </div>
            </nav>

            <div className="mt-8 rounded-[6px] bg-[#091c2f] p-6 text-white">
              <p className="max-w-[12rem] text-[0.86rem] font-semibold leading-[1.55]">
                {service.ctaTitle}
              </p>
              <div className="my-5 h-px bg-white/25" />
              <a
                href="tel:+60327284819"
                className="text-[0.9rem] font-semibold text-white/90"
              >
                +603 2728 4819
              </a>
              <Link
                href={contactHref}
                className="mt-6 inline-flex h-11 min-w-[116px] items-center justify-center gap-3 rounded-full bg-[#ffad50] px-5 text-[0.78rem] font-semibold text-[#03101c]"
              >
                <span>{t.contact}</span>
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <AboutCtaSection
        contactHref={contactHref}
        title={t.ctaTitle}
        buttonLabel={t.ctaButton}
      />
    </div>
  );
}
