import Link from "next/link";

export function HomeCtaSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#091c2f] px-6 py-[clamp(5rem,8vw,8rem)] text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:64px_64px]"
      />

      <div className="relative z-10 mx-auto flex max-w-[38rem] flex-col items-center justify-center text-center">
        <div className="flex items-center gap-3">
          <span className="inline-flex size-7 items-center justify-center rounded-full bg-white text-lg leading-none text-[#091c2f]">
            +
          </span>
          <p className="text-[clamp(0.75rem,0.72vw,0.875rem)] font-medium uppercase tracking-[0.16em] text-[#ffad50]">
            Start a conversation
          </p>
        </div>

        <h2 className="mt-8 text-[clamp(2rem,1.95vw,2.35rem)] font-medium leading-[1.34] tracking-normal text-white">
          Talk to a partner about your audit, transaction, or business challenge
        </h2>

        <p className="mt-5 text-[clamp(0.95rem,0.85vw,1rem)] leading-[1.65] text-white/75">
          Call us on{" "}
          <a href="tel:+60327284819" className="font-semibold text-white underline-offset-4 hover:underline">
            +603 2728 4819
          </a>{" "}
          or send an enquiry, and we will respond within one working day.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-[53px] w-full min-w-0 items-center justify-center gap-4 rounded-full bg-[#ffad50] px-5 py-3 text-sm font-medium tracking-[0.6px] text-[#03101c] transition hover:bg-[#ffc174] sm:w-auto sm:min-w-[259px] sm:px-8"
        >
          <span>Get in Touch Today</span>
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
