import { LucideIcon } from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
  path: string;
  icon: LucideIcon;
  section: 'main' | 'utility';
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Extension {
  id: string;
  name: string;
  developer: string;
  rating: number;
  downloads: string;
  category: 'Theme' | 'Extension' | 'Plugin' | 'Tool';
  image: string;
}

export interface DownloadOption {
  os: 'Windows' | 'Linux' | 'macOS' | 'iOS' | 'Android';
  version: string;
  size: string;
  hash: string;
  icon: LucideIcon;
  count: number;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  highlighted?: boolean;
  features: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
