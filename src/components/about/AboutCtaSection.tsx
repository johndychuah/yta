import Image from "next/image";
import Link from "next/link";

export function AboutCtaSection() {
  return (
    <section className="bg-white px-[clamp(1rem,4vw,4.75rem)] pb-[clamp(2rem,4vw,4rem)]">
      <div className="relative isolate mx-auto min-h-[clamp(27rem,34vw,40rem)] max-w-[1800px] overflow-hidden rounded-[6px] px-[clamp(1.5rem,10.5vw,12rem)] py-[clamp(5rem,9vw,11rem)] text-white">
        <Image
          src="/about-cta-coins.png"
          alt="Hands holding coins as a symbol of trusted financial advisory"
          fill
          sizes="(min-width: 1280px) 1800px, 94vw"
          className="object-cover object-[62%_50%]"
          priority
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
            Looking for an audit or advisory partner you can rely on? Talk to our team
          </h2>

          <Link
            href="/contact"
            className="mt-[clamp(2rem,3vw,3rem)] inline-flex h-[53px] min-w-[230px] items-center justify-center gap-4 rounded-full bg-[#ffad50] px-8 text-[clamp(0.8rem,0.72vw,0.87rem)] font-medium tracking-[0.6px] text-[#03101c] transition hover:bg-[#ffc174]"
          >
            <span>Schedule a consultation</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
