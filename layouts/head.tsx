import React from "react";
import NextHead from "next/head";
import { useTranslation } from "next-i18next";

import { useSiteConfig } from "@/config/siteConfig";

export const Head = () => {
  const { t } = useTranslation();
  const siteConfig = useSiteConfig();

  return (
    <NextHead>
      <title>{t(siteConfig.name)}</title>
      <meta key="title" content={t(siteConfig.name)} property="og:title"/>
      <meta content={t(siteConfig.description)} property="og:description"/>
      <meta content={t(siteConfig.description)} name="description"/>
      <meta content={t(siteConfig.keywords)} name="keywords"/>
      <meta
        name="format-detection"
        content="telephone=no, date=no, email=no, address=no"
      />
      <meta
        key="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5"
        name="viewport"
      />
      <link href="/" rel="author"/>
      <link href="/favicon.ico" rel="icon"/>
    </NextHead>
  );
};
