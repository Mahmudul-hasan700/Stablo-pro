// layout.ts
import { Analytics } from '@vercel/analytics/react';
import "@/styles/tailwind.css";
import { Providers } from "./providers";
import { cx } from "@/utils/all";
import { Inter, Lora } from "next/font/google";
import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import GetNavbar from "@/components/getnavbar";
import { urlForImage } from "@/lib/sanity/image";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora"
});

export async function sharedMetaData(params) {
  const settings = await getSettings();

  return {
    title: {
      default: settings?.title || "Stablo Pro - Blog Template for Next.js & Sanity CMS",
      template: "%s | codewithhridoy"
    },
    description: settings?.description || "Pro version of Stablo, popular open-source next.js and sanity blog template",
    keywords: ["Next.js", "Sanity", "Tailwind CSS"],
    authors: [{ name: "Surjith" }],
    canonical: settings?.url,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: settings?.url,
      title: settings?.title || "Stablo Template",
      description: settings?.description || "Pro version of Stablo, popular open-source next.js and sanity blog template",
      images: [
        {
          url: urlForImage(settings?.openGraphImage)?.src || "/img/opengraph.jpg",
          width: 800,
          height: 600,
          alt: "Open Graph Image"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      site: "@yourTwitterHandle",  // Add your Twitter handle here
      title: settings?.title || "Stablo Template",
      description: settings?.description || "Pro version of Stablo, popular open-source next.js and sanity blog template",
      image: {
        src: urlForImage(settings?.openGraphImage)?.src || "/img/opengraph.jpg",
        width: 800,
        height: 600,
        alt: "Twitter Image"
      }
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params);
}

export default async function Layout({ children, params }) {
  const settings = await getSettings();
  const metaData = await sharedMetaData(params);

  return (
    <html lang="en" suppressHydrationWarning className={cx(inter.variable, lora.variable)}>
      
      <body className="text-gray-800 antialiased dark:bg-black dark:text-gray-400">
        <Providers>
          <GetNavbar {...settings} />
          <div>{children}</div>
          <Analytics />
          <Footer {...settings} />
        </Providers>
      </body>
    </html>
  );
}

export const revalidate = 86400;