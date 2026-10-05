import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us" },
  { label: "Our services", href: "/services" },
  { label: "Professional bodies", href: "/professional-bodies" },
  { label: "Contact us", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const { pathname } = useRouter();
  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  useEffect(() => {
    if (!isOpen) return;
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [isOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-30 border-b border-[#03101c]/10 bg-white/95 backdrop-blur-md"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          setIsOpen(false);
          toggleRef.current?.focus();
        }
      }}
    >
      <div className="mx-auto flex min-h-18 max-w-[1440px] items-center justify-between gap-3 px-4 py-2.5 sm:min-h-20 sm:gap-6 sm:px-[clamp(1.25rem,3vw,3rem)] sm:py-3">
        <Link href="/" aria-label="YTA home" className="shrink-0 rounded-sm" onClick={() => setIsOpen(false)}>
          <Image src="/yta-logo.png" alt="YT Associates" width={128} height={74} priority className="h-auto w-20 sm:w-24 lg:w-28" />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-[clamp(1rem,2vw,2rem)] text-base font-semibold lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`inline-flex min-h-11 items-center whitespace-nowrap border-b-2 px-1 transition ${isActive(item.href) ? "border-[#c52228] text-[#c52228]" : "border-transparent text-[#27303a] hover:border-[#ffad50] hover:text-[#03101c]"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/" aria-label="Peter Tang & Associates home" className="shrink-0 rounded-sm" onClick={() => setIsOpen(false)}>
          <Image src="/peter-tang-associates-logo.png" alt="Peter Tang & Associates" width={200} height={60} priority className="h-auto w-28 sm:w-36 xl:w-44" />
        </Link>

        <button
          ref={toggleRef}
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex size-11 items-center justify-center rounded-lg border border-[#03101c]/15 bg-white text-[#091c2f] transition hover:bg-[#f3f3f3] lg:hidden"
        >
          <span aria-hidden="true" className="flex w-5 flex-col gap-1.5">
            <span className={`h-0.5 w-full bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-full bg-current ${isOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-full bg-current transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!isOpen}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain border-b border-[#03101c]/10 bg-white px-4 py-3 shadow-lg sm:max-h-[calc(100dvh-5rem)] lg:hidden"
      >
        <div className="grid gap-1 text-base font-semibold">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              onClick={() => setIsOpen(false)}
              className={`flex min-h-12 items-center rounded-lg px-4 transition ${isActive(item.href) ? "bg-[#fff3e4] text-[#a31b20]" : "text-[#27303a] hover:bg-[#f3f3f3]"}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
