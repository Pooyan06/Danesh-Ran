import Footer from "../_components/Footer";
import Header from "../_components/Header";

export default function layout({ children }) {
  return (
    <>
      <Header />
      <div className="h-10 md:h-14 lg:h-16"></div>
      <main className="px-4 sm:px-8 md:px-10 lg:px-15">{children}</main>
      <Footer />
    </>
  );
}
