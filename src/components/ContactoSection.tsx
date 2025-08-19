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
                
                {/* Enhanced Contact Methods */}
                <div className="space-y-6">
                  {/* Phone Button */}
                  <a 
                    href="tel:+584146308748"
                    className="flex items-center p-4 bg-gradient-to-r from-foreground to-gray-700 hover:from-gray-700 hover:to-foreground text-white rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
                  >
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-white/30 transition-colors">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-white/80">Teléfono</p>
                      <p className="text-lg font-bold">+58 414 6308748</p>
                    </div>
                    <div className="ml-auto">
                      <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                  
                  {/* Email Button */}
                  <a 
                    href="mailto:hola@kalhuacafe.com"
                    className="flex items-center p-4 bg-gradient-to-r from-warm-beige to-coffee hover:from-coffee hover:to-warm-beige text-white rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
                  >
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-white/30 transition-colors">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-white/80">Email</p>
                      <p className="text-lg font-bold">hola@kalhuacafe.com</p>
                    </div>
                    <div className="ml-auto">
                      <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                </div>
                
                {/* Social Media */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h4 className="text-xl font-semibold text-foreground mb-6">
                    Síguenos en redes sociales
                  </h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 hover:from-foreground hover:to-gray-700 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-xl group"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <IconComponent className="w-6 h-6 text-foreground group-hover:text-white transition-colors" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form - Enhanced Black Background */}
            <div className={`bg-gradient-to-br from-foreground to-gray-900 rounded-3xl p-10 shadow-2xl ${isVisible ? 'animate-fade-in-right delay-200' : 'opacity-0'}`}>
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-3">Envíanos un mensaje</h3>
                <p className="text-gray-300 text-lg">Estamos aquí para ayudarte</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="nombre"
                    placeholder="Tu nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:border-white focus:ring-white rounded-xl text-lg backdrop-blur-sm"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Tu email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:border-white focus:ring-white rounded-xl text-lg backdrop-blur-sm"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="mensaje"
                    placeholder="Cuéntanos, ¿en qué te podemos ayudar?"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:border-white focus:ring-white resize-none rounded-xl text-lg backdrop-blur-sm"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full h-14 bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-white text-foreground transition-all duration-300 hover:scale-105 hover:shadow-xl font-semibold text-lg rounded-xl"
                >
                  Enviar mensaje
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
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