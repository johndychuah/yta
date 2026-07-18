import type { PropsWithChildren } from "react";

export function Layout({ children }: PropsWithChildren) {
  return <div className="min-h-screen bg-white text-neutral-950">{children}</div>;
}
