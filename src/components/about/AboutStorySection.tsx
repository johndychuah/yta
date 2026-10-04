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
              A Heritage of Professional Excellence
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
                Peter Tang & Associates practice
              </p>
            </div>

            <div className="mt-6 space-y-7 text-[clamp(1rem,0.85vw,1.05rem)] leading-[1.58] tracking-[0.03em]">
              <p>
                The story of YT Associates & Peter Tang & Associates is one of
                vision, expertise, and unwavering commitment to client service.
              </p>

              <p>
                Dato&apos; Peter Tang has led Peter Tang & Associates since 1992.
                His experience spans accounting, corporate services, tax
                compliance, tax advisory, valuations, due diligence, mergers and
                acquisitions, and IPO advisory work in Malaysia and overseas.
              </p>

              <p>
                Yeo Eng Thong brings more than 35 years of experience in
                professional accounting practice. His work includes audit,
                financial reporting, corporate matters, valuations, due
                diligence, mergers and acquisitions, and IPO advisory exercises.
              </p>

              <p>
                YT Associates applies a risk-focused approach to assurance work,
                combining assessment, audit testing, and practical observations
                to help clients improve financial reporting and address control
                deficiencies.
              </p>
            </div>

            <p className="mt-8 text-[clamp(1.5rem,1.3vw,1.6rem)] font-medium leading-[1.45] tracking-normal text-[#03101c]">
              Together, YT Associates and Peter Tang & Associates support
              organisations through audit, assurance, corporate finance,
              accounting, payroll, restructuring, and advisory work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
