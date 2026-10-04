import Link from "next/link";

export function AboutLocationSection() {
  return (
    <section className="bg-white px-[clamp(1.5rem,8vw,12rem)] py-[clamp(4rem,7vw,8rem)]">
      <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[minmax(18rem,0.86fr)_minmax(28rem,1.14fr)] lg:items-stretch">
        <div className="rounded-[12px] bg-[#091c2f] p-[clamp(1.75rem,3vw,3.5rem)] text-white">
          <p className="text-[clamp(0.78rem,0.7vw,0.88rem)] font-medium uppercase tracking-[0.18em] text-[#ffad50]">
            Our Kuala Lumpur Office
          </p>
          <h2 className="mt-6 max-w-[28rem] text-[clamp(2rem,2.2vw,2.65rem)] font-medium leading-[1.18] tracking-normal">
            Local perspective for Malaysian businesses
          </h2>
          <p className="mt-5 max-w-[29rem] text-[clamp(0.95rem,0.85vw,1rem)] font-medium leading-[1.65] tracking-[0.03em] text-white/82">
            From KL Eco City, our team supports organisations navigating audit,
            reporting, transactions, restructuring, and operational change.
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-flex h-[53px] items-center justify-center gap-4 rounded-full bg-[#ffad50] px-7 text-[0.9rem] font-medium tracking-[0.04em] text-[#03101c] transition hover:bg-[#ffc174]"
          >
            Contact our office
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="relative overflow-hidden rounded-[12px] bg-[#ffad50] p-[clamp(1.75rem,3vw,3.5rem)]">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(3,16,28,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(3,16,28,0.16)_1px,transparent_1px)] [background-size:46px_46px]"
          />
          <div className="relative flex h-full min-h-[19rem] flex-col justify-between text-[#03101c]">
            <span className="inline-flex size-16 items-center justify-center rounded-full bg-[#091c2f] text-3xl text-white shadow-[0_18px_35px_rgba(3,16,28,0.2)]">
              ⌖
            </span>
            <div className="max-w-[29rem] rounded-[10px] bg-white/94 p-6 shadow-[0_18px_45px_rgba(9,28,47,0.12)]">
              <p className="text-[0.76rem] font-semibold uppercase tracking-[0.16em] text-[#596575]">
                KL Eco City Office
              </p>
              <address className="mt-4 not-italic text-[clamp(1rem,0.92vw,1.1rem)] font-medium leading-[1.55] tracking-[0.02em]">
                SO-11-5 Menara 1, KL Eco City
                <br />
                3 Jalan Bangsar
                <br />
                59200 Kuala Lumpur, Malaysia
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
