import Image from "next/image";
import Link from "next/link";

export function AboutCtaSection({
  contactHref = "/contact#enquiry",
  title = "Looking for an audit or advisory partner you can rely on? Talk to our team",
  buttonLabel = "Schedule a consultation",
}: {
  contactHref?: string;
  title?: string;
  buttonLabel?: string;
}) {
  return (
    <section className="bg-white px-[clamp(1rem,4vw,4.75rem)] pb-[clamp(2rem,4vw,4rem)]">
      <div className="relative isolate mx-auto min-h-[clamp(27rem,34vw,40rem)] max-w-[1800px] overflow-hidden rounded-[6px] px-[clamp(1.5rem,10.5vw,12rem)] py-[clamp(5rem,9vw,11rem)] text-white">
        <Image
          src="/images/editorial/business-district.webp"
          alt="Illustrative Malaysian business district in warm morning light"
          fill
          sizes="(min-width: 1280px) 1800px, 94vw"
          className="object-cover object-[62%_50%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#03101c]/52"
        />
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-[58%] bg-gradient-to-r from-[#03101c]/45 to-transparent"
        />

        <div className="relative z-10 max-w-[35rem]">
          <h2 className="max-w-[31rem] text-[clamp(2rem,2vw,2.5rem)] font-medium leading-[1.22] tracking-normal">
            {title}
          </h2>

          <Link
            href={contactHref}
            className="mt-[clamp(2rem,3vw,3rem)] inline-flex min-h-[53px] w-full min-w-0 items-center justify-center gap-3 rounded-full bg-[#ffad50] px-4 py-3 text-sm font-medium tracking-[0.6px] text-[#03101c] transition hover:bg-[#ffc174] sm:w-auto sm:min-w-[230px] sm:px-8"
          >
            <span>{buttonLabel}</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
