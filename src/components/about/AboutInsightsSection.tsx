import Link from "next/link";

const topics = [
  {
    number: "01",
    title: "Audit & Reporting",
    description:
      "Statutory audits, MFRS and MPERS reporting, internal control reviews, and audit readiness.",
  },
  {
    number: "02",
    title: "Business Transactions",
    description:
      "IPO preparation on Bursa Malaysia, M&A, valuations, and financial and tax due diligence.",
  },
  {
    number: "03",
    title: "Restructuring & Recovery",
    description:
      "Independent business reviews, turnaround plans, debt advisory, receivership, and liquidation.",
  },
];

export function AboutInsightsSection() {
  return (
    <section className="bg-[#f3f3f3] px-[clamp(1.5rem,8vw,12rem)] py-[clamp(4rem,7vw,8rem)]">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[clamp(0.78rem,0.7vw,0.88rem)] font-medium uppercase tracking-[0.18em] text-[#596575]">
              Expertise
            </p>
            <h2 className="mt-6 max-w-[36rem] text-[clamp(2rem,2.2vw,2.65rem)] font-medium leading-[1.18] tracking-normal text-[#03101c]">
              Where our clients rely on us most
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-3 text-[0.95rem] font-semibold tracking-[0.02em] text-[#1f5f9e] transition hover:text-[#03101c]"
          >
            Speak with our team
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {topics.map((topic) => (
            <article
              key={topic.number}
              className="flex min-h-[16rem] flex-col rounded-[10px] bg-white p-[clamp(1.5rem,2.2vw,2.5rem)] shadow-[0_18px_45px_rgba(9,28,47,0.06)]"
            >
              <p className="text-[0.75rem] font-semibold tracking-[0.14em] text-[#1f5f9e]">
                {topic.number}
              </p>
              <h3 className="mt-8 text-[clamp(1.2rem,1.15vw,1.4rem)] font-medium leading-tight tracking-normal text-[#03101c]">
                {topic.title}
              </h3>
              <p className="mt-4 max-w-[22rem] text-[clamp(0.94rem,0.84vw,1rem)] font-medium leading-[1.6] tracking-[0.03em] text-[#3c3d4b]">
                {topic.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
