# E-Commerce Application

A full-featured e-commerce web application built with Next.js 15, React 19, and TypeScript. The application provides a seamless shopping experience with product browsing, cart management, wishlist functionality, user authentication, and category filtering.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)

---

## Overview

This project is a modern e-commerce storefront that communicates with the Route Academy API (`ecommerce.routemisr.com`). It leverages the Next.js App Router for server-side rendering, static generation, and API routes, while maintaining a clean and responsive user interface built with Tailwind CSS and Radix UI primitives.

---

## Tech Stack

### Core Framework

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.x | Full-stack React framework with App Router |
| React | 19.x | UI component library |
| TypeScript | 5.x | Static type checking |

### Authentication

| Technology | Version | Purpose |
|---|---|---|
| NextAuth.js | 4.x | Session management and credentials-based authentication |

### Styling and UI

| Technology | Version | Purpose |
|---|---|---|
| Tailwind CSS | 4.x | Utility-first CSS framework |
| Radix UI | Latest | Accessible, unstyled UI primitives (Dialog, Tooltip, Label, Separator, Collapsible) |
| class-variance-authority | 0.7.x | Component variant management |
| clsx + tailwind-merge | Latest | Conditional class name merging |
| lucide-react | 0.540.x | Icon library |
| react-icons | 5.x | Additional icon sets |
| tw-animate-css | 1.4.x | Tailwind animation utilities |

### Animation

| Technology | Version | Purpose |
|---|---|---|
| GSAP | 3.x | High-performance JavaScript animations |
| Motion | 12.x | Declarative animation library for React |

### Forms and Validation

| Technology | Version | Purpose |
|---|---|---|
| React Hook Form | 7.x | Performant, flexible form state management |
| @hookform/resolvers | 5.x | Validation resolver adapters |
| Zod | 4.x | TypeScript-first schema validation |

### Carousel and Sliders

| Technology | Version | Purpose |
|---|---|---|
| Embla Carousel | 8.x | Lightweight, extensible carousel with autoplay support |
| React Slick + Slick Carousel | 0.31.x | Additional carousel/slider component |

### Notifications

| Technology | Version | Purpose |
|---|---|---|
| Sonner | 2.x | Opinionated toast notification library |

### Theming

| Technology | Version | Purpose |
|---|---|---|
| next-themes | 0.4.x | Dark/light mode theme management |

### Utilities

| Technology | Version | Purpose |
|---|---|---|
| UUID | 14.x | Unique identifier generation |
| @iconify-icon/react | 3.x | Iconify icon integration |

### Package Manager

| Tool | Version |
|---|---|
| pnpm | 11.x |

---

## Features

- **Product Browsing** - View all products with detailed pages including image carousels, descriptions, and pricing
- **Category Filtering** - Browse products by category
- **Cart Management** - Add, remove, and adjust quantities of items in the shopping cart
- **Wishlist** - Save products to a personal wishlist
- **User Authentication** - Secure login and registration using credentials via NextAuth.js
- **Protected Routes** - Middleware-enforced route protection for authenticated-only pages
- **Dark/Light Mode** - Theme switching with persistent preference
- **Responsive Design** - Fully responsive layout across all device sizes
- **Toast Notifications** - Real-time feedback on user actions
- **Form Validation** - Client-side schema validation using Zod and React Hook Form

---

## Project Structure

```
src/
├── app/
│   ├── (main)/              # Main application routes (layout group)
│   │   ├── products/        # Product listing and detail pages
│   │   ├── cart/            # Shopping cart page
│   │   ├── wishlist/        # Wishlist page
│   │   └── categories/      # Category browsing pages
│   ├── api/                 # Next.js API routes
│   ├── auth/                # Authentication pages (login, register)
│   ├── auth.ts              # NextAuth configuration and options
│   ├── types/               # Shared TypeScript type definitions
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/              # Shared UI components
├── hooks/                   # Custom React hooks
├── lib/
│   ├── services/            # API service functions
│   ├── utils.ts             # General utility functions
│   ├── server-utils.ts      # Server-side utility functions
│   └── Providers.tsx        # Context and theme providers
└── middleware.ts             # Route protection middleware
```

---

## Getting Started

### Prerequisites

- Node.js 18 or higher
- pnpm 11 or higher

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd ecommerce
```

2. Install dependencies:

```bash
pnpm install
```

3. Create a `.env.local` file in the root directory and configure the required environment variables (see [Environment Variables](#environment-variables)).

4. Start the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`.

---

## Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
API_BASE_URL=https://ecommerce.routemisr.com
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_key
```

| Variable | Description |
|---|---|
| `API_BASE_URL` | Base URL for the Route Academy e-commerce API |
| `NEXTAUTH_URL` | The canonical URL of your application |
| `NEXTAUTH_SECRET` | A secret used to encrypt NextAuth.js JWTs and session cookies |

---

## Scripts

| Script | Command | Description |
|---|---|---|
| Development | `pnpm dev` | Starts the development server with Turbopack |
| Build | `pnpm build` | Creates a production build with Turbopack |
| Start | `pnpm start` | Starts the production server |
