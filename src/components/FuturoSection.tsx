import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Coffee } from "lucide-react";

const FuturoSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Fecha objetivo para la cafetería física (ejemplo: 6 meses desde ahora)
  const targetDate = new Date();
  targetDate.setMonth(targetDate.getMonth() + 6);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="py-20 bg-gradient-to-br from-coffee/10 to-coffee-bean/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-coffee rounded-full mb-4">
              <Coffee className="w-10 h-10 text-coffee-foreground" />
            </div>
            <h2 className="heading-section">
              Próximamente: ¡Nuestra Cafetería Física!
            </h2>
          </div>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            El sueño se hace realidad. Pronto podrás visitarnos en nuestro acogedor espacio 
            donde cada detalle estará pensado para ofrecerte la mejor experiencia cafetera.
          </p>
          
          {/* Countdown Timer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <Card key={unit} className="coffee-card text-center">
                <CardContent className="p-6">
                  <div className="text-3xl md:text-4xl font-bold text-coffee mb-2">
                    {value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm text-muted-foreground capitalize">
                    {unit === 'days' && 'Días'}
                    {unit === 'hours' && 'Horas'}
                    {unit === 'minutes' && 'Minutos'}
                    {unit === 'seconds' && 'Segundos'}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Future Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-coffee" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                Ubicación Estratégica
              </h3>
              <p className="text-muted-foreground">
                Un espacio pensado para la comodidad y el disfrute de nuestros clientes
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-coffee" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                Experiencia Completa
              </h3>
              <p className="text-muted-foreground">
                Degustaciones, talleres y eventos especiales para los amantes del café
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-coffee" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                Horarios Extensos
              </h3>
              <p className="text-muted-foreground">
                Disponible para acompañarte desde temprano hasta la noche
              </p>
            </div>
          </div>
          
          <div className="bg-warm-beige/50 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-primary mb-4">
              ¿Quieres ser el primero en conocer nuestra cafetería?
            </h3>
            <p className="text-muted-foreground mb-6">
              Regístrate para recibir invitaciones exclusivas a nuestro evento de inauguración
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <button 
                className="btn-hero flex-1"
                onClick={() => window.open('https://wa.me/584146308748?text=¡Hola! Me interesa recibir información sobre la inauguración de su cafetería física.', '_blank')}
              >
                Quiero estar al día
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuturoSection;