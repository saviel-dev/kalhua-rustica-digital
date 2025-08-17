import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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
                className={`text-sm font-medium transition-colors duration-300 hover:text-coffee ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className={`transition-all duration-300 ${
                isScrolled 
                  ? 'btn-secondary' 
                  : 'bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm'
              }`}
              onClick={() => window.open('https://wa.me/584146308748', '_blank')}
            >
              WhatsApp
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
                  className="btn-secondary w-full"
                  onClick={() => {
                    window.open('https://wa.me/584146308748', '_blank');
                    setIsMenuOpen(false);
                  }}
                >
                  WhatsApp
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