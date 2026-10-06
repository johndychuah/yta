export type ServiceSlug =
  | "audit-assurance"
  | "corporate-advisory"
  | "restructuring-advisory"
  | "tax-advisory"
  | "china-malaysia-desk"
  | "accounting-payroll-outsourcing";

type DetailSection = {
  title: string;
  points: string[];
};

type ImageBlock = {
  type: "image";
  src: string;
  alt: string;
  overlay?: string;
};

type TextBlock = {
  type: "text";
  paragraphs: string[];
  strong?: boolean;
};

type HeadingBlock = {
  type: "heading";
  title: string;
  intro?: string[];
};

type SectionListBlock = {
  type: "section-list";
  heading?: string;
  sections: DetailSection[];
  icon?: "check" | "diamond" | "circle";
};

type IndustryBlock = {
  type: "industry";
};

export type ServiceContentBlock =
  | ImageBlock
  | TextBlock
  | HeadingBlock
  | SectionListBlock
  | IndustryBlock;

export type ServiceDetail = {
  slug: ServiceSlug;
  title: string;
  navTitle: string;
  eyebrow: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  ctaTitle: string;
  heroImage: string;
  intro: string[];
  decisionGuide: {
    situations: string[];
    scope: string[];
  };
  contentBlocks: ServiceContentBlock[];
  /** Links for the language toggle, only set on pages with a translation. */
  languages?: { en: string; zh: string };
};

export const serviceNavItems: { title: string; href: string; slug: ServiceSlug }[] =
  [
    {
      title: "Audit & Assurance",
      href: "/services/audit-assurance",
      slug: "audit-assurance",
    },
    {
      title: "Corporate Advisory",
      href: "/services/corporate-advisory",
      slug: "corporate-advisory",
    },
    {
      title: "Restructuring & Insolvency",
      href: "/services/restructuring-advisory",
      slug: "restructuring-advisory",
    },
    {
      title: "Tax Advisory & Compliance",
      href: "/services/tax-advisory",
      slug: "tax-advisory",
    },
    {
      title: "China-Malaysia Desk",
      href: "/services/china-malaysia-desk",
      slug: "china-malaysia-desk",
    },
    {
      title: "Accounting & Payroll Outsourcing",
      href: "/services/accounting-payroll-outsourcing",
      slug: "accounting-payroll-outsourcing",
    },
  ];

const auditSections: DetailSection[] = [
  {
    title: "Statutory Audits",
    points: [
      "Annual audits under the Companies Act 2016, to MFRS, MPERS or IFRS as applicable.",
      "An independent opinion that shareholders, lenders, and regulators can rely on.",
      "A management letter highlighting control weaknesses and practical improvements.",
    ],
  },
  {
    title: "Review Engagements",
    points: [
      "Limited assurance on your financial statements, at a lower cost than a full audit.",
      "Useful when a lender, investor, or parent company needs independent comfort rather than an audit opinion.",
    ],
  },
  {
    title: "Internal Control Reviews",
    points: [
      "An assessment of how well your accounting processes and controls work in practice.",
      "Clear findings on weaknesses, ranked by risk.",
      "Practical recommendations your team can put in place.",
    ],
  },
  {
    title: "Accounting Framework Conversion",
    points: [
      "Support moving between frameworks, such as from MPERS to MFRS ahead of a listing.",
      "Restated comparatives and disclosures, with minimal disruption to your reporting.",
    ],
  },
  {
    title: "Financial Reporting",
    points: [
      "Preparation and review of financial statements that meet the applicable standards.",
      "Advice on complex accounting treatments and disclosure requirements.",
    ],
  },
  {
    title: "Forensic Accounting",
    points: [
      "Investigation of suspected fraud, misappropriation, and financial irregularities.",
      "Expert financial analysis to support litigation and dispute resolution.",
      "Recommendations to close the control gaps that allowed the issue to happen.",
    ],
  },
  {
    title: "Reporting Accountant Services",
    points: [
      "Accountants' reports for IPO prospectuses, acquisitions, and corporate restructurings.",
      "Review of the financial information included in regulatory submissions.",
    ],
  },
  {
    title: "Agreed-Upon Procedures (AUP)",
    points: [
      "Specific procedures you define, such as verifying revenue, expenses, or compliance with a contract.",
      "Factual findings reported without an audit opinion, keeping the work focused and cost-effective.",
    ],
  },
];

