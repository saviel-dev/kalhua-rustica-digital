import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import productsImage from "@/assets/coffee-products.jpg";

const ProductosSection = () => {
  const productos = [
    {
      id: 1,
      nombre: "Marquesa Kalhua",
      descripcion: "Nuestro postre insignia con capas de café artesanal y textura cremosa",
      destacado: true
    },
    {
      id: 2,
      nombre: "Café Premium",
      descripcion: "Granos selectos tostados con técnicas artesanales para un sabor único",
      destacado: false
    },
    {
      id: 3,
      nombre: "Café Especial del Día",
      descripcion: "Mezclas exclusivas que cambian según la temporada y disponibilidad",
      destacado: false
    }
  ];

  return (
    <section id="productos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-section">
            Productos Destacados
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <div className="coffee-card p-2 bg-card">
                <img 
                  src={productsImage} 
                  alt="Productos Kalhua Café"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              {productos.map((producto) => (
                <Card key={producto.id} className={`coffee-card ${producto.destacado ? 'ring-2 ring-coffee/20' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary mb-2 flex items-center gap-2">
                          {producto.nombre}
                          {producto.destacado && (
                            <span className="bg-coffee text-coffee-foreground text-xs px-2 py-1 rounded-full">
                              Estrella
                            </span>
                          )}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {producto.descripcion}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              ¿Quieres conocer más sobre nuestros productos?
            </p>
            <Button 
              className="btn-hero"
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