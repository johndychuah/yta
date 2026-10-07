import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="w-full px-0">
      <div className="relative isolate min-h-[clamp(34rem,44vw,56.25rem)] overflow-hidden rounded-none bg-slate-900 lg:rounded-[20px]">
        <Image
          src="/images/home/klcc-refined.webp"
          alt="Kuala Lumpur skyline with the Petronas Twin Towers"
          fill
          preload
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 flex min-h-[clamp(34rem,44vw,56.25rem)] items-end px-[clamp(1.5rem,5.9vw,7.5rem)] pb-[clamp(2rem,3.2vw,4rem)] lg:pb-[clamp(1rem,0.8vw,1rem)]">
          <div className="w-full max-w-[clamp(22rem,34.5vw,43.8125rem)] rounded-[10px] bg-[#0a2035]/40 px-5 py-6 text-white sm:px-[clamp(1.75rem,2.45vw,3.125rem)] sm:py-[clamp(2rem,3.4vw,5.625rem)] lg:pb-[clamp(2rem,1.9vw,2.375rem)]">
            <h1 className="max-w-[30.625rem] text-[clamp(1.8rem,7.2vw,2.2rem)] font-medium leading-[1.18] tracking-normal sm:text-[clamp(2rem,2.55vw,3.05rem)]">
              Audit and advisory you can rely on
            </h1>

            <p className="mt-5 max-w-[31rem] text-[clamp(0.95rem,0.9vw,1.08rem)] leading-[1.65] tracking-[0.02em] text-white/85">
              Partner-led audit, corporate advisory, and restructuring support
              for multinational companies, government-linked companies,
              family-owned companies, and SMEs, backed by
              more than three decades of practice in Malaysia.
            </p>

            <Link
              href="/contact#enquiry"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#ffad50] px-4 py-3 text-sm font-semibold tracking-[0.04em] text-[#03101c] transition hover:bg-[#ffc174] sm:mt-8 sm:w-auto sm:px-7"
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
