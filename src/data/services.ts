export interface ServiceItem {
  id: string;
  number?: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  badgeText: string;
  href?: string;
}

export interface ServicesSectionData {
  tagline: string;
  headline: {
    line1: string;
    line2: string;
    line3: string;
  };
  services: ServiceItem[];
}

export const servicesData: ServicesSectionData = {
  tagline: "OUR SERVICES",
  headline: {
    line1: "POWERFUL",
    line2: "DESIGN SERVICES",
    line3: "FOR YOUR BRAND",
  },
  services: [
    {
      id: "service-01",
      number: "001",
      title: "UI/UX DESIGN & DEVELOPMENT",
      description:
        "Crafting intuitive digital experiences and high-performance web frontends that connect users with digital products effortlessly.",
      tags: [
        "User Experience Research",
        "Clean Wireframing",
        "Rapid Prototype Testing",
        "Usability Flow Testing",
        "Smart Interaction Design",
      ],
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
      badgeText: "VIEW CASE",
    },
    {
      id: "service-02",
      number: "002",
      title: "n8n & WORKFLOW AUTOMATION",
      description:
        "Designing end-to-end automated pipelines, webhook listeners, AI-driven data enrichment, and self-hosted n8n infrastructure.",
      tags: [
        "n8n Self-Hosted Setup",
        "Webhook Orchestration",
        "Multi-Step Workflows",
        "AI Agent Integrations",
        "Error Fallbacks & Alerts",
      ],
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
      badgeText: "AUTOMATION FLOW",
    },
    {
      id: "service-03",
      number: "003",
      title: "PRODUCT DESIGN & API SYSTEMS",
      description:
        "Shaping digital products from concept to launch with strategic system design, secure REST/GraphQL APIs, and high availability.",
      tags: [
        "Strategic System Design",
        "Scalable Architecture",
        "Early Concept Ideation",
        "Real User Validation",
        "End-to-End Delivery",
      ],
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
      badgeText: "DISCOVER MORE",
    },
    {
      id: "service-04",
      number: "004",
      title: "BRAND & DESIGN ENGINEERING",
      description:
        "Building cohesive visual identities, tokens, and scalable component design systems that communicate personality and trust.",
      tags: [
        "Design System Tokens",
        "Component Libraries",
        "Visual Storytelling",
        "Typography Styling",
      ],
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
      badgeText: "CASE STUDY",
    },
  ],
};
