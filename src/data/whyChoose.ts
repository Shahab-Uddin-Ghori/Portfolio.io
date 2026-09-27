export interface WhyChooseData {
  tagline: string;
  headline: {
    line1: string;
    line2Prefix: string;
    line2Suffix: string;
    line3: string;
  };
  experienceCard: {
    label: string;
    value: string;
    description: string;
  };
  satisfactionCard: {
    label: string;
    value: string;
    description: string;
  };
  centerCard: {
    bgImage: string;
    clientAvatars: string[];
    clientCountText: string;
    rating: string;
    quote: string;
    authorName: string;
    authorRole: string;
    authorAvatar: string;
  };
  silhouetteImage: {
    src: string;
    alt: string;
  };
  fastReliableCard: {
    title: string;
    description: string;
  };
}

export const whyChooseData: WhyChooseData = {
  tagline: "WHY CHOOSE ME",
  headline: {
    line1: "FOCUSED ON",
    line2Prefix: "DESIGN ",
    line2Suffix: "THAT",
    line3: "DELIVERS RESULTS",
  },
  experienceCard: {
    label: "DESIGN EXPERIENCE",
    value: "7+",
    description: "Creating modern and experiences with a focus on usability and impact.",
  },
  satisfactionCard: {
    label: "CLIENT SATISFACTION",
    value: "98%",
    description: "Focused on delivering results that meet both user needs and business.",
  },
  centerCard: {
    bgImage:
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80",
    clientAvatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    ],
    clientCountText: "1.2k+ Happy Clients Successfully",
    rating: "4.9/5",
    quote:
      "“Amelia delivered an outstanding UI/UX design that perfectly matched our vision. The attention to detail and user experience exceptional.”",
    authorName: "Olivia Davis",
    authorRole: "Product Manager",
    authorAvatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
  silhouetteImage: {
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",
    alt: "Artistic silhouette portrait with vibrant sunset light exposure",
  },
  fastReliableCard: {
    title: "FAST & RELIABLE",
    description:
      "I maintain an efficient workflow that ensures smooth collaboration, clear communication timely.",
  },
};
