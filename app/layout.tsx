import type { Metadata } from "next";
import { Instrument_Sans, Lora } from "next/font/google";
import Script from "next/script";
import SessionProvider from "@/components/sessionProvider";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Landzille",
  description: "Welcome to Landzille",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="Vi23ThNY5Hf-5uT9pOYvoLvrklf5znloej1DcVhmlXY"
        />
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8V7FPS50CS"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8V7FPS50CS');
            `,
          }}
        />
      </head>
      <body
        className={`${instrumentSans.variable} ${lora.variable} antialiased`}
      >
        <SessionProvider>{children}</SessionProvider>

        {/* Smartarget */}
        <Script
          src="https://smartarget.online/loader.js?u=fa22648526c52fb6c791519e6488d69c9d1f2e0a"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
