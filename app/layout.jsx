import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazir = Vazirmatn({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-vazir",
});

export const metadata = {
  title: {
    default: " دانش ران",
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
    </html>
  );
}
