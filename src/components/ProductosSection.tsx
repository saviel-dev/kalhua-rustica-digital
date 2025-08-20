import { useEffect, useRef } from "react";
import { Star, ChevronRight } from "lucide-react";

const ProductosSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const productos = [
    {
      id: 1,
      nombre: "Marquesa Kalhua",
      descripcion: "Nuestro postre insignia con capas de café artesanal, textura cremosa y el sabor único que nos caracteriza.",
      imagen: "/lovable-uploads/post.jpg",
      precio: "$5.99",
      categoria: "Postres",
      destacado: true
    },
    {
      id: 2,
      nombre: "Café Premium",
      descripcion: "Granos selectos tostados con técnicas artesanales para ofrecerte una experiencia de sabor excepcional.",
      imagen: "/lovable-uploads/post.jpg",
      precio: "$3.50",
      categoria: "Bebidas",
      destacado: false
    },
    {
      id: 3,
      nombre: "Café Especial del Día", 
      descripcion: "Mezclas exclusivas que cambian según la temporada, preparadas con la máxima dedicación.",
      imagen: "/lovable-uploads/post.jpg",
      precio: "$4.25",
      categoria: "Bebidas",
      destacado: false
    },
    {
      id: 4,
      nombre: "Tarta de Chocolate",
      descripcion: "Deliciosa tarta de chocolate negro con toques de avellana, un clásico irresistible.",
      imagen: "/lovable-uploads/post.jpg",
      precio: "$6.50",
      categoria: "Postres",
      destacado: true
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
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="productos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Productos</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productos.map((producto) => (
            <div
              key={producto.id}
              className={`product-card group bg-white rounded-xl shadow-sm overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 opacity-0 border border-gray-100 ${
                producto.destacado ? 'ring-2 ring-amber-400' : ''
              }`}
            >
              <div className="relative h-48 overflow-hidden group">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
                      producto.categoria === 'Bebidas' ? 'group-hover:scale-110' : 'group-hover:scale-105'
                    }`}
                  />
                  {producto.categoria === 'Bebidas' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 mt-2">
                        <div className="absolute w-4 h-8 bg-white/30 rounded-full animate-steam-1"></div>
                        <div className="absolute w-3 h-6 bg-white/40 rounded-full left-1/2 -translate-x-1/2 animate-steam-2"></div>
                        <div className="absolute w-4 h-8 bg-white/30 rounded-full right-0 animate-steam-3"></div>
                      </div>
                    </div>
                  )}
                </div>
                {producto.destacado && (
                  <div className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 animate-pulse">
                    Destacado
                  </div>
                )}
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-amber-800 text-xs font-semibold px-2 py-1 rounded-full shadow-sm z-10">
                  {producto.categoria}
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{producto.nombre}</h3>
                  <span className="text-amber-600 font-bold text-lg">{producto.precio}</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{producto.descripcion}</p>
                
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                    <span className="text-gray-500 text-xs ml-1">(24)</span>
                  </div>
                  <button 
                    className="text-sm font-medium text-amber-600 hover:text-amber-700 flex items-center"
                    onClick={() => window.open('https://wa.me/584146308748', '_blank')}
                  >
                    Ordenar
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductosSection;