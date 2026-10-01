export interface AboutMarqueeImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  iconType: "asterisk" | "loop" | "star" | "diamond" | "trophy" | "sparkle";
  achievementType: string;
  year: string;
}

export interface CareerMilestone {
  id: string;
  company: string;
  period: string;
  image: string;
  role?: string;
  description?: string;
}

export interface AboutData {
  hero: {
    tagline: string;
    title: string;
    copyrightYear: string;
    exploreText: string;
    marqueeImages: AboutMarqueeImage[];
  };
  achievements: {
    tagline: string;
    headline: {
      line1: string;
      line2: string;
    };
    items: AchievementItem[];
  };
  careerJourney: {
    tagline: string;
    headline: {
      line1: string;
      line2Prefix: string;
      line2Suffix: string;
      line3: string;
    };
    items: CareerMilestone[];
  };
}

export const aboutData: AboutData = {
  hero: {
    tagline: "MICHAEL ®",
    title: "ABOUT US",
    copyrightYear: "©2026",
    exploreText: "[Scroll to Explore]",
    marqueeImages: [
      {
        id: "img-01",
        src: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=85",
        alt: "Design editorial book in red cover",
        caption: "Design Thinking Book",
      },
      {
        id: "img-02",
        src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
        alt: "Creative portrait with dramatic red studio lighting",
        caption: "Creative Identity",
      },
      {
        id: "img-03",
        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=85",
        alt: "Design colleagues collaborating over tablet in warm daylight",
        caption: "Collaborative Session",
      },
      {
        id: "img-04",
        src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&q=85",
        alt: "Futuristic VR headset with vibrant orange aesthetics",
        caption: "Spatial Web Design",
      },
      {
        id: "img-05",
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
        alt: "Editorial designer portrait in warm studio ambience",
        caption: "Design Director",
      },
      {
        id: "img-06",
        src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=85",
        alt: "Modern high-end design sprint workshop",
        caption: "Sprint Workshop",
      },
    ],
  },
  achievements: {
    tagline: "HONORS & AWARDS",
    headline: {
      line1: "MICHAEL®",
      line2: "ACHIEVEMENTS",
    },
    items: [
      {
        id: "ach-01",
        title: "FEATURED DESIGNER OF THE YEAR AWARD RECIPIENT",
        iconType: "asterisk",
        achievementType: "Design Awards",
        year: "2021",
      },
      {
        id: "ach-02",
        title: "BEST CREATIVE PORTFOLIO EXPERIENCE AWARD WINNER",
        iconType: "loop",
        achievementType: "Digital Recognition",
        year: "2022",
      },
      {
        id: "ach-03",
        title: "EXCELLENCE IN UI/UX DESIGN ACHIEVEMENT AWARD",
        iconType: "star",
        achievementType: "UI/UX Honor",
        year: "2023",
      },
      {
        id: "ach-04",
        title: "MODERN WEB EXPERIENCE AWARD RECOGNITION WINNER",
        iconType: "diamond",
        achievementType: "Industry Recognition",
        year: "2024",
      },
      {
        id: "ach-05",
        title: "TOP MOBILE APP DESIGN INNOVATION TROPHY",
        iconType: "trophy",
        achievementType: "Mobile Excellence",
        year: "2024",
      },
      {
        id: "ach-06",
        title: "GLOBAL BRAND IDENTITY OF THE YEAR WINNER",
        iconType: "sparkle",
        achievementType: "Brand Awards",
        year: "2025",
      },
      {
        id: "ach-07",
        title: "DEVELOPER CHOICE DESIGN SYSTEM AWARD",
        iconType: "loop",
        achievementType: "Tech Awards",
        year: "2025",
      },
      {
        id: "ach-08",
        title: "CREATIVE LEADERSHIP & ART DIRECTION HONOR",
        iconType: "star",
        achievementType: "Leadership Award",
        year: "2026",
      },
    ],
  },
  careerJourney: {
    tagline: "CAREER JOURNEY",
    headline: {
      line1: "PURPOSE-DRIVEN",
      line2Prefix: "EXPERIENCES ",
      line2Suffix: "FOR",
      line3: "MODERN COMPANIES",
    },
    items: [
      {
        id: "cj-01",
        company: "FRAMERDEVS",
        period: "2021 - 2023",
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=85",
        role: "Senior UI/UX Engineer",
        description: "Engineered scalable design token workflows and interactive client websites with zero frame drops.",
      },
      {
        id: "cj-02",
        company: "REDDEVS",
        period: "2021 - PRESENT",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85",
        role: "Lead Creative Technologist",
        description: "Directing multi-disciplinary engineering and visual squads delivering web platforms for global brands.",
      },
    ],
  },
};