const corporateMnaSections: DetailSection[] = [
  {
    title: "Information Memorandum (IM)",
    points: [
      "A clear document presenting your company's performance, growth potential, and investment highlights to buyers or investors.",
    ],
  },
  {
    title: "Financial Forecasting & Projections",
    points: [
      "Models of revenue, profit, and cash flow under different scenarios, so decisions rest on realistic numbers.",
    ],
  },
  {
    title: "Financial Due Diligence",
    points: [
      "A thorough review of the target's financial records, risks, and key metrics before you commit.",
    ],
  },
  {
    title: "Tax Due Diligence",
    points: [
      "A review of tax exposures, incentives, and compliance, with advice on how to structure the business after the deal.",
    ],
  },
  {
    title: "Negotiation Support",
    points: [
      "Support at the negotiating table, helping you reach terms that protect your interests.",
    ],
  },
  {
    title: "Transaction Execution",
    points: [
      "Coordination of documentation, regulatory approvals, and completion, so the deal closes on time.",
    ],
  },
  {
    title: "Post-Deal Integration",
    points: [
      "Guidance on combining operations, finance teams, and reporting so the expected benefits are realised.",
    ],
  },
];

const restructuringSections: DetailSection[] = [
  {
    title: "Independent Business Review (IBR)",
    points: [
      "An in-depth review of the company's financial and operational position.",
      "Clear identification of the issues driving poor performance.",
      "Recommended actions for management, lenders, and shareholders.",
    ],
  },
  {
    title: "Restructuring & Turnaround Planning",
    points: [
      "A practical, achievable turnaround plan developed with management.",
      "Support putting financial and operational changes into effect.",
      "A path back to stable, sustainable growth.",
    ],
  },
  {
    title: "Debt Advisory & Refinancing Support",
    points: [
      "Advice on restructuring existing debt into manageable terms.",
      "Negotiation with creditors and banks on refinancing and extended repayment.",
      "Identifying new sources of capital, including investors and alternative financing.",
    ],
  },
  {
    title: "Receivership & Liquidation",
    points: [
      "Support with members' and creditors' voluntary winding-up.",
      "Assistance with receivership and court-ordered winding-up processes.",
      "Clear communication with creditors, employees, and shareholders throughout.",
    ],
  },
];

const taxSections: DetailSection[] = [
  {
    title: "Corporate Tax Compliance",
    points: [
      "Preparation and filing of annual corporate tax returns (Form C).",
      "Tax estimates (CP204) and revisions, to avoid underestimation penalties.",
      "Tax computations reviewed by a Chartered Tax Adviser.",
    ],
  },
  {
    title: "Tax Planning & Advisory",
    points: [
      "Structuring your business and transactions in a tax-efficient way.",
      "Advice on incentives such as Pioneer Status, Investment Tax Allowance, and Reinvestment Allowance.",
      "Clear explanations of how new tax rules affect your business.",
    ],
  },
  {
    title: "Tax Audits & Investigations",
    points: [
      "Preparation for LHDN tax audits and desk reviews.",
      "Representation and correspondence with LHDN on your behalf.",
      "Negotiating fair settlements where adjustments are raised.",
    ],
  },
  {
    title: "Transaction & M&A Tax",
    points: [
      "Tax due diligence on acquisition targets.",
      "Tax structuring for mergers, acquisitions, restructurings, and listings.",
      "Real Property Gains Tax (RPGT) and stamp duty advice on asset transfers.",
    ],
  },
  {
    title: "Personal & Expatriate Tax",
    points: [
      "Personal tax returns for business owners, directors, and expatriates.",
      "Advice on residence status and double taxation agreements.",
    ],
  },
];

export const chinaDeskLanguages = {
  en: "/services/china-malaysia-desk",
  zh: "/services/china-malaysia-desk/zh",
};

