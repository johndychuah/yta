const milestones = [
  {
    year: "1981",
    title: "Professional roots",
    description: "Yeo Eng Thong qualifies as a Certified Public Accountant, beginning a career that includes PwC in Malaysia and Singapore.",
  },
  {
    year: "1992",
    title: "Practice founded",
    description: "Peter Tang & Associates is established, focusing on accounting, tax, and corporate finance.",
  },
  {
    year: "2006",
    title: "Global tax network",
    description: "Dato' Peter Tang begins leading Taxand Malaysia, part of a global network of tax advisers.",
  },
  {
    year: "2015",
    title: "Group listing",
    description: "The parent group lists on Singapore's Catalist board as Axcelasia Inc, and the audit practice continues as YT Associates.",
  },
  {
    year: "Today",
    title: "Serving from KL Eco City",
    description: "YT Associates (AF1112) serves GLCs, multinationals, SMEs, and family businesses.",
  },
];

export function AboutMilestonesSection() {
  return (
    <section className="bg-[#091c2f] px-[clamp(1.5rem,8vw,12rem)] py-[clamp(4rem,7vw,7rem)] text-white">
      <div className="mx-auto max-w-[1292px]">
        <p className="text-[clamp(0.82rem,0.72vw,0.9rem)] font-medium uppercase tracking-[0.16em] text-[#ffad50]">
          Our Milestones
        </p>
        <h2 className="mt-6 max-w-[34rem] text-[clamp(2rem,2vw,2.5rem)] font-medium leading-[1.26] tracking-normal">
          More than three decades of practice
        </h2>

        <ol className="mt-[clamp(2.5rem,4vw,4rem)] grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {milestones.map((milestone) => (
            <li key={milestone.year} className="border-t-2 border-[#ffad50] pt-6">
              <p className="text-[clamp(2rem,2.2vw,2.6rem)] font-medium leading-none text-[#ffad50]">
                {milestone.year}
              </p>
              <h3 className="mt-4 text-[clamp(1rem,0.95vw,1.12rem)] font-semibold leading-snug">
                {milestone.title}
              </h3>
              <p className="mt-3 text-[clamp(0.9rem,0.8vw,0.96rem)] leading-[1.6] tracking-[0.02em] text-white/75">
                {milestone.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
