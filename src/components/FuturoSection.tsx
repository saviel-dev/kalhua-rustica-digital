import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Coffee } from "lucide-react";
import Timeline from "./Timeline";

const FuturoSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isVisible, setIsVisible] = useState(false);

  // Observador de intersección para activar animaciones
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('futuro-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Fecha de inicio: 28 de marzo de 2024
  const startDate = new Date('2024-03-28');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = now - startDate.getTime();

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="futuro-section" className="py-20 bg-gradient-to-br from-coffee/10 to-coffee-bean/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-coffee rounded-full mb-4 animate-float">
              <Coffee className="w-10 h-10 text-coffee-foreground" />
            </div>
            <h2 className="heading-section">
              Próximamente: ¡Nuestra Cafetería Física!
            </h2>
          </div>
          
          <p className={`text-xl text-readable leading-relaxed mb-12 max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            El sueño se hace realidad. Acompáñanos en cada paso hasta abrir nuestra cafetería y ofrecerte la mejor experiencia.
          </p>
          
          {/* Días vendiendo */}
          <div className={`mb-8 ${isVisible ? 'animate-fade-in-up delay-250' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-coffee mb-6">Días vendiendo</h3>
          </div>
          
          {/* Countdown Timer */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 ${isVisible ? 'animate-scale-in delay-300' : 'opacity-0'}`}>
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
          
          {/* Timeline de Progreso */}
          <div className={`mb-12 ${isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">
              Nuestro Camino hacia la Cafetería Física
            </h3>
            <Timeline />
          </div>

          {/* Características actualizadas */}
          <div className={`grid md:grid-cols-3 gap-8 mb-12 ${isVisible ? 'animate-fade-in-up delay-450' : 'opacity-0'}`}>
            <div className="text-center hover-lift">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-gentle">
                <MapPin className="w-8 h-8 text-coffee" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                Ubicación Estratégica
              </h3>
              <p className="text-readable-light">
                Encuentra tu postre favorito actualmente en la tienda Soulbike de la castellana.
              </p>
            </div>
            
            <div className="text-center hover-lift delay-100">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-gentle">
                <Coffee className="w-8 h-8 text-coffee" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                Experiencia Completa
              </h3>
              <p className="text-readable-light">
                Un lugar donde podrás degustar productos de calidad, y tu mascota a la par será consentida.
              </p>
            </div>
            
            <div className="text-center hover-lift delay-200">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-gentle">
                <Clock className="w-8 h-8 text-coffee" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                Horarios Extensos
              </h3>
              <p className="text-readable-light">
                Atención personalizada, disponibles para atenderte en cada momento
              </p>
            </div>
          </div>
          
          <div className={`bg-warm-beige/50 rounded-2xl p-8 backdrop-blur-sm hover-lift ${isVisible ? 'animate-scale-in delay-500' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-primary mb-4">
              ¿Quieres ser el primero en conocer nuestra cafetería?
            </h3>
            <p className="text-readable-light mb-6">
              Regístrate para recibir invitaciones exclusivas a nuestro evento de inauguración
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <button 
                className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white hover:from-black hover:to-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl py-3 px-6 rounded-lg font-medium flex-1"
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