import Link from "next/link";
import { OfficeMap, officeMapsUrl } from "@/components/common/OfficeMap";

export function AboutLocationSection() {
  return (
    <section className="bg-white px-[clamp(1.5rem,8vw,12rem)] py-[clamp(4rem,7vw,8rem)]">
      <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[minmax(18rem,0.86fr)_minmax(28rem,1.14fr)] lg:items-stretch">
        <div className="rounded-[12px] bg-[#091c2f] p-[clamp(1.75rem,3vw,3.5rem)] text-white">
          <p className="text-[clamp(0.78rem,0.7vw,0.88rem)] font-medium uppercase tracking-[0.18em] text-[#ffad50]">
            Our Kuala Lumpur Office
          </p>
          <h2 className="mt-6 max-w-[28rem] text-[clamp(2rem,2.2vw,2.65rem)] font-medium leading-[1.18] tracking-normal">
            Visit us at KL Eco City
          </h2>
          <p className="mt-5 max-w-[29rem] text-[clamp(0.95rem,0.85vw,1rem)] font-medium leading-[1.65] tracking-[0.03em] text-white/82">
            Our office is in Menara 1, KL Eco City, close to Mid Valley and
            Abdullah Hukum LRT station. We welcome meetings by appointment.
          </p>
          <address className="mt-6 border-l-2 border-[#ffad50] pl-4 not-italic text-[clamp(0.95rem,0.85vw,1rem)] font-medium leading-[1.6] tracking-[0.02em] text-white">
            SO-29-1 Menara 1, KL Eco City
            <br />
            3 Jalan Bangsar
            <br />
            59200 Kuala Lumpur, Malaysia
          </address>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              href="/contact"
              className="inline-flex h-[53px] items-center justify-center gap-4 rounded-full bg-[#ffad50] px-7 text-[0.9rem] font-medium tracking-[0.04em] text-[#03101c] transition hover:bg-[#ffc174]"
            >
              Contact our office
              <span aria-hidden="true">↗</span>
            </Link>
            <a
              href={officeMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[0.9rem] font-semibold tracking-[0.02em] text-white transition hover:text-[#ffad50]"
            >
              Get directions <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="relative min-h-[clamp(26rem,28vw,28rem)] overflow-hidden rounded-[12px] bg-[#e8eaed]">
          <OfficeMap />
        </div>
      </div>
    </section>
  );
}
