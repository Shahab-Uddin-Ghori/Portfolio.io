export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
  variant: "author-top" | "author-bottom";
}

export interface TestimonialsSectionData {
  tagline: string;
  headline: {
    line1: string;
    line2: string;
  };
  subtitle: string;
  testimonials: TestimonialItem[];
}

export const testimonialsData: TestimonialsSectionData = {
  tagline: "DESIGNS CLIENTS LOVE",
  headline: {
    line1: "WHAT MY",
    line2: "CLIENTS SAY",
  },
  subtitle:
    "CREATING THOUGHTFUL AND USER-FOCUSED DESIGNS THAT HELP BRANDS GROW, IMPROVE USER EXPERIENCES LEAVE.",
  testimonials: [
    {
      id: "t1",
      name: "John Doe",
      role: "Marketing Director",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      quote:
        "Michael created a clean and intuitive design that perfectly matched our brand identity. The entire smooth professional.",
      variant: "author-top",
    },
    {
      id: "t2",
      name: "Daniel Smith",
      role: "Product Designer",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      quote:
        "The final design improved our user engagement and gave our platform a premium, modern feel. Michael's attention to detail.",
      variant: "author-bottom",
    },
    {
      id: "t3",
      name: "Sophia Taylor",
      role: "Director",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      quote:
        "Working with Michael was amazing experience. She transformed our ideas into a polished and functional product design.",
      variant: "author-top",
    },
    {
      id: "t4",
      name: "Olivia Harris",
      role: "Manager",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      quote:
        "Excellent communication, fast delivery, and outstanding attention to detail. Highly recommended for any UI/UX project.",
      variant: "author-bottom",
    },
    {
      id: "t5",
      name: "Alex Rivera",
      role: "Founder & CEO",
      avatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      quote:
        "From wireframe to final product, Michael delivered exceptional UI/UX solutions that drove our conversion rates up by 40%.",
      variant: "author-top",
    },
    {
      id: "t6",
      name: "Emily Chen",
      role: "Head of Growth",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      quote:
        "The attention to detail and user flow is simply world-class. Michael exceeded every benchmark we set for the redesign.",
      variant: "author-bottom",
    },
  ],
};
