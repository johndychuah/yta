import Image from "next/image";

export function ServicesHeroSection() {
  return (
    <section className="bg-white px-[clamp(1.5rem,8vw,12rem)] py-[clamp(3.5rem,6vw,6rem)]">
      <div className="mx-auto max-w-[1250px] text-center">
        <p className="text-[clamp(0.78rem,0.68vw,0.85rem)] font-medium uppercase tracking-[0.2em] text-[#091c2f]">
          Services for Malaysian businesses
        </p>

        <h1 className="mx-auto mt-6 max-w-[60rem] text-[clamp(2rem,2.15vw,2.65rem)] font-semibold leading-[1.35] tracking-normal text-[#03101c]">
          Audit, advisory and restructuring for Malaysian businesses
        </h1>

        <p className="mx-auto mt-6 max-w-[48rem] text-[clamp(1rem,0.95vw,1.12rem)] font-medium leading-[1.65] tracking-[0.03em] text-[#4b4d5c]">
          From statutory audits to IPOs and turnarounds, every engagement is
          led by a partner or director.
        </p>

        <div className="relative mt-[clamp(2.5rem,4vw,3.5rem)] h-[clamp(13rem,35vw,31.75rem)] overflow-hidden rounded-[8px]">
          <Image
            src="/accounting-documents.png"
            alt="Accounting documents and financial charts prepared for advisory services"
            fill
            priority
            sizes="(min-width: 1280px) 1250px, 88vw"
            className="object-cover object-[48%_50%]"
          />
        </div>
      </div>
    </section>
  );
}
