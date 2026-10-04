import Link from "next/link";

type Service = {
  title: string;
  description: string[];
  href: string;
  icon: "audit" | "advisory" | "restructure" | "payroll";
};

const services: Service[] = [
  {
    title: "Audit & Assurance",
    description: [
      "Independent audit and assurance support for businesses that need credible financial reporting, stronger controls, or focused procedures for management and stakeholders.",
    ],
    href: "/services/audit-assurance",
    icon: "audit",
  },
  {
    title: "Corporate Advisory",
    description: [
      "IPO and transaction support for SMEs and family-owned businesses, including forecasting, due diligence, valuation, deal structuring, negotiation, and execution.",
    ],
    href: "/services/corporate-advisory",
    icon: "advisory",
  },
  {
    title: "Restructuring Advisory",
    description: [
      "Independent business reviews, turnaround planning, and debt advisory for companies experiencing financial pressure, operational challenges, or declining performance.",
    ],
    href: "/services/restructuring-advisory",
    icon: "restructure",
  },
  {
    title: "Accounting & Payroll Outsourcing",
    description: [
      "Recurring bookkeeping, financial reporting, cash-flow support, payroll processing, and audit preparation for businesses that want dependable finance operations without building every capability in-house.",
    ],
    href: "/services/accounting-payroll-outsourcing",
    icon: "payroll",
  },
];

function ServiceIcon({ type }: { type: Service["icon"] }) {
  const common =
    "h-[clamp(2rem,2vw,2.5rem)] w-[clamp(2rem,2vw,2.5rem)] text-[#2b3949]";

  if (type === "audit") {
    return (
      <svg viewBox="0 0 48 48" fill="none" className={common} aria-hidden="true">
        <path
          d="M9 30.5h6.5l4.8-8.6 7.2 3.8 7-9.1"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 33.5c4.9 4.3 11.3 6.4 18.9 3.1l9.6-4.2c2.1-.9 2.5-3.5.7-4.8-.9-.7-2.1-.7-3.2-.2l-8.1 3.4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.8 15.6 34 8.3l5.1 5.7-8.2 7.3-6.3 1.1 1.2-6.8Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "advisory") {
    return (
      <svg viewBox="0 0 48 48" fill="none" className={common} aria-hidden="true">
        <path
          d="M17 36h14M20 41h8M14 25c-4.2-7.3 1.1-16.5 9.6-16.5 8.6 0 14 9.2 9.7 16.5-1.4 2.3-3.6 4.1-4.5 6.7H18.5c-.9-2.6-3.1-4.4-4.5-6.7Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 11.5 7 9M38 11.5 41 9M8 24H4M44 24h-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "restructure") {
    return (
      <svg viewBox="0 0 48 48" fill="none" className={common} aria-hidden="true">
        <path
          d="m24 6 15 8.2v18.2L24 42 9 32.4V14.2L24 6Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M9 14.2 24 23l15-8.8M24 23v19M15.5 18.1v9.6L24 32l8.5-4.3v-9.6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" fill="none" className={common} aria-hidden="true">
      <path
        d="M8 17.5 19.5 6 40 26.5 28.5 38 8 17.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M15 24.5 24.5 15M23.5 33.5 33 24M17.5 15.5l15 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M28 10h8v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ServicesOverviewSection() {
  return (
    <section className="bg-white px-[clamp(1.5rem,8vw,12rem)] pb-[clamp(5rem,9vw,10rem)] pt-[clamp(3rem,5vw,5.5rem)]">
      <div className="mx-auto max-w-[1120px]">
        <div className="grid gap-[clamp(2rem,4vw,4rem)] md:grid-cols-[minmax(12rem,22rem)_1px_minmax(0,35rem)] md:items-center md:justify-center">
          <div className="text-center">
            <p className="text-[clamp(3.25rem,4vw,4.75rem)] font-semibold leading-none tracking-normal text-[#03101c]">
              04
            </p>
            <p className="mt-4 text-[clamp(0.78rem,0.68vw,0.85rem)] font-semibold uppercase tracking-[0.22em] text-[#2b3949]">
              Core service areas
            </p>
          </div>

          <div className="hidden h-[clamp(8rem,10vw,10rem)] w-px bg-black/35 md:block" />

          <div>
            <p className="text-[clamp(1.2rem,1.3vw,1.55rem)] font-semibold leading-tight tracking-normal text-[#03101c]">
              Choose support based on the decision or challenge in front of
              your business.
            </p>
            <p className="mt-5 max-w-[34rem] text-[clamp(1rem,0.95vw,1.12rem)] font-medium leading-[1.6] tracking-[0.02em] text-[#3c3d4b]">
              Explore when each service is relevant, what it can cover, and how
              YTA can support your next step.
            </p>
          </div>
        </div>

        <p className="mt-[clamp(4rem,6vw,6.25rem)] text-center text-[clamp(0.82rem,0.72vw,0.9rem)] font-semibold uppercase tracking-[0.18em] text-[#3c4a5b]">
          Confirmed YTA services
        </p>

        <div className="mx-auto mt-[clamp(3.25rem,5vw,5rem)] max-w-[1050px]">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`grid gap-[clamp(1.5rem,4vw,5.5rem)] py-[clamp(3rem,4.7vw,5.25rem)] md:grid-cols-[clamp(4rem,5.6vw,6rem)_1fr] ${
                index === 0 ? "pt-0" : "border-t border-black/16"
              }`}
            >
              <div className="flex items-start justify-center pt-2 md:justify-start">
                <ServiceIcon type={service.icon} />
              </div>

              <div>
                <h2 className="text-[clamp(1.55rem,1.55vw,1.95rem)] font-semibold leading-tight tracking-normal text-[#03101c]">
                  {service.title}
                </h2>

                <div className="mt-7 space-y-7 text-[clamp(1rem,0.95vw,1.12rem)] font-medium leading-[1.7] tracking-[0.03em] text-[#4b4d5c]">
                  {service.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <Link
                  href={service.href}
                  className="mt-8 inline-flex items-center gap-5 text-[clamp(0.95rem,0.84vw,1rem)] font-semibold leading-none tracking-normal text-[#1f5f9e] transition hover:text-[#0d365d]"
                >
                  <span>See when {service.title} can help</span>
                  <span aria-hidden="true" className="text-[#4b5563]">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
