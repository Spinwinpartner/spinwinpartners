import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;
  const [currentLanguage, setCurrentLanguage] = useState(locale || "en");

  const items = [
    { key: "en", label: "EN" },
    { key: "az", label: "AZ" },
    { key: "kz", label: "KZ" },
    { key: "uz", label: "UZ" },
    { key: "ru", label: "RU" },
  ];

  useEffect(() => {
    if (locale !== currentLanguage) {
      setCurrentLanguage(locale || "en");
    }
  }, [locale]);

  const changeLanguage = (lng: string) => {
    setCurrentLanguage(lng);
    router.push({ pathname, query }, asPath, { locale: lng });
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          className="ml-auto custom-gradient relative overflow-visible before:content[''] before:bg-custom-gradient before:z-[-1] before:absolute before:top-[-2px] before:left-[-2px] before:blur-[5px] before:w-[calc(100%+4px)] before:h-[calc(100%+4px)] before:animate-glowing before:rounded-xl after:z-[-1] after:content[''] after:absolute after:w-full after:h-full after:bg-black after:left-0 after:top-0 after:rounded-xl"
          variant="bordered"
        >
          {items.find((item) => item.key === currentLanguage)?.label || "EN"}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Language selection" items={items}>
        {(item) => (
          <DropdownItem key={item.key} onClick={() => changeLanguage(item.key)}>
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};
