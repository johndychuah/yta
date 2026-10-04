import Image from "next/image";

const featureCopy =
  "We start by understanding your business, risks, and deadlines, then scope the engagement around them.";

function DoubleTriangleIcon() {
  return (
    <span className="flex h-8 items-center gap-0.5" aria-hidden="true">
      <span className="h-0 w-0 border-y-[11px] border-l-[18px] border-y-transparent border-l-[#f6a400]" />
      <span className="h-0 w-0 border-y-[11px] border-l-[18px] border-y-transparent border-l-[#f6a400]" />
    </span>
  );
}

function DiamondIcon() {
  return (
    <span className="flex h-8 items-center" aria-hidden="true">
      <span className="h-5 w-5 rotate-45 border-2 border-[#153c8b]" />
      <span className="-ml-1 h-5 w-5 rotate-45 bg-[#153c8b]" />
    </span>
  );
}

function WheelIcon() {
  return (
    <span
      className="relative block size-8 rounded-full border-2 border-[#f6a400]"
      aria-hidden="true"
    >
      {[0, 45, 90, 135].map((rotation) => (
        <span
          key={rotation}
          className="absolute left-1/2 top-1/2 h-[2px] w-6 -translate-x-1/2 -translate-y-1/2 bg-[#f6a400]"
          style={{ transform: `translate(-50%, -50%) rotate(${rotation}deg)` }}
        />
      ))}
    </span>
  );
}

export function AboutPrecisionSection() {
  return (
    <section className="bg-white px-[clamp(1.5rem,8vw,12rem)] py-[clamp(4rem,7vw,8rem)]">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center">
          <p className="text-[clamp(0.82rem,0.72vw,0.9rem)] font-medium uppercase tracking-[0.18em] text-[#091c2f]">
            Our Approach
          </p>
          <h2 className="mx-auto mt-7 max-w-[50rem] text-[clamp(2.15rem,2.55vw,3rem)] font-medium leading-[1.18] tracking-normal text-[#03101c]">
            How we work with our clients
          </h2>
        </div>

        <div className="mt-[clamp(3rem,4.5vw,4.25rem)] grid gap-8 lg:grid-cols-3 lg:items-stretch">
          <article className="rounded-[20px] bg-white p-[clamp(1.5rem,1.7vw,2rem)] shadow-[0_28px_70px_rgba(9,28,47,0.08)]">
            <div className="relative h-[clamp(10.5rem,10vw,12.5rem)] overflow-hidden rounded-[8px]">
              <Image
                src="/accounting-documents.png"
                alt="Accounting documents and financial reports"
                fill
                sizes="(min-width: 1024px) 376px, 88vw"
                className="object-cover object-center"
                loading="eager"
              />
            </div>

            <div className="mt-[clamp(2rem,2.4vw,2.9rem)]">
              <DoubleTriangleIcon />
              <h3 className="mt-7 text-[clamp(1.18rem,1.05vw,1.3rem)] font-medium leading-snug tracking-normal text-[#03101c]">
                Understand first
              </h3>
              <p className="mt-8 text-[clamp(0.98rem,0.84vw,1.03rem)] font-medium leading-[1.55] tracking-[0.03em] text-[#3c3d4b]">
                {featureCopy}
              </p>
            </div>
          </article>

          <article className="relative min-h-[clamp(28rem,29vw,33rem)] overflow-hidden rounded-[20px] bg-[#f7f7f7] p-[clamp(1.5rem,1.7vw,2rem)]">
            <div className="relative z-10">
              <h3 className="text-[clamp(1.18rem,1.05vw,1.3rem)] font-medium leading-snug tracking-normal text-[#03101c]">
                Senior-led throughout
              </h3>
              <p className="mt-9 max-w-[21rem] text-[clamp(0.98rem,0.84vw,1.03rem)] font-medium leading-[1.55] tracking-[0.03em] text-[#3c3d4b]">
                Senior people are involved from planning to completion, so
                issues are identified and resolved early.
              </p>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-[58%] overflow-hidden">
              <Image
                src="/about-hero-accounting-desk.png"
                alt="Professional accounting workspace"
                fill
                sizes="(min-width: 1024px) 376px, 88vw"
                className="object-cover object-[42%_54%]"
                loading="eager"
              />
            </div>
          </article>

          <div className="grid gap-8">
            <article className="rounded-[20px] bg-white p-[clamp(1.5rem,1.7vw,2rem)] shadow-[0_28px_70px_rgba(9,28,47,0.08)]">
              <DiamondIcon />
              <h3 className="mt-[clamp(2rem,2.4vw,2.9rem)] text-[clamp(1.18rem,1.05vw,1.3rem)] font-medium leading-snug tracking-normal text-[#03101c]">
                Clear reporting
              </h3>
              <p className="mt-8 text-[clamp(0.98rem,0.84vw,1.03rem)] font-medium leading-[1.55] tracking-[0.03em] text-[#3c3d4b]">
                Findings come with plain-language explanations and practical
                recommendations for management.
              </p>
            </article>

            <article className="grid min-h-[10rem] grid-cols-[1fr_minmax(7.5rem,10.8rem)] items-center gap-5 rounded-[20px] bg-[#091c2f] p-[clamp(1.5rem,1.7vw,2rem)] text-white">
              <div>
                <WheelIcon />
                <h3 className="mt-9 text-[clamp(1.18rem,1.05vw,1.3rem)] font-medium leading-snug tracking-normal">
                  Ongoing support
                </h3>
              </div>

              <div className="relative h-[clamp(5.5rem,5.8vw,6.75rem)] overflow-hidden rounded-[8px]">
                <Image
                  src="/about-story-meeting.png"
                  alt="Advisors and clients in a consultation"
                  fill
                  sizes="(min-width: 1024px) 173px, 38vw"
                  className="object-cover object-center"
                  loading="eager"
                />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
