/**
 * TypeScript type definitions for the application
 */

// News Article Types
export interface Article {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  category: string;
  imageUrl?: string;
  tags: string[];
  slug: string;
}

// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'editor' | 'user';
  createdAt: string;
}

// Component Props
export interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
}

export interface HeaderProps {
  className?: string;
}

export interface FooterProps {
  className?: string;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  message: string;
  status: 'success' | 'error';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Form Types
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// for new portal API types
export interface NewsArticle {
  urlToImage: string | undefined;
  title: string;
  description?: string;
  url: string;
  image_url?: string;
  image?: string;
  publishedAt?: string;
  source_name?: string;
  source_icon?: string;
  country?: string;
  language?: string;
  category?: string;
  link?: string;
  articles?: any;
}

export interface FetchOptions {
  endpoint?: string;
  query?: string;
  language?: string;
  country?: string;
  category?: string;
  max?: number;
}
