import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { StructuredData } from "@/components/structured-data";
import { uiLabels } from "@/constants/ui";
import { siteConfig, isProductionDeployment } from "@/lib/site";
import { siteStructuredData } from "@/lib/structured-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: "variable",
});

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const bingVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

const verification: NonNullable<Metadata["verification"]> = {
  ...(googleVerification ? { google: googleVerification } : {}),
  ...(bingVerification
    ? { other: { "msvalidate.01": bingVerification } }
    : {}),
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  category: siteConfig.category,
  keywords: [...siteConfig.keywords],
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: false,
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.ogLocale,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: isProductionDeployment
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      }
    : {
        index: false,
        follow: false,
      },
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "black-translucent",
  },
  ...(Object.keys(verification).length > 0 ? { verification } : {}),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f1115",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={siteConfig.locale}
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-white px-5 py-2 text-sm font-medium text-background opacity-0 transition-transform focus:translate-y-0 focus:opacity-100 focus:outline-2 focus:outline-offset-2 focus:outline-white motion-reduce:transition-none"
        >
          {uiLabels.skipToContent}
        </a>

        <StructuredData data={siteStructuredData} />
        <Header />

        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col xl:border-x xl:border-white/10">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
