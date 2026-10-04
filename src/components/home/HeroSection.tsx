import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="w-full px-0">
      <div className="relative isolate min-h-[clamp(34rem,44vw,56.25rem)] overflow-hidden rounded-none bg-slate-900 lg:rounded-[20px]">
        <Image
          src="/hero-kl-skyline.png"
          alt="Kuala Lumpur skyline with the Petronas Twin Towers"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 flex min-h-[clamp(34rem,44vw,56.25rem)] items-end px-[clamp(1.5rem,5.9vw,7.5rem)] pb-[clamp(2rem,3.2vw,4rem)] lg:pb-[clamp(1rem,0.8vw,1rem)]">
          <div className="w-full max-w-[clamp(22rem,34.5vw,43.8125rem)] rounded-[10px] bg-[#0a2035]/80 px-[clamp(1.75rem,2.45vw,3.125rem)] py-[clamp(2rem,3.4vw,5.625rem)] text-white lg:pb-[clamp(2rem,1.9vw,2.375rem)]">
            <h1 className="max-w-[30.625rem] text-[clamp(2rem,2.55vw,3.05rem)] font-medium leading-[1.18] tracking-normal">
              Audit and advisory you can rely on, for{" "}
              <span className="text-[#ffad50]">Malaysian businesses</span>
            </h1>

            <p className="mt-5 max-w-[31rem] text-[clamp(0.95rem,0.9vw,1.08rem)] leading-[1.65] tracking-[0.02em] text-white/85">
              Partner-led audit, corporate advisory, and restructuring support
              for family-owned companies, SMEs, and listed groups, backed by
              more than 35 years of practice in Malaysia.
            </p>

            <Link
              href="/contact#enquiry"
              className="mt-8 inline-flex h-12 items-center justify-center gap-3 rounded-full bg-[#ffad50] px-7 text-sm font-semibold tracking-[0.04em] text-[#03101c] transition hover:bg-[#ffc174]"
            >
              <span>Book a consultation</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
