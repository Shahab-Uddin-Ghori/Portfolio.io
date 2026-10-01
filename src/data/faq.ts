export interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

export interface FaqSectionData {
  tagline: string;
  headline: {
    line1: string;
    line2: string;
  };
  faqs: FaqItem[];
}

export const faqData: FaqSectionData = {
  tagline: "FAQ",
  headline: {
    line1: "FREQUENT",
    line2: "QUESTIONS",
  },
  faqs: [
    {
      id: "faq-01",
      number: "1.",
      question: "WHAT SERVICES DO YOU OFFER?",
      answer:
        "I specialize in UI/UX design, web design, and digital product design. My work includes SaaS dashboards, landing pages, eCommerce websites, and complete brand-focused UI systems.",
    },
    {
      id: "faq-02",
      number: "2.",
      question: "WHAT IS YOUR TYPICAL DESIGN PROCESS FROM START TO FINISH?",
      answer:
        "Every project begins with in-depth research and discovery to fully understand the goals, audience, and scope. From there it moves through wireframing, visual design, prototyping, and final delivery with close collaboration at every stage.",
    },
    {
      id: "faq-03",
      number: "3.",
      question: "WILL I BE INVOLVED IN THE DESIGN PROCESS ALONG THE WAY?",
      answer:
        "Yes, collaboration is essential. We maintain clear communication through structured check-ins, asynchronous video walkthroughs, and interactive prototype reviews so you are involved at every critical decision point.",
    },
    {
      id: "faq-04",
      number: "4.",
      question: "WHAT FILE WILL I RECEIVE WHEN THE PROJECT IS COMPLETE?",
      answer:
        "You will receive production-ready Figma files with full component systems, responsive design tokens, exported visual assets (SVG/PNG/WebP), developer handoff specs, and modern Next.js/React source code if development is part of the scope.",
    },
    {
      id: "faq-05",
      number: "5.",
      question: "DO YOU OFFER REVISIONS AFTER THE DESIGNS ARE DELIVERED?",
      answer:
        "Yes, each project includes dedicated revision rounds during active sprints, along with post-delivery launch support to ensure complete satisfaction and flawless technical execution.",
    },
  ],
};
