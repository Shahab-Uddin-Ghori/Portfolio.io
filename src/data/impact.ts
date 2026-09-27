export interface MetricItem {
  value: string;
  label: string;
  description: string;
}

export interface ImpactData {
  trustedBrandsHeading: string;
  tagline: string;
  headline: {
    line1: string;
    line2: string;
    highlight1: string;
    line3: string;
  };
  portraitSmall: {
    src: string;
    alt: string;
  };
  portraitBracket: {
    src: string;
    alt: string;
  };
  bio: string;
  metrics: MetricItem[];
}

export const impactData: ImpactData = {
  trustedBrandsHeading: "TRUSTED BY\nLEADING BRANDS",
  tagline: "BETTER DIGITAL JOURNEYS.",
  headline: {
    line1: "MY IMPACT",
    line2: "THROUGH ",
    highlight1: "USER",
    line3: "EXPERIENCE",
  },
  portraitSmall: {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    alt: "Michael smiling portrait with warm lighting",
  },
  portraitBracket: {
    src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
    alt: "Motion portrait in black hat with architectural brackets",
  },
  bio: "HI, I'M MICHAEL, A SOFTWARE DEVELOPER & n8n AUTOMATION SPECIALIST PASSIONATE ABOUT CREATING INTUITIVE USER EXPERIENCES, SCALABLE BACKENDS, AND HIGH-IMPACT AUTOMATION FLOWS.",
  metrics: [
    {
      value: "37+",
      label: "PROJECTS COMPLETED",
      description:
        "I have successfully completed a variety of projects across modern web, backend APIs, and multi-tier automation.",
    },
    {
      value: "72+",
      label: "HAPPY CLIENTS",
      description:
        "I have worked with clients from diverse industries delivering scalable architectures and automated workflows.",
    },
  ],
};
