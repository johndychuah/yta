import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Our Services", href: "/services" },
  { label: "Professional Bodies", href: "/professional-bodies" },
  { label: "Career", href: "/career" },
];

const socialLinks = [
  { label: "Facebook", mark: "f", href: "#" },
  { label: "LinkedIn", mark: "in", href: "#" },
  { label: "X", mark: "x", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-white px-[clamp(1.5rem,6vw,7.5rem)] pt-[clamp(4rem,6.25vw,7.5rem)] text-[#03101c]">
      <div className="mx-auto max-w-[1386px]">
        <div className="grid gap-10 xl:grid-cols-[minmax(18rem,25.6rem)_minmax(8rem,1fr)_minmax(16rem,1fr)_minmax(16rem,1fr)] xl:gap-[clamp(3rem,5vw,6rem)]">
          <div>
            <h2 className="text-[clamp(1.6rem,1.55vw,1.875rem)] font-medium leading-[1.4] tracking-normal">
              About YT Associates, Peter Tang & Associates
            </h2>
            <p className="mt-5 max-w-[24.25rem] text-[clamp(0.95rem,0.85vw,1rem)] leading-[1.58] tracking-[0.03em] text-[#3c3d4b]">
              Audit, corporate advisory, restructuring, accounting, and payroll
              support for SMEs, family-owned businesses, and other organisations
              navigating reporting, transactions, and business change.
            </p>
          </div>

          <div>
            <h3 className="text-[clamp(1rem,0.96vw,1.15rem)] font-medium leading-7">
              Quick links
            </h3>
            <nav aria-label="Footer navigation" className="mt-8 grid gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[clamp(0.95rem,0.85vw,1rem)] leading-6 tracking-[0.03em] text-[#3c3d4b] transition hover:text-[#03101c]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-[clamp(1rem,0.96vw,1.15rem)] font-medium leading-7">
              Get in touch
            </h3>
            <address className="mt-8 not-italic text-[clamp(0.95rem,0.85vw,1rem)] leading-[1.58] tracking-[0.03em] text-[#3c3d4b]">
              <p>KL Eco City Office</p>
              <p>
                SO-11-5 Menara 1, KL Eco City
                <br />3 Jalan Bangsar
                <br />59200 Kuala Lumpur, Malaysia
              </p>
              <p className="mt-5">
                Phone:{" "}
                <a href="tel:+60327284819" className="hover:text-[#03101c]">
                  +603 2728 4819
                </a>
                <br />
                Email:{" "}
                <a
                  href="mailto:info@yta.com.my"
                  className="underline underline-offset-2 hover:text-[#03101c]"
                >
                  info@yta.com.my
                </a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="text-[clamp(1rem,0.96vw,1.15rem)] font-medium leading-7">
              Office Hours
            </h3>
            <div className="mt-8 text-[clamp(0.95rem,0.85vw,1rem)] leading-[1.58] tracking-[0.03em] text-[#3c3d4b]">
              <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p>Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="mt-[clamp(3rem,5vw,5rem)] flex flex-col gap-6 border-t border-[#0b1c18]/20 py-5 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-wrap items-center gap-6">
            <Image
              src="/yta-logo.png"
              alt="YT Associates"
              width={128}
              height={74}
              className="h-auto w-[clamp(6rem,6.3vw,8rem)]"
            />
            <Image
              src="/peter-tang-associates-logo.png"
              alt="Peter Tang & Associates"
              width={200}
              height={60}
              className="h-auto w-[clamp(9rem,9.85vw,12.5rem)]"
            />
          </div>

          <p className="text-[clamp(0.85rem,0.85vw,1rem)] leading-[1.58] tracking-[0.03em] text-[#3c3d4b]">
            © 2025 YT Associates (AF1112), Peter Tang & Associates (AF1873)
          </p>

          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="inline-flex size-10 items-center justify-center rounded-full bg-[#f3f3f3] text-sm font-medium text-[#3c3d4b] transition hover:bg-[#ffad50] hover:text-[#03101c]"
              >
                {link.mark}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
