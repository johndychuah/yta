import { useTranslation } from "@/i18n/Locale";
const steps = [
  {
    title: "Understand first",
    description: "We start by understanding your business, risks, and deadlines, then scope the engagement around them.",
  },
  {
    title: "Senior-led throughout",
    description: "Senior people are involved from planning to completion, so issues are identified and resolved early.",
  },
  {
    title: "Clear reporting",
    description: "Findings come with plain-language explanations and practical recommendations for management.",
  },
  {
    title: "Ongoing support",
    description: "You work with a consistent team who understand your business and can help with questions and follow-up.",
  },
];

export function AboutPrecisionSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white px-[clamp(1.5rem,8vw,12rem)] py-[clamp(4rem,7vw,8rem)]">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center">
          <p className="text-[clamp(0.82rem,0.72vw,0.9rem)] font-medium uppercase tracking-[0.18em] text-[#091c2f]">{t("Our Approach")}</p>
          <h2 className="mx-auto mt-7 max-w-[50rem] text-[clamp(2.15rem,2.55vw,3rem)] font-medium leading-[1.18] text-[#03101c]">{t("How we work with our clients")}</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {t(steps.map((step, index) => (
            <article key={step.title} className={`rounded-[20px] p-7 ${index === 3 ? "bg-[#091c2f] text-white" : "bg-[#f3f3f3] text-[#03101c]"}`}>
              <p aria-hidden="true" className="text-4xl font-medium text-[#d88a2e]">{t(String(index + 1).padStart(2, "0"))}</p>
              <h3 className="mt-8 text-xl font-medium leading-snug">{t(step.title)}</h3>
              <p className={`mt-5 text-base leading-relaxed ${index === 3 ? "text-white/85" : "text-[#3c3d4b]"}`}>{t(step.description)}</p>
            </article>
          )))}
        </div>
      </div>
    </section>
  );
}
