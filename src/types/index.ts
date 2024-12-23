export interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

export interface Skill {
  category: string;
  icon: React.ReactNode;
  items: string[];
  bgColor: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}