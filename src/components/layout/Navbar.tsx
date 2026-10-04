import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us" },
  { label: "Our Services", href: "/services" },
  { label: "Professional Bodies", href: "/professional-bodies" },
  { label: "Contact us", href: "/contact" },
];

const activeLinkColor = "#e61a1a";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useRouter();

  return (
    <header className="relative z-20 bg-white shadow-[0_0_2px_rgba(121,150,208,0.25)]">
      <div className="mx-auto flex min-h-[clamp(5.5rem,6.3vw,8rem)] w-full max-w-[2030px] items-center justify-between gap-[clamp(1rem,1.7vw,2.125rem)] px-[clamp(1.25rem,1.6vw,2rem)] py-[clamp(0.875rem,1vw,1.25rem)]">
        <Link href="/" aria-label="YTA home" className="shrink-0">
          <Image
            src="/yta-logo.png"
            alt="YT Associates"
            width={128}
            height={74}
            priority
            className="h-auto w-[clamp(6rem,6.3vw,8rem)]"
          />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-[clamp(1rem,1.7vw,2.125rem)] text-[clamp(1.2rem,1.77vw,2.25rem)] leading-none text-black drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] lg:flex"
        >
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-black"
              style={
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(`${item.href}/`)) ||
                (index === 0 && pathname === "/")
                  ? { color: activeLinkColor }
                  : undefined
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          aria-label="Peter Tang & Associates"
          className="hidden shrink-0 sm:block"
        >
          <Image
            src="/peter-tang-associates-logo.png"
            alt="Peter Tang & Associates"
            width={200}
            height={60}
            priority
            className="h-auto w-[clamp(9rem,9.85vw,12.5rem)]"
          />
        </Link>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center border border-neutral-200 bg-white text-neutral-950 shadow-sm lg:hidden"
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span className="h-0.5 w-full bg-current" />
            <span className="h-0.5 w-full bg-current" />
            <span className="h-0.5 w-full bg-current" />
          </span>
        </button>
      </div>

      {isOpen ? (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-neutral-100 bg-white px-5 py-4 shadow-[0_6px_18px_rgba(15,23,42,0.08)] lg:hidden"
        >
          <div className="flex flex-col gap-4 text-lg text-black">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-black"
                style={
                  pathname === item.href ||
                  (item.href !== "/" &&
                    pathname.startsWith(`${item.href}/`)) ||
                  (index === 0 && pathname === "/")
                    ? { color: activeLinkColor }
                    : undefined
                }
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
