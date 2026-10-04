export type ServiceSlug =
  | "audit-assurance"
  | "corporate-advisory"
  | "restructuring-advisory"
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
  heroImage: string;
  intro: string[];
  decisionGuide: {
    situations: string[];
    scope: string[];
  };
  contentBlocks: ServiceContentBlock[];
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
      title: "Restructuring Advisory",
      href: "/services/restructuring-advisory",
      slug: "restructuring-advisory",
    },
    {
      title: "Accounting & Payroll Outsourcing",
      href: "/services/accounting-payroll-outsourcing",
      slug: "accounting-payroll-outsourcing",
    },
  ];

const auditSections: DetailSection[] = [
  {
    title: "Statutory and International Standard Audits",
    points: [
      "Ensuring compliance with Malaysian and international financial reporting standards.",
      "Conducting independent audits to verify financial accuracy and reliability.",
      "Providing transparent reports to regulatory authorities, investors, and stakeholders.",
    ],
  },
  {
    title: "Limited Review Engagement",
    points: [
      "Conducting limited-scope reviews to provide financial assurance without a full audit.",
      "Suitable for businesses that require an independent review for internal management or external stakeholders.",
    ],
  },
  {
    title: "Review of Accounting Systems and Internal Controls",
    points: [
      "Assessing the effectiveness of your accounting processes and internal controls.",
      "Identifying weaknesses and providing recommendations to improve operational efficiency.",
      "Enhancing risk management by ensuring strong internal controls are in place.",
    ],
  },
  {
    title: "Conversion of Accounting Frameworks",
    points: [
      "Assisting companies in transitioning between different accounting frameworks.",
      "Ensuring smooth adoption of new financial reporting standards with minimal disruptions.",
    ],
  },
  {
    title: "Financial Reporting",
    points: [
      "Assisting businesses in preparing accurate and compliant financial statements.",
      "Providing advisory on accounting treatments and disclosure requirements.",
    ],
  },
  {
    title: "Forensic Accounting",
    points: [
      "Investigating fraud, financial irregularities, and misappropriations.",
      "Providing expert financial analysis for litigation and dispute resolution.",
      "Identifying weaknesses in internal controls and fraud prevention measures.",
    ],
  },
  {
    title: "Reporting Accountant Services",
    points: [
      "Assisting companies in preparing and reviewing financial reports for regulatory submissions.",
      "Preparing financial statements for Initial Public Offerings (IPOs), mergers, acquisitions, and corporate restructuring.",
    ],
  },
  {
    title: "Agreed-Upon Procedures (AUP)",
    points: [
      "Performing specific financial tests and procedures based on client needs.",
      "Providing a customized review for areas such as revenue recognition, expense verification, and compliance checks.",
      "Delivering objective findings without issuing a formal audit opinion.",
    ],
  },
];

const corporateMnaSections: DetailSection[] = [
  {
    title: "Assist in the preparation of an Information Memorandum (IM)",
    points: [
      "Developing a detailed document outlining the company's financial performance, growth potential, industry positioning, and investment highlights to attract potential buyers or investors.",
    ],
  },
  {
    title: "Financial Forecasting & Projections",
    points: [
      "Creating financial models to estimate future revenue, profitability, and cash flow under different scenarios, helping stakeholders make informed decisions.",
    ],
  },
  {
    title: "Financial Due Diligence",
    points: [
      "Conducting a thorough review of financial records, assessing risks, and verifying key financial metrics to ensure the transaction is based on accurate data.",
    ],
  },
  {
    title: "Tax Due Diligence",
    points: [
      "Evaluating tax liabilities, incentives, and compliance status to minimize risks and optimize post-transaction tax structures.",
    ],
  },
  {
    title: "Negotiation Support",
    points: [
      "Acting as intermediaries to facilitate negotiations between buyers and sellers, ensuring favorable terms and alignment of interests.",
    ],
  },
  {
    title: "Transaction Execution",
    points: [
      "Managing all aspects of the deal, from documentation and regulatory approvals to final settlement and integration planning.",
    ],
  },
  {
    title: "Post-M&A Integration Strategy",
    points: [
      "Providing guidance on merging operations, aligning corporate cultures, and optimizing synergies to ensure a smooth transition post-acquisition.",
    ],
  },
];

