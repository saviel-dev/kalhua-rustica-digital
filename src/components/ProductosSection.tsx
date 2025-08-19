import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const ProductosSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const productos = [
    {
      id: 1,
      nombre: "Marquesa Kalhua",
      descripcion: "Nuestro postre insignia con capas de café artesanal, textura cremosa y el sabor único que nos caracteriza",
      imagen: "/lovable-uploads/428a4bb0-5311-41e8-b795-8f2ae85ea3f2.png",
      destacado: true
    },
    {
      id: 2,
      nombre: "Café Premium",
      descripcion: "Granos selectos tostados con técnicas artesanales para ofrecerte una experiencia de sabor excepcional",
      imagen: "/lovable-uploads/a61f3d98-8d01-437b-92a7-a66646b97d42.png",
      destacado: false
    },
    {
      id: 3,
      nombre: "Café Especial del Día", 
      descripcion: "Mezclas exclusivas que cambian según la temporada, preparadas con la máxima dedicación",
      imagen: "/lovable-uploads/428a4bb0-5311-41e8-b795-8f2ae85ea3f2.png",
      destacado: false
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.product-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fadeInUp');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="productos" className="py-16 bg-warm-beige/20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-warm-beige rounded-full mb-8">
              <svg className="w-10 h-10 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2,21V19H20V21H2M20,8V5L18,5V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Products Grid - Reference Image Style */}
          <div className="grid md:grid-cols-3 gap-8">
            {productos.map((producto, index) => (
              <div 
                key={producto.id} 
                className="product-card group opacity-0 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Image Container - Dark background like reference */}
                <div className="relative h-72 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-8">
                  <img 
                    src={producto.imagen} 
                    alt={producto.nombre}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 rounded-2xl"
                  />
                  {producto.destacado && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-foreground to-gray-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      Estrella
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {producto.nombre}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-8 min-h-[60px]">
                    {producto.descripcion}
                  </p>
                  
                  {/* Button with black to gray gradient */}
                  <Button 
                    className="bg-gradient-to-r from-foreground to-gray-600 hover:from-gray-600 hover:to-foreground text-white font-medium px-8 py-3 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 text-sm"
                    onClick={() => window.open('https://wa.me/584146308748', '_blank')}
                  >
                    Ver Detalles
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="text-center bg-warm-beige/30 rounded-2xl p-8 border border-warm-beige/50">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿Quieres conocer más sobre nuestros productos?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Contáctanos y descubre todo lo que Kalhua Café tiene para ofrecerte
            </p>
            <Button 
              className="bg-gradient-to-r from-foreground to-muted text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 hover:from-muted hover:to-foreground"
              onClick={() => window.open('https://wa.me/584146308748', '_blank')}
            >
              Contáctanos por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductosSection;