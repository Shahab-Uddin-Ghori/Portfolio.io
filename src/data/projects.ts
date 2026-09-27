export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  isWide?: boolean;
  link?: string;
}

export interface ProjectsData {
  tagline: string;
  headline: {
    line1: string;
    line2: string;
  };
  ctaText: string;
  ctaLink: string;
  projects: ProjectItem[];
}

export const projectsData: ProjectsData = {
  tagline: "PORTFOLIO",
  headline: {
    line1: "OUR",
    line2: "PROJECTS.",
  },
  ctaText: "ALL PROJECTS",
  ctaLink: "#projects",
  projects: [
    {
      id: "zentix",
      title: "ZENTIX",
      category: "/Design",
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
      alt: "Minimalist ceramic aroma device on warm terracotta background",
      isWide: false,
    },
    {
      id: "lumio",
      title: "LUMIO",
      category: "/UI/UX",
      image: "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=800&q=80",
      alt: "Vibrant orange lily flowers against saturated orange backdrop",
      isWide: false,
    },
    {
      id: "arkeo",
      title: "ARKEO",
      category: "/Brand",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1600&q=80",
      alt: "Cinematic portrait of mature gentleman with glasses in warm ambient interior",
      isWide: true,
    },
    {
      id: "novu",
      title: "NOVU",
      category: "/Research",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80",
      alt: "Dual electronic audio hardware synthesizer with orange and white finish",
      isWide: false,
    },
    {
      id: "pulse",
      title: "PULSE",
      category: "/Design",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      alt: "Minimalist geometric sphere casting shadow on terracotta architectural blocks",
      isWide: false,
    },
  ],
};
