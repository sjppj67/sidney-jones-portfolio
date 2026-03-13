import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SobreSection from "@/components/SobreSection";
import AreasSection from "@/components/AreasSection";
import CasesSection from "@/components/CasesSection";
import HabilidadesSection from "@/components/HabilidadesSection";
import ContatoSection from "@/components/ContatoSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SobreSection />
      <AreasSection />
      <CasesSection />
      <HabilidadesSection />
      <ContatoSection />
      <Footer />
    </div>
  );
}
