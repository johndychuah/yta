import Link from "next/link";

export function IntroSection() {
  return (
    <section className="bg-white px-[clamp(1.25rem,6.25vw,7.5rem)] pt-[clamp(4rem,6vw,7rem)]">
      <div className="mx-auto max-w-[1138px] border-b border-[#d8d8d8] pb-[clamp(3rem,5vw,5rem)]">
        <p className="text-[clamp(0.7rem,0.72vw,0.85rem)] font-medium uppercase tracking-[0.16em] text-[#091c2f]">
          About YT Associates
        </p>

        <p className="mt-6 max-w-[56rem] text-[clamp(1.35rem,1.6vw,1.9rem)] font-medium leading-[1.45] text-[#03101c]">
          An audit is not a formality. It is a safeguard for your business. For
          more than three decades, our partners have helped Malaysian companies
          meet their reporting obligations, prepare for growth, and navigate
          difficult periods with confidence.
        </p>

        <p className="mt-6 max-w-[48rem] text-[clamp(0.95rem,0.85vw,1rem)] leading-[1.7] tracking-[0.02em] text-[#4b4d5c]">
          Our roots go back to Peter Tang &amp; Associates, founded in 1992 by
          2 former PwC professionals. Today, YT Associates (AF1112) serves public
          listed companies, government-linked companies, multinationals, SMEs,
          family-owned businesses, and non-profit organisations from our office
          in KL Eco City.
        </p>

        <Link
          href="/about-us"
          className="mt-6 inline-flex items-center gap-2 text-[clamp(0.95rem,0.85vw,1rem)] font-semibold text-[#1f5f9e]"
        >
          <span>Learn more about us</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
