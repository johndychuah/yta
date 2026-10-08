import { useTranslation } from "@/i18n/Locale";
const reasons = [
  {
    title: "Partner-led",
    description:
      "Our partners stay involved from planning to sign-off, so key judgements are made by people with decades of experience.",
  },
  {
    title: "Big Four standards",
    description:
      "Our leadership trained at PwC and EY. You get the same technical rigour with direct access and a responsive team.",
  },
  {
    title: "Value beyond compliance",
    description:
      "Beyond the audit opinion, we share practical observations on controls, reporting, and risks that management can act on.",
  },
];

export function WhyChooseUsSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#f3f3f3] px-[clamp(1.5rem,8vw,12rem)] py-[clamp(4rem,6vw,6.5rem)]">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-8 lg:grid-cols-[minmax(15rem,0.8fr)_minmax(0,2fr)] lg:items-end">
          <div>
            <p className="text-[clamp(0.75rem,0.72vw,0.875rem)] font-medium uppercase tracking-[0.16em] text-[#03101c]">{t("Why choose us")}</p>

            <h2 className="mt-5 max-w-[24rem] text-[clamp(2rem,1.95vw,2.35rem)] font-medium leading-[1.25] tracking-normal text-[#03101c]">{t("Experienced judgement, practical advice")}</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {t(reasons.map((reason, index) => (
              <article key={reason.title} className="rounded-[10px] bg-white p-6">
                <p className="text-[0.72rem] font-semibold tracking-[0.14em] text-[#1f5f9e]">
                  0{t(index + 1)}
                </p>
                <h3 className="mt-5 text-[clamp(1.05rem,1vw,1.2rem)] font-semibold leading-snug text-[#03101c]">
                  {t(reason.title)}
                </h3>
                <p className="mt-4 text-[clamp(0.9rem,0.8vw,0.96rem)] font-medium leading-[1.6] text-[#4b4d5c]">
                  {t(reason.description)}
                </p>
              </article>
            )))}
          </div>
        </div>
      </div>
    </section>
  );
}
