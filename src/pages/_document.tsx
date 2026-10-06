import { Html, Head, Main, NextScript, type DocumentProps } from "next/document";
import { pageLanguage } from "@/lib/pageLanguage";

export default function Document({ __NEXT_DATA__ }: DocumentProps) {
  return (
    <Html lang={pageLanguage(__NEXT_DATA__.page)}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
