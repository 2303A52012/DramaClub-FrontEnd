import { Theater, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Theater className="w-6 h-6 text-accent" />
            <span className="font-serif text-xl font-bold text-foreground">
              Drama <span className="text-accent">&</span> Theatre Club
            </span>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <span>© {currentYear} Drama & Theatre Club. Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>for the arts.</span>
          </div>

          {/* Quick links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
              About
            </a>
            <a href="#events" className="text-muted-foreground hover:text-accent transition-colors">
              Events
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
