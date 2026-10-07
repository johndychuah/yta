type Expert = {
  name: string;
  initials: string;
  role: string;
  title: string;
  credentials: string;
  description: string;
  focus: string[];
};

const experts: Expert[] = [
  {
    name: "Dato' Peter Tang",
    initials: "PT",
    role: "Partner",
    title: "Chartered Accountant · Chartered Tax Adviser",
    credentials: "MBA, CA(M), FCCA, CPA(M), CPA(Aust.), CTA, CTIM",
    description:
      "Dato' Peter Tang founded Peter Tang & Associates in 1992 after senior roles at Price Waterhouse and Baxter Healthcare, and has extensive experience in Malaysian tax advisory. Clients turn to Dato' Peter for tax structuring, valuations, and guidance through M&A and listings. He also served as CEO of Axcelasia Inc., an integrated professional services group listed on SGX Catalist.",
    focus: ["Tax advisory", "Valuations", "M&A", "IPOs"],
  },
  {
    name: "Yeo Eng Thong",
    initials: "YT",
    role: "Partner",
    title: "Chartered Accountant",
    credentials: "CA(M), FCCA, CPA(Aust.), CTIM",
    description:
      "Yeo Eng Thong qualified in 1981 and built an audit career at PwC in Malaysia and Singapore, working with retail, plantation, manufacturing, and trading groups. Today, Yeo Eng Thong leads the firm's audit practice and is the partner clients rely on when preparing for due diligence or an IPO.",
    focus: ["Statutory audit", "Due diligence", "Valuations", "IPOs"],
  },
  {
    name: "Felix Chew Wee Shen",
    initials: "FC",
    role: "Assurance Director",
    title: "Chartered Accountant",
    credentials: "CA(M), ACCA, MSc Professional Accountancy",
    description:
      "Felix Chew Wee Shen has spent over eight years in audit with the firm, specialising in hotels, resorts, retail, construction, and car park operations. He regularly leads non-statutory special audits, including revenue and SOP verification. Clients value his deep sector knowledge and the discretion he brings to confidential engagements.",
    focus: ["Statutory audit", "Special audits", "Revenue verification", "SOP review"],
  },
  {
    name: "Lim Swee Leong",
    initials: "LS",
    role: "Assurance Director",
    title: "Chartered Accountant by Professional",
    credentials: "CA(M), FCCA",
    description:
      "Lim Swee Leong has audited investment holding, property, construction, and manufacturing companies for more than a decade. Clients value Lim Swee Leong's depth in share valuations and financial due diligence.",
    focus: ["Assurance", "Share valuations", "Due diligence"],
  },
];

export function AboutExpertsSection() {
  return (
    <section className="bg-white px-[clamp(1.5rem,8vw,12rem)] py-[clamp(4rem,7vw,8rem)]">
      <div className="mx-auto max-w-[1180px]">
        <div className="text-center">
          <p className="text-[clamp(0.78rem,0.65vw,0.85rem)] font-medium uppercase tracking-[0.2em] text-[#091c2f]">
            Leadership
          </p>
          <h2 className="mx-auto mt-6 max-w-[40rem] text-[clamp(2rem,2vw,2.5rem)] font-medium leading-[1.18] tracking-normal text-[#03101c]">
            The people behind your engagement
          </h2>
          <p className="mx-auto mt-5 max-w-[40rem] text-[clamp(0.95rem,0.85vw,1rem)] font-medium leading-[1.65] tracking-[0.02em] text-[#4b4d5c]">
            Every engagement is led by a partner or director, not handed down
            to a junior team. Our leadership combines experience at PwC and
            Price Waterhouse with deep sector knowledge developed within the firm.
          </p>
        </div>

        <div className="mt-[clamp(3rem,4.2vw,4rem)] grid gap-6 md:grid-cols-2">
          {experts.map((expert) => (
            <article
              key={expert.name}
              className="flex flex-col rounded-[10px] bg-[#f3f3f3] p-[clamp(1.5rem,2.4vw,2.5rem)]"
            >
              <div className="flex items-start gap-5">
                <span className="inline-flex size-16 shrink-0 items-center justify-center rounded-full bg-[#091c2f] text-[1rem] font-semibold tracking-[0.08em] text-white">
                  {expert.initials}
                </span>
                <div>
                  <h3 className="text-[clamp(1.25rem,1.3vw,1.5rem)] font-medium leading-tight tracking-normal text-[#03101c]">
                    {expert.name}
                  </h3>
                  <p className="mt-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[#596575]">
                    {expert.role}
                  </p>
                  <p className="mt-1.5 text-[0.82rem] font-medium leading-snug tracking-[0.02em] text-[#1f5f9e]">
                    {expert.title}
                  </p>
                  <p className="mt-1 text-[0.75rem] font-medium leading-snug tracking-[0.02em] text-[#596575]">
                    {expert.credentials}
                  </p>
                </div>
              </div>

              <p className="mt-6 flex-1 border-t border-black/10 pt-6 text-[clamp(0.93rem,0.82vw,0.98rem)] font-medium leading-[1.65] tracking-[0.02em] text-[#3c3d4b]">
                {expert.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Focus areas">
                {expert.focus.map((area) => (
                  <li
                    key={area}
                    className="rounded-full bg-white px-3 py-1.5 text-[0.78rem] font-semibold tracking-[0.02em] text-[#03101c]"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
