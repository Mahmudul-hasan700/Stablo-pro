import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next'
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
      default:
        settings?.title ||
        "Codewithhridoy | Creative Coding Blog - HTML CSS & JavaScript.",
      template: "codewithhridoy"
    },
    description:
      settings?.description ||
      "Explore innovative HTML, CSS, and JavaScript tutorials at Codewithhridoy, your go-to creative coding blog for insightful tips and tricks.",
    keywords: [
      "Creative coding",
      "HTML tutorials",
      "CSS tricks",
      "JavaScript techniques",
      "Web development tips",
      "Coding blog",
      "Frontend development",
      "Web design inspiration",
      "Code tutorials",
      "Programming resources",
      "Next.js",
      "Sanity",
      "Tailwind CSS",
      "Coding",
      "Webdeveloper",
      "Webdeveloping"
    ],
    authors: [{ name: "Hridoy" }],
    canonical: settings?.url,
    openGraph: {
      type: 'website',
      url: baseURL,
      title: settings?.title || "Codewithhridoy | Creative Coding Blog - HTML CSS & JavaScript",
      description: settings?.description || "Explore innovative HTML, CSS, and JavaScript tutorials at Codewithhridoy, your go-to creative coding blog for insightful tips and tricks.",
      images: [
        {
          url:
            urlForImage(settings?.openGraphImage)?.src ||
            "/opengraph.jpeg",
          width: 800,
          height: 600,
          alt: "Codewithhridoy"
        }
      ]
    },
    twitter: {
      handle: "@your_twitter_handle", // Add your Twitter handle here
      site: "@your_twitter_handle", // Add your Twitter handle here
      cardType: "summary_large_image"
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
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(inter.variable, lora.variable)}>
      <body className="text-gray-800 antialiased dark:bg-black dark:text-gray-400">
        <Providers>
          <GetNavbar {...settings} />
          {children}
          <Analytics />
          <Footer {...settings} />
        </Providers>
      </body>
    </html>
  );
}

export const revalidate = 86400;