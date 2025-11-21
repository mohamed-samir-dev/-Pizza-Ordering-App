# 🍕 Pizza Ordering App

[![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

A modern, responsive pizza ordering application built with cutting-edge web technologies. Features an intuitive user interface, smooth animations, and comprehensive cart management system.

## ✨ Features

### 🎯 Core Functionality
- **Interactive Pizza Menu** - Browse pizzas with detailed descriptions and pricing
- **Shopping Cart Management** - Add, remove, and modify pizza orders
- **Favorites System** - Save favorite pizzas for quick reordering
- **User Authentication** - Secure login and registration system
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices

### 🎨 User Experience
- **Modern UI/UX** - Clean, intuitive interface with gradient effects
- **Smooth Animations** - Enhanced user interactions with Rough Notation
- **Visual Feedback** - Toast notifications and flash messages
- **Accessibility** - WCAG compliant design patterns

### 🔧 Technical Features
- **Type Safety** - Full TypeScript implementation
- **Performance Optimized** - Next.js 16 with React 19 Server Components
- **SEO Ready** - Built-in sitemap generation and meta optimization
- **Code Quality** - ESLint configuration with Next.js best practices

## 🚀 Tech Stack

### Frontend Framework
- **[Next.js 16.0.1](https://nextjs.org/)** - React framework with App Router
- **[React 19.2.0](https://reactjs.org/)** - Latest React with concurrent features
- **[TypeScript 5.x](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling & UI
- **[Tailwind CSS 4.x](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icons
- **[React Icons](https://react-icons.github.io/react-icons/)** - Popular icon library

### Animations & Interactions
- **[Rough Notation](https://roughnotation.com/)** - Hand-drawn style annotations
- **[React Curved Arrow](https://www.npmjs.com/package/react-curved-arrow)** - Curved arrow components

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting and formatting
- **[PostCSS](https://postcss.org/)** - CSS processing and optimization

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (version 18.0 or higher)
- **npm** (version 8.0 or higher) or **yarn** (version 1.22 or higher)
- **Git** (for version control)

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd -Pizza-Ordering-App
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory (if needed):
```env
# Add your environment variables here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Run Development Server
```bash
npm run dev
# or
yarn dev
```

### 5. Open Application
Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build application for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality checks |

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── cart/              # Shopping cart page
│   ├── favorites/         # Favorites page
│   ├── login/             # Authentication pages
│   ├── signup/            
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── sitemap.ts         # SEO sitemap generation
├── components/            # Reusable UI components
│   ├── cart/              # Cart-related components
│   ├── favorites/         # Favorites components
│   ├── HeroIllustration/  # Hero section graphics
│   ├── layout/            # Layout components
│   ├── ourchiefs/         # Chef showcase components
│   ├── PizzaMenu/         # Menu display components
│   └── ui/                # Generic UI components
├── constants/             # Application constants
├── contexts/              # React Context providers
│   ├── CartContext.tsx    # Shopping cart state
│   ├── FavoritesContext.tsx # Favorites management
│   ├── FlashContext.tsx   # Flash messages
│   └── ToastContext.tsx   # Toast notifications
├── handlers/              # Business logic handlers
├── hooks/                 # Custom React hooks
│   ├── auth/              # Authentication hooks
│   ├── navigation/        # Navigation utilities
│   └── ui/                # UI interaction hooks
├── lib/                   # Utility libraries
├── types/                 # TypeScript type definitions
│   ├── auth.ts            # Authentication types
│   ├── cart.ts            # Cart-related types
│   └── components/        # Component prop types
└── utils/                 # Helper functions
    └── localStorage.ts    # Local storage utilities
```

## 🎯 Key Features Implementation

### State Management
- **Context API** - Global state management for cart, favorites, and notifications
- **Local Storage** - Persistent data storage for user preferences
- **Type Safety** - Comprehensive TypeScript interfaces for all data structures

### Authentication System
- **Login/Signup** - User registration and authentication
- **Session Management** - Secure user session handling
- **Protected Routes** - Route-level authentication guards

### Cart Management
- **Add to Cart** - Seamless product addition with quantity selection
- **Cart Persistence** - Maintains cart state across sessions
- **Order Calculation** - Real-time price calculations and totals

### Responsive Design
- **Mobile-First** - Optimized for mobile devices
- **Breakpoint System** - Tailwind CSS responsive utilities
- **Touch-Friendly** - Enhanced mobile interactions

## 🔧 Configuration

### Next.js Configuration
The project includes optimized Next.js configuration:
- **Image Optimization** - Remote pattern support for GitHub images
- **Performance** - Compression and ETag generation enabled
- **Security** - Powered-by header disabled

### TypeScript Configuration
- **Strict Mode** - Enhanced type checking
- **Path Mapping** - `@/*` alias for src directory
- **Modern Target** - ES2017 compilation target

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm run start
```

### Deployment Platforms
This application can be deployed on:
- **[Vercel](https://vercel.com/)** (Recommended for Next.js)
- **[Netlify](https://netlify.com/)**
- **[AWS Amplify](https://aws.amazon.com/amplify/)**
- **[Railway](https://railway.app/)**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Code Style

This project follows:
- **ESLint** configuration with Next.js recommended rules
- **TypeScript** strict mode for type safety
- **Prettier** formatting (if configured)
- **Conventional Commits** for commit messages

## 🐛 Troubleshooting

### Common Issues

**Port 3000 already in use:**
```bash
npx kill-port 3000
# or use a different port
npm run dev -- -p 3001
```

**Module not found errors:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors:**
```bash
npm run lint
# Fix any linting issues
```

## 📄 License

This project is private and proprietary. All rights reserved.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For the beautiful icon set
- **Rough Notation** - For the hand-drawn animations

---

**Made with ❤️ and ☕ by [Your Name]**

For questions or support, please contact [your-email@example.com]