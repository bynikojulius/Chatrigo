import React from 'react';

export type Language = 'id' | 'en';

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  tag?: string;
  className?: string;
  bgPattern?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}