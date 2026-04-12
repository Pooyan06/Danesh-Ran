import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/Header";
import Navigation from "./_components/Navigation";

const vazir = localFont({
  src: "./_fonts/Vazir.woff2",
  variable: "--font-vazir",
});

export const metadata = {
  title: {
    template: "%s | اوپن رایت",
    default: "جدید ترین مقالات دنیا در اوپن رایت",
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
        <Navigation />
        {children}
      </body>
    </html>
  );
}
