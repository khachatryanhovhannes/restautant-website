import Head from "next/head";
import {
  AboutGalary,
  AboutHero,
  AboutProducts,
  AboutTeam,
  HomeTheStroy,
} from "@/components";
import { RESTAURANT_NAME, WEBSITE_URL } from "@/constants";

export const metadata = {
  title: `About Us - ${RESTAURANT_NAME}`,
  description: `Learn more about ${RESTAURANT_NAME}, our products, team, and the story behind our restaurant.`,
};

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - {RESTAURANT_NAME}</title>
        <meta
          name="description"
          content={`Learn more about ${RESTAURANT_NAME}, our products, team, and the story behind our restaurant.`}
        />
        <meta
          name="keywords"
          content={`about us, restaurant, team, gallery, products, ${RESTAURANT_NAME}`}
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`About Us - ${RESTAURANT_NAME}`} />
        <meta
          property="og:description"
          content={`Discover our story, products, and the team behind ${RESTAURANT_NAME}.`}
        />
        <meta property="og:image" content="/images/the_story.png" />
        <meta property="og:url" content={`${WEBSITE_URL}/about`} />
      </Head>
      <main className="">
        <AboutHero />
        <AboutProducts />
        <HomeTheStroy />
        <AboutTeam />
        <AboutGalary />
      </main>
    </>
  );
}
