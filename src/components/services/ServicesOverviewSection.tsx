import Link from "next/link";

type Service = {
  title: string;
  description: string;
  href: string;
  icon: "audit" | "advisory" | "restructure" | "tax" | "china" | "payroll";
};

const services: Service[] = [
  {
    title: "Audit & Assurance",
    description:
      "Statutory audits, review engagements, internal control reviews, forensic accounting, and reporting accountant work, led by a partner from planning to sign-off.",
    href: "/services/audit-assurance",
    icon: "audit",
  },
  {
    title: "Corporate Advisory",
    description:
      "IPO readiness for SMEs and family-owned businesses, plus buy-side and sell-side M&A support: forecasts, due diligence, valuations, negotiation, and execution.",
    href: "/services/corporate-advisory",
    icon: "advisory",
  },
  {
    title: "Restructuring & Insolvency",
    description:
      "Independent business reviews, turnaround plans, and debt advisory for companies under pressure, and support with receivership and liquidation where recovery is not possible.",
    href: "/services/restructuring-advisory",
    icon: "restructure",
  },
  {
    title: "Tax Advisory & Compliance",
    description:
      "Corporate and personal tax compliance, tax planning, LHDN audits, incentives, and deal structuring, backed by our membership of the Taxand global network.",
    href: "/services/tax-advisory",
    icon: "tax",
  },
  {
    title: "China-Malaysia Desk",
    description:
      "One team for Chinese companies setting up and growing in Malaysia: structuring, company set-up, tax, accounting, audit, work permits, licences, halal certification, and trademarks, with support in Mandarin.",
    href: "/services/china-malaysia-desk",
    icon: "china",
  },
  {
    title: "Accounting & Payroll Outsourcing",
    description:
      "Bookkeeping, management reporting, cash-flow support, payroll, and statutory contributions, with records kept ready for your year-end audit.",
    href: "/services/accounting-payroll-outsourcing",
    icon: "payroll",
  },
];

const iconPaths: Record<Service["icon"], React.ReactNode> = {
  // Clipboard with a tick
  audit: (
    <>
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="m9 14 2 2 4-4" />
    </>
  ),
  // Rising chart
  advisory: (
    <>
      <path d="M3 3v18h18" />
      <path d="m7 15 4-4 3 3 6-6" />
      <path d="M16 8h4v4" />
    </>
  ),
  // Circular arrows
  restructure: (
    <>
      <path d="M20 11a8 8 0 0 0-14.9-3.9L4 8.5" />
      <path d="M4 4v4.5h4.5" />
      <path d="M4 13a8 8 0 0 0 14.9 3.9l1.1-1.4" />
      <path d="M20 20v-4.5h-4.5" />
    </>
  ),
  // Document with a percent sign
  tax: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="m9 17 6-6" />
      <circle cx="9.5" cy="11.5" r="0.75" />
      <circle cx="14.5" cy="16.5" r="0.75" />
    </>
  ),
  // Globe
  china: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18" />
    </>
  ),
  // Calculator
  payroll: (
    <>
      <rect x="5" y="2.5" width="14" height="19" rx="2" />
      <rect x="8" y="5.5" width="8" height="4" rx="0.5" />
      <path d="M8.5 13h.01M12 13h.01M15.5 13h.01M8.5 16.5h.01M12 16.5h.01M15.5 16.5h.01" />
    </>
  ),
};

function ServiceIcon({ type }: { type: Service["icon"] }) {
  return (
    <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-[#091c2f] text-[#ffad50]">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-6"
        aria-hidden="true"
      >
        {iconPaths[type]}
      </svg>
    </span>
  );
}

export function ServicesOverviewSection() {
  return (
    <section className="bg-white px-[clamp(1.5rem,8vw,12rem)] pb-[clamp(3.5rem,5vw,5rem)] pt-[clamp(1rem,2vw,2rem)]">
      <div className="mx-auto max-w-[960px]">
        <p className="mx-auto max-w-[40rem] text-center text-[clamp(1.2rem,1.3vw,1.55rem)] font-semibold leading-snug tracking-normal text-[#03101c]">
          Six areas of expertise, one experienced team. Choose the service
          that matches the decision in front of your business.
        </p>

        <div className="mt-[clamp(2.5rem,3.5vw,3.5rem)]">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex flex-col gap-5 border-t border-black/12 py-[clamp(1.75rem,2.6vw,2.5rem)] sm:flex-row sm:gap-8"
            >
              <ServiceIcon type={service.icon} />

              <div>
                <h2 className="text-[clamp(1.4rem,1.4vw,1.75rem)] font-semibold leading-tight tracking-normal text-[#03101c]">
                  {service.title}
                </h2>
                <p className="mt-3 max-w-[44rem] text-[clamp(0.98rem,0.9vw,1.08rem)] font-medium leading-[1.65] tracking-[0.02em] text-[#4b4d5c]">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-4 inline-flex items-center gap-3 text-[clamp(0.92rem,0.82vw,0.98rem)] font-semibold leading-none tracking-normal text-[#1f5f9e] transition hover:text-[#0d365d]"
                >
                  <span>Explore {service.title}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
