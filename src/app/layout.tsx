import Header from "@/components/master/Header";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Sidebar from "@/components/master/Sidebar";
import NotificationsContainer from "@/components/shared/notifications/notifications-container";
const inter = Inter({ subsets: ["latin"] });

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
        <main className="g-item_16 p4">{children}</main>
      </body>
    </html>
  );
}