const whyMalaysiaSections: DetailSection[] = [
  {
    title: "A gateway to ASEAN",
    points: [
      "Malaysia sits at the centre of Southeast Asia, giving access to an ASEAN market of more than 600 million people.",
    ],
  },
  {
    title: "Close ties with China",
    points: [
      "China has been Malaysia's largest trading partner for more than a decade, and the double taxation agreement between the two countries reduces tax on cross-border income.",
    ],
  },
  {
    title: "Investor-friendly policies",
    points: [
      "Tax incentives for manufacturing, technology, and regional headquarters, administered by MIDA.",
    ],
  },
  {
    title: "A trilingual business environment",
    points: [
      "Business is conducted in Malay, English, and Chinese, making it easier to build local teams and partnerships.",
    ],
  },
];

const chinaDeskSections: DetailSection[] = [
  {
    title: "Market Entry & Structuring",
    points: [
      "Advice on the right vehicle for Malaysia: a Sdn Bhd, a branch, or a representative office.",
      "Holding structures that make use of the Malaysia–China double taxation agreement.",
      "A clear view of the ongoing reporting and tax obligations before you commit.",
    ],
  },
  {
    title: "Company Set-Up Coordination",
    points: [
      "Coordination of incorporation with SSM and opening of corporate bank accounts.",
      "A single point of contact while we work with company secretarial and legal partners.",
    ],
  },
  {
    title: "Tax & Incentives",
    points: [
      "Guidance on incentives available through MIDA, such as Pioneer Status and Investment Tax Allowance.",
      "Withholding tax on payments to China, including service fees, royalties, and interest.",
      "Transfer pricing documentation for transactions with your parent or related companies.",
    ],
  },
  {
    title: "Accounting, Payroll & Audit",
    points: [
      "Bookkeeping and monthly reporting packs for your parent company in China.",
      "Payroll for local and expatriate staff, with EPF, SOCSO, EIS, and PCB handled.",
      "Annual statutory audits under the Companies Act 2016.",
    ],
  },
  {
    title: "Work Permits & Expatriate Staff",
    points: [
      "Support with Employment Pass and other work permit applications for staff relocating from China.",
      "Expatriate payroll and personal tax, including residence status and treaty relief.",
    ],
  },
  {
    title: "Licences & Certifications",
    points: [
      "Import and export licence applications for trading and manufacturing businesses.",
      "Halal certification support for food, cosmetics, and consumer products entering the Malaysian and wider Muslim markets.",
    ],
  },
  {
    title: "Trademark & Brand Protection",
    points: [
      "Trademark searches and registration with MyIPO, so your brand is protected in Malaysia before you launch.",
      "Coordination of wider intellectual property protection across Southeast Asia.",
    ],
  },
  {
    title: "Wealth Management",
    points: [
      "Introductions to licensed wealth management and investment partners for business owners and expatriate executives.",
      "Coordinated advice so that personal investments, tax, and business structures work together.",
    ],
  },
  {
    title: "Ongoing Compliance",
    points: [
      "One compliance calendar covering tax filings, audit deadlines, licence renewals, and annual returns.",
      "Plain-language updates when Malaysian rules change.",
    ],
  },
];

const accountingSections: DetailSection[] = [
  {
    title: "Bookkeeping & Financial Reporting",
    points: [
      "Day-to-day recording of all financial transactions.",
      "Maintenance of the general ledger, payables, and receivables.",
      "Monthly, quarterly, and annual financial statements.",
      "Accounts prepared under MFRS or MPERS, as applicable.",
    ],
  },
  {
    title: "Cash Flow & Budgeting",
    points: [
      "Monitoring of cash inflows and outflows to keep the business liquid.",
      "Cash-flow forecasts to support management decisions.",
      "Practical advice on budgeting and cost control.",
    ],
  },
  {
    title: "Audit Preparation & Support",
    points: [
      "Well-organised records and schedules ready for your auditor.",
      "Liaison with the external auditor during fieldwork.",
      "Prompt handling of audit queries and adjustments.",
    ],
  },
];

const payrollSections: DetailSection[] = [
  {
    title: "Salary Calculation & Processing",
    points: [
      "Monthly payroll covering salary, allowances, overtime, and deductions.",
      "Payslips for every employee.",
      "Multi-currency payroll for international staff and expatriates.",
    ],
  },
  {
    title: "Statutory Contributions & Compliance",
    points: [
      "EPF (KWSP): calculation and remittance of contributions.",
      "SOCSO (PERKESO): employee social security contributions.",
      "EIS: employer and employee Employment Insurance System contributions.",
      "PCB/MTD: monthly tax deductions submitted to LHDN.",
      "HRD Corp levy: correct contributions for eligible employers.",
    ],
  },
  {
    title: "Leave & Benefits Administration",
    points: [
      "Tracking of employee leave balances.",
      "Bonuses, commissions, and incentive payments.",
      "Expense, medical, and travel claims and reimbursements.",
    ],
  },
  {
    title: "Payroll Reports & Reconciliation",
    points: [
      "Payroll reports tailored to management's needs.",
      "Payroll cost analysis for financial reporting.",
      "Reconciliation of payroll records, tax filings, and the general ledger.",
    ],
  },
  {
    title: "Employee Records & Confidentiality",
    points: [
      "Up-to-date payroll records for every employee.",
      "Strict confidentiality for sensitive salary information.",
      "Personal data handled in line with the Personal Data Protection Act 2010 (PDPA).",
    ],
  },
  {
    title: "Expatriate Payroll & Taxation",
    points: [
      "Expatriate tax filing and compliance with LHDN requirements.",
      "Payroll deductions related to work permits and visas.",
      "Application of double taxation agreements (DTA) where relevant.",
    ],
  },
];

