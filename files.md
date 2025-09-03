# Slidvex Codebase Files

## Project Structure Overview

This document provides a comprehensive overview of the Slidvex codebase, describing the purpose and functionality of each file.

## Root Directory Files

### Configuration Files
- **`package.json`** - Project dependencies, scripts, and metadata
- **`tsconfig.json`** - TypeScript configuration for the main application
- **`tsconfig.node.json`** - TypeScript configuration for Node.js tools (Vite)
- **`vite.config.ts`** - Vite build tool configuration with React plugin
- **`.env.local`** - Environment variables including Convex deployment URL
- **`.gitignore`** - Git ignore patterns

### Documentation Files
- **`README.md`** - Comprehensive project documentation and setup instructions
- **`CHANGELOG.md`** - Development progress and feature tracking
- **`slidvex.md`** - Product Requirements Document (PRD) with detailed specifications
- **`theme.md`** - Design system guidelines and component styling rules
- **`files.md`** - This file, documenting the codebase structure

## Convex Backend (`convex/`)

### Core Files
- **`schema.ts`** - Database schema definition with tables for events, questions, comments, users, admin actions, and flagged content
- **`functions.ts`** - Convex functions including queries, mutations for CRUD operations on all entities
- **`tsconfig.json`** - TypeScript configuration for Convex functions

### Generated Files
- **`_generated/`** - Auto-generated TypeScript types and API definitions from Convex

## Source Code (`src/`)

### Entry Points
- **`main.tsx`** - Application entry point with Convex provider setup
- **`App.tsx`** - Main application component with routing configuration

### Components (`src/components/`)
- **`Header.tsx`** - Navigation header component with logo and navigation links
- **`QRCode.tsx`** - QR code generation component for mobile event access

### Pages (`src/pages/`)
- **`HomePage.tsx`** - Homepage displaying upcoming AMA events
- **`EventPage.tsx`** - Individual event page with two-panel layout (questions left, details right)
- **`AdminPage.tsx`** - Admin dashboard for creating and managing events

### Styling
- **`index.css`** - Global CSS with design system variables and responsive styles
- **`vite-env.d.ts`** - TypeScript declarations for Vite environment variables

## Key Features by File

### Event Management
- **`convex/schema.ts`** - Defines event, question, and comment data structures
- **`convex/functions.ts`** - Implements event CRUD operations and real-time queries
- **`src/pages/EventPage.tsx`** - Main event interface with question submission and display

### Question System
- **`convex/functions.ts`** - Question submission, upvoting, and moderation functions
- **`src/pages/EventPage.tsx`** - Question form and scrollable question list
- **`src/components/QRCode.tsx`** - Mobile access via QR codes

### Admin Functionality
- **`convex/functions.ts`** - Admin-only mutations for content moderation
- **`src/pages/AdminPage.tsx`** - Admin dashboard for event creation
- **`src/components/Header.tsx`** - Admin access via direct URL (not linked in header)

### Real-time Features
- **`convex/functions.ts`** - Real-time queries for live updates
- **`src/main.tsx`** - Convex provider setup for real-time functionality
- **`src/pages/EventPage.tsx`** - Live question and upvote updates

## Design System Implementation

### Theme Guidelines
- **`theme.md`** - Comprehensive design system documentation
- **`src/index.css`** - CSS variables and component styles following theme guidelines
- **`src/components/`** - Components implementing the design system

### Icon System
- **`@radix-ui/react-icons`** - Icon library (no emojis allowed)
- **`src/pages/EventPage.tsx`** - Icon usage examples (ArrowUpIcon for upvotes)

### Responsive Design
- **`src/index.css`** - Mobile-first responsive design with breakpoints
- **`src/pages/EventPage.tsx`** - Two-panel layout that adapts to mobile

## Development Workflow

### Build Process
- **`vite.config.ts`** - Development server and build configuration
- **`npm run dev`** - Start development server
- **`npm run build`** - Build for production
- **`npx convex dev`** - Start Convex development server

### Type Safety
- **`tsconfig.json`** - Strict TypeScript configuration
- **`convex/functions.ts`** - Type-safe database operations with Convex validators
- **`src/vite-env.d.ts`** - Environment variable type definitions

## File Dependencies

### Core Dependencies
- **React 19** - Frontend framework
- **Convex.dev** - Backend database and real-time functions
- **TypeScript** - Type-safe development
- **Vite** - Build tool and development server

### UI Dependencies
- **Radix UI Icons** - Icon system
- **QRCode** - QR code generation
- **React Router DOM** - Client-side routing

## Future Development Areas

### Planned Features
- **Authentication** - Clerk integration for user comments
- **Content Moderation** - Advanced admin tools and flagging system
- **Additional Features** - Polls, quizzes, surveys, and word clouds
- **Mobile App** - Native mobile application development

### Code Organization
- **Component Library** - Reusable UI components
- **Hook System** - Custom React hooks for common functionality
- **Utility Functions** - Helper functions and utilities
- **Testing Suite** - Unit and integration tests

This codebase represents a modern, type-safe, real-time application built with React, Convex, and TypeScript, following best practices for scalable development and maintainable code.
