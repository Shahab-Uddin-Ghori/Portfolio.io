export interface HeroNavLink {
  title: string;
  href: string;
  active?: boolean;
  count?: string;
}

export interface HeroData {
  brand: {
    name: string;
    trademark: string;
    href: string;
  };
  navLinks: HeroNavLink[];
  watermarkText: string;
  foregroundName: string;
  copyrightYear: string;
  manifesto: {
    lines: string[];
  };
  portrait: {
    src: string;
    alt: string;
  };
  projectBadge: {
    title: string;
    category: string;
    image: string;
    symbol: string;
  };
  contactCard: {
    tagline: string;
    name: string;
    role: string;
    avatar: string;
  };
}

export const heroData: HeroData = {
  brand: {
    name: "Portfoliob",
    trademark: "®",
    href: "/",
  },
  navLinks: [
    { title: "Home", href: "/", active: true },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services", count: "05" },
    { title: "Work", href: "/#projects", count: "12" },
    { title: "Contact", href: "/#contact" },
  ],
  watermarkText: "MICHAEL",
  foregroundName: "MICHAEL",
  copyrightYear: "©2026",
  manifesto: {
    lines: [
      "I DESIGN USER-CENTERED DIGITAL",
      "EXPERIENCES AND SCALABLE AUTOMATION",
      "WORKFLOWS THAT ARE SIMPLE,",
      "SMART AND IMPACTFUL",
    ],
  },
  portrait: {
    src: "/images/michael-cutout.png",
    alt: "Michael portrait looking left in profile",
  },
  projectBadge: {
    title: "ZENTIX",
    category: "/Web Design",
    image: "/images/zentix-device.jpg",
    symbol: "✱",
  },
  contactCard: {
    tagline: "Let's Talk",
    name: "Michael",
    role: "UI/UX Designer",
    avatar: "/images/michael-cutout.png",
  },
};
