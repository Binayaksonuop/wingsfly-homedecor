export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  location: string | null;
  projectSize: string | null;
  completionTime: string | null;
  description: string;
  coverImage: string | null;
  gallery: string[];
  beforeImage: string | null;
  afterImage: string | null;
  featured: boolean;
  tags: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string | null;
  icon: string | null;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string | null;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string | null;
}

export interface NavItem {
  id: string;
  label: string;
  path: string;
}
