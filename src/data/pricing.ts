export interface PricingPlan {
  id: string;
  type: "project" | "monthly";
  packageTag: string;
  packageName: string;
  paymentTag: string;
  price: string;
  period: string;
  specs: {
    label: string;
    value: string;
    icon: string;
  }[];
  features: string[];
  guarantee: {
    title: string;
    description: string;
  };
  ctaText: string;
}

export interface PricingSectionData {
  tagline: string;
  headline: {
    line1: string;
    line2: string;
  };
  plans: {
    project: PricingPlan;
    monthly: PricingPlan;
  };
}

export const pricingData: PricingSectionData = {
  tagline: "PRICING PLANS",
  headline: {
    line1: "SIMPLE PLANS",
    line2: "FOR EVERY NEED",
  },
  plans: {
    project: {
      id: "project-plan",
      type: "project",
      packageTag: "COMPLETE PACKAGE",
      packageName: "BASIC DESIGN PACKAGE",
      paymentTag: "ONE-TIME PAYMENT",
      price: "$200",
      period: "/Project",
      specs: [
        { label: "DELIVERY TIME", value: "2-3 Weeks", icon: "clock" },
        { label: "REVISIONS", value: "Up to 2", icon: "refresh" },
        { label: "FILE FORMAT", value: "Figma", icon: "folder" },
      ],
      features: [
        "Homepage + up to 2 inner pages",
        "Starter Design",
        "Basic Website Setup",
        "Initial Analysis",
        "Basic SEO Setup",
        "1 Months Support",
      ],
      guarantee: {
        title: "SATISFACTION GUARANTEE",
        description:
          "We are committed to delivering high-quality design work that meets and exceeds expectations.",
      },
      ctaText: "GET STARTED",
    },
    monthly: {
      id: "monthly-plan",
      type: "monthly",
      packageTag: "FULL-SERVICE MEMBERSHIP",
      packageName: "MONTHLY DESIGN RETAINER",
      paymentTag: "MONTHLY RETAINER",
      price: "$1,200",
      period: "/Month",
      specs: [
        { label: "DELIVERY TIME", value: "48-72 Hours", icon: "clock" },
        { label: "REVISIONS", value: "Unlimited", icon: "refresh" },
        { label: "FILE FORMAT", value: "Figma + Dev Ready", icon: "folder" },
      ],
      features: [
        "Dedicated Senior UI/UX Designer",
        "Unlimited Design Requests",
        "Rapid 48h Turnaround per task",
        "Unlimited Iterations & Revisions",
        "Direct Slack & Loom Collaboration",
        "Pause or Cancel Anytime",
      ],
      guarantee: {
        title: "FLEXIBLE COMMITMENT",
        description:
          "No lock-in contracts. Scale up during active sprints or pause your subscription anytime with zero friction.",
      },
      ctaText: "SUBSCRIBE NOW",
    },
  },
};
