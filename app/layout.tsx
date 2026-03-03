import type { Metadata } from "next";
import { Inter, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SchemaOrg } from "@/components/SchemaOrg";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "CA Poonam Pathak | Chartered Accountant, Business Advisor & Independent Director | Navi Mumbai",
  description:
    "CA Poonam Pathak – Top 40 FinFluencer 2024, ICAI Peer Reviewer, and Independent Director. Expert in NRI Taxation, Corporate Advisory, POSH Compliance, and Fractional CFO services. Based in Kharghar, Navi Mumbai.",
  keywords: [
    "CA Poonam Pathak",
    "Chartered Accountant Navi Mumbai",
    "NRI Taxation Expert",
    "Independent Director IICA",
    "Business Advisor Mumbai",
    "POSH Compliance",
    "Fractional CFO India",
    "Income Tax Consultant Kharghar",
    "WIRC Star Women Award",
    "Josh Talks Speaker",
    "Top 40 FinFluencer 2024",
  ].join(", "),
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "CA Poonam Pathak | Chartered Accountant & Business Advisor",
    description:
      "Empowering Corporates, NRIs, and Entrepreneurs to navigate complex regulatory landscapes. Top 40 FinFluencer of the Year (2024).",
    type: "website",
    locale: "en_IN",
    url: "https://capoonampathak.com",
    siteName: "CA Poonam Pathak",
  },
  twitter: {
    card: "summary_large_image",
    title: "CA Poonam Pathak | Chartered Accountant & Business Advisor",
    description:
      "Top 40 FinFluencer 2024. Expert CA helping Corporates, NRIs & Entrepreneurs navigate regulatory complexity.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://capoonampathak.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <SchemaOrg />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
