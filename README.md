# NewsBorn - Next.js News Application

A modern news application built with Next.js 16, TypeScript, and SCSS following industry best practices.

## 🚀 Features

- ✅ **Next.js 16.0.0** with App Router
- ✅ **TypeScript** for type safety
- ✅ **SCSS/Sass** for advanced styling
- ✅ **Tailwind CSS** for utility classes
- ✅ **Responsive Design** with mobile-first approach
- ✅ **SEO Optimized** with proper meta tags
- ✅ **Modern Architecture** following industry standards

## 📁 Project Structure

```
newsborn-next/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.scss        # Global styles
│   ├── components/             # Reusable React components
│   │   ├── header/             # Header component
│   │   ├── footer/             # Footer component
│   │   ├── searchBar/          # Search component
│   │   └── index.ts            # Component exports
│   ├── styles/                 # SCSS style files
│   │   ├── _variables.scss     # Design tokens
│   │   ├── _global.scss        # Global styles
│   │   └── components/         # Component styles
│   ├── hooks/                  # Custom React hooks
│   ├── utils/                  # Utility functions
│   ├── lib/                    # Configuration & clients
│   ├── types/                  # TypeScript definitions
│   ├── constants/              # App constants
│   └── assets/                 # Static assets
├── public/                     # Public static files
├── __tests__/                  # Test files
├── .env.example               # Environment variables template
├── package.json               # Dependencies
└── README.md                  # Documentation
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd newsborn-next
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🏗️ Architecture

### Components
- **Modular Design**: Each component has its own directory with TypeScript, SCSS, and index files
- **Type Safety**: All components use TypeScript interfaces for props
- **Reusable**: Components are designed to be reusable across the application

### Styling
- **SCSS Modules**: Component-specific styling with SCSS
- **Design System**: Centralized variables for colors, spacing, and breakpoints
- **Responsive**: Mobile-first responsive design
- **Tailwind Integration**: Utility classes for rapid development

### TypeScript
- **Strict Mode**: Enabled for better type checking
- **Path Mapping**: Clean imports using `@/*` aliases
- **Type Definitions**: Centralized type definitions in `/src/types`

## 🔧 Configuration

### Path Aliases
```typescript
// tsconfig.json
{
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

### SCSS Variables
Global design tokens are defined in `src/styles/_variables.scss`:
- Colors
- Typography
- Spacing
- Breakpoints
- Border radius

## 📦 Dependencies

### Core
- Next.js 16.0.0
- React 19.2.0
- TypeScript 5+

### Styling
- Sass
- Tailwind CSS 4
- PostCSS

### Development
- ESLint
- ESLint Config Next

## 🌐 Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=/api
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🔗 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
