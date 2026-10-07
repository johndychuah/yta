import Image from "next/image";

const groups = [
  {
    label: "Accounting & Professional Bodies",
    description:
      "Key professional bodies for accounting, taxation, audit, and assurance standards.",
    items: [
      {
        name: "Malaysian Institute of Accountants",
        abbreviation: "MIA",
        href: "https://www.mia.org.my",
        logo: "/professional-bodies/mia.png",
      },
      {
        name: "Chartered Tax Institute of Malaysia",
        abbreviation: "CTIM",
        href: "https://www.ctim.org.my",
        logo: "/professional-bodies/ctim-logo.png",
      },
      {
        name: "Malaysian Institute of Certified Public Accountants",
        abbreviation: "MICPA",
        href: "https://www.micpa.com.my",
        logo: "/professional-bodies/micpa.png",
      },
      {
        name: "CPA Australia",
        abbreviation: "CPA",
        href: "https://www.cpaaustralia.com.au",
        logo: "/professional-bodies/cpa-australia.png",
      },
    ],
  },

];

export function ProfessionalBodiesPageContent() {
  return (
    <>
      <section className="bg-white px-[clamp(1.5rem,8vw,12rem)] py-[clamp(4rem,7vw,8rem)]">
        <div className="mx-auto grid max-w-[1280px] gap-[clamp(3rem,6vw,7rem)] lg:grid-cols-[minmax(0,0.9fr)_minmax(28rem,1fr)] lg:items-center">
          <div>
            <p className="text-[clamp(0.82rem,0.72vw,0.9rem)] font-medium uppercase tracking-[0.18em] text-[#091c2f]">
              Professional Bodies
            </p>
            <h1 className="mt-7 max-w-[44rem] text-[clamp(2rem,7.2vw,2.4rem)] sm:text-[clamp(2.4rem,3.1vw,4rem)] font-medium leading-[1.16] tracking-normal text-[#03101c]">
              Trusted References for Compliance & Professional Standards
            </h1>
            <p className="mt-7 max-w-[36rem] text-[clamp(1rem,0.95vw,1.12rem)] font-medium leading-[1.65] tracking-[0.03em] text-[#3c3d4b]">
              A curated directory of professional bodies relevant to audit,
              accounting, taxation, and professional standards.
            </p>
            <p className="mt-5 max-w-[36rem] text-sm leading-6 text-[#596575]">These links are provided for reference. Names and logos belong to their respective organisations and do not imply endorsement of our firm or services.</p>
          </div>

          <div className="relative h-48 sm:h-[clamp(17rem,26vw,31rem)] overflow-hidden rounded-[10px]">
            <Image
              src="/images/editorial/excellence.webp"
              alt="Illustrative professional studying financial reporting standards"
              fill
              priority
              sizes="(min-width: 1024px) 610px, 88vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f3f3f3] px-[clamp(1.5rem,8vw,12rem)] py-[clamp(4rem,7vw,8rem)]">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-[clamp(2rem,3vw,3rem)]">
            {groups.map((group, groupIndex) => (
              <section
                key={group.label}
                className="grid gap-8 border-t border-[#03101c]/15 pt-[clamp(2.5rem,4vw,4rem)] first:border-t-0 first:pt-0 lg:grid-cols-[minmax(18rem,25rem)_1fr]"
              >
                <div>
                  <p className="text-[clamp(0.8rem,0.7vw,0.88rem)] font-medium uppercase tracking-[0.16em] text-[#596575]">
                    0{groupIndex + 1}
                  </p>
                  <h2 className="mt-5 max-w-[24rem] text-[clamp(1.55rem,1.55vw,1.95rem)] font-medium leading-tight tracking-normal text-[#03101c]">
                    {group.label}
                  </h2>
                  <p className="mt-5 max-w-[23rem] text-[clamp(0.95rem,0.85vw,1rem)] font-medium leading-[1.6] tracking-[0.03em] text-[#3c3d4b]">
                    {group.description}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {group.items.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex min-h-[11rem] flex-col justify-between rounded-[8px] bg-white p-6 text-[#03101c] transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(9,28,47,0.12)]"
                    >
                      <span className="flex h-16 w-full items-center">
                        {item.logo ? (
                          <span className={`relative block h-14 max-w-full ${item.abbreviation === "CTIM" ? "w-[6.25rem] overflow-hidden" : "w-[10.5rem]"}`}>
                            <Image
                              src={item.logo}
                              alt={`${item.name} logo`}
                              fill
                              sizes="168px"
                              className={
                                item.abbreviation === "CTIM"
                                  ? "object-cover scale-200"
                                  : item.abbreviation === "CPA"
                                    ? "object-cover"
                                    : "object-contain object-left"
                              }
                            />
                          </span>
                        ) : (
                          <span className="inline-flex size-14 items-center justify-center rounded-full bg-[#ffad50] text-[0.82rem] font-semibold tracking-[0.08em] text-[#03101c]">
                            {item.abbreviation}
                          </span>
                        )}
                      </span>
                      <span>
                        <span className="block text-[clamp(1.05rem,0.95vw,1.14rem)] font-semibold leading-snug">
                          {item.name}
                        </span>
                        <span className="mt-5 inline-flex items-center gap-3 text-[0.9rem] font-semibold text-[#1f5f9e]">
                          Visit website
                          <span
                            aria-hidden="true"
                            className="transition group-hover:translate-x-1"
                          >
                            ↗
                          </span>
                        </span>
                      </span>
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
