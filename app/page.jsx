import ContentSection from "./_pages/home/ContentSection";
import HeroSection from "./_pages/home/HeroSection";

export default function page() {
  return (
    <main className="px-15">
      <HeroSection />
      <ContentSection />
    </main>
  );
}
