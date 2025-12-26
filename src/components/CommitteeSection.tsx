
import { Mail, Instagram, Linkedin } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "./ui/dialog";
import React, { useState } from "react";

interface Member {
  id: number;
  name: string;
  role: string;
  image: string;
  email: string;
  instagram?: string;
  linkedin?: string;
  info?: string;
}

const committeeMembers: Member[] = [
  {
    id: 1,
    name: "Nethra Dave",
    role: "President",
    image: "src\\assets\\NethraDave.jpg",
    email: "nethradev0807@gmail.com",
    instagram: "https://www.instagram.com/navy_kira?igsh=NGh5MHNtYWxuNHpo",
    linkedin: "https://www.linkedin.com/in/dave-nethra-40a31b37a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    info: "Anuthar is the visionary leader of the club, ensuring every production is a success and every member feels valued."
  },
  {
    id: 2,
    name: "S.PRANAVASAI",
    role: "Vice President",
    image: "src\\assets\\PRANAVASAIS.jpeg",
    email: "siddanthipranavasai@gmail.com",
    instagram: "https://www.instagram.com/pranavasai.s?igsh=MW1mc2Fsd3NlaGNqbw%3D%3D&utm_source=qr",
    linkedin: "https://www.linkedin.com/in/siddanthi-pranavasai-953461287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    info: "Priya coordinates between teams and brings creative ideas to life, supporting the president in all club activities."
  },
  {
    id: 3,
    name: "Harshitha Kodati",
    role: "Secretary",
    image: "src\\assets\\HarshithaKodati.jpg",
    email: "2403A54004@sru.edu.in",
    linkedin: "https://www.linkedin.com/in/harshitha-rao-kodati-2b7a7a338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    info: "Rahul manages all documentation and ensures smooth communication within the club."
  },
  {
    id: 4,
    name: "Boora Anuroop  Goud",
    role: "Joint secretary and social media Head",
    image: "src\\assets\\BOORAANUROOP.png",
    email: "2505a11052@sru.edu.in",
    instagram: "https://www.instagram.com/anuroopgoud22?igsh=cjA1NmxqaWlvb3Y2&utm_source=qr",
    linkedin: "https://www.linkedin.com/in/boora-anuroop-0a13a3390?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    info: "Ananya leads the creative team, designing sets and costumes that bring stories to life on stage."
  },
  {
    id: 5,
    name: "Rahul",
    role: "Treasurer",
    image: "src\\assets\\rahulgurrala.jpg",
    email: "rahulgurrala01@gmail.com",
    instagram: "#",
    linkedin: "#",
    info: "Vikram organizes and manages all club events, ensuring everything runs on schedule."
  },
  {
    id: 6,
    name: "Rangu Ajay",
    role: "PR Head",
    image: "src\\assets\\AjayRangu.jpg",
    email: "2303A51072@sru.edu.in",
    instagram: "https://www.instagram.com/mr_ranguajay/",
    linkedin: "https://www.linkedin.com/in/rangu-ajay-b46895227?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    info: "Sneha handles public relations and outreach, connecting the club with the community and media."
  },
  {
    id: 7,
    name: "Lavanya Naganaboina",
    role: "PR & marketing team member",
    image: "src\\assets\\LavanyaNaganaboina.jpg",
    email: "naganaboinalavanya8@gmail.com",
    instagram: "https://www.instagram.com/lavanya_naganaboina?igsh=MWM2N2UwMDE0emY5Nw==",
    linkedin: "https://www.linkedin.com/in/naganaboina-lavanya-b823a930a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    info: "Sneha handles public relations and outreach, connecting the club with the community and media."
  },
  {
    id: 8,
    name: "E.SAI ANURATH",
    role: "SCRIPTING HEAD",
    image: "src\\assets\\SaiAnurathEshwarapragada.jpg",
    email: "saianurath7779@gmail.com",
    instagram: "https://www.instagram.com/anurath_anni_206",
    linkedin: "https://www.linkedin.com/in/sai-anurath-eshwarapragada-220714287",
    info: "Sneha handles public relations and outreach, connecting the club with the community and media."
  },
  {
    id: 9,
    name: "P.lalith prakash",
    role: "SCRIPTING HEAD",
    image: "src\\assets\\PalakurthiLalithPrakash.jpeg",
    email: "palakurthilallu65039@gmail.com",
    instagram: "https://www.instagram.com/palakurthi_lallu/",
    linkedin: "https://www.linkedin.com/in/palakurthi-lalith-prakash/",
    info: "Sneha handles public relations and outreach, connecting the club with the community and media."
  },
];

