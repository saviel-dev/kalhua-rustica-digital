import { Heart, Coffee } from "lucide-react";
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/a61f3d98-8d01-437b-92a7-a66646b97d42.png" 
                  alt="Kalhua Café"
                  className="h-8 filter brightness-0 invert"
                />
              </div>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                Pasión artesanal en cada taza. Kalhua Café es más que una marca, 
                es una experiencia que conecta sabores auténticos con momentos especiales.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Contacto</h4>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <p> +58 414 6308748</p>
                <p> hola@kalhuacafe.com</p>
                <p> Venezuela</p>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Enlaces Rápidos</h4>
              <div className="space-y-2 text-sm">
                <button 
                  onClick={() => document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Nuestra Historia
                </button>
                <button 
                  onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Productos
                </button>
                <button 
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contacto
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Síguenos</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/kalhuas_cafe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.tiktok.com/@kalhuas_cafe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  aria-label="TikTok"
                >
                  <FaTiktok className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.facebook.com/kalhuas_cafe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="pt-8 border-t border-primary-foreground/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <span>&copy; {currentYear} Kalhua Café. Todos los derechos reservados.</span>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <span>Hecho con</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                <span>y mucho</span>
                <Coffee className="w-4 h-4 text-coffee" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;