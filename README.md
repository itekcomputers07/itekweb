# iTEK Computers Website

A responsive marketing website for iTEK Computers built with React, TypeScript, Vite, and Tailwind CSS.

## Overview

This project is a single-page website for showcasing iTEK Computers services, customer reviews, contact information, and company details. The app is composed of reusable sections and is configured for fast local development and production builds.

## Built With

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- lucide-react
- react-icons
- react-helmet-async

## Project Structure

- `src/` – application source files
- `src/components/` – reusable page sections and UI components
- `src/config/site.ts` – site content, navigation, and contact data
- `src/index.css` – global styles
- `public/` – static assets
- `vite.config.ts` – Vite build configuration

## Getting Started

### Prerequisites

- Node.js 20+ recommended
- npm

### Install Dependencies

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Open the local development URL shown in the terminal.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` – start the Vite development server
- `npm run build` – build the production bundle
- `npm run preview` – preview the production build locally
- `npm run lint` – run ESLint
- `npm run format` – format files with Prettier
- `npm run type-check` – run TypeScript type checking

## Customize Site Content

Update `src/config/site.ts` to change:

- company name and contact details
- navigation items
- services offered
- social links
- address and opening hours

## Notes

- The Vite config uses `base: '.'` for relative asset loading.
- Routing is handled with React Router DOM for a home page and fallback route.
- The app includes a `@/` import alias for cleaner imports.

## License

This repository is private and intended for the iTEK Computers website project.
