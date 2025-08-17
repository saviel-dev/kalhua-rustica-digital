import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HistoriaSection from "@/components/HistoriaSection";
import ProductosSection from "@/components/ProductosSection";
import ContactoSection from "@/components/ContactoSection";
import FuturoSection from "@/components/FuturoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <HistoriaSection />
        <ProductosSection />
        <FuturoSection />
        <ContactoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
