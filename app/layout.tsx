import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components";
import { RESTAURANT_NAME } from "@/constants";

export const metadata: Metadata = {
  title: `${RESTAURANT_NAME} - Home`,
  description: `Welcome to ${RESTAURANT_NAME}, the perfect place to enjoy great food and great times with friends and family.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
