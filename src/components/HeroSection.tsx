import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-coffee-shop.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Kalhua Café - Ambiente acogedor"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-bean/80 via-coffee/60 to-coffee-bean/80"></div>
      </div>

      {/* Coffee Beans Animation */}
      <div className="coffee-beans">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="coffee-bean"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/428a4bb0-5311-41e8-b795-8f2ae85ea3f2.png" 
            alt="Kalhua Café Logo"
            className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-6 filter brightness-0 invert"
          />
        </div>
        
        <h1 className="heading-hero text-white mb-6">
          Kalhua Café
        </h1>
        
        <p className="text-xl md:text-2xl text-warm-beige mb-8 max-w-2xl mx-auto font-light">
          Pasión en cada taza — Donde cada sorbo cuenta una historia
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="btn-hero"
            onClick={() => scrollToSection('historia')}
          >
            Descubre nuestra historia
          </Button>
          
          <Button 
            variant="outline"
            className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
            onClick={() => scrollToSection('productos')}
          >
            Ver productos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;