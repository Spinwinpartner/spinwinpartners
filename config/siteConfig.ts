import { useTranslation } from "next-i18next";

export const useSiteConfig = () => {
  const { t, i18n } = useTranslation();

  const locale = i18n.language;

  const getLocaleParam = () => {
    switch (locale) {
      case "en":
        return "PFiq59AJ";
      case "ru":
        return "PFiq59AJ";
      default:
        return "PFiq59AJ";
    }
  };

  const getLocalizedLink = (baseLink: string) => {
    const param = getLocaleParam();

    return `${baseLink}${param}/`;
  };

  return {
    name: t("site.title"),
    description: t("site.description"),
    keywords: t("site.keywords"),
    navItems: [
      {
        icon: "/images/money-with-wings.webp",
        label: t("nav.jackpot"),
        href: getLocalizedLink("https://toptdspup.com/"),
      },
      {
        icon: "/images/trophy.webp",
        label: t("nav.play&win"),
        href: getLocalizedLink("https://toptdspup.com/"),
      },
      {
        icon: "/images/fire.webp",
        label: t("nav.bonuses"),
        href: getLocalizedLink("https://toptdspup.com/"),
      },
    ],
    links: {
      sponsor: getLocalizedLink("https://toptdspup.com/"),
    },
    navMenuItems: [
      { label: t("navMenu.casino"), href: "/#pin-up-casino" },
      { label: t("navMenu.website"), href: "/#pin-up-official-website" },
      { label: t("navMenu.registration"), href: "/#registration" },
      { label: t("navMenu.bonus"), href: "/#bonus-system" },
      { label: t("navMenu.slot"), href: "/#slot-machines" },
      { label: t("navMenu.finance"), href: "/#finances" },
      { label: t("navMenu.mirror"), href: "/#mirror" },
      { label: t("navMenu.mobile"), href: "/#mobile" },
      { label: t("navMenu.support"), href: "/#support" },
    ],
    banners: [
      {
        imageSrc: "/images/welcome-bonus.webp",
        imageSrcMob: "/images/mob-welcome-bonus.webp",
        textTitle: t("banners.textTitle-1"),
        textDescription: t("banners.textDescription-1"),
        buttonText: t("banners.buttonText-1"),
        buttonHref: "/",
        imageAlt: t("banners.imageAlt-1"),
      },
      {
        imageSrc: "/images/andr-desk.webp",
        imageSrcMob: "/images/andr-mob.webp",
        textTitle: t("banners.textTitle-2"),
        textDescription: t("banners.textDescription-2"),
        buttonText: t("banners.buttonText-2"),
        buttonHref: "/",
        imageAlt: t("banners.imageAlt-2"),
      },
    ],
    staticImageTextTitle: t("staticImage.textTitle"),
    staticImageTextDescription: t("staticImage.textDescription"),
    staticImageButtonText: t("staticImage.buttonText"),
    copyright: t("footer.copyright"),
    titleAppButtons: t("footer.titleAppButtons"),
    titleSocialButtons: t("footer.titleSocialButtons"),
  };
};
