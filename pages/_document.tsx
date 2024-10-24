import { Html, Head, Main, NextScript } from "next/document";
import clsx from "clsx";
import { useTranslation } from "next-i18next";

import { fontSans } from "@/config/fonts";

export default function Document() {
  const { i18n } = useTranslation();

  return (
    <Html lang={i18n.language}>
      <Head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
