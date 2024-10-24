import { FC } from "react";
import { useTranslation } from "next-i18next";
import clsx from "clsx";

import { title } from "@/components/primitives";

const SeoText: FC = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col gap-4 py-8 md:py-8">
      <h1
        className={clsx(title({ size: "sm" }), "scroll-mt-16 lg:scroll-mt-20")}
        id="pin-up-casino"
      >
        {t("seo.title1")}
      </h1>
      <p>{t("seo.text1.1")}</p>

      <h2
        className={clsx(title({ size: "sm" }), "scroll-mt-16 lg:scroll-mt-20")}
        id="pin-up-official-website"
      >
        {t("seo.title2")}
      </h2>
      <p>{t("seo.text2.1")}</p>
      <p>{t("seo.text2.2")}</p>

      <h2
        className={clsx(title({ size: "sm" }), "scroll-mt-16 lg:scroll-mt-20")}
        id="registration"
      >
        {t("seo.title3")}
      </h2>
      <p>{t("seo.text3.1")}</p>
      <p>{t("seo.text3.2")}</p>

      <h2
        className={clsx(title({ size: "sm" }), "scroll-mt-16 lg:scroll-mt-20")}
        id="bonus-system"
      >
        {t("seo.title4")}
      </h2>
      <p>{t("seo.text4.1")}</p>
      <ul className="list-disc pl-10">
        <li>
          <strong>{t("seo.bonus1")}</strong>
        </li>
        <li>
          <strong>{t("seo.bonus2")}</strong>
        </li>
        <li>
          <strong>{t("seo.bonus3")}</strong>
        </li>
        <li>
          <strong>{t("seo.bonus4")}</strong>
        </li>
        <li>
          <strong>{t("seo.bonus5")}</strong>
        </li>
      </ul>
      <p>{t("seo.text4.2")}</p>

      <h2
        className={clsx(title({ size: "sm" }), "scroll-mt-16 lg:scroll-mt-20")}
        id="slot-machines"
      >
        {t("seo.title5")}
      </h2>
      <p>{t("seo.text5.1")}</p>
      <p>{t("seo.text5.2")}</p>
      <ul className="list-disc pl-10">
        <li>
          <strong>{t("seo.provider1")}</strong>
        </li>
        <li>
          <strong>{t("seo.provider2")}</strong>
        </li>
        <li>
          <strong>{t("seo.provider3")}</strong>
        </li>
        <li>
          <strong>{t("seo.provider4")}</strong>
        </li>
        <li>
          <strong>{t("seo.provider5")}</strong>
        </li>
        <li>
          <strong>{t("seo.provider6")}</strong>
        </li>
        <li>
          <strong>{t("seo.provider7")}</strong>
        </li>
      </ul>
      <p>{t("seo.text5.3")}</p>

      <h2
        className={clsx(title({ size: "sm" }), "scroll-mt-16 lg:scroll-mt-20")}
        id="finances"
      >
        {t("seo.title6")}
      </h2>
      <p>{t("seo.text6.1")}</p>

      <h2
        className={clsx(title({ size: "sm" }), "scroll-mt-16 lg:scroll-mt-20")}
        id="mirror"
      >
        {t("seo.title7")}
      </h2>
      <p>{t("seo.text7.1")}</p>
      <ul className="list-disc pl-10">
        <li>
          <strong>{t("seo.reason1")}</strong>
        </li>
        <li>
          <strong>{t("seo.reason2")}</strong>
        </li>
        <li>
          <strong>{t("seo.reason3")}</strong>
        </li>
        <li>
          <strong>{t("seo.reason4")}</strong>
        </li>
      </ul>
      <p>{t("seo.text7.2")}</p>

      <h3
        className={clsx(title({ size: "sm" }), "scroll-mt-16 lg:scroll-mt-20")}
        id="mobile"
      >
        {t("seo.title8")}
      </h3>
      <p>{t("seo.text8.1")}</p>
      <p>{t("seo.text8.2")}</p>

      <h3
        className={clsx(title({ size: "sm" }), "scroll-mt-16 lg:scroll-mt-20")}
        id="support"
      >
        {t("seo.title9")}
      </h3>
      <p>{t("seo.text9.1")}</p>
      <p>{t("seo.text9.2")}</p>
    </section>
  );
};

export default SeoText;
