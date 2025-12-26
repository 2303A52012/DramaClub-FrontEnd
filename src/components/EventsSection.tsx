import { Calendar, Clock, Users, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import eventImage from '@/assets/event-drama.jpg';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  type: string;
  image: string;
  featured?: boolean;
  description: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Annual Drama Festival 2025",
    date: "January 15, 2025",
    time: "6:00 PM",
    type: "Festival",
    image: eventImage,
    featured: true,
    description: "Our flagship event featuring performances from all drama societies across the region."
  },
  {
    id: 2,
    title: "Shakespeare Night",
    date: "January 28, 2025",
    time: "7:00 PM",
    type: "Performance",
    image: eventImage,
    description: "An evening dedicated to the timeless works of William Shakespeare."
  },
  {
    id: 3,
    title: "Acting Workshop",
    date: "February 5, 2025",
    time: "3:00 PM",
    type: "Workshop",
    image: eventImage,
    description: "Master the art of expression with our professional acting coaches."
  },
  {
    id: 4,
    title: "Open Mic Theatre",
    date: "February 12, 2025",
    time: "5:00 PM",
    type: "Open Event",
    image: eventImage,
    description: "Your stage, your story. Showcase your talent in our open mic session."
  },
];

const EventCard = ({ event }: { event: Event }) => {
  return (
    <Card className="group relative flex h-full flex-col overflow-hidden border-border/50 bg-card transition-all duration-500 hover:border-accent/50">
      {/* Featured badge */}
      {event.featured && (
        <div className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
          <Sparkles className="w-3 h-3" />
          Featured
        </div>
      )}
      
      {/* Image */}
      <div className="relative h-56 overflow-hidden sm:h-64">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        
        {/* Event type badge */}
        <span className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
          {event.type}
        </span>
      </div>

      <CardContent className="flex flex-1 flex-col gap-4 p-5">
        <h3 className={`font-serif font-bold text-foreground mb-2 group-hover:text-accent transition-colors ${event.featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
          {event.title}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-2">
          {event.description}
        </p>

        {/* Event details */}
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-accent" />
            {event.date}
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-accent" />
            {event.time}
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-auto flex flex-wrap gap-2">
          <Button variant="hero" size="sm" className="flex-1">
            Register
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="dramatic" size="sm" className="flex-1">
            <Users className="w-4 h-4" />
            Volunteer
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const EventsSection = () => {
  return (
    <section id="events" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-spotlight opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-accent uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Sparkill Window
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Upcoming <span className="text-gradient-gold">Events</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your gateway to extraordinary theatrical experiences. Register, volunteer, or participate in our upcoming productions.
          </p>
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <Button variant="heroOutline" size="lg">
            View All Events
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
