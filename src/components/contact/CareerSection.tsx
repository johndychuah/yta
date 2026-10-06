import Image from "next/image";

const careerPoints = ["Professional development", "Internal training", "Mentorship culture", "Long-term growth"];

export function CareerSection({ standalone = false }: { standalone?: boolean }) {
  const Heading = standalone ? "h1" : "h2";
  return (
      <section
        id="career"
        className="bg-[#f3f3f3] px-[clamp(1.5rem,8vw,12rem)] py-[clamp(4rem,7vw,8rem)]"
      >
        <div className={`mx-auto grid max-w-[1280px] gap-[clamp(2rem,5vw,5rem)] ${standalone ? "lg:grid-cols-2 lg:items-center" : ""}`}>
          {standalone ? <div className="relative aspect-[7/4] overflow-hidden rounded-[10px]">
            <Image
              src="/images/editorial/mentoring.webp"
              alt="Illustrative mentor helping younger professionals develop their skills"
              fill
              sizes="(min-width: 1024px) 610px, 88vw"
              className="object-cover object-center"
            />
          </div> : null}

          <div>
            <p className="text-[clamp(0.78rem,0.7vw,0.88rem)] font-medium uppercase tracking-[0.18em] text-[#596575]">
              Career Opportunity
            </p>
            <Heading className="mt-6 max-w-[36rem] text-[clamp(1.9rem,2.25vw,2.75rem)] font-medium leading-[1.18] tracking-normal text-[#03101c]">
              Grow Your Career With Us
            </Heading>
            <p className="mt-5 max-w-[38rem] text-[clamp(0.95rem,0.85vw,1rem)] font-medium leading-[1.65] tracking-[0.03em] text-[#3c3d4b]">
              We welcome capable and driven individuals who want to develop
              their professional career in audit, tax, corporate finance,
              accounting, and advisory services.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {careerPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-[8px] bg-white px-5 py-4 text-[0.95rem] font-semibold text-[#03101c]"
                >
                  {point}
                </div>
              ))}
            </div>

            <a
              href="mailto:info@yta.com.my?subject=Career%20Opportunity%20Application"
              className="mt-9 inline-flex h-[53px] items-center justify-center gap-4 rounded-full bg-[#ffad50] px-8 text-[0.9rem] font-medium tracking-[0.04em] text-[#03101c] transition hover:bg-[#ffc174]"
            >
              Submit your resume
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

  );
}
