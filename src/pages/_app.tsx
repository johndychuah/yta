import type { AppProps } from "next/app";
import { Lato } from "next/font/google";
import "@/styles/globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`site-root ${lato.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
