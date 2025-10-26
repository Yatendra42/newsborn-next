# NewsBorn Next.js Project Structure

This project follows **industry-standard** Next.js architecture with TypeScript and SCSS support.

## 📁 Project Structure (Industry Standard)

```
newsborn-next/
├── src/                        # Source code (industry standard)
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout component
│   │   ├── page.tsx            # Home page
│   │   └── globals.scss        # Global SCSS styles
│   ├── components/             # Reusable React components
│   │   ├── header/             # Header component
│   │   │   ├── Header.tsx
│   │   │   ├── Header.scss
│   │   │   └── index.ts
│   │   ├── footer/             # Footer component
│   │   ├── searchBar/          # Search bar component
│   │   └── index.ts            # Component exports
│   ├── hooks/                  # Custom React hooks
│   │   └── index.ts            # useSearch, useLocalStorage, useApi
│   ├── lib/                    # Configuration & API clients
│   │   └── index.ts            # API client, SEO utils
│   ├── utils/                  # Utility functions
│   │   └── index.ts            # formatDate, debounce, truncateText
│   ├── types/                  # TypeScript definitions
│   │   └── index.ts            # Article, User, API types
│   ├── constants/              # App constants
│   │   └── index.ts            # Site config, routes, categories
│   ├── styles/                 # SCSS style files
│   │   ├── _variables.scss     # Design tokens
│   │   ├── _global.scss        # Global styles
│   │   └── components/         # Component-specific styles
│   └── assets/                 # Static assets
│       ├── images/             # Image files
│       ├── icons/              # Icon files
│       └── index.ts            # Asset exports
├── public/                     # Public static files
├── __tests__/                  # Test files (industry standard)
│   └── components/             # Component tests
├── .env.example               # Environment variables template
├── .gitignore                 # Git ignore rules
├── eslint.config.mjs          # ESLint configuration
├── next.config.ts             # Next.js configuration
├── package.json               # Dependencies and scripts
├── postcss.config.mjs         # PostCSS configuration
├── tsconfig.json              # TypeScript configuration
├── README.md                  # Project documentation
└── STRUCTURE.md               # This file
```

## ✅ Industry Standards Compliance

### 1. **Folder Organization**
- ✅ `src/` directory for source code
- ✅ Separation of concerns (components, hooks, utils, types)
- ✅ Logical grouping by functionality
- ✅ Consistent naming conventions

### 2. **TypeScript Best Practices**
- ✅ Strict TypeScript configuration
- ✅ Path mapping with `@/*` aliases
- ✅ Centralized type definitions
- ✅ Proper interface definitions

### 3. **Component Architecture**
- ✅ Component co-location (TS, SCSS, index in same folder)
- ✅ Barrel exports for clean imports
- ✅ TypeScript interfaces for all props
- ✅ Modular and reusable design

### 4. **Styling Architecture**
- ✅ SCSS with modern `@use` syntax (no deprecated `@import`)
- ✅ Design system with variables
- ✅ Component-specific styles
- ✅ Mobile-first responsive design

### 5. **Development Experience**
- ✅ ESLint configuration with Next.js rules
- ✅ Environment variables template
- ✅ Comprehensive documentation
- ✅ Test directory structure

## 🔧 Key Features

### **Custom Hooks** (`src/hooks/`)
- `useSearch` - Debounced search functionality
- `useLocalStorage` - Local storage management
- `useApi` - API call management with loading states

### **Utility Functions** (`src/utils/`)
- Date formatting
- Text truncation
- Slug generation
- Email validation
- Debouncing

### **Type Safety** (`src/types/`)
- Article and User interfaces
- API response types
- Component prop interfaces
- Form data types

### **Constants** (`src/constants/`)
- Site configuration
- API endpoints
- UI configuration
- Error messages

### **Library Functions** (`src/lib/`)
- API client with methods (GET, POST, PUT, DELETE)
- SEO utilities for meta tags
- Class name utilities

## 🎯 Benefits of This Structure

1. **Scalability**: Easy to add new features and components
2. **Maintainability**: Clear separation of concerns
3. **Developer Experience**: TypeScript autocompletion and error catching
4. **Performance**: Tree-shaking and code splitting support
5. **Team Collaboration**: Consistent patterns and conventions
6. **Testing**: Organized test structure
7. **SEO**: Built-in SEO optimization utilities

## 📋 Usage Examples

### Import Components
```typescript
import { Header, Footer, SearchBar } from '@/components';
```

### Use Custom Hooks
```typescript
import { useSearch, useApi } from '@/hooks';
```

### Access Utilities
```typescript
import { formatDate, truncateText } from '@/utils';
import { apiClient } from '@/lib';
```

### Type Definitions
```typescript
import type { Article, User } from '@/types';
```

## 🚀 Next Steps

This structure provides a solid foundation for:
- Adding new pages and components
- Implementing authentication
- Adding API routes
- Setting up testing
- Deploying to production

The structure follows **Next.js 16**, **React 19**, and modern **TypeScript** best practices for enterprise-level applications.