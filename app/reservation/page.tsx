import Head from "next/head";
import { ReservationForm, AboutGalary } from "@/components";
import { Metadata } from "next";
import { RESTAURANT_NAME, WEBSITE_URL } from "@/constants";

export const metadata: Metadata = {
  title: `Reservation - ${RESTAURANT_NAME}`,
  description: `Book your table at ${RESTAURANT_NAME} and enjoy a unique dining experience with friends and family.`,
};

export default function Reservation() {
  return (
    <>
      <Head>
        <title>Reservation - {RESTAURANT_NAME}</title>
        <meta
          name="description"
          content={`Reserve your table at ${RESTAURANT_NAME} and enjoy a delightful dining experience.`}
        />
        <meta
          name="keywords"
          content={`reservation, restaurant, book a table, ${RESTAURANT_NAME}, dining experience`}
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content={`Reservation - ${RESTAURANT_NAME}`}
        />
        <meta
          property="og:description"
          content={`Book your table now at ${RESTAURANT_NAME} and enjoy a unique dining experience with friends and family.`}
        />
        <meta property="og:image" content="/images/the_story.png" />
        <meta property="og:url" content={`${WEBSITE_URL}/reservation`} />
      </Head>
      <main>
        <ReservationForm />
        <AboutGalary />
      </main>
    </>
  );
}
