export interface InsightArticle {
  id: string;
  category: string;
  title: string;
  excerpt?: string;
  date: string;
  image: string;
  slug: string;
}

export interface InsightsSectionData {
  tagline: string;
  headline: {
    line1: string;
    line2: string;
  };
  subtitle: string;
  featuredArticle: InsightArticle;
  recentArticles: InsightArticle[];
}

export const insightsData: InsightsSectionData = {
  tagline: "DESIGN INSIGHTS",
  headline: {
    line1: "LATEST DESIGN",
    line2: "INSIGHTS",
  },
  subtitle:
    "EXPLORE INSIGHTS, DESIGN TRENDS, AND CREATIVE IDEAS FOCUSED ON UI/UX, DIGITAL PRODUCTS, AND BUILDING.",
  featuredArticle: {
    id: "insight-1",
    category: "DESIGN",
    title: "The First Impression Effect in UI Design",
    excerpt:
      "Why the first screen a user sees can make or break the entire product experience.",
    date: "Nov 23, 2024",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
    slug: "first-impression-effect",
  },
  recentArticles: [
    {
      id: "insight-2",
      category: "Branding",
      title: "How Color Shapes Brand Perception Instantly",
      date: "Jun 23, 2025",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
      slug: "how-color-shapes-brand-perception",
    },
    {
      id: "insight-3",
      category: "Motion",
      title: "Why Micro-Animations Matter More Than You Think",
      date: "Jul 23, 2025",
      image:
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80",
      slug: "why-micro-animations-matter",
    },
  ],
};
