import type { PropsWithChildren } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-white text-neutral-950">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