const MemberCard = ({ member, onClick }: { member: Member; onClick: () => void }) => {
  return (
    <div className="group relative cursor-pointer" onClick={onClick} tabIndex={0} role="button">
      {/* Card */}
      <div className="relative overflow-hidden rounded-lg bg-card border border-border/50 hover:border-accent/50 transition-all duration-500">
        {/* Image container */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
          {/* Social icons - appear on hover */}
          <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            <a
              href={`mailto:${member.email}`}
              className="p-2 bg-accent/90 rounded-full text-accent-foreground hover:bg-accent transition-colors"
              aria-label={`Email ${member.name}`}
              onClick={e => e.stopPropagation()}
            >
              <Mail className="w-4 h-4" />
            </a>
            {member.instagram && (
              <a
                href={member.instagram}
                className="p-2 bg-primary/90 rounded-full text-primary-foreground hover:bg-primary transition-colors"
                aria-label={`${member.name}'s Instagram`}
                onClick={e => e.stopPropagation()}
                target="_blank" rel="noopener noreferrer"
              >
                <Instagram className="w-4 h-4" />
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                className="p-2 bg-secondary rounded-full text-secondary-foreground hover:bg-secondary/80 transition-colors"
                aria-label={`${member.name}'s LinkedIn`}
                onClick={e => e.stopPropagation()}
                target="_blank" rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
        {/* Info */}
        <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
          <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-accent transition-colors">
            {member.name}
          </h3>
          <p className="text-accent text-sm font-medium uppercase tracking-wider mt-1">
            {member.role}
          </p>
        </div>
      </div>
      {/* Decorative glow */}
      <div className="absolute -inset-1 bg-accent/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </div>
  );
};

const CommitteeSection = () => {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleCardClick = (member: Member) => {
    setSelectedMember(member);
    setDialogOpen(true);
  };

  return (
    <section id="committee" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-spotlight opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-accent uppercase tracking-[0.2em] text-sm font-medium mb-4">
            The Ensemble
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Core <span className="text-gradient-gold">Committee</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Meet the passionate individuals who work tirelessly behind the curtains to bring every production to life.
          </p>
        </div>

        {/* Committee grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {committeeMembers.map((member) => (
            <MemberCard key={member.id} member={member} onClick={() => handleCardClick(member)} />
          ))}
        </div>
      </div>

      {/* Dialog for member details */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="p-0 max-w-[350px] aspect-[3/4] flex flex-col overflow-hidden">
          {selectedMember && (
            <>
              {/* Full image at top, 3:4 ratio */}
              <div className="flex-1 relative w-full aspect-[3/4]">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                  style={{ minHeight: 0, minWidth: 0 }}
                />
                {/* Social icons overlay, bottom left */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                  <a
                    href={`mailto:${selectedMember.email}`}
                    className="p-2 bg-accent/90 rounded-full text-accent-foreground hover:bg-accent transition-colors"
                    aria-label={`Email ${selectedMember.name}`}
                    tabIndex={0}
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  {selectedMember.instagram && (
                    <a
                      href={selectedMember.instagram}
                      className="p-2 bg-primary/90 rounded-full text-primary-foreground hover:bg-primary transition-colors"
                      aria-label={`${selectedMember.name}'s Instagram`}
                      tabIndex={0}
                      target="_blank" rel="noopener noreferrer"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  )}
                  {selectedMember.linkedin && (
                    <a
                      href={selectedMember.linkedin}
                      className="p-2 bg-secondary rounded-full text-secondary-foreground hover:bg-secondary/80 transition-colors"
                      aria-label={`${selectedMember.name}'s LinkedIn`}
                      tabIndex={0}
                      target="_blank" rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              {/* Blurry, scrollable info area below image */}
              <div className="backdrop-blur-md bg-background/80 p-4 pt-3 overflow-y-auto max-h-40 border-t border-border" style={{ minHeight: '110px' }}>
                <DialogHeader>
                  <DialogTitle className="text-center">{selectedMember.name}</DialogTitle>
                  <DialogDescription>
                    <span className="block text-accent font-medium mb-2 text-center">{selectedMember.role}</span>
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-2 text-center">
                  {selectedMember.info && (
                    <span className="block text-base text-foreground mb-2">{selectedMember.info}</span>
                  )}
                  <span className="block text-sm text-muted-foreground">Email: {selectedMember.email}</span>
                </div>
                <DialogClose asChild>
                  <button className="mt-4 px-4 py-2 bg-accent text-accent-foreground rounded hover:bg-accent/80 transition w-full">Close</button>
                </DialogClose>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CommitteeSection;
