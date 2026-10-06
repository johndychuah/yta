import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    title: "Audit & Assurance",
    body: "An audit should do more than meet a statutory requirement. Our risk-focused approach, supported by data analytics, concentrates on the areas that matter most to your financial statements and highlights control weaknesses along the way, so you receive practical recommendations alongside our opinion.",
    helpfulWhen: "You need a statutory or international-standard audit, a limited review, agreed-upon procedures, forensic work, or an independent review of internal controls.",
    href: "/services/audit-assurance",
    image: "/images/topics/home-audit.webp",
    imageAlt: "Illustrative audit evidence files with reconciled bank, invoice and account entries",
  },
  {
    title: "Corporate Advisory",
    body: "We have guided SMEs and family-owned businesses through listings on Bursa Malaysia, acting as an in-house financial adviser from preparation to post-listing. On transactions, we support buyers and sellers with due diligence, valuations, forecasts, and deal structuring, working alongside your bankers and lawyers.",
    helpfulWhen: "You are preparing for an IPO, buying or selling a business, raising funds, or need financial and tax due diligence or a valuation.",
    href: "/services/corporate-advisory",
    image: "/images/topics/home-corporate.webp",
    imageAlt: "Illustrative transaction memorandum, valuation records and prospectus draft",
  },
  {
    title: "Restructuring & Insolvency",
    body: "When a business comes under financial pressure, early and independent advice protects options. We carry out independent business reviews, prepare turnaround plans, and advise on debt and refinancing. Where recovery is not possible, we support receivership and liquidation processes.",
    helpfulWhen: "Cash flow is tight, lenders are asking for an independent review, debt needs restructuring, or a receivership or winding-up is being considered.",
    href: "/services/restructuring-advisory",
    image: "/images/topics/home-restructuring.webp",
    imageAlt: "Illustrative cash-flow recovery forecast and revised debt schedule",
  },
  {
    title: "Tax Advisory & Compliance",
    body: "Good tax advice starts before the transaction, not after the assessment. Led by a Chartered Tax Adviser, we handle corporate and personal tax compliance, plan for incentives and restructurings, and represent you in LHDN tax audits. As the Malaysian member of Taxand, we can also coordinate cross-border advice.",
    helpfulWhen: "You need tax returns filed, LHDN has raised queries or opened an audit, or you want to understand the tax impact of a transaction or expansion.",
    href: "/services/tax-advisory",
    image: "/images/topics/home-tax.webp",
    imageAlt: "Illustrative corporate tax computation and deduction reconciliation documents",
  },
  {
    title: "China-Malaysia Desk",
    body: "Malaysia is a natural base for Chinese companies expanding into Southeast Asia. Our China-Malaysia Desk gives investors one team for the whole journey, from choosing a structure and setting up the company to work permits, licences, halal certification, tax, payroll, and the first statutory audit, with support in Mandarin.",
    helpfulWhen: "Your company in China is setting up in Malaysia, or your Malaysian subsidiary needs accounting, tax, audit, and reporting your head office understands.",
    href: "/services/china-malaysia-desk",
    image: "/images/topics/home-china.webp",
    imageAlt: "Illustrative Malaysian company setup documents with China and Malaysia desk flags",
  },
  {
    title: "Accounting & Payroll Outsourcing",
    body: "Accurate records are the foundation of good decisions and a smooth audit. We keep your books to MFRS or MPERS, prepare monthly management reports and cash-flow budgets, and run payroll with EPF, SOCSO, EIS, PCB, and HRD Corp levies handled correctly and on time.",
    helpfulWhen: "You need dependable bookkeeping, management reports, payroll processing, or want your records audit-ready at year end.",
    href: "/services/accounting-payroll-outsourcing",
    image: "/images/topics/home-accounting.webp",
    imageAlt: "Illustrative monthly ledger, bank reconciliation and anonymous payroll register",
  },
];

export function ServicesAccordionSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white px-[clamp(1.25rem,6.25vw,7.5rem)] py-[clamp(4rem,6vw,7.25rem)]">
      <div className="mx-auto max-w-[1138px]">
        <div className="text-center">
          <p className="text-[clamp(0.7rem,0.72vw,0.85rem)] font-medium uppercase tracking-[0.16em] text-[#091c2f]">
            Our services
          </p>
          <h2 className="mx-auto mt-4 max-w-[36rem] text-[clamp(2rem,2vw,2.32rem)] font-medium leading-[1.35] tracking-normal text-[#03101c]">
            Start with the business challenge you need to solve
          </h2>
          <p className="mx-auto mt-5 max-w-[42rem] text-[clamp(0.95rem,0.85vw,1rem)] leading-[1.65] tracking-[0.03em] text-[#4b4d5c]">
            Each engagement is scoped around your reporting requirements,
            transaction, or business situation. Select a service to see how we
            can help.
          </p>
        </div>

        <div className="mt-[clamp(2.5rem,4.5vw,4rem)]">
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            const panelId = `service-panel-${index}`;
            const buttonId = `service-button-${index}`;

            return (
              <div key={service.title} className="border-b border-[#d8d8d8]">
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-6 py-[clamp(1.25rem,2vw,2.25rem)] text-left"
                >
                  <span className="text-[clamp(1.55rem,1.95vw,2.32rem)] font-medium leading-tight tracking-normal text-[#03101c]">
                    {service.title}
                  </span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-[clamp(1.8rem,1.95vw,2.3rem)] leading-none text-black"
                  >
                    {isOpen ? "-" : "+"}
                  </span>
                </button>

                {isOpen ? (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="grid gap-8 pb-[clamp(2rem,3vw,3.5rem)] xl:grid-cols-[minmax(0,1fr)_minmax(18rem,32.5rem)] xl:items-start"
                  >
                    <div className="grid gap-5 sm:grid-cols-[2rem_1fr]">
                      <p className="text-[clamp(0.9rem,0.85vw,1rem)] leading-[1.58] tracking-[0.03em] text-[#03101c]">
                        {String(index + 1).padStart(2, "0")}.
                      </p>
                      <div>
                        <p className="max-w-[31rem] text-[clamp(0.95rem,0.85vw,1rem)] leading-[1.58] tracking-[0.03em] text-[#3c3d4b]">
                          {service.body}
                        </p>
                        <div className="mt-5 max-w-[31rem] rounded-[8px] bg-[#f3f3f3] px-5 py-4">
                          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#596575]">
                            Helpful when
                          </p>
                          <p className="mt-2 text-[clamp(0.9rem,0.82vw,0.98rem)] font-medium leading-[1.55] text-[#03101c]">
                            {service.helpfulWhen}
                          </p>
                        </div>
                        <Link
                          href={service.href}
                          className="mt-5 inline-flex items-center gap-2 text-[clamp(0.95rem,0.85vw,1rem)] font-semibold leading-[1.58] tracking-[0.03em] text-[#1f5f9e]"
                        >
                          <span>Explore this service</span>
                          <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </div>

                    <div className="relative aspect-[7/4] overflow-hidden rounded-[10px]">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        loading="eager"
                        sizes="(min-width: 768px) 520px, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
