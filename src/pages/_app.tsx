import type { AppProps } from "next/app";
import { Lato } from "next/font/google";
import { useEffect } from "react";
import { pageLanguage } from "@/lib/pageLanguage";
import "@/styles/globals.css";
import { LocaleProvider } from "@/i18n/Locale";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export default function App({ Component, pageProps, router }: AppProps) {
  // _document only sets <html lang> on a full page load, so keep it in sync
  // when navigating between the English and Chinese pages.
  useEffect(() => {
    document.documentElement.lang = pageLanguage(router.asPath);
  }, [router.asPath]);

  return (
    <div className={`site-root ${lato.variable}`}>
      <LocaleProvider value={router.pathname.startsWith("/zh") || router.asPath.startsWith("/zh") ? "zh" : "en"}>
        <Component {...pageProps} />
      </LocaleProvider>
    </div>
  );
}
