import Image from "next/image";

type ValueCard = {
  title: string;
  description: string;
  image: string;
  alt: string;
  tone: "light" | "navy" | "orange";
  icon: "diamond" | "rings" | "wheel";
};

const values: ValueCard[] = [
  {
    title: "Integrity",
    description:
      "Independence and objectivity are the foundation of every audit we sign. We tell clients what they need to hear, clearly and professionally.",
    image: "/about-story-meeting.png",
    alt: "Professional advisor meeting with clients",
    tone: "light",
    icon: "diamond",
  },
  {
    title: "Excellence",
    description:
      "Our standards were shaped in Big Four practice. Every engagement, large or small, is planned, reviewed, and signed off with the same rigour.",
    image: "/why-choose-laptop-dashboard.png",
    alt: "Financial dashboard and accounting records on a laptop",
    tone: "navy",
    icon: "rings",
  },
  {
    title: "Personal Attention",
    description:
      "You work with a consistent team led by senior people who take the time to understand your business, your industry, and your people.",
    image: "/accounting-advisory-review.png",
    alt: "Accounting professionals discussing reports",
    tone: "orange",
    icon: "wheel",
  },
  {
    title: "Partnership",
    description:
      "We aim for long-term relationships, looking beyond this year's assignment to the reporting and strategic decisions your business faces next.",
    image: "/why-choose-laptop-dashboard.png",
    alt: "Digital accounting workspace with financial data",
    tone: "navy",
    icon: "rings",
  },
  {
    title: "Forward Thinking",
    description:
      "From e-invoicing to evolving reporting standards, we track regulatory change and use data analytics to work more efficiently and effectively.",
    image: "/accounting-advisory-review.png",
    alt: "Advisors reviewing business performance documents",
    tone: "orange",
    icon: "wheel",
  },
  {
    title: "Clarity",
    description:
      "We explain our findings in plain language, with practical recommendations that management can understand and act on.",
    image: "/about-story-meeting.png",
    alt: "Client meeting with accounting advisor",
    tone: "light",
    icon: "diamond",
  },
];

const toneClasses = {
  light: {
    card: "bg-[#f3f3f3] text-[#03101c]",
    body: "text-[#3c3d4b]",
    icon: "border-[#091c2f]",
  },
  navy: {
    card: "bg-[#091c2f] text-white",
    body: "text-white/82",
    icon: "border-[#ffad50]",
  },
  orange: {
    card: "bg-[#ffad50] text-[#03101c]",
    body: "text-[#27303a]",
    icon: "border-[#03101c]",
  },
};

function ValueIcon({
  variant,
  tone,
}: {
  variant: ValueCard["icon"];
  tone: ValueCard["tone"];
}) {
  const iconClass = toneClasses[tone].icon;

  if (variant === "diamond") {
    return (
      <span className="relative block h-9 w-9" aria-hidden="true">
        <span
          className={`absolute left-1/2 top-[6px] h-4 w-4 -translate-x-1/2 rotate-45 border-2 ${iconClass}`}
        />
        <span
          className={`absolute bottom-[6px] left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-2 ${iconClass}`}
        />
      </span>
    );
  }

  if (variant === "rings") {
    return (
      <span className="relative block h-9 w-9" aria-hidden="true">
        <span
          className={`absolute left-1 top-2 h-6 w-6 rounded-full border-2 ${iconClass}`}
        />
        <span
          className={`absolute left-4 top-0 h-6 w-6 rounded-full border-2 ${iconClass}`}
        />
      </span>
    );
  }

  return (
    <span
      className={`relative block h-9 w-9 rounded-full border-2 ${iconClass}`}
      aria-hidden="true"
    >
      {[0, 45, 90, 135].map((rotation) => (
        <span
          key={rotation}
          className={`absolute left-1/2 top-1/2 h-[2px] w-5 -translate-x-1/2 -translate-y-1/2 ${tone === "navy" ? "bg-[#ffad50]" : "bg-[#03101c]"}`}
          style={{ transform: `translate(-50%, -50%) rotate(${rotation}deg)` }}
        />
      ))}
    </span>
  );
}

export function AboutValuesSection() {
  return (
    <section className="bg-white px-[clamp(1.5rem,8vw,12rem)] py-[clamp(4rem,7vw,8.5rem)]">
      <div className="mx-auto max-w-[1260px]">
        <div className="text-center">
          <p className="text-[clamp(0.82rem,0.72vw,0.9rem)] font-medium uppercase tracking-[0.16em] text-[#596575]">
            Our Values
          </p>
          <h2 className="mt-5 text-[clamp(2.1rem,2vw,2.5rem)] font-medium leading-[1.22] tracking-normal text-[#03101c]">
            The principles behind every engagement
          </h2>
        </div>

        <div className="mt-[clamp(4rem,6.6vw,7.8rem)] grid gap-[clamp(1.5rem,2vw,1.875rem)] md:grid-cols-2 xl:grid-cols-3">
          {values.map((value) => {
            const tone = toneClasses[value.tone];

            return (
              <article
                key={value.title}
                className={`flex min-h-[clamp(26rem,29vw,28.5rem)] flex-col rounded-[20px] p-[clamp(1.5rem,1.7vw,2rem)] ${tone.card}`}
              >
                <ValueIcon variant={value.icon} tone={value.tone} />

                <h3 className="mt-6 text-[clamp(1.25rem,1.05vw,1.35rem)] font-medium leading-tight tracking-normal">
                  {value.title}
                </h3>
                <p
                  className={`mt-2 text-[clamp(0.98rem,0.83vw,1.03rem)] font-medium leading-[1.55] tracking-[0.03em] ${tone.body}`}
                >
                  {value.description}
                </p>

                <div className="relative mt-auto h-[clamp(10.2rem,10vw,11.25rem)] overflow-hidden rounded-[10px]">
                  <Image
                    src={value.image}
                    alt={value.alt}
                    fill
                    sizes="(min-width: 1280px) 348px, (min-width: 768px) 42vw, 86vw"
                    className="object-cover object-center"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
