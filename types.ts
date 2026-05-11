export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  popular?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PortfolioItem {
  image: string;
  alt: string;
  title: string;
  description: string;
}
