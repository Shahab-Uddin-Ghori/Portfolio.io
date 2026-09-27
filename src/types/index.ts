export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
  username?: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  author: {
    name: string;
    role: string;
    bio: string;
    email?: string;
    location?: string;
  };
  links: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  keywords: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  year?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
