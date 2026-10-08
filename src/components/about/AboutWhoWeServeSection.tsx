import { useTranslation } from "@/i18n/Locale";

const clientGroups = [
  {
    title: "Professional Services Organization",
    description:
      "Audit, accounting, and advisory support for professional practices, with a focus on revenue reporting, internal controls, and sustainable growth",
  },
  {
    title: "Government-Linked Companies (GLCs)",
    description:
      "Governance and compliance support aligned with public-sector accountability",
  },
  {
    title: "Multinational Corporations",
    description:
      "Statutory audits and group reporting for Malaysian subsidiaries",
  },
  {
    title: "Small & Medium Enterprises (SMEs)",
    description:
      "Audit, accounting, and advisory support as your business grows",
  },
  {
    title: "Family-Owned Businesses",
    description:
      "Professional governance, succession readiness, and IPO preparation",
  },
  {
    title: "Non-Profit Organisations",
    description:
      "Transparent reporting for associations, foundations, and charities",
  },
];

export function AboutWhoWeServeSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#f4f4f4] px-[clamp(1.5rem,8vw,12rem)] py-[clamp(4rem,7vw,8rem)]">
      <div className="mx-auto max-w-[1270px]">
        <div>
          <p className="text-[clamp(0.82rem,0.72vw,0.9rem)] font-medium uppercase tracking-[0.18em] text-[#2b3949]">{t("Who We Serve")}</p>
          <h2 className="mt-7 max-w-[31rem] text-[clamp(2.15rem,2.25vw,2.75rem)] font-medium leading-[1.22] tracking-normal text-[#03101c]">{t("Diverse Clients, Tailored Solutions")}</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t(clientGroups.map((group) => (
              <article
                key={group.title}
                className="grid grid-cols-[1.25rem_1fr_auto] gap-x-3 rounded-[10px] bg-white p-6 text-[#03101c]"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 h-[clamp(3.75rem,4.1vw,4.5rem)] w-px bg-black/18"
                />

                <div>
                  <h3 className="text-[clamp(1.05rem,0.98vw,1.18rem)] font-semibold leading-snug tracking-normal">
                    {t(group.title)}
                  </h3>
                  <p className="mt-4 max-w-[23rem] text-[clamp(0.95rem,0.84vw,1rem)] font-medium leading-[1.55] tracking-[0.03em] text-[#5b5d6b]">
                    {t(group.description)}
                  </p>
                </div>

                <span className="pt-1 text-[clamp(1.25rem,1vw,1.35rem)] font-medium leading-none text-[#5b6373]">
                  ↘
                </span>
              </article>
            )))}
          </div>
        </div>

      </div>
    </section>
  );
}
