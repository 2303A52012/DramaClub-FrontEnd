import { Calendar, Clock, Users, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import eventImage from '@/assets/event-drama.jpg';
import skitImage from '@/assets/skit.jpg';
import mm from '@/assets/mm.png';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  type: string;
  image: string;
  featured?: boolean;
  description: string;
  registerLink: string;
  volunteerLink: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Sparkill'26 stage Drama ",
    date: "Sparkrill Day 3 - January 26, 2026",
    time: "During Pronight",
    type: "Surprise Stage Performance",
    image: skitImage,
    featured: true,
    description: "The stage awaits its final moment. An unannounced performance will unfold during Pronight — powerful, unexpected, and unforgettable. Be present to witness it.",
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSczUWN--oV9KKXOgm86S6FTgaedXsl-gsdDcJcv_wWsDJmZGQ/viewform?usp=header",
    volunteerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfvklFKKzRJ_tHr_42ryUcsrRjqg1EuSdojIAVWTjP1fdr7eA/viewform?usp=header" 
  },
  {
    id: 2,
    title: "Murder Mystery",
    date: "Sparkrill Day 2 - January 25, 2026",
    time: "2 Hours",
    type: "Competition",
    image: mm,
    description: "A team-based investigative competition where participants solve a gripping murder case using logic, clues, and collaboration. No acting required — only sharp reasoning and fair play.",
    registerLink:"https://docs.google.com/forms/d/e/1FAIpQLScnW3R3bMT9V2tyAZUMd6WapAVFx1Zs-EIZsPfyj23OZqHZ5w/viewform?usp=header",
    volunteerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfvklFKKzRJ_tHr_42ryUcsrRjqg1EuSdojIAVWTjP1fdr7eA/viewform?usp=header" 
  },
  {
    id: 3,
    title: "Spotlight Arena",
    date: "Sparkrill Day 1 - January 24, 2025",
    time: "To be announced",
    type: "Fun & Interactive",
    image: eventImage,
    description: "A lively interactive session featuring engaging games and screenings, designed to energize the audience and set the creative tone for Sparkrill.",
    registerLink: "",
    volunteerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfvklFKKzRJ_tHr_42ryUcsrRjqg1EuSdojIAVWTjP1fdr7eA/viewform?usp=header" 
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
          <Button asChild variant="hero" size="sm" className="flex-1">
  <a href={event.registerLink} target="_blank" rel="noopener noreferrer">
    Register
    <ArrowRight className="w-4 h-4" />
  </a>
</Button>
<Button asChild variant="dramatic" size="sm" className="flex-1">
  <a href={event.volunteerLink} target="_blank" rel="noopener noreferrer">
    <Users className="w-4 h-4" />
    Volunteer
  </a>
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
