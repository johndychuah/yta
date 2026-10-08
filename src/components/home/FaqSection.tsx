import { useTranslation } from "@/i18n/Locale";
import Head from "next/head";

const faqs = [
  {
    question: "Does my company need an audit?",
    answer:
      "Malaysian companies generally require an audit unless an applicable exemption is available. Eligible private companies may qualify under SSM Practice Directive 10/2024, which uses phased revenue, asset and employee thresholds and other conditions. Eligibility depends on the financial period and circumstances; another legal, lender or shareholder requirement may still require an audit. We can help review the criteria for your company.",
  },
  {
    question: "When do our audited financial statements need to be ready?",
    answer:
      "For a Malaysian private company, the general requirements are circulation of financial statements and reports within six months of financial year-end, followed by lodgement with SSM within 30 days of circulation. Audit exemptions, approved extensions and other obligations can affect what applies. Confirm the requirements for your company and start early to leave time for queries.",
  },
  {
    question: "What do you need from us to start an audit?",
    answer:
      "Typically your management accounts, trial balance and general ledger, bank statements, fixed asset register, key contracts, and the prior year's audited accounts. We share a document checklist at the start of each engagement so your team knows exactly what to prepare.",
  },
  {
    question: "How long does an audit take?",
    answer:
      "It depends on the size and complexity of your business and how ready your records are. Once we understand your situation, we agree a timetable with you that works back from your reporting deadline.",
  },
  {
    question: "How are your fees determined?",
    answer:
      "Fees reflect the scope of work, the size and complexity of the business, and the condition of the records. After an initial discussion, we provide a written proposal so you know the fee before any work begins.",
  },
  {
    question: "Can you take over from our current auditor?",
    answer:
      "A change of auditor must follow the applicable appointment, resignation or removal procedures and professional requirements. The steps depend on the company's circumstances; we can discuss the required approvals and communication with the outgoing auditor before accepting an appointment.",
  },
  {
    question: "Can you help us prepare for a listing on Bursa Malaysia?",
    answer:
      "Yes. We have supported SMEs and family-owned businesses through the IPO process, from getting financial reporting and controls ready to working alongside your investment bank, lawyers, and other advisers.",
  },
  {
    question: "Our company is under financial pressure. How can you help?",
    answer:
      "Early advice keeps more options open. We can carry out an independent business review, prepare a turnaround plan, and advise on debt restructuring or refinancing. Where recovery is not possible, we support receivership and liquidation processes.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export function FaqSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white px-[clamp(1.25rem,6.25vw,7.5rem)] py-[clamp(4rem,6vw,7.25rem)]">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...faqSchema, mainEntity: faqSchema.mainEntity.map(item => ({ ...item, name: t(item.name), acceptedAnswer: { ...item.acceptedAnswer, text: t(item.acceptedAnswer.text) } })) }) }}
        />
      </Head>

      <div className="mx-auto max-w-[1138px]">
        <div className="text-center">
          <p className="text-[clamp(0.7rem,0.72vw,0.85rem)] font-medium uppercase tracking-[0.16em] text-[#091c2f]">{t("Frequently asked questions")}</p>
          <h2 className="mx-auto mt-4 max-w-[36rem] text-[clamp(2rem,2vw,2.32rem)] font-medium leading-[1.35] tracking-normal text-[#03101c]">{t("Common questions from our clients")}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#596575]">{t("General information, not advice for your specific circumstances. Requirements can change; confirm the rules applicable to your company.")}</p>
        </div>

        <div className="mt-[clamp(2.5rem,4.5vw,4rem)] border-t border-[#d8d8d8]">
          {t(faqs.map((faq) => (
            <details key={faq.question} className="group border-b border-[#d8d8d8]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-[clamp(1.1rem,1.6vw,1.75rem)] text-left [&::-webkit-details-marker]:hidden">
                <span className="text-[clamp(1.05rem,1.15vw,1.35rem)] font-medium leading-snug text-[#03101c]">
                  {t(faq.question)}
                </span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-[clamp(1.5rem,1.6vw,1.9rem)] leading-none text-black group-open:hidden"
                >
                  +
                </span>
                <span
                  aria-hidden="true"
                  className="hidden shrink-0 text-[clamp(1.5rem,1.6vw,1.9rem)] leading-none text-black group-open:inline"
                >
                  -
                </span>
              </summary>
              <p className="max-w-[48rem] pb-[clamp(1.25rem,2vw,2rem)] text-[clamp(0.95rem,0.85vw,1rem)] leading-[1.7] tracking-[0.02em] text-[#4b4d5c]">
                {t(faq.answer)}
              </p>
            </details>
          )))}
        </div>
      </div>
    </section>
  );
}
