import Head from "next/head";
import { ContactForm } from "@/components";
import { Metadata } from "next";
import { RESTAURANT_NAME, WEBSITE_URL } from "@/constants";

export const metadata: Metadata = {
  title: `Contact Us - ${RESTAURANT_NAME}`,
  description: `Get in touch with ${RESTAURANT_NAME} for reservations, inquiries, or feedback.`,
};

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - {RESTAURANT_NAME}</title>
        <meta
          name="description"
          content={`Get in touch with ${RESTAURANT_NAME} for reservations, inquiries, or feedback.`}
        />
        <meta
          name="keywords"
          content={`contact us, restaurant, reservation, feedback, ${RESTAURANT_NAME}`}
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`Contact Us - ${RESTAURANT_NAME}`} />
        <meta
          property="og:description"
          content={`Contact ${RESTAURANT_NAME} for any inquiries, reservations, or feedback.`}
        />
        <meta property="og:image"content="/images/the_story.png" />
        <meta property="og:url" content={`${WEBSITE_URL}/contact`} />
      </Head>
      <main>
        <ContactForm />
      </main>
    </>
  );
}
