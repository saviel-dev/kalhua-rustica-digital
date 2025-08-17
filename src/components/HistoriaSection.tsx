import foundersImage from "@/assets/founders.jpg";

const HistoriaSection = () => {
  return (
    <section id="historia" className="py-20 bg-warm-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-section text-primary">
            Nuestra Historia
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted leading-relaxed">
                Kalhua Café nació del sueño de una pareja emprendedora que decidió convertir su 
                pasión por el café en algo más grande. Lo que comenzó como experimentos caseros 
                con granos selectos, se transformó en una marca que celebra la calidad artesanal 
                y el amor por los sabores auténticos.
              </p>
              
              <p className="text-lg text-muted leading-relaxed">
                Cada producto que creamos lleva nuestra esencia: el cuidado en la selección, 
                la dedicación en la preparación y la calidez de un negocio familiar. 
                Nuestras marquesas y cafés no son solo productos, son experiencias que 
                conectan momentos especiales con sabores inolvidables.
              </p>
              
              <p className="text-lg text-muted leading-relaxed">
                Con raíces venezolanas y un corazón lleno de ilusiones, Kalhua Café representa 
                la perseverancia, la calidad y el compromiso de llevar lo mejor del café 
                artesanal a cada hogar.
              </p>
              
              <div className="pt-4">
                <div className="inline-flex items-center space-x-4 bg-white/50 backdrop-blur-sm rounded-2xl px-6 py-4">
                  <div className="w-12 h-12 bg-coffee rounded-full flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/a61f3d98-8d01-437b-92a7-a66646b97d42.png" 
                      alt="Kalhua"
                      className="w-8 h-8 object-contain filter brightness-0 invert"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Kalhua</p>
                    <p className="text-sm text-muted">Nuestra mascota y símbolo</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="coffee-card p-2 bg-white">
                <img 
                  src={foundersImage} 
                  alt="Fundadores de Kalhua Café"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-coffee/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoriaSection;