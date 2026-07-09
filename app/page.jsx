import Footer from "./_components/Footer";
import Header from "./_components/Header";
import ContentSection from "./_pages/home/ContentSection";
import HeroSection from "./_pages/home/HeroSection";

export default function page() {
  return (
    <>
      <Header />
      <div className="h-10"></div>
      <main className="px-15">
        <HeroSection />
        <ContentSection />
      </main>
      <Footer />
    </>
  );
}
