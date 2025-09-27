import { useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";

const ProductosSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const productos = [
    {
      id: 1,
      nombre: "MARQUESA DE OREO",
      descripcion: "Base de crema de chocolate blanco y crema de oreo, capas de galleta oreo americana, y topping de galleta oreo",
      imagen: "/kalhua/OREO.png",
      precio: "$5.99",
      categoria: "Marquesas",
      destacado: true
    },
    {
      id: 2,
      nombre: "MARQUESA AREQUIPE CRUNCH",
      descripcion: "Base de crema de arequipe, relleno con arequipe y maní, topping de maní y arequipe",
      imagen: "/kalhua/AREQUIPE CRUNCH.png",
      precio: "$5.99",
      categoria: "Marquesas",
      destacado: false
    },
    {
      id: 3,
      nombre: "MARQUESA DE LIMÓN", 
      descripcion: "Base de crema de pie de limón, relleno de curd de limón, topping de crema chantilly y ralladura de limón",
      imagen: "/kalhua/LIMON.png",
      precio: "$5.99",
      categoria: "Marquesas",
      destacado: false
    },
    {
      id: 4,
      nombre: "MARQUESA AREQUIPE",
      descripcion: "Base de crema de arequipe, relleno con arequipe y topping de galleta y arequipe",
      imagen: "/kalhua/AREQUIPE.png",
      precio: "$5.99",
      categoria: "Marquesas",
      destacado: false
    },
    {
      id: 5,
      nombre: "MARQUESA DE PARCHITA",
      descripcion: "Base de crema de pie de Parchita, relleno de curd de parchita, topping de crema chantilly y curd de parchita",
      imagen: "/kalhua/PARCHITA.png",
      precio: "$5.99",
      categoria: "Marquesas",
      destacado: true
    },
    {
      id: 6,
      nombre: "MARQUESA DE CHOCOLATE",
      descripcion: "Base de crema de chocolate, relleno de sirope hershey y topping de cubierta de chocolate con galleta",
      imagen: "/kalhua/CHOCOLATE.png",
      precio: "$5.99",
      categoria: "Marquesas",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestras Marquesas</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map((producto) => (
            <div
              key={producto.id}
              className={`product-card group bg-white rounded-xl shadow-sm overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 opacity-0 border border-gray-100 ${
                producto.destacado ? 'ring-2 ring-amber-400' : ''
              }`}
            >
              <div className="relative h-40 overflow-hidden group">
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
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-base font-bold text-gray-900">{producto.nombre}</h3>
                  <span className="text-amber-600 font-bold text-base">{producto.precio}</span>
                </div>
                
                <p className="text-gray-600 text-xs mb-3 line-clamp-2">{producto.descripcion}</p>
                
                <div className="pt-2 border-t border-gray-100">
                  <button 
                    className="w-full border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-medium py-2 px-3 rounded-lg transition-all duration-300 flex items-center justify-center text-sm"
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