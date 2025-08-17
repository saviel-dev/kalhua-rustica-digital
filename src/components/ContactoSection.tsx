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
    <section id="contacto" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-section">
            Conecta con Nosotros
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  ¡Hablemos de café!
                </h3>
                <p className="text-lg text-readable leading-relaxed mb-6">
                  Estamos aquí para resolver tus dudas, recibir tus pedidos especiales 
                  o simplemente charlar sobre nuestra pasión: el café artesanal.
                </p>
              </div>
              
              {/* Contact Methods */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 hover-lift">
                  <div className="w-12 h-12 bg-coffee rounded-full flex items-center justify-center animate-pulse-gentle">
                    <Phone className="w-5 h-5 text-coffee-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Teléfono</p>
                    <a href="tel:+584146308748" className="text-coffee hover:underline">
                      +58 414 6308748
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 hover-lift">
                  <div className="w-12 h-12 bg-coffee rounded-full flex items-center justify-center animate-pulse-gentle">
                    <Mail className="w-5 h-5 text-coffee-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Email</p>
                    <a href="mailto:hola@kalhuacafe.com" className="text-coffee hover:underline">
                      hola@kalhuacafe.com
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">
                  Síguenos en redes sociales
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-card rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${social.color} hover:shadow-lg animate-float`}
                        style={{ animationDelay: `${social.name === 'Instagram' ? '0s' : social.name === 'Facebook' ? '0.2s' : '0.4s'}` }}
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className={`coffee-card hover-lift ${isVisible ? 'animate-fade-in-right delay-200' : 'opacity-0'}`}>
              <CardHeader>
                <CardTitle className="text-primary">Envíanos un mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="nombre"
                      placeholder="Tu nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="focus-coffee"
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
                      className="focus-coffee"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="mensaje"
                      placeholder="Cuéntanos, ¿en qué te podemos ayudar?"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="focus-coffee resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="btn-hero w-full"
                  >
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactoSection;