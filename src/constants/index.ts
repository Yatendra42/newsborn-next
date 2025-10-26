/**
 * Application constants
 */

// Site Configuration
export const SITE_CONFIG = {
  name: 'NewsBorn',
  description: 'Your source for the latest news and updates',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  author: 'NewsBorn Team',
} as const;

// API Configuration
export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || '/api',
  timeout: 10000,
} as const;

// Route Constants
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  SEARCH: '/search',
  CATEGORY: '/category',
  ARTICLE: '/article',
} as const;

// News Categories
export const NEWS_CATEGORIES = [
  'politics',
  'technology',
  'sports',
  'business',
  'health',
  'entertainment',
  'science',
  'world',
] as const;

// UI Constants
export const UI_CONFIG = {
  articlesPerPage: 10,
  searchDebounceMs: 300,
  maxArticleExcerptLength: 150,
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  GENERIC: 'Something went wrong. Please try again.',
  NETWORK: 'Network error. Please check your connection.',
  NOT_FOUND: 'The requested resource was not found.',
  VALIDATION: 'Please check your input and try again.',
} as const;