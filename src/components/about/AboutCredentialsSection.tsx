import Image from "next/image";
import Link from "next/link";

const bodies = [
  {
    name: "Malaysian Institute of Accountants",
    abbreviation: "MIA",
    logo: "/professional-bodies/mia.png",
  },
  {
    name: "Association of Chartered Certified Accountants",
    abbreviation: "ACCA",
    logo: "/professional-bodies/acca.svg",
  },
  {
    name: "Malaysian Institute of Certified Public Accountants",
    abbreviation: "MICPA",
    logo: "/professional-bodies/micpa.png",
  },
  {
    name: "Chartered Tax Institute of Malaysia",
    abbreviation: "CTIM",
    logo: "/professional-bodies/ctim-logo.png",
  },
  {
    name: "CPA Australia",
    abbreviation: "CPA",
    logo: "/professional-bodies/cpa-australia.png",
    wide: true,
  },
];

export function AboutCredentialsSection() {
  return (
    <section className="bg-[#f3f3f3] px-[clamp(1.5rem,8vw,12rem)] py-[clamp(4rem,7vw,8rem)]">
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[minmax(18rem,0.72fr)_minmax(30rem,1.28fr)] lg:items-end">
        <div>
          <p className="text-[clamp(0.78rem,0.7vw,0.88rem)] font-medium uppercase tracking-[0.18em] text-[#596575]">
            Credentials
          </p>
          <h2 className="mt-6 max-w-[27rem] text-[clamp(2rem,2.2vw,2.65rem)] font-medium leading-[1.18] tracking-normal text-[#03101c]">
            Members of leading professional bodies
          </h2>
          <p className="mt-5 max-w-[27rem] text-[clamp(0.95rem,0.85vw,1rem)] font-medium leading-[1.6] tracking-[0.03em] text-[#3c3d4b]">
            Our partners and directors are Chartered Accountants of the
            Malaysian Institute of Accountants and Fellows of ACCA, with further
            memberships of MICPA, CPA Australia, and the Chartered Tax Institute
            of Malaysia. YT Associates is a registered audit firm (AF1112).
          </p>
          <p className="mt-4 max-w-[27rem] text-sm leading-6 text-[#596575]">Memberships relate to individual professionals. Names and logos identify the organisations and do not imply their endorsement of our services.</p>
          <Link
            href="/professional-bodies"
            className="mt-8 inline-flex items-center gap-3 text-[0.95rem] font-semibold tracking-[0.02em] text-[#1f5f9e] transition hover:text-[#03101c]"
          >
            View professional bodies
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {bodies.map((body) => (
            <article
              key={body.abbreviation}
              className={`${"wide" in body ? "sm:col-span-2 " : ""}flex min-h-[11.5rem] flex-col justify-between rounded-[10px] bg-white p-6 shadow-[0_18px_45px_rgba(9,28,47,0.06)]`}
            >
              <div className="flex h-14 items-center">
                {body.logo ? (
                  <div className="relative h-12 w-36 max-w-full">
                    <Image
                      src={body.logo}
                      alt={`${body.name} logo`}
                      fill
                      sizes="144px"
                      className={
                        body.abbreviation === "CPA" || body.abbreviation === "CTIM"
                          ? "object-cover"
                          : "object-contain object-left"
                      }
                    />
                  </div>
                ) : (
                  <span className="inline-flex size-12 items-center justify-center rounded-full bg-[#ffad50] text-[0.78rem] font-semibold tracking-[0.08em] text-[#03101c]">
                    {body.abbreviation}
                  </span>
                )}
              </div>
              <h3 className="mt-5 max-w-[16rem] text-[clamp(1rem,0.95vw,1.15rem)] font-semibold leading-snug text-[#03101c]">
                {body.name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
