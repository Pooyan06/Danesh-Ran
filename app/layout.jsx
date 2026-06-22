import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const vazir = Vazirmatn({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-vazir",
});

export const metadata = {
  title: {
    template: "",
    default: "",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazir.variable} h-full antialiased`}
    >
      <body className="bg-brand-1 flex min-h-screen flex-col">
        <Header />
        <div className="h-10"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
