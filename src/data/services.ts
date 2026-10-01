export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  headline: string;
  description?: string;
  tags: string[];
  image: string;
  buttonText: string;
  buttonHref?: string;
  badgeText?: string;
}

export interface ServicesSectionData {
  tagline: string;
  heroHeadline: {
    tagline: string;
    title: string;
    copyrightYear: string;
    exploreText: string;
  };
  headline: {
    line1: string;
    line2: string;
    line3: string;
  };
  services: ServiceItem[];
}

export const servicesData: ServicesSectionData = {
  tagline: "OUR SERVICES",
  heroHeadline: {
    tagline: "MICHAEL ®",
    title: "SERVICES",
    copyrightYear: "©2026",
    exploreText: "[Scroll to Explore]",
  },
  headline: {
    line1: "POWERFUL",
    line2: "DESIGN SERVICES",
    line3: "FOR YOUR BRAND",
  },
  services: [
    {
      id: "service-01",
      number: "001",
      title: "UI/UX DESIGN",
      headline:
        "CRAFTING INTUITIVE DIGITAL EXPERIENCES THAT CONNECT USERS WITH PRODUCTS EFFORTLESSLY.",
      description:
        "Creating high-impact wireframes, design systems, and rapid prototype flows tailored for conversion and delight.",
      tags: [
        "User Experience Research",
        "Clean Wireframing",
        "Rapid Prototype Testing",
        "Usability Flow Testing",
        "Smart Interaction Design",
      ],
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=85",
      buttonText: "VIEW PROJECT",
      buttonHref: "/#projects",
    },
    {
      id: "service-02",
      number: "002",
      title: "APP DESIGN",
      headline:
        "DESIGNING SEAMLESS APP EXPERIENCES BUILT FOR TOUCH, SPEED, AND EVERYDAY USE.",
      description:
        "Native and cross-platform mobile interfaces crafted with pixel precision, haptics, and micro-interactions.",
      tags: [
        "iOS & Android Guidelines",
        "Micro-Interactions",
        "Touch Accessibility",
        "Cross-Platform Systems",
        "Performance Optimization",
      ],
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=85",
      buttonText: "VIEW PROJECT",
      buttonHref: "/#projects",
    },
    {
      id: "service-03",
      number: "003",
      title: "PRODUCT DESIGN",
      headline:
        "SHAPING DIGITAL PRODUCTS FROM CONCEPT TO LAUNCH WITH STRATEGY AND PRECISION.",
      description:
        "End-to-end product thinking from user interviews and MVP validation to scalable multi-tenant architectures.",
      tags: [
        "Strategic System Design",
        "Scalable Architecture",
        "Early Concept Ideation",
        "Real User Validation",
        "End-to-End Delivery",
      ],
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=85",
      buttonText: "VIEW PROJECT",
      buttonHref: "/#projects",
    },
    {
      id: "service-04",
      number: "004",
      title: "n8n & AUTOMATION",
      headline:
        "INTELLIGENT AUTOMATION PIPELINES, WEBHOOK INTEGRATIONS, AND AI AGENT WORKFLOWS.",
      description:
        "Connecting CRM, analytics, webhooks, and AI models into dependable autonomous self-hosted pipelines.",
      tags: [
        "Self-Hosted n8n Setup",
        "Webhook Orchestration",
        "Multi-Step Workflows",
        "AI Agent Integrations",
        "Error Fallbacks & Alerts",
      ],
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85",
      buttonText: "VIEW PROJECT",
      buttonHref: "/#projects",
    },
    {
      id: "service-05",
      number: "005",
      title: "BRAND DESIGN",
      headline:
        "BUILDING COHESIVE VISUAL IDENTITIES THAT COMMUNICATE PERSONALITY AND BUILD LASTING TRUST.",
      description:
        "Distinctive typography, visual identity guides, color psychology, and scalable design token systems.",
      tags: [
        "Design System Tokens",
        "Component Libraries",
        "Visual Storytelling",
        "Typography Styling",
        "Brand Guidelines",
      ],
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=85",
      buttonText: "VIEW PROJECT",
      buttonHref: "/#projects",
    },
  ],
};
