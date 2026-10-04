import Image from "next/image";
import Link from "next/link";

export function AboutStorySection() {
  return (
    <section className="bg-white px-[clamp(1.5rem,8vw,12rem)] py-[clamp(4rem,7vw,8.5rem)]">
      <div className="mx-auto max-w-[1292px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-[clamp(0.82rem,0.72vw,0.9rem)] font-medium uppercase tracking-[0.16em] text-[#091c2f]">
              Our Story
            </p>
            <h2 className="mt-6 max-w-[30rem] text-[clamp(2.25rem,2vw,2.5rem)] font-medium leading-[1.26] tracking-normal text-[#03101c]">
              From boutique practice to trusted audit firm
            </h2>
          </div>

          <Link
            href="/contact"
            className="inline-flex h-[53px] w-fit min-w-[176px] items-center justify-center gap-6 rounded-full bg-[#ffad50] px-8 text-[clamp(0.95rem,0.85vw,1rem)] font-medium tracking-[0.03em] text-[#03101c] transition hover:bg-[#ffc174] lg:mt-14"
          >
            <span>Contact Us</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="mt-[clamp(3rem,5vw,5rem)] grid gap-[clamp(3rem,6vw,5rem)] xl:grid-cols-[minmax(28rem,39.6rem)_minmax(32rem,1fr)] xl:items-start">
          <div className="relative mx-auto min-h-[clamp(28rem,43vw,41rem)] w-full max-w-[39.6rem] xl:mx-0">
            <div className="absolute left-0 top-0 h-[clamp(22rem,33vw,39.7rem)] w-[min(61%,23.5rem)] overflow-hidden">
              <Image
                src="/about-story-advisor.png"
                alt="Experienced professional advisor holding financial documents"
                fill
                sizes="(min-width: 1280px) 376px, 60vw"
                className="object-cover object-center"
              />
            </div>

            <div className="absolute bottom-0 right-0 h-[clamp(17rem,27vw,29.2rem)] w-[min(61%,23.5rem)] overflow-hidden">
              <Image
                src="/about-story-meeting.png"
                alt="Advisor and client reviewing financial reports"
                fill
                sizes="(min-width: 1280px) 376px, 62vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="text-[#3c3d4b]">
            <div className="flex items-center gap-7 text-[#03101c]">
              <p className="text-[clamp(4.25rem,4.5vw,5.4rem)] font-medium leading-none tracking-normal">
                1992
              </p>
              <p className="max-w-28 text-[clamp(0.95rem,0.85vw,1rem)] font-medium leading-[1.58] tracking-[0.03em]">
                Peter Tang & Associates founded
              </p>
            </div>

            <div className="mt-6 space-y-7 text-[clamp(1rem,0.85vw,1.05rem)] leading-[1.58] tracking-[0.03em]">
              <p>
                Our story began in 1992, when Dato&apos; Peter Tang and Yeo Eng
                Thong, both alumni of what is now PwC, established Peter Tang &amp;
                Associates. The boutique firm built its reputation in
                accounting, tax, and corporate finance, helping growing
                companies prepare for listing on the then KLSE Second Board.
              </p>

              <p>
                As the practice grew, its parent group was restructured and
                listed on the Catalist board of the Singapore Exchange as
                Axcelasia Inc. The audit practice continued as YT Associates,
                with Yeo Eng Thong leading the transition and keeping the same
                experienced team and long-standing client relationships.
              </p>

              <p>
                Today, YT Associates (AF1112) combines Big Four-trained
                leadership with the personal attention of a boutique practice.
                Our risk-focused, data-driven approach helps clients meet their
                reporting obligations while strengthening controls and
                decision-making.
              </p>
            </div>

            <p className="mt-8 text-[clamp(1.5rem,1.3vw,1.6rem)] font-medium leading-[1.45] tracking-normal text-[#03101c]">
              Together, YT Associates and Peter Tang &amp; Associates provide
              audit, corporate advisory, restructuring, accounting, and payroll
              services to Malaysian businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