export const serviceDetails: Record<ServiceSlug, ServiceDetail> = {
  "audit-assurance": {
    slug: "audit-assurance",
    title: "Audit & Assurance",
    navTitle: "Audit & Assurance",
    eyebrow: "Our Services",
    summary:
      "Statutory audits, reviews, and specialist assurance, led by a partner from planning to sign-off.",
    seoTitle: "Statutory Audit & Assurance Services in Kuala Lumpur",
    seoDescription:
      "Partner-led statutory audits, review engagements, internal control reviews, forensic accounting, and reporting accountant services for Malaysian companies.",
    ctaTitle: "Need an auditor for this year's accounts?",
    heroImage: "/images/services/audit.webp",
    intro: [
      "Every Malaysian company must have its financial statements audited each year under the Companies Act 2016, unless it qualifies for an audit exemption. Our audits are planned and led by a partner or director, focus on the areas of real risk in your business, and finish with a clear report on what we found and what to improve.",
      "We audit subsidiaries of multinationals, government-linked companies, SMEs, and family-owned groups. Where a full audit is not what you need, we offer reviews and specialist assurance work instead.",
    ],
    decisionGuide: {
      situations: [
        "Your company needs its annual statutory audit, or wants to change auditor.",
        "A lender, investor, or parent company has asked for a review or agreed-upon procedures.",
        "You suspect fraud, or want an independent check on your controls.",
        "You are preparing for an IPO and need a reporting accountant.",
      ],
      scope: [
        "Statutory audits and review engagements",
        "Financial reporting and reporting accountant work",
        "Forensic accounting and agreed-upon procedures",
        "Accounting framework conversion and internal control reviews",
      ],
    },
    contentBlocks: [
      {
        type: "image",
        src: "/images/editorial/integrity.webp",
        alt: "Illustrative auditor carefully cross-checking financial statements",
        overlay: "Audit",
      },
      {
        type: "text",
        paragraphs: ["Our audit and assurance services include:"],
      },
      { type: "section-list", sections: auditSections, icon: "check" },
      { type: "industry" },
      {
        type: "text",
        strong: true,
        paragraphs: [
          "Not sure whether you need an audit, a review, or agreed-upon procedures? Tell us who is asking for it and why, and we will recommend the right engagement.",
        ],
      },
    ],
  },
  "corporate-advisory": {
    slug: "corporate-advisory",
    title: "Corporate Advisory",
    navTitle: "Corporate Advisory",
    eyebrow: "Our Services",
    summary:
      "IPO readiness, M&A, due diligence, and valuations for growing and family-owned businesses.",
    seoTitle: "IPO & Corporate Advisory Services in Malaysia",
    seoDescription:
      "IPO preparation for Bursa Malaysia, M&A advisory, financial and tax due diligence, forecasting, and valuations for SMEs and family-owned businesses.",
    ctaTitle: "Planning an IPO or a transaction?",
    heroImage: "/images/services/corporate.webp",
    intro: [
      "Listing on Bursa Malaysia, or buying or selling a business, is a defining moment for any owner. We help SMEs and family-owned businesses prepare for an IPO, then act as their in-house financial adviser through the listing, working alongside the investment bank, lawyers, and other advisers.",
      "We also advise buyers and sellers on mergers and acquisitions, from the first valuation through to completion and integration.",
    ],
    decisionGuide: {
      situations: [
        "Your SME or family-owned business is preparing for an IPO.",
        "You are considering buying, selling, or merging a business.",
        "You need financial due diligence, a valuation, forecasts, or transaction support.",
      ],
      scope: [
        "IPO preparation and coordination with the other advisers",
        "Information memoranda, forecasts, and financial projections",
        "Financial and tax due diligence",
        "Negotiation, execution, and post-deal integration support",
      ],
    },
    contentBlocks: [
      {
        type: "image",
        src: "/images/editorial/partnership.webp",
        alt: "Illustrative business partners discussing their next steps",
      },
      {
        type: "section-list",
        heading: "Support through the IPO journey",
        icon: "circle",
        sections: [
          {
            title: "We work closely with every adviser involved in your listing:",
            points: [
              "Investment banks, on structuring and underwriting the offer.",
              "Due diligence lawyers, on legal and regulatory compliance.",
              "Independent market researchers, on the industry overview in your prospectus.",
              "Issuing houses and share registrars, on share issuance and subscriptions.",
              "Company secretaries, on compliance with the listing requirements.",
            ],
          },
        ],
      },
      {
        type: "image",
        src: "/images/editorial/integrity.webp",
        alt: "Illustrative auditor carefully cross-checking financial statements",
      },
      {
        type: "text",
        paragraphs: [
          "Throughout the process, we act as your in-house financial adviser: guiding your accounting and tax position, keeping the timetable on track, and making sure the numbers are consistent across every document.",
          "After listing, many clients keep us on as corporate advisers for ongoing compliance, financial strategy, and corporate exercises that build shareholder value.",
          "On mergers and acquisitions, we act for both buyers and sellers, whether you are acquiring a business, merging with a strategic partner, or divesting assets.",
        ],
      },
      {
        type: "section-list",
        heading: "Our M&A services include:",
        sections: corporateMnaSections,
        icon: "diamond",
      },
      {
        type: "text",
        strong: true,
        paragraphs: [
          "Planning a listing or a transaction? Speak to us early. The sooner your numbers are ready, the smoother the process will be.",
        ],
      },
    ],
  },
  "restructuring-advisory": {
    slug: "restructuring-advisory",
    title: "Restructuring & Insolvency",
    navTitle: "Restructuring & Insolvency",
    eyebrow: "Our Services",
    summary:
      "Independent reviews, turnaround plans, debt advisory, and insolvency support for businesses under financial pressure.",
    seoTitle: "Corporate Restructuring & Insolvency Advisory in Malaysia",
    seoDescription:
      "Independent business reviews, turnaround planning, debt advisory and refinancing, and receivership and liquidation support for Malaysian companies.",
    ctaTitle: "Under financial pressure? Talk to us early.",
    heroImage: "/images/services/restructuring.webp",
    intro: [
      "When cash flow tightens or lenders start asking questions, early and independent advice keeps more options open. We work with management, lenders, and shareholders to understand what has gone wrong, what can be saved, and the most practical way forward.",
      "Where recovery is not possible, we support an orderly receivership or winding-up that protects the interests of everyone involved.",
    ],
    decisionGuide: {
      situations: [
        "Cash flow, debt commitments, or declining performance are putting pressure on the business.",
        "Management or lenders need an independent view of financial and operational performance.",
        "The company needs a practical turnaround, refinancing, or restructuring plan.",
        "A receivership or winding-up is being considered.",
      ],
      scope: [
        "Independent business reviews",
        "Restructuring and turnaround planning",
        "Debt advisory and refinancing support",
        "Receivership and liquidation support",
      ],
    },
    contentBlocks: [
      {
        type: "image",
        src: "/images/editorial/forward-thinking.webp",
        alt: "Illustrative advisers assessing trends and planning the way forward",
        overlay: "Restructuring & Insolvency",
      },
      {
        type: "section-list",
        heading: "Our restructuring and insolvency services include:",
        sections: restructuringSections,
      },
      {
        type: "text",
        strong: true,
        paragraphs: [
          "Every situation is different. We tailor our approach to SMEs, large corporations, and multinationals, and every conversation is treated in confidence.",
        ],
      },
    ],
  },
  "tax-advisory": {
    slug: "tax-advisory",
    title: "Tax Advisory & Compliance",
    navTitle: "Tax Advisory & Compliance",
    eyebrow: "Our Services",
    summary:
      "Tax compliance, planning, and LHDN support led by a Chartered Tax Adviser, backed by the Taxand global network.",
    seoTitle: "Corporate Tax Advisory & Compliance in Malaysia",
    seoDescription:
      "Corporate and personal tax compliance, tax planning, incentives, LHDN tax audits, and M&A tax structuring led by a Chartered Tax Adviser in Kuala Lumpur.",
    ctaTitle: "Have a tax question or an LHDN query?",
    heroImage: "/images/services/tax.webp",
    intro: [
      "Tax affects every decision a business makes, from day-to-day pricing to buying a company. Peter Tang & Associates has advised on Malaysian tax since 1992, and the practice is led by a Chartered Tax Adviser and approved tax agent.",
      "As the Malaysian member of Taxand, a global network of independent tax advisers, we can also coordinate advice for clients with operations or investors overseas.",
    ],
    decisionGuide: {
      situations: [
        "You need your corporate or personal tax returns prepared and filed correctly.",
        "LHDN has opened a tax audit or raised queries on your returns.",
        "You are planning an expansion, restructuring, or transaction and want to understand the tax impact.",
        "You want to know which tax incentives your business qualifies for.",
      ],
      scope: [
        "Corporate and personal tax compliance",
        "Tax planning and incentive applications",
        "LHDN tax audits and investigations",
        "Tax due diligence and transaction structuring",
      ],
    },
    contentBlocks: [
      {
        type: "image",
        src: "/images/editorial/clarity.webp",
        alt: "Illustrative adviser explaining the financial implications of a decision",
        overlay: "Tax",
      },
      {
        type: "section-list",
        heading: "Our tax services include:",
        sections: taxSections,
        icon: "check",
      },
      {
        type: "text",
        strong: true,
        paragraphs: [
          "Good tax advice starts before the transaction, not after the assessment. Talk to us early and we will help you plan with confidence.",
        ],
      },
    ],
  },
  "china-malaysia-desk": {
    slug: "china-malaysia-desk",
    title: "China-Malaysia Desk",
    navTitle: "China-Malaysia Desk",
    eyebrow: "Our Services",
    summary:
      "One team to help Chinese companies set up, stay compliant, and grow in Malaysia, with support in Mandarin.",
    seoTitle: "China-Malaysia Desk: Set Up and Grow Your Business in Malaysia",
    seoDescription:
      "Market entry, company set-up, tax and incentives, accounting, payroll, audit, work permits, licences, halal certification, and trademarks for Chinese companies investing in Malaysia.",
    ctaTitle: "Planning to invest in Malaysia from China?",
    heroImage: "/images/services/china.webp",
    intro: [
      "Malaysia is one of the most popular destinations for Chinese companies expanding into Southeast Asia. Getting the structure, tax, and compliance right from the start saves time, cost, and difficult conversations later.",
      "Our China-Malaysia Desk gives Chinese investors one team for the full journey, from choosing a structure and obtaining licences to the first statutory audit, with communication in Mandarin and reporting your head office understands.",
    ],
    decisionGuide: {
      situations: [
        "Your company in China is planning to set up a subsidiary, branch, or office in Malaysia.",
        "You already operate in Malaysia and need reliable accounting, tax, and audit support.",
        "Your head office needs regular reporting on the Malaysian business.",
        "You want to understand the incentives and tax treaty benefits available.",
        "You need work permits, import and export licences, halal certification, or trademark protection.",
      ],
      scope: [
        "Market entry advice and structuring",
        "Company set-up and bank account coordination",
        "Tax, incentives, and transfer pricing",
        "Accounting, payroll, audit, and ongoing compliance",
        "Work permits, licences, halal certification, and trademarks",
        "Introductions to wealth management partners",
      ],
    },
    contentBlocks: [
      {
        type: "image",
        src: "/images/editorial/team.webp",
        alt: "Illustrative multicultural team coordinating a business plan",
      },
      {
        type: "section-list",
        heading: "Why Malaysia?",
        sections: whyMalaysiaSections,
        icon: "circle",
      },
      {
        type: "section-list",
        heading: "How our China-Malaysia Desk supports you:",
        sections: chinaDeskSections,
        icon: "check",
      },
      {
        type: "text",
        strong: true,
        paragraphs: [
          "Whether you are exploring Malaysia for the first time or already have a team on the ground, talk to us and we will map out what you need, in the order you need it.",
        ],
      },
    ],
    languages: chinaDeskLanguages,
  },
  "accounting-payroll-outsourcing": {
    slug: "accounting-payroll-outsourcing",
    title: "Accounting & Payroll Outsourcing Services",
    navTitle: "Accounting & Payroll Outsourcing",
    eyebrow: "Our Services",
    summary:
      "Bookkeeping, reporting, and payroll handled for you, with records ready for your year-end audit.",
    seoTitle: "Accounting & Payroll Outsourcing in Kuala Lumpur",
    seoDescription:
      "Outsourced bookkeeping, financial reporting, cash-flow support, payroll processing, and EPF, SOCSO, EIS and PCB submissions for Malaysian businesses.",
    ctaTitle: "Want your books and payroll off your plate?",
    heroImage: "/images/services/accounting.webp",
    intro: [
      "Our Accounting and Payroll Outsourcing service takes care of your bookkeeping, reporting, and payroll, so your management team can focus on running the business.",
      "You get accurate monthly records, payroll that meets every statutory deadline, and accounts that are ready when the auditor arrives.",
    ],
    decisionGuide: {
      situations: [
        "Your team needs reliable bookkeeping and regular financial reporting.",
        "Payroll calculations, employee records, and monthly submissions take time away from core operations.",
        "Management needs clearer cash-flow information or better-prepared records for the year-end audit.",
      ],
      scope: [
        "Bookkeeping and periodic financial statements",
        "Cash-flow monitoring, budgets, and management reporting",
        "Payroll processing, employee records, and payroll reconciliation",
        "Audit preparation and coordination support",
      ],
    },
    contentBlocks: [
      {
        type: "image",
        src: "/images/editorial/working-detail.webp",
        alt: "Illustrative organised accounting desk with financial records",
        overlay: "Accounting Outsourcing",
      },
      {
        type: "text",
        paragraphs: [
          "We keep your books accurate and up to date, in line with accounting standards and tax regulations.",
        ],
      },
      {
        type: "section-list",
        heading: "Our accounting services include:",
        sections: accountingSections,
        icon: "circle",
      },
      {
        type: "text",
        strong: true,
        paragraphs: [
          "Outsourcing your accounting to us improves accuracy, reduces overheads, and keeps your filings on time.",
        ],
      },
      {
        type: "image",
        src: "/images/services/payroll.webp",
        alt: "Illustrative payroll specialist reviewing confidential records",
        overlay: "Payroll Outsourcing",
      },
      {
        type: "heading",
        title: "Payroll Outsourcing Services",
        intro: [
          "Payroll has to be accurate, confidential, and on time, every month.",
          "We run your payroll end to end, from salary calculations to statutory contributions, in line with Malaysian employment and tax regulations.",
        ],
      },
      {
        type: "section-list",
        heading: "Our payroll services include:",
        sections: payrollSections,
        icon: "circle",
      },
    ],
  },
};
