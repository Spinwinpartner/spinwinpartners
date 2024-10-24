import { useTranslation } from "next-i18next";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

import { useSiteConfig } from "@/config/siteConfig";
import {
  Android,
  ApplePay,
  Visa,
  IOS,
  MasterCard,
  GooglePay,
  City24,
  EasyPay,
  Telegram,
  Instagram,
  Twitter,
} from "@/components/icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  const siteConfig = useSiteConfig();
  const svgClasses = "!max-w-none";

  return (
    <footer className="py-4 flex flex-col items-center">
      <h4 className="uppercase mb-3 font-bold">
        {t(siteConfig.titleSocialButtons)}
      </h4>
      <ul className="flex gap-4 items-center flex-wrap mb-6">
        <li>
          <Link href={siteConfig.links.sponsor} title="Telegram">
            <Telegram />
          </Link>
        </li>
        <li>
          <Link href={siteConfig.links.sponsor} title="Instagram">
            <Instagram />
          </Link>
        </li>
        <li>
          <Link href={siteConfig.links.sponsor} title="Twitter">
            <Twitter />
          </Link>
        </li>
      </ul>
      <ul className="flex gap-2 md:gap-4 justify-center items-center flex-wrap mb-6">
        <li>
          <Link href={siteConfig.links.sponsor} title="Master card">
            <MasterCard />
          </Link>
        </li>
        <li>
          <Link href={siteConfig.links.sponsor} title="Visa">
            <Visa />
          </Link>
        </li>
        <li>
          <Link href={siteConfig.links.sponsor} title="Apple pay">
            <ApplePay />
          </Link>
        </li>
        <li>
          <Link href={siteConfig.links.sponsor} title="Google pay">
            <GooglePay />
          </Link>
        </li>
        <li>
          <Link href={siteConfig.links.sponsor} title="Easy pay">
            <EasyPay />
          </Link>
        </li>
        <li>
          <Link href={siteConfig.links.sponsor} title="City24">
            <City24 />
          </Link>
        </li>
      </ul>
      <h4 className="uppercase mb-3 font-bold">
        {t(siteConfig.titleAppButtons)}
      </h4>
      <ul className="flex gap-4 mb-5">
        <li>
          <Button
            as={Link}
            href={siteConfig.links.sponsor}
            title="Download on the AppStore"
          >
            <IOS className={svgClasses} />
          </Button>
        </li>
        <li>
          <Button
            as={Link}
            href={siteConfig.links.sponsor}
            title="Download apk. Android"
          >
            <Android className={svgClasses} />
          </Button>
        </li>
      </ul>
      <span className="text-xs">
        &copy; {currentYear} pin-up-luck.com {t(siteConfig.copyright)}
      </span>
    </footer>
  );
};

export default Footer;
