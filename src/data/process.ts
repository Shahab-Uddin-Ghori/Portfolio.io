export interface ProcessStep {
  id: string;
  iconType: "star4" | "asterisk" | "plus" | "cross";
  title: string;
  description: string;
}

export interface ProcessData {
  tagline: string;
  headline: {
    line1: string;
    line2: string;
  };
  steps: ProcessStep[];
}

export const processData: ProcessData = {
  tagline: "MY DESIGN PROCESS",
  headline: {
    line1: "DESIGN PROCESS",
    line2: "THAT WORKS",
  },
  steps: [
    {
      id: "prototyping",
      iconType: "star4",
      title: "PROTOTYPING",
      description:
        "Understanding user needs, goals, and project through research and analysis foundation.",
    },
    {
      id: "wireframing",
      iconType: "asterisk",
      title: "WIRE FRAMING",
      description:
        "Creating structure and layout to visualize ideas and build a strong project foundation.",
    },
    {
      id: "ui-design",
      iconType: "plus",
      title: "UI DESIGN",
      description:
        "Designing clean, modern, and engaging interfaces that enhance business usability.",
    },
    {
      id: "improvement",
      iconType: "cross",
      title: "IMPROVEMENT",
      description:
        "Refining the design through feedback and testing to ensure the best user experience.",
    },
  ],
};