const restructuringSections: DetailSection[] = [
  {
    title: "Independent Business Review (IBR)",
    points: [
      "Conducting an in-depth financial and operational assessment of the company.",
      "Identifying key problem areas affecting business performance.",
      "Recommending corrective actions to enhance sustainability.",
    ],
  },
  {
    title: "Restructuring & Turnaround Planning",
    points: [
      "Collaborating with company management to design a feasible restructuring roadmap.",
      "Implementing financial and operational reforms to improve business viability.",
      "Developing sustainable growth strategies for long-term success.",
    ],
  },
  {
    title: "Debt Advisory & Refinancing Support",
    points: [
      "Assisting companies in restructuring their existing debt obligations.",
      "Negotiating with creditors and financial institutions for debt refinancing and extension of repayment terms.",
      "Identifying alternative capital sources, including new investors and financing options.",
    ],
  },
];

const accountingSections: DetailSection[] = [
  {
    title: "Bookkeeping & Financial Reporting",
    points: [
      "Recording all financial transactions systematically.",
      "Maintaining general ledgers, accounts payable, and accounts receivable.",
      "Preparing monthly, quarterly, and annual financial statements.",
      "Ensuring compliance with Malaysian Financial Reporting Standards (MFRS) or other applicable accounting frameworks.",
    ],
  },
  {
    title: "Cash Flow & Budget Management",
    points: [
      "Monitoring cash inflows and outflows to ensure adequate liquidity.",
      "Preparing cash flow forecasts to support business decision-making.",
      "Advising on cost control and budgeting for financial sustainability.",
    ],
  },
  {
    title: "Audit Preparation & Support",
    points: [
      "Assisting in audit preparation and liaison with external auditors.",
      "Ensuring audit readiness with accurate and well-organized financial records.",
      "Addressing any audit queries or adjustments required for compliance.",
    ],
  },
];

const payrollSections: DetailSection[] = [
  {
    title: "Salary Calculation & Processing",
    points: [
      "Monthly payroll processing for employees, including basic salary, allowances, deductions, and overtime.",
      "Generation of pay slips for employees.",
      "Handling multi-currency payroll for international employees or expatriates.",
    ],
  },
  {
    title: "Statutory Contributions & Compliance",
    points: [
      "Employees Provident Fund (EPF) - calculating and remitting contributions.",
      "Social Security Organization (SOCSO/PERKESO) - managing contributions for employee insurance.",
      "Employment Insurance System (EIS) - processing employer and employee EIS contributions.",
      "Income Tax (PCB/MTD) submission - monthly tax deduction and submission to LHDN.",
      "HRDF levy - ensuring eligible employers contribute correctly.",
    ],
  },
  {
    title: "Employee Leave & Benefits Administration",
    points: [
      "Tracking employee leave balances.",
      "Administering staff bonuses, commissions, and incentives.",
      "Managing claims and reimbursements for expenses, medical benefits, and travel allowances.",
    ],
  },
  {
    title: "Payroll Reports & Reconciliation",
    points: [
      "Providing customized payroll reports for management review.",
      "Preparing payroll cost analysis for financial reporting.",
      "Ensuring reconciliation between payroll records, tax filings, and accounting ledgers.",
    ],
  },
  {
    title: "Employee Records & Confidentiality Management",
    points: [
      "Maintaining up-to-date employee payroll records.",
      "Ensuring strict confidentiality in handling sensitive payroll information.",
      "Adhering to Personal Data Protection Act (PDPA) compliance in payroll processing.",
    ],
  },
  {
    title: "Expatriate Payroll & Taxation",
    points: [
      "Assistance with expatriate tax filing and compliance with LHDN regulations.",
      "Managing work permit and visa-related payroll deductions.",
      "Ensuring compliance with double taxation agreements (DTA) where applicable.",
    ],
  },
];

