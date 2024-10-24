import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Button } from "@nextui-org/button";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useMedia } from "react-use";
import { Link } from "@nextui-org/link";

import { useSiteConfig } from "@/config/siteConfig";

const Carousel = () => {
  const textWrapperClasses =
    "absolute z-10 top-1/2 -translate-y-1/2 max-md:-translate-x-1/2 max-md:text-center w-full left-1/2 md:left-4 lg:left-10 md:max-w-[60%] lg:max-w-[54%] p-4";
  const imgWrapperClasses =
    "h-full relative rounded-xl after:content[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-50 md:after:content-none";
  const isMobile = useMedia("(max-width: 767px)", false);

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<div class="${className} !bg-[#ff2400] !w-4 !h-4"></div>`;
    },
  };

  const { t } = useTranslation();
  const siteConfig = useSiteConfig();

  return (
    <Swiper
      className="h-full"
      modules={[Autoplay, Pagination]}
      pagination={pagination}
      slidesPerView={1}
    >
      {siteConfig.banners.map((banner, index) => (
        <SwiperSlide key={index}>
          <div className={imgWrapperClasses}>
            <Image
              fill
              unoptimized
              alt="Welcome bonus"
              className="object-cover h-full rounded-xl"
              sizes="75vw, (max-width: 767px) 100vw"
              src={isMobile ? banner.imageSrcMob : banner.imageSrc}
            />
            <div className={textWrapperClasses}>
              <h2 className="text-3xl text-white mb-4 lg:text-5xl font-bold italic">
                {t(banner.textTitle)}
                <span className="block text-2xl lg:text-3xl">
                  {t(banner.textDescription)}
                </span>
              </h2>
              <Button
                isExternal
                as={Link}
                className="max-md:hidden bg-[#E02A13] text-white"
                href={siteConfig.links.sponsor}
                size="lg"
              >
                {t(banner.buttonText)}
              </Button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
