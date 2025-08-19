import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Instagram, Facebook, MessageCircle, Phone, Mail } from "lucide-react";

const ContactoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('contacto');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/kalhuacafe',
      color: 'hover:text-pink-600'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/kalhuacafe',
      color: 'hover:text-blue-600'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/584146308748',
      color: 'hover:text-green-600'
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-warm-beige/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Conecta con Nosotros
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estamos aquí para ayudarte y resolver cualquier duda que tengas
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  ¡Hablemos de café!
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Estamos aquí para resolver tus dudas, recibir tus pedidos especiales 
                  o simplemente charlar sobre nuestra pasión: el café artesanal.
                </p>
                
                {/* Contact Methods - Minimalist Style */}
                <div className="space-y-4">
                  {/* Phone */}
                  <a 
                    href="tel:+584146308748"
                    className="flex items-center p-4 border-2 border-foreground rounded-lg hover:bg-foreground hover:text-white transition-all duration-200 group"
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    <div>
                      <p className="text-sm text-muted-foreground group-hover:text-white/80">Teléfono</p>
                      <p className="font-medium">+58 414 6308748</p>
                    </div>
                  </a>
                  
                  {/* Email */}
                  <a 
                    href="mailto:hola@kalhuacafe.com"
                    className="flex items-center p-4 border-2 border-foreground rounded-lg hover:bg-foreground hover:text-white transition-all duration-200 group"
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    <div>
                      <p className="text-sm text-muted-foreground group-hover:text-white/80">Email</p>
                      <p className="font-medium">hola@kalhuacafe.com</p>
                    </div>
                  </a>
                </div>
                
                {/* Social Media - Minimalist */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-xl font-semibold text-foreground mb-6">
                    Síguenos en redes sociales
                  </h4>
                  <div className="flex space-x-3">
                    {socialLinks.map((social) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 border border-foreground rounded-full flex items-center justify-center hover:bg-foreground hover:text-white transition-all duration-200"
                        >
                          <IconComponent className="w-4 h-4" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form - Minimalist Black */}
            <div className={`bg-foreground border border-gray-700 rounded-lg p-8 ${isVisible ? 'animate-fade-in-right delay-200' : 'opacity-0'}`}>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-3">Envíanos un mensaje</h3>
                <p className="text-gray-300">Estamos aquí para ayudarte</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-white/30 text-white placeholder:text-gray-400 focus:border-white focus:ring-white"
                />
                
                <Input
                  type="email"
                  name="email"
                  placeholder="Tu email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-white/30 text-white placeholder:text-gray-400 focus:border-white focus:ring-white"
                />
                
                <Textarea
                  name="mensaje"
                  placeholder="Cuéntanos, ¿en qué te podemos ayudar?"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="bg-transparent border-white/30 text-white placeholder:text-gray-400 focus:border-white focus:ring-white resize-none"
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-white text-foreground hover:bg-gray-100 transition-colors duration-200 font-medium"
                >
                  Enviar mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactoSection;