import { Instagram, Facebook, Twitter, Youtube, Linkedin, X } from 'lucide-react';
import React, { useState } from 'react';
import UnderConstruction from './UnderConstruction';

// WhatsApp SVG icon using currentColor for fill/stroke
const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
  >
    <path
      d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.372.71.306 1.263.489 1.695.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z"
      fill="currentColor"
    />
    <path
      d="M12.004 2.003c-5.523 0-9.997 4.474-9.997 9.997 0 1.762.464 3.484 1.345 4.997L2 22l5.104-1.335A9.953 9.953 0 0012.004 22c5.523 0 9.997-4.474 9.997-9.997 0-5.523-4.474-9.997-9.997-9.997zm0 17.994a7.96 7.96 0 01-4.073-1.13l-.291-.173-3.027.792.808-2.953-.19-.303A7.963 7.963 0 014.04 12c0-4.418 3.584-8.002 7.964-8.002 4.418 0 8.002 3.584 8.002 8.002 0 4.418-3.584 8.002-8.002 8.002z"
      fill="currentColor"
    />
  </svg>
);

const socialLinks = [
  { 
    icon: Instagram, 
    label: 'Instagram', 
    href: 'https://www.instagram.com/sru_drama_theatre_club/', 
    color: 'hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400',
    followers: '600',
    underConstruction: false
  },
  {
    icon: WhatsappIcon,
    label: 'WhatsApp',
    href: 'https://chat.whatsapp.com/KmJtwSvfsOaClWWiHG5Vxh', 
    color: 'hover:bg-[#25D366]',
    followers: 'Join Group',
    underConstruction: false
  },
  { 
    icon: Youtube, 
    label: 'YouTube', 
    href: '',
    color: 'hover:bg-[#FF0000]',
    followers: '',
    underConstruction: true
  },
  { 
    icon: Linkedin, 
    label: 'LinkedIn', 
    href: '',
    color: 'hover:bg-[#0A66C2]',
    followers: '',
    underConstruction: true
  },
];

const SocialMediaSection = () => {
  const [showModal, setShowModal] = useState<string | null>(null);
  return (
    <section className="py-16 md:py-24 bg-card relative overflow-hidden">
      {/* Spotlight effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Under Construction Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="relative bg-background rounded-xl shadow-lg p-0 max-w-xs w-full">
            <button
              className="absolute top-2 right-2 text-muted-foreground hover:text-accent"
              onClick={() => setShowModal(null)}
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <UnderConstruction />
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-accent uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Stay Connected
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Follow <span className="text-gradient-gold">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Join our community and never miss an update. Follow us on social media for 
            behind-the-scenes content, announcements, and more!
          </p>
        </div>

        {/* Social media cards */}
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {socialLinks.map(({ icon: Icon, label, href, color, followers, underConstruction }) => (
            underConstruction ? (
              <button
                key={label}
                type="button"
                onClick={() => setShowModal(label)}
                className={`group relative flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 bg-secondary/50 border border-border/50 rounded-2xl transition-all duration-500 ${color} hover:border-transparent hover:scale-105 hover:shadow-2xl focus:outline-none`}
              >
                <Icon className="w-10 h-10 md:w-12 md:h-12 text-muted-foreground group-hover:text-white transition-colors duration-300 mb-2" />
                <span className="mt-2 text-sm font-medium text-foreground group-hover:text-white transition-colors duration-300">
                  {label}
                </span>
                <span className="mt-1 text-xs text-muted-foreground group-hover:text-white/80 transition-colors duration-300">
                  {followers} followers
                </span>
                {/* Shine effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </button>
            ) : (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 bg-secondary/50 border border-border/50 rounded-2xl transition-all duration-500 ${color} hover:border-transparent hover:scale-105 hover:shadow-2xl`}
              >
                <Icon className="w-10 h-10 md:w-12 md:h-12 text-muted-foreground group-hover:text-white transition-colors duration-300" />
                <span className="mt-2 text-sm font-medium text-foreground group-hover:text-white transition-colors duration-300">
                  {label}
                </span>
                <span className="mt-1 text-xs text-muted-foreground group-hover:text-white/80 transition-colors duration-300">
                  {followers} followers
                </span>
                {/* Shine effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </a>
            )
          ))}
        </div>

        {/* CTA text */}
        <p className="text-center text-muted-foreground mt-10 text-sm">
          Tag us using <span className="text-accent font-semibold">#DramaTheatreClub</span> to get featured!
        </p>
      </div>
    </section>
  );
};

export default SocialMediaSection;
