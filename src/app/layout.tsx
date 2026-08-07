import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";

import { BackToTop } from "@/components/layout/back-to-top";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ServiceWorkerRegistrar } from "@/components/pwa/service-worker-registrar";
import { siteConfig } from "@/data/site";

import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
  creator: siteConfig.fullName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
    images: [{ url: siteConfig.logo, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
    images: [siteConfig.logo],
  },
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <SiteHeader />
        {/*
          Scroll reveals start translated horizontally, which would otherwise
          widen the document and allow sideways scrolling until they animate in.
          `clip` is used over `hidden` so this stays out of the scroll chain.
        */}
        <main className="flex-1 overflow-x-clip">{children}</main>
        <SiteFooter />
        <BackToTop />
        <ServiceWorkerRegistrar />
      </body>
    </html>
  );
}
