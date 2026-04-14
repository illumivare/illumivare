import HeroSection from "@/components/HeroSection";
import SampleReelSection from "@/components/SampleReelSection";
import ServicesSection from "@/components/ServicesSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <SampleReelSection />
      <ServicesSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
};

export default Index;
