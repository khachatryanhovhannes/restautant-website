import Head from "next/head";
import { MenuFull } from "@/components";
import { Metadata } from "next";
import { RESTAURANT_NAME, WEBSITE_URL } from "@/constants";

export const metadata: Metadata = {
  title: `Menu - ${RESTAURANT_NAME}`,
  description: `Explore our full menu at ${RESTAURANT_NAME} and find your favorite dishes.`,
};

export default function Menu() {
  return (
    <>
      <Head>
        <title>Menu - {RESTAURANT_NAME}</title>
        <meta
          name="description"
          content={`Explore our full menu at ${RESTAURANT_NAME} and find your favorite dishes.`}
        />
        <meta
          name="keywords"
          content={`menu, restaurant, food, ${RESTAURANT_NAME}, dishes, specials`}
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`Menu - ${RESTAURANT_NAME}`} />
        <meta
          property="og:description"
          content={`Discover the wide variety of dishes at ${RESTAURANT_NAME}, your go-to spot for delicious meals.`}
        />
        <meta property="og:image" content="/images/menu-image.jpg" />
        <meta property="og:url" content={`${WEBSITE_URL}/menu`} />
      </Head>
      <main>
        <MenuFull />
      </main>
    </>
  );
}