export const serviceDetails: Record<ServiceSlug, ServiceDetail> = {
  "audit-assurance": {
    slug: "audit-assurance",
    title: "Audit & Assurance",
    navTitle: "Audit & Assurance",
    eyebrow: "Service Details",
    heroImage: "/accounting-documents.png",
    intro: [
      "YT Associates provides audit and assurance support for multinational corporations, government-linked companies, SMEs, and family-owned businesses.",
      "Our work focuses on the financial information and underlying transactions most relevant to reporting, helping businesses identify errors, unusual items, and areas of risk that require attention.",
    ],
    decisionGuide: {
      situations: [
        "Your company requires a statutory or international-standard audit.",
        "Management or stakeholders need a limited review or agreed-upon procedures engagement.",
        "You need an independent review of financial reporting, accounting systems, or internal controls.",
      ],
      scope: [
        "Statutory and international-standard audits",
        "Financial reporting and reporting accountant work",
        "Forensic accounting and agreed-upon procedures",
        "Accounting framework conversion and internal-control reviews",
      ],
    },
    contentBlocks: [
      {
        type: "image",
        src: "/audit-assurance-card.png",
        alt: "Audit and assurance work with accounting documents",
        overlay: "Audit",
      },
      {
        type: "text",
        paragraphs: [
          "At YT Associate, we offer a wide range of audit and assurance services to meet the needs of various industries:",
        ],
      },
      { type: "section-list", sections: auditSections, icon: "check" },
      { type: "industry" },
      {
        type: "text",
        strong: true,
        paragraphs: [
          "Whether you need a statutory audit, forensic accounting, financial reporting support, or an internal-control review, our team can discuss an engagement suited to the requirement.",
        ],
      },
    ],
  },
  "corporate-advisory": {
    slug: "corporate-advisory",
    title: "Corporate Advisory",
    navTitle: "Corporate Advisory",
    eyebrow: "Service Details",
    heroImage: "/accounting-documents.png",
    intro: [
      "Our Corporate Advisory team specializes in helping Small and Medium Enterprises (SMEs) and family-owned businesses transition into publicly listed companies on Bursa Malaysia Securities Berhad through the Initial Public Offering (IPO) process. Over the years, we have successfully guided multiple businesses in achieving their listing objectives, enabling them to access capital markets for expansion and growth.",
    ],
    decisionGuide: {
      situations: [
        "Your SME or family-owned business is preparing for an IPO.",
        "You are considering buying, selling, or merging a business.",
        "You need financial due diligence, valuation, forecasting, or transaction support.",
      ],
      scope: [
        "IPO preparation and coordination with transaction stakeholders",
        "Information memoranda, forecasts, and financial projections",
        "Financial and tax due diligence",
        "Deal structuring, negotiation, execution, and post-transaction integration support",
      ],
    },
    contentBlocks: [
      {
        type: "image",
        src: "/about-story-meeting.png",
        alt: "Corporate advisory meeting with business owners",
      },
      {
        type: "section-list",
        heading: "Comprehensive IPO Support",
        icon: "circle",
        sections: [
          {
            title: "We play a crucial role throughout the IPO journey, working closely with key stakeholders such as:",
            points: [
              "Investment Banks - structuring and underwriting the IPO to ensure successful fund-raising.",
              "Due Diligence Lawyers - ensuring legal compliance and regulatory adherence.",
              "Market Research Consultants - providing insights into market trends and investor sentiment.",
              "Issuing Houses & Share Registrars - managing share issuance, investor subscriptions, and regulatory filings.",
              "Accounting and tax guidance to ensure financial statements align with regulatory requirements.",
              "Corporate secretarial services to facilitate smooth compliance with listing regulations.",
            ],
          },
        ],
      },
      {
        type: "image",
        src: "/accounting-advisory-review.png",
        alt: "Business handshake after advisory discussion",
      },
      {
        type: "text",
        paragraphs: [
          "In these engagements, we typically act as an in-house financial advisor, ensuring the company navigates the complexities of the IPO process efficiently.",
          "Post-listing, we continue to support many of our clients as corporate advisors, assisting them in meeting compliance requirements, optimizing financial strategies, and executing corporate actions that enhance shareholder value.",
          "We also provide comprehensive M&A advisory services, assisting clients on both the buy-side and sell-side of transactions. Whether a company is seeking to acquire another business, merge with a strategic partner, or divest its assets, our expertise ensures smooth execution at every stage of the transaction.",
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
          "With our in-depth expertise, we help businesses navigate the complexities of corporate finance, ensuring they achieve their strategic goals while minimizing financial and operational risks.",
        ],
      },
    ],
  },
  "restructuring-advisory": {
    slug: "restructuring-advisory",
    title: "Restructuring Advisory",
    navTitle: "Restructuring Advisory",
    eyebrow: "Service Details",
    heroImage: "/accounting-documents.png",
    intro: [
      "Our firm provides a comprehensive range of corporate restructuring, helping businesses navigate financial distress and ensuring the best possible outcomes for stakeholders. We specialize in assisting companies facing operational, financial, and legal challenges by offering strategic guidance, financial oversight, and professional execution of restructuring procedures.",
    ],
    decisionGuide: {
      situations: [
        "Cash flow, debt commitments, or declining performance are putting pressure on the business.",
        "Management or lenders need an independent view of financial and operational performance.",
        "The company needs a practical turnaround, refinancing, or restructuring plan.",
      ],
      scope: [
        "Independent business reviews",
        "Restructuring and turnaround planning",
        "Debt advisory and refinancing support",
        "Identification of operational and financial actions for management consideration",
      ],
    },
    contentBlocks: [
      {
        type: "image",
        src: "/about-story-meeting.png",
        alt: "Corporate restructuring advisory meeting",
        overlay: "Corporate Restructuring Advisory",
      },
      {
        type: "text",
        paragraphs: [
          "Our firm provides a comprehensive range of corporate restructuring, helping businesses navigate financial distress and ensuring the best possible outcomes for stakeholders. We specialize in assisting companies facing operational, financial, and legal challenges by offering strategic guidance, financial oversight, and professional execution of restructuring procedures.",
        ],
      },
      {
        type: "section-list",
        heading: "Our key Corporate Restructuring services include:",
        sections: restructuringSections,
      },
      {
        type: "text",
        strong: true,
        paragraphs: [
          "Customizable Solutions - tailored services to meet the specific needs of SMEs, large corporations, and multinational companies.",
        ],
      },
    ],
  },
  "accounting-payroll-outsourcing": {
    slug: "accounting-payroll-outsourcing",
    title: "Accounting & Payroll Outsourcing Services",
    navTitle: "Accounting & Payroll Outsourcing",
    eyebrow: "Service Details",
    heroImage: "/accounting-documents.png",
    intro: [
      "Our associate firm provides a comprehensive Accounting and Payroll Outsourcing services to help businesses streamline their financial operations, reduce administrative burdens, and maintain compliance with regulatory requirements.",
      "The service supports your company's financial records and payroll processing so that management can focus on core business activities and growth priorities.",
    ],
    decisionGuide: {
      situations: [
        "Your team needs reliable bookkeeping and regular financial reporting.",
        "Payroll calculations, employee records, and recurring submissions take time away from core operations.",
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
        src: "/why-choose-laptop-dashboard.png",
        alt: "Accounting outsourcing services dashboard",
        overlay: "Accounting Outsourcing Services",
      },
      {
        type: "text",
        paragraphs: [
          "Our Accounting Outsourcing services provide companies with expert financial management while ensuring compliance with accounting standards and tax regulations.",
        ],
      },
      {
        type: "section-list",
        heading: "Our Accounting Services Include:",
        sections: accountingSections,
        icon: "circle",
      },
      {
        type: "text",
        strong: true,
        paragraphs: [
          "By outsourcing accounting functions to YTA, businesses can improve financial accuracy, reduce operational costs, and ensure timely regulatory compliance.",
        ],
      },
      {
        type: "image",
        src: "/accounting-documents.png",
        alt: "Payroll outsourcing services documents",
        overlay: "Payroll Outsourcing Services",
      },
      {
        type: "heading",
        title: "Payroll Outsourcing Services",
        intro: [
          "Payroll processing is a critical but complex function that requires accuracy, confidentiality, and compliance with labour laws.",
          "Our firm provides fully managed payroll solutions tailored to the unique needs of businesses, ensuring timely salary disbursement, statutory contributions, and compliance with Malaysian employment regulations.",
        ],
      },
      {
        type: "section-list",
        heading: "Our Payroll Services Include:",
        sections: payrollSections,
        icon: "circle",
      },
    ],
  },
};
