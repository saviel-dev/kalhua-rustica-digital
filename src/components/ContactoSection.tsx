import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Instagram, Facebook, MessageCircle, Phone, Mail, MessageSquare } from "lucide-react";

const ContactoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
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
      url: 'https://www.instagram.com/kalhuas_cafe',
      color: 'hover:text-pink-600',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    {
      name: 'TikTok',
      icon: MessageSquare,
      url: 'https://www.tiktok.com/@kalhuas_cafe',
      color: 'hover:text-black',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/kalhuas_cafe',
      color: 'hover:text-blue-600',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/584146308748',
      color: 'hover:text-green-600',
      target: '_blank',
      rel: 'noopener noreferrer'
    }
  ];

  return (
    <section id="contacto" className={`py-20 bg-gray-50 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contáctanos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o comentario? Estamos aquí para ayudarte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-[#111] p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Envíanos un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="nombre" className="text-sm font-medium text-gray-300">Nombre</label>
                <Input
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                  className="bg-[#222] border-[#333] text-white placeholder-gray-400 focus:border-white focus:ring-white/20"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">Correo electrónico</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                  className="bg-[#222] border-[#333] text-white placeholder-gray-400 focus:border-white focus:ring-white/20"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="telefono" className="text-sm font-medium text-gray-300">Teléfono</label>
                <Input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="0412 123 4567"
                  pattern="[0-9]{4} [0-9]{3} [0-9]{4}"
                  className="bg-[#222] border-[#333] text-white placeholder-gray-400 focus:border-white focus:ring-white/20"
                />
                <p className="text-xs text-gray-400 mt-1">Formato: 0412 123 4567</p>
              </div>

              <div className="space-y-2">
                <label htmlFor="mensaje" className="text-sm font-medium text-gray-300">Mensaje</label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={5}
                  placeholder="¿En qué podemos ayudarte?"
                  required
                  className="bg-[#222] border-[#333] text-white placeholder-gray-400 focus:border-white focus:ring-white/20"
                />
              </div>

              <div className="pt-2">
                <Button 
                  type="submit" 
                  className="w-full bg-white text-gray-900 hover:bg-gray-100 font-medium py-6 text-base transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-95"
                >
                  Enviar mensaje
                </Button>
              </div>
            </form>
          </div>

          {/* Hand-drawn Contact Card */}
          <div className="relative group">
            {/* Decorative elements */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl opacity-70 blur-sm group-hover:opacity-100 group-hover:blur transition-all duration-300 -z-10"></div>
            <div className="absolute inset-0 bg-white/95 rounded-xl shadow-lg -z-5"></div>
            
            <div className="relative bg-white p-8 rounded-xl border border-gray-200 group-hover:border-amber-200 transition-all duration-300">
              {/* Corner accents */}
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-amber-400 rounded-full border-2 border-white shadow-md transform group-hover:rotate-12 transition-transform duration-300"></div>
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-amber-400 rounded-full border-2 border-white shadow-md transform group-hover:-rotate-12 transition-transform duration-300"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-amber-400 rounded-full border-2 border-white shadow-md transform group-hover:rotate-12 transition-transform duration-300"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-amber-400 rounded-full border-2 border-white shadow-md transform group-hover:-rotate-12 transition-transform duration-300"></div>
              
              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Información de contacto</h3>
                <div className="w-20 h-1 bg-amber-400 mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:bg-amber-50 hover:shadow-sm">
                  <div className="p-3 bg-amber-100 rounded-lg shadow-inner">
                    <Mail className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 text-sm uppercase tracking-wider mb-1">Correo electrónico</h4>
                    <a 
                      href="mailto:kalhuascafe@gmail.com" 
                      className="text-amber-600 hover:text-amber-700 font-medium transition-colors duration-200 flex items-center"
                    >
                      <span className="truncate">kalhuascafe@gmail.com</span>
                      <svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:bg-amber-50 hover:shadow-sm">
                  <div className="p-3 bg-amber-100 rounded-lg shadow-inner">
                    <MessageSquare className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 text-sm uppercase tracking-wider mb-1">WhatsApp</h4>
                    <a 
                      href="https://wa.me/584146308748" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-700 font-medium transition-colors duration-200 flex items-center"
                    >
                      <span>+58 414 6308748</span>
                      <svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-medium text-gray-900 mb-4">Síguenos en redes</h4>
                <div className="flex space-x-3">
                  {/* Instagram */}
                  <a 
                    href="https://www.instagram.com/kalhuas_cafe" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-gray-50 hover:bg-[#E1306C] hover:text-white transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                  
                  {/* Facebook */}
                  <a 
                    href="https://www.facebook.com/kalhuas_cafe" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-gray-50 hover:bg-[#1877F2] hover:text-white transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                  
                  {/* TikTok */}
                  <a 
                    href="https://www.tiktok.com/@kalhuas_cafe" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-gray-50 hover:bg-black hover:text-white transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg group"
                    aria-label="TikTok"
                  >
                    <svg 
                      className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" 
                      viewBox="0 0 448 512" 
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0h88a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactoSection;