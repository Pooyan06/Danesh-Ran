import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const vazir = Vazirmatn({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-vazir",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  title: {
    default: "دانشران | محیطی برای انتشار مقالات علمی",
    template: "دانشران | %s",
  },
  description:
    "دانشران، پلتفرمی جامع برای انتشار، اشتراک‌گذاری و دسترسی به مقالات علمی در ایران",
  verification: {
    google: "WcAKYzz08Y_4MVzCgVQxAOWTcFbrJqRAqVO--BlE238",
  },
  openGraph: {
    title: "دانشران | محیطی برای انتشار مقالات علمی",
    description:
      "دانشران، پلتفرمی جامع برای انتشار، اشتراک‌گذاری و دسترسی به مقالات علمی در ایران",
    type: "website",
    locale: "fa_IR",
    siteName: "دانشران",
    images: [
      {
        url: `${siteUrl}/daneshran.webp`,
        width: 1200,
        height: 630,
        alt: "دانشران",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "دانشران | محیطی برای انتشار مقالات علمی",
    description:
      "دانشران، پلتفرمی جامع برای انتشار، اشتراک‌گذاری و دسترسی به مقالات علمی در ایران",
    images: [`${siteUrl}/daneshran.webp`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazir.variable} h-full overflow-x-hidden antialiased`}
    >
      <body className="bg-brand-1 flex min-h-screen flex-col">{children}</body>
      <SpeedInsights />
      <Analytics />
    </html>
  );
}
