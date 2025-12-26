import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-stage.jpg';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
        
        {/* Spotlight effect */}
        <div className="absolute inset-0 spotlight-overlay animate-spotlight" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Tagline */}
          <p 
            className="text-accent uppercase tracking-[0.3em] text-sm md:text-base font-medium mb-6 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Where Every Story Finds Its Stage
          </p>

          {/* Main Title */}
          <h1 
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            Drama <span className="text-gradient-gold">&</span><br />
            Theatre Club
          </h1>

          {/* Description */}
          <p 
            className="text-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.6s' }}
          >
            Step into the spotlight. Experience the magic of live performance, 
            unleash your creativity, and become part of a legacy that transforms 
            stories into unforgettable moments.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
            style={{ animationDelay: '0.8s' }}
          >
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection('#events')}
            >
              Join the Club
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => scrollToSection('#events')}
            >
              Explore Events
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('#events')}
          className="text-accent/70 hover:text-accent transition-colors"
          aria-label="Scroll to events"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>

      {/* Decorative curtain edges */}
      <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-primary/30 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-primary/30 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
