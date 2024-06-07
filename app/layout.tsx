import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/component/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/site/footer";

const inter = Inter({ subsets: ["latin"] });
const description = "Comprehensive cosmic news compendium. Cosmic news aggregator Stay up-to-date on the latest developments in space and astronomy with the AstroThread Your all-encompassing hub for the latest developments in space exploration and astronomical discovery. Dive into in-depth articles, watch informative videos, and follow breaking news as it happens. "
const title = "Astro thread - comprehensive cosmic news compendium."

export const metadata: Metadata = {
  title: title,
  description: description,
  authors: [
    { name: 'Dilyorbek Asfandiyorov', url: 'https://astro-thread.vercel.app/' },
  ],
  keywords:
    'dilyorbekdev, depo,  programming, payment, depo pay, depopay, depo-pay, primepay, prime-pay, prime, pay, dilyorbek asfandiyorov, depohub, DEPOPAY, e-wallet, is, a, modern, payment, tool, astro trhread' + description.split(" ").join(","),
  openGraph: {

    countryName: 'Uzbekistan',
    siteName: title.split(" ")[0],
    emails: 'dilyorbekdev@gmail.com',
    title: title,
    description:
      description,
    type: 'website',
    url: 'https://astro-thread.vercel.app/',
    locale: 'en_EN',
    images: 'https://raw.githubusercontent.com/dilyorbek777/astro-th/main/public/opg.jpg',
  },
  creator: 'Dilyorbek Asfandiyorov',
  publisher: 'DEPO ',
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >

          <Navbar />

          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
