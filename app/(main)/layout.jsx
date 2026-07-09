import Footer from "../_components/Footer";
import Header from "../_components/Header";

export default function layout({ children }) {
  return (
    <>
      <Header />
      <div className="h-10"></div>
      <main className="px-15">{children}</main>
      <Footer />
    </>
  );
}
