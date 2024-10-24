import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { useReducer } from "react";
import Image from "next/image";

import { useSiteConfig } from "@/config/siteConfig";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";
import { LanguageSwitcher } from "@/components/languageSwitcher";

export const Navbar = () => {
  const { t } = useTranslation();
  const siteConfig = useSiteConfig();

  const [isMenuOpen, setIsMenuOpen] = useReducer((current) => !current, false);

  return (
    <NextUINavbar
      shouldHideOnScroll
      className="lg:py-2 fixed"
      isMenuOpen={isMenuOpen}
      maxWidth="2xl"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand className="max-w-fit">
        <NextLink
          aria-label="Home"
          className="flex justify-start items-center gap-3"
          href="/"
        >
          <Logo className="hover:scale-110 transition-transform" />
        </NextLink>
      </NavbarBrand>
      <NavbarContent
        className="hidden lg:flex basis-1/5 sm:basis-full"
        justify="start"
      >
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.label}>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium",
                "gap-1",
              )}
              color="foreground"
              href={item.href}
              rel="noopener noreferrer"
            >
              <Image
                unoptimized
                alt={"Icon" + item.label}
                height={24}
                src={item.icon}
                title={item.label}
                width={24}
              />
              {t(item.label)}
            </NextLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="relative text-white font-medium overflow-visible text-sm before:absolute before:content-[''] before:w-full before:h-full before:rounded-xl before:left-0 before:top-0 before:scale-[0.7,0.5] before:bg-primary before:opacity-50 before:z-[-1] before:animate-button-pulse"
            color="primary"
            href={siteConfig.links.sponsor}
            rel="noopener noreferrer"
          >
            {t("registration")}
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="custom-gradient relative overflow-visible before:content[''] before:bg-custom-gradient before:z-[-1] before:absolute before:top-[-2px] before:left-[-2px] before:blur-[5px] before:w-[calc(100%+4px)] before:h-[calc(100%+4px)] before:animate-glowing before:rounded-xl after:z-[-1] after:content[''] after:absolute after:w-full after:h-full after:bg-black after:left-0 after:top-0 after:rounded-xl"
            href={siteConfig.links.sponsor}
            variant="bordered"
          >
            {t("login")}
          </Button>
        </NavbarItem>
      </NavbarContent>
      <LanguageSwitcher />
      <ThemeSwitch />
      <NavbarMenuToggle className="lg:hidden basis-3" />
      <NavbarMenu>
        {siteConfig.navMenuItems.map((item) => (
          <NavbarItem key={item.href}>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium",
              )}
              color="foreground"
              href={item.href}
              scroll={true}
              onClick={setIsMenuOpen}
            >
              {t(item.label)}
            </NextLink>
          </NavbarItem>
        ))}
        <li className="flex md:hidden">
          <ul className="flex gap-4 mt-4">
            <NavbarItem>
              <Button
                isExternal
                as={Link}
                className="relative text-white font-medium overflow-visible text-sm before:absolute before:content-[''] before:w-full before:h-full before:rounded-xl before:left-0 before:top-0 before:scale-[0.7,0.5] before:bg-primary before:opacity-50 before:z-[-1] before:animate-button-pulse"
                color="primary"
                href={siteConfig.links.sponsor}
                rel="noopener noreferrer"
              >
                {t("registration")}
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button
                isExternal
                as={Link}
                className="custom-gradient relative overflow-visible before:content[''] before:bg-custom-gradient before:z-[-1] before:absolute before:top-[-2px] before:left-[-2px] before:blur-[5px] before:w-[calc(100%+4px)] before:h-[calc(100%+4px)] before:animate-glowing before:rounded-xl after:z-[-1] after:content[''] after:absolute after:w-full after:h-full after:bg-black after:left-0 after:top-0 after:rounded-xl"
                href={siteConfig.links.sponsor}
                variant="bordered"
              >
                {t("login")}
              </Button>
            </NavbarItem>
          </ul>
        </li>
      </NavbarMenu>
    </NextUINavbar>
  );
};
