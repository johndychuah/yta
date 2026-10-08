import { useTranslation } from "@/i18n/Locale";
import Image from "next/image";

export function AboutHeroSection() {
  const { t } = useTranslation();
  return (
    <section className="relative isolate overflow-hidden bg-[#091c2f] sm:min-h-[clamp(28rem,38.2vw,45.9rem)]">
      <Image
        src="/images/editorial/office.webp"
        alt={t("Illustrative contemporary professional office interior")}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex min-h-88 items-center px-6 py-12 sm:min-h-[clamp(28rem,38.2vw,45.9rem)] sm:px-[clamp(1.5rem,9.1vw,11rem)] sm:py-[clamp(4rem,7vw,8rem)]">
        <div className="max-w-[95rem]">
          <h1 className="max-w-[31rem] text-[clamp(2rem,7.2vw,2.4rem)] font-medium leading-[1.2] tracking-normal text-white sm:text-[clamp(2.4rem,2.5vw,3rem)] sm:leading-[1.28]">{t("Three decades of trusted audit and advisory")}</h1>
          <p className="mt-5 max-w-[95rem] text-[clamp(0.78rem,0.72vw,0.86rem)] font-medium uppercase leading-[1.7] tracking-[0.16em] text-white">{t("Big Four-trained partners. Personal attention. Serving multinationals, family businesses and SMEs since 1992")}</p>
        </div>
      </div>
    </section>
  );
}
