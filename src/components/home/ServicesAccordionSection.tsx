import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    title: "Audit and Assurance",
    body: "We provide independent, risk-focused audit and assurance services designed to enhance the credibility, transparency, and reliability of financial statements, while ensuring compliance with applicable regulatory and reporting standards.",
    helpfulWhen: "You need a statutory audit, financial reporting support, agreed-upon procedures, or an independent review of controls.",
    href: "/services/audit-assurance",
    image: "/accounting-documents.png",
    imageAlt: "Accounting documents, financial reports, calculator, and pen on a desk",
  },
  {
    title: "Corporate Advisory Services",
    body: "Our corporate advisory services support businesses in strategic planning, corporate finance, mergers and acquisitions, due diligence, and capital structuring to drive sustainable growth and long-term value.",
    helpfulWhen: "You are preparing for an IPO, evaluating a transaction, raising funds, or need financial due diligence and forecasting.",
    href: "/services/corporate-advisory",
    image: "/accounting-advisory-review.png",
    imageAlt: "Advisors reviewing financial charts and audit papers",
  },
  {
    title: "Restructuring Advisory",
    body: "We assist companies facing financial or operational challenges through independent business reviews, restructuring strategies, insolvency advisory, and recovery planning to restore stability and business viability.",
    helpfulWhen: "Cash flow, debt commitments, or declining performance require an independent review and a practical turnaround plan.",
    href: "/services/restructuring-advisory",
    image: "/accounting-documents.png",
    imageAlt: "Financial statements and calculator on an accounting desk",
  },
  {
    title: "Accounting & Payroll Outsourcing Services",
    body: "We offer reliable accounting and payroll outsourcing solutions, enabling businesses to streamline financial operations, ensure compliance, and focus on core business activities with confidence.",
    helpfulWhen: "You need dependable bookkeeping, management reporting, payroll processing, cash-flow support, or better audit readiness.",
    href: "/services/accounting-payroll-outsourcing",
    image: "/accounting-documents.png",
    imageAlt: "Accounting reports and financial charts on a desk",
  },
];

export function ServicesAccordionSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white px-[clamp(1.25rem,6.25vw,7.5rem)] py-[clamp(4rem,6vw,7.25rem)]">
      <div className="mx-auto max-w-[1138px]">
        <div className="text-center">
          <p className="text-[clamp(0.7rem,0.72vw,0.85rem)] font-medium uppercase tracking-[0.16em] text-[#091c2f]">
            Find the right support
          </p>
          <h2 className="mx-auto mt-4 max-w-[36rem] text-[clamp(2rem,2vw,2.32rem)] font-medium leading-[1.35] tracking-normal text-[#03101c]">
            Start with the business challenge you need to solve
          </h2>
          <p className="mx-auto mt-5 max-w-[42rem] text-[clamp(0.95rem,0.85vw,1rem)] leading-[1.65] tracking-[0.03em] text-[#4b4d5c]">
            Each engagement is shaped around your reporting requirements,
            transaction, or operational priorities. Use the prompts below to
            identify the most relevant YTA service.
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

                    <div className="relative h-[clamp(13rem,15.8vw,18.95rem)] overflow-hidden rounded-[10px]">
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
