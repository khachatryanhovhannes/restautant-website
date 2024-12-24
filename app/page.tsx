import {
  HomeBlog,
  HomeMenu,
  HomeOpinion,
  HomeReservation,
  HomeServices,
  HomeTheStroy,
  HomeWelcome,
} from "@/components";
import { RESTAURANT_NAME, WEBSITE_URL } from "@/constants";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>{RESTAURANT_NAME} - Home</title>
        <meta
          name="description"
          content={`Welcome to ${RESTAURANT_NAME}, the perfect place to enjoy great food and great times with friends and family.`}
        />
        <meta
          name="keywords"
          content={`restaurant, reservation, menu, food, family, dining, special offers, ${RESTAURANT_NAME}`}
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`${RESTAURANT_NAME} - Home`} />
        <meta
          property="og:description"
          content={`Discover the best dining experience with ${RESTAURANT_NAME}. Book your table today!`}
        />
        <meta property="og:image" content="/images/the_story.png" />
        <meta property="og:url" content={WEBSITE_URL} />
      </Head>
      <main className="">
        <HomeWelcome />
        <HomeTheStroy />
        <HomeMenu />
        <HomeServices />
        <HomeOpinion />
        <HomeBlog />
        <HomeReservation />
      </main>
    </>
  );
}
