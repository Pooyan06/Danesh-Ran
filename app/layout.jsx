import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const vazir = Vazirmatn({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-vazir",
});

export const metadata = {
  title: {
    default: "دانشران | محیطی برای انتشار مقالات علمی",
    template: "دانشران | %s",
  },
  description:
    "دانشران، پلتفرمی جامع برای انتشار، اشتراک‌گذاری و دسترسی به مقالات علمی در ایران",
  keywords: ["مقالات علمی", "انتشار مقاله", "پژوهش", "دانشران", "علمی"],
  authors: [{ name: "پویان فرهادی" }],
  creator: "دانشران",
  publisher: "دانشران",
  robots: "index, follow",
  openGraph: {
    title: "دانشران | محیطی برای انتشار مقالات علمی",
    description: "به جامعه علمی دانشران بپیوندید و مقالات خود را منتشر کنید",
    type: "website",
    locale: "fa_IR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazir.variable} h-full overflow-x-hidden antialiased`}
    >
      <body className="bg-brand-1 flex min-h-screen flex-col">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
