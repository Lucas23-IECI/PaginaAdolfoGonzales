import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  icon: string;
  title: string;
  description: React.ReactNode;
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
  fullDescription?: string;
  whatsappText?: string;
}
