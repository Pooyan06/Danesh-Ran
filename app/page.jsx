import Footer from "./_components/Footer";
import Header from "./_components/Header";
import ContentSection from "./_pages/home/ContentSection";
import HeroSection from "./_pages/home/HeroSection";

export default function page() {
  return (
    <>
      <Header />
      <div className="h-10 md:h-14 lg:h-16"></div>
      <main className="px-4 sm:px-8 md:px-10 lg:px-15">
        <HeroSection />
        <ContentSection />
      </main>
      <Footer />
    </>
  );
}
