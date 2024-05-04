import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";
import { hind, montserrat } from "./fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Helping CPA",
  description: "Helping cpa get their duties done",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(montserrat.variable, hind.variable)}>
      <head>
        <meta
          name="google-site-verification"
          content="8pP_lJBKWWCw5FpUWOGsVYea4jHoZ4bVNitNrYCI_EU"
        />
      </head>
      <body className={clsx("min-h-screen bg-background antialiased")}>
        <main className="parent-container">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
