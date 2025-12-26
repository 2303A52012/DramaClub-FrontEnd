import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import EventsSection from '@/components/EventsSection';
import PastEventsSection from '@/components/PastEventsSection';
import CommitteeSection from '@/components/CommitteeSection';
import AboutSection from '@/components/AboutSection';
import SocialMediaSection from '@/components/SocialMediaSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update document title for SEO
    document.title = 'Drama & Theatre Club | Where Every Story Finds Its Stage';
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <EventsSection />
      <SocialMediaSection />
      <PastEventsSection />
      <CommitteeSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
