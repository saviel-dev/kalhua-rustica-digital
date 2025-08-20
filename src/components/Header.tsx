import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: 'Inicio', action: scrollToTop },
    { label: 'Historia', action: () => scrollToSection('historia') },
    { label: 'Productos', action: () => scrollToSection('productos') },
    { label: 'Contacto', action: () => scrollToSection('contacto') }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-elegant border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={scrollToTop}>
            <img 
              src="/lovable-uploads/a61f3d98-8d01-437b-92a7-a66646b97d42.png" 
              alt="Kalhua Café"
              className={`h-8 md:h-10 transition-all duration-300 ${
                isScrolled ? 'filter-none' : 'filter brightness-0 invert'
              }`}
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className={`text-sm font-medium px-3 py-2 rounded-md transition-all duration-300 ${
                  isScrolled 
                    ? 'text-foreground hover:bg-gray-100' 
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className={`flex items-center gap-2 transition-all duration-300 group relative overflow-hidden ${
                isScrolled 
                  ? 'bg-[#25D366] text-white hover:bg-[#128C7E] hover:shadow-lg hover:shadow-[#25D366]/30' 
                  : 'bg-[#25D366] text-white hover:bg-[#128C7E] hover:shadow-lg hover:shadow-[#25D366]/30 backdrop-blur-sm'
              }`}
              onClick={() => window.open('https://wa.me/584146308748', '_blank')}
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
              <MessageCircle className="w-4 h-4 relative z-10 group-hover:scale-110 transition-transform" />
              <span className="relative z-10">WhatsApp</span>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <nav className="py-4 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary/50 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button 
                  className="w-full flex items-center justify-center gap-2 relative overflow-hidden group bg-[#25D366] hover:bg-[#128C7E] text-white hover:shadow-lg hover:shadow-[#25D366]/30 transition-all duration-300"
                  onClick={() => {
                    window.open('https://wa.me/584146308748', '_blank');
                    setIsMenuOpen(false);
                  }}
                >
                  <span className="absolute inset-0 w-full h-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
                  <MessageCircle className="w-4 h-4 relative z-10 group-hover:scale-110 transition-transform" />
                  <span className="relative z-10">WhatsApp</span>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;