import type { AppProps } from "next/app";
import { Geist_Mono, Lato } from "next/font/google";
import "@/styles/globals.css";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${lato.variable} ${geistMono.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
