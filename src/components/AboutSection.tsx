import { Quote, Target, Eye, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-accent uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Our Story
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            About <span className="text-gradient-gold">The Club</span>
          </h2>
        </div>

        {/* Origin story */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative bg-secondary/30 rounded-2xl p-8 md:p-12 border border-border/50">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-accent/30" />
            
            <div className="relative z-10">
              <p className="text-foreground/90 text-lg md:text-xl leading-relaxed mb-6 font-serif italic">
                "Theatre is life. Film is art. Television is furniture."
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Founded in 1985, the Drama & Theatre Club began as a small group of passionate students 
                who believed in the transformative power of storytelling. What started as informal 
                gatherings in the college auditorium has grown into one of the most prestigious 
                theatrical societies in the region.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over four decades, we have staged over 200 productions, won numerous awards, and most 
                importantly, created a community where creativity knows no bounds. Our alumni include 
                renowned actors, directors, and playwrights who continue to shape the world of theatre.
              </p>
            </div>
          </div>
        </div>

        {/* Vision, Mission, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Vision */}
          <div className="group relative bg-background rounded-xl p-8 border border-border/50 hover:border-accent/50 transition-all duration-500">
            <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
              <Eye className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
              Our Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the premier platform for theatrical excellence, nurturing talent that transcends 
              boundaries and inspires generations to come.
            </p>
          </div>

          {/* Mission */}
          <div className="group relative bg-background rounded-xl p-8 border border-border/50 hover:border-accent/50 transition-all duration-500">
            <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
              <Target className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To provide a nurturing environment where aspiring artists can explore, experiment, and 
              evolve through the medium of theatre and dramatic arts.
            </p>
          </div>

          {/* Values */}
          <div className="group relative bg-background rounded-xl p-8 border border-border/50 hover:border-accent/50 transition-all duration-500">
            <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
              <Heart className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
              Our Values
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Passion, Integrity, Collaboration, and Excellence. We believe that great theatre is 
              born from diverse voices coming together in creative harmony.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "40+", label: "Years of Legacy" },
            { number: "200+", label: "Productions" },
            { number: "50+", label: "Awards Won" },
            { number: "1000+", label: "Alumni Members" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
