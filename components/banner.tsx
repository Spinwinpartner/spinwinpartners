import { Link } from "@nextui-org/link";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { useMedia } from "react-use";

import Carousel from "@/components/carousel";
import { useSiteConfig } from "@/config/siteConfig";

const Banner = () => {
  const siteConfig = useSiteConfig();
  const isMobile = useMedia("(max-width: 767px)", false);

  return (
    <section className="flex gap-4 min-h-[332px]">
      {!isMobile && (
        <div className="max-md:hidden w-[332px] relative">
          <Image
            alt="Pin Up Hero Image"
            className="rounded-xl"
            height={332}
            src="/images/banner-static-image.webp"
            width={332}
          />
          <div className="absolute text-center bottom-5 left-1/2 -translate-x-1/2 w-full">
            <h3 className="text-white font-bold italic text-xl text-center mb-5 mx-4 -skew-y-6">
              <span className="bg-[#04CFA6] inline-block p-1">
                {siteConfig.staticImageTextTitle}
              </span>
              <span className="bg-primary inline-block p-1">
                {siteConfig.staticImageTextDescription}
              </span>
            </h3>
            <Button
              isExternal
              as={Link}
              className="bg-[#E02A13] text-white"
              href={siteConfig.links.sponsor}
            >
              {siteConfig.staticImageButtonText}
            </Button>
          </div>
        </div>
      )}
      <div className="w-full md:w-[calc(100%-348px)]">
        <Carousel />
      </div>
    </section>
  );
};

export default Banner;
