import Head from "next/head";

const faqs = [
  {
    question: "Does my company need an audit?",
    answer:
      "Under the Companies Act 2016, most Malaysian companies must have their annual financial statements audited. Certain small, dormant, or zero-revenue private companies may qualify for audit exemption under SSM criteria. We can review your company's position and confirm what applies.",
  },
  {
    question: "When do our audited financial statements need to be ready?",
    answer:
      "A private company must circulate its audited financial statements to members within six months of its financial year-end, then lodge them with SSM within 30 days of circulation. Starting the audit early leaves time to resolve issues before the deadline.",
  },
  {
    question: "What do you need from us to start an audit?",
    answer:
      "Typically your trial balance and general ledger, bank statements, fixed asset register, key contracts, and the prior year's audited accounts. We share a document checklist at the start of each engagement so your team knows exactly what to prepare.",
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
      "Yes. A change of auditor is approved by the company's members, and we then contact the outgoing auditor for professional clearance as required. We guide you through each step so the transition is smooth.",
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
  return (
    <section className="bg-white px-[clamp(1.25rem,6.25vw,7.5rem)] py-[clamp(4rem,6vw,7.25rem)]">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <div className="mx-auto max-w-[1138px]">
        <div className="text-center">
          <p className="text-[clamp(0.7rem,0.72vw,0.85rem)] font-medium uppercase tracking-[0.16em] text-[#091c2f]">
            Frequently asked questions
          </p>
          <h2 className="mx-auto mt-4 max-w-[36rem] text-[clamp(2rem,2vw,2.32rem)] font-medium leading-[1.35] tracking-normal text-[#03101c]">
            Common questions from our clients
          </h2>
        </div>

        <div className="mt-[clamp(2.5rem,4.5vw,4rem)] border-t border-[#d8d8d8]">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border-b border-[#d8d8d8]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-[clamp(1.1rem,1.6vw,1.75rem)] text-left [&::-webkit-details-marker]:hidden">
                <span className="text-[clamp(1.05rem,1.15vw,1.35rem)] font-medium leading-snug text-[#03101c]">
                  {faq.question}
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
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
