import { useState, useEffect } from "react";
import { Home, Store, Handshake, Hammer, Star } from "lucide-react";

interface TimelineStep {
  id: string;
  title: string;
  icon: React.ReactNode;
  status: 'completed' | 'current' | 'upcoming';
}

const Timeline = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const timeline = document.getElementById('timeline');
    if (timeline) observer.observe(timeline);

    return () => observer.disconnect();
  }, []);

  const timelineSteps: TimelineStep[] = [
    {
      id: 'inicio',
      title: 'Iniciar',
      icon: <Home className="w-6 h-6" />,
      status: 'completed'
    },
    {
      id: 'presencia',
      title: 'Presencia en tiendas',
      icon: <Store className="w-6 h-6" />,
      status: 'completed'
    },
    {
      id: 'alianzas',
      title: 'Alianzas comerciales',
      icon: <Handshake className="w-6 h-6" />,
      status: 'current'
    },
    {
      id: 'construccion',
      title: 'Construyendo',
      icon: <Hammer className="w-6 h-6" />,
      status: 'upcoming'
    },
    {
      id: 'lograr',
      title: '¡Lo logramos!',
      icon: <Star className="w-6 h-6" />,
      status: 'upcoming'
    }
  ];

  return (
    <div id="timeline" className="py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center">
          {timelineSteps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              {/* Paso de la línea de tiempo */}
              <div className={`
                flex flex-col items-center transition-all duration-300 
                ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}
              `} style={{ animationDelay: `${index * 100}ms` }}>
                
                {/* Círculo con icono */}
                <div className={`
                  w-16 h-16 rounded-full flex items-center justify-center mb-3 transition-all duration-300
                  ${step.status === 'completed' 
                    ? 'bg-coffee text-white shadow-lg' 
                    : step.status === 'current'
                    ? 'bg-coffee text-white shadow-lg animate-pulse'
                    : 'bg-gray-300 text-gray-500'
                  }
                `}>
                  {step.icon}
                </div>
                
                {/* Título */}
                <span className={`
                  text-sm font-medium text-center max-w-20 leading-tight
                  ${step.status === 'completed' 
                    ? 'text-coffee' 
                    : step.status === 'current'
                    ? 'text-coffee font-semibold'
                    : 'text-gray-500'
                  }
                `}>
                  {step.title}
                </span>
              </div>
              
              {/* Línea conectora (excepto después del último elemento) */}
              {index < timelineSteps.length - 1 && (
                <div className={`
                  h-0.5 w-16 mx-4 transition-all duration-300
                  ${step.status === 'completed' 
                    ? 'bg-coffee' 
                    : 'bg-gray-300'
                  }
                `}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
