import Image from "next/image";

const stats = [
  { value: "35+", label: "Years of partner experience" },
  { value: "1992", label: "Practice established" },
  { value: "4", label: "Partners and directors, all FCCA" },
  { value: "6", label: "Client sectors served" },
];

type Highlight = {
  title: string;
  description: string;
  image: string;
  alt: string;
  tone: "orange" | "navy";
  icon: "diamond" | "rings" | "wheel";
};

const highlights: Highlight[] = [
  {
    title: "Partner-led attention",
    description:
      "Our partners stay involved from planning to sign-off. You deal directly with senior people who know your business, not a rotating team.",
    image: "/images/services/corporate.webp",
    alt: "Illustrative business advisory discussion",
    tone: "orange",
    icon: "diamond",
  },
  {
    title: "Big Four experience",
    description:
      "Our leaders trained at Price Waterhouse, PwC, and EY, and bring the same technical discipline to clients of every size, from family businesses to listed groups.",
    image: "/images/services/accounting.webp",
    alt: "Illustrative accountant working with digital financial records",
    tone: "navy",
    icon: "rings",
  },
  {
    title: "Value beyond the opinion",
    description:
      "Our risk-focused, data-driven audits highlight control weaknesses and practical improvements, so every engagement leaves your business stronger.",
    image: "/images/services/audit.webp",
    alt: "Illustrative audit team reviewing financial evidence",
    tone: "orange",
    icon: "wheel",
  },
];

function HighlightIcon({
  variant,
  tone,
}: {
  variant: "diamond" | "rings" | "wheel";
  tone: "orange" | "navy";
}) {
  const dark = tone === "navy";
  const color = dark ? "#ffad50" : "#03101c";

  if (variant === "diamond") {
    return (
      <span className="relative block h-10 w-10" aria-hidden="true">
        <span
          className="absolute left-1/2 top-[7px] h-5 w-5 -translate-x-1/2 rotate-45 border-2"
          style={{ borderColor: color }}
        />
        <span
          className="absolute bottom-[7px] left-1/2 h-5 w-5 -translate-x-1/2 rotate-45 border-2"
          style={{ borderColor: color }}
        />
      </span>
    );
  }

  if (variant === "rings") {
    return (
      <span className="relative block h-10 w-10" aria-hidden="true">
        <span
          className="absolute left-1 top-3 h-6 w-6 rounded-full border-2"
          style={{ borderColor: color }}
        />
        <span
          className="absolute left-4 top-1 h-6 w-6 rounded-full border-2"
          style={{ borderColor: color }}
        />
      </span>
    );
  }

  return (
    <span
      className="relative block size-10 rounded-full border-2"
      style={{ borderColor: color }}
      aria-hidden="true"
    >
      {[0, 45, 90, 135].map((rotation) => (
        <span
          key={rotation}
          className="absolute left-1/2 top-1/2 h-[2px] w-7 -translate-x-1/2 -translate-y-1/2"
          style={{
            backgroundColor: color,
            transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
          }}
        />
      ))}
    </span>
  );
}

export function AboutStatsHighlightsSection() {
  return (
    <section className="bg-white px-[clamp(1.5rem,6vw,7.5rem)] pb-[clamp(4.5rem,8vw,8rem)] pt-[clamp(3.5rem,6vw,6rem)]">
      <div className="mx-auto max-w-[1480px]">
        <div className="mx-auto grid max-w-[950px] grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center sm:border-r sm:border-black/12 ${
                index === stats.length - 1 ? "sm:border-r-0" : ""
              }`}
            >
              <p className="text-[clamp(2.7rem,3.8vw,4.6rem)] font-medium leading-none tracking-normal text-[#03101c]">
                {stat.value}
              </p>
              <p className="mt-4 text-[clamp(0.88rem,0.83vw,1rem)] font-medium leading-tight tracking-normal text-[#03101c]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-[clamp(5rem,7vw,7rem)] text-center text-[clamp(0.82rem,0.72vw,0.9rem)] font-medium uppercase tracking-[0.18em] text-[#091c2f]">
          Why Choose Us
        </p>

        <div className="mt-[clamp(3.5rem,5vw,5rem)] grid gap-[clamp(1.75rem,3vw,4rem)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.18fr)_minmax(0,1fr)] lg:items-center">
          {highlights.map((highlight, index) => {
            const isCenter = index === 1;
            const isNavy = highlight.tone === "navy";

            return (
              <article
                key={highlight.title}
                className={`mx-auto flex w-full max-w-[30rem] flex-col items-center rounded-[14px] p-[clamp(1.75rem,2.4vw,3rem)] text-center shadow-[7px_9px_10px_rgba(3,16,28,0.22)] ${
                  isCenter
                    ? "lg:min-h-[clamp(34rem,36vw,43rem)] bg-[#091c2f] text-white"
                    : "lg:min-h-[clamp(28rem,31vw,34.5rem)] bg-[#ffad50] text-[#03101c] lg:mt-[clamp(3rem,5vw,5.5rem)]"
                }`}
              >
                <HighlightIcon variant={highlight.icon} tone={highlight.tone} />

                <h3
                  className={`mt-[clamp(1.6rem,2vw,2.4rem)] text-[clamp(1.05rem,1vw,1.18rem)] font-medium leading-snug tracking-normal ${
                    isNavy ? "text-white" : "text-[#cf3030]"
                  }`}
                >
                  {highlight.title}
                </h3>

                <p
                  className={`mt-[clamp(1.5rem,2vw,2rem)] max-w-[24rem] text-[clamp(0.95rem,0.88vw,1.05rem)] font-medium leading-[1.62] tracking-[0.03em] ${
                    isNavy ? "text-white/88" : "text-[#03101c]"
                  }`}
                >
                  {highlight.description}
                </p>

                <div
                  className={`relative mt-6 w-full overflow-hidden lg:mt-auto rounded-[8px] ${
                    isCenter
                      ? "h-[clamp(9.5rem,10vw,12rem)] max-w-[22rem]"
                      : "h-[clamp(9rem,9.2vw,10.5rem)] max-w-[20.5rem]"
                  }`}
                >
                  <Image
                    src={highlight.image}
                    alt={highlight.alt}
                    fill
                    sizes={
                      isCenter
                        ? "(min-width: 1024px) 352px, 82vw"
                        : "(min-width: 1024px) 328px, 82vw"
                    }
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
