import Header from "@/components/master/Header";
import Head from "next/head";
import NotificationsContainer from "@/components/shared/notifications/notifications-container";
import "stepone-ui/index.css";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/master/Footer";
export const metadata = {
  title: "UST | StepOne - UI framework",
  description: "Documentation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <body className="stepone-ui">
        <Header />
        <main className="g-container">{children}</main>
        <NotificationsContainer />
        <Footer />
      </body>
    </html>
  );
}
