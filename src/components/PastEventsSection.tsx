import { useState } from 'react';
import { X } from 'lucide-react';
import pastEvent1 from '@/assets/past-event-1.jpg';
import pastEvent2 from '@/assets/past-event-2.jpg';

interface PastEvent {
  id: number;
  title: string;
  year: string;
  image: string;
  description: string;
}

const pastEvents: PastEvent[] = [
  {
    id: 1,
    title: "Macbeth - The Dark Tale",
    year: "2024",
    image: pastEvent1,
    description: "A haunting rendition of Shakespeare's masterpiece that captivated audiences for three nights."
  },
  {
    id: 2,
    title: "Behind the Curtains",
    year: "2024",
    image: pastEvent2,
    description: "An intimate look at the preparation and dedication that goes into every performance."
  },
  {
    id: 3,
    title: "The Comedy of Errors",
    year: "2023",
    image: pastEvent1,
    description: "A hilarious production that had the audience in stitches from start to finish."
  },
  {
    id: 4,
    title: "One Act Play Competition",
    year: "2023",
    image: pastEvent2,
    description: "Inter-college competition showcasing the best theatrical talents from across the state."
  },
  {
    id: 5,
    title: "Romeo & Juliet",
    year: "2022",
    image: pastEvent1,
    description: "Our most acclaimed production, bringing the classic love story to life."
  },
  {
    id: 6,
    title: "Theatre Workshop Series",
    year: "2022",
    image: pastEvent2,
    description: "Month-long intensive workshops covering acting, direction, and stagecraft."
  },
];

const PastEventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState<PastEvent | null>(null);
  const [activeYear, setActiveYear] = useState<string>('All');

  const years = ['All', ...new Set(pastEvents.map(e => e.year))];
  const filteredEvents = activeYear === 'All' 
    ? pastEvents 
    : pastEvents.filter(e => e.year === activeYear);

  return (
    <section id="past-events" className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--foreground)) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-accent uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Our Legacy
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Past <span className="text-gradient-gold">Productions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A journey through our theatrical history. Each production tells a story of passion, dedication, and artistic excellence.
          </p>
        </div>

        {/* Year filters */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeYear === year
                  ? 'bg-accent text-accent-foreground shadow-glow-gold'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <div
              key={event.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer aspect-[4/3]"
              onClick={() => setSelectedEvent(event)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="text-accent text-sm font-medium mb-1">{event.year}</span>
                <h3 className="font-serif text-xl font-bold text-foreground">{event.title}</h3>
              </div>

              {/* Year badge (always visible) */}
              <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                {event.year}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedEvent(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-card rounded-lg overflow-hidden shadow-dramatic animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-background/80 rounded-full text-foreground hover:text-accent transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="grid md:grid-cols-2">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-64 md:h-full object-cover"
              />
              <div className="p-8 flex flex-col justify-center">
                <span className="text-accent text-sm font-medium uppercase tracking-wider mb-2">
                  {selectedEvent.year}
                </span>
                <h3 className="font-serif text-3xl font-bold text-foreground mb-4">
                  {selectedEvent.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedEvent.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PastEventsSection;
