import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/sections/header";
import { Instrument_Sans, Inter } from "next/font/google";
import { PageGrid } from "@/components/common/page-grid";
import Footer from "@/components/common/sections/footer";
import { Analytics } from "@vercel/analytics/next";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel's Portfolio",
  description:
    "A seasoned software engineer with expertise across the stack ranging from Frontend to Backend to Infrastructure design and development.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">
        <PageGrid />
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
