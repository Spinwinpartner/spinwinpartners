import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import DefaultLayout from "@/layouts/default";
import Banner from "@/components/banner";
import SeoText from "@/components/seoText";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Banner />
      <SeoText />
    </DefaultLayout>
  );
}

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
