import { useEffect, useState } from "react";
import axios from "axios";
import { appWithTranslation } from "next-i18next";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { AppProps } from "next/app";

import { fontSans } from "@/config/fonts";
import "@/styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { i18n } = useTranslation();
  const [, setDetectedLanguage] = useState<string | null>(null);

  useEffect(() => {
    const fetchGeoLocation = async () => {
      try {
        if (router.locale) return;

        const { data } = await axios.get(
          "https://ipinfo.io?token=1442283f48b6f5",
        );
        const country = data.country;
        let detectedLang = "en";

        switch (country) {
          case "AZ":
            detectedLang = "az";
            break;
          case "KZ":
            detectedLang = "kz";
            break;
          case "UZ":
            detectedLang = "uz";
            break;
          case "RU":
            detectedLang = "ru";
            break;
          case "UA":
            detectedLang = "ru";
            break;
          default:
            detectedLang = "uz";
        }

        setDetectedLanguage(detectedLang);

        if (i18n.language !== detectedLang && !router.query.locale) {
          i18n.changeLanguage(detectedLang);
          router.replace(router.pathname, router.asPath, {
            locale: detectedLang,
            shallow: true,
          });
        }
      } catch (error) {}
    };

    fetchGeoLocation();
  }, []);

  return (
    <NextUIProvider>
      <NextThemesProvider>
        <Component {...pageProps} />
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export default appWithTranslation(App);

export const fonts = {
  sans: fontSans.style.fontFamily,
};
