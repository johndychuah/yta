type Expert = {
  name: string;
  initials: string;
  role: string;
  description: string;
};

const experts: Expert[] = [
  {
    name: "Dato' Peter Tang",
    initials: "PT",
    role: "Partner",
    description:
      "More than 35 years of experience in accounting, corporate services, tax compliance, and tax advisory in Malaysia and the United Kingdom.",
  },
  {
    name: "Yeo Eng Thong",
    initials: "YT",
    role: "Partner",
    description:
      "More than 35 years in professional accounting practice, with experience advising SMEs on finance, financial reporting, and corporate matters.",
  },
  {
    name: "Saktei Leela",
    initials: "SL",
    role: "Assurance Director",
    description:
      "More than 10 years of external audit experience across listed entities, multinational corporations, government-linked companies, and private companies.",
  },
  {
    name: "Lim Swee Loong",
    initials: "LS",
    role: "Assurance Director",
    description:
      "More than 10 years of external audit experience across multinational corporations, non-profit organisations, and private companies.",
  },
];

export function AboutExpertsSection() {
  return (
    <section className="bg-white px-[clamp(1.5rem,8vw,12rem)] py-[clamp(4rem,7vw,8rem)]">
      <div className="mx-auto max-w-[1110px]">
        <div className="text-center">
          <p className="text-[clamp(0.78rem,0.65vw,0.85rem)] font-medium uppercase tracking-[0.2em] text-[#091c2f]">
            Leadership
          </p>
          <h2 className="mx-auto mt-6 max-w-[40rem] text-[clamp(2rem,2vw,2.5rem)] font-medium leading-[1.18] tracking-normal text-[#03101c]">
            Experience across audit, accounting, tax, and advisory work
          </h2>
        </div>

        <div className="mt-[clamp(3rem,4.2vw,4rem)] grid gap-x-[clamp(2rem,4vw,5rem)] gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {experts.map((expert, index) => (
            <article
              key={expert.name}
              className="rounded-[10px] bg-[#f3f3f3] p-[clamp(1.5rem,2vw,2rem)] text-left"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex size-14 items-center justify-center rounded-full bg-[#091c2f] text-[0.9rem] font-semibold tracking-[0.08em] text-white">
                  {expert.initials}
                </span>
                <p className="text-[0.75rem] font-semibold tracking-[0.12em] text-[#1f5f9e]">
                  0{index + 1}
                </p>
              </div>
              <h3 className="mt-7 text-[clamp(1.18rem,1.15vw,1.5rem)] font-medium leading-tight tracking-normal text-[#03101c]">
                {expert.name}
              </h3>
              <p className="mt-2 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[#596575]">
                {expert.role}
              </p>
              <p className="mt-6 text-[clamp(0.9rem,0.75vw,0.95rem)] font-medium leading-[1.6] tracking-[0.02em] text-[#3c3d4b]">
                {expert.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
