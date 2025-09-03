# Slidvex Setup Todo List

## Phase 1: Project Initialization

- [ ] Create project directory `slidvex`
- [ ] Navigate to project directory
- [ ] Initialize git repository: `git init`
- [ ] Create new GitHub repository at github.com (name: "slidvex")
- [ ] Initialize npm project: `npm init -y`

## Phase 2: Install Dependencies

- [ ] Install core dependencies:
  ```bash
  npm install convex react react-dom react-router-dom
  ```
- [ ] Install dev dependencies:
  ```bash
  npm install -D @types/react @types/react-dom typescript vite @vitejs/plugin-react
  ```
- [ ] Install Clerk for authentication:
  ```bash
  npm install @clerk/clerk-react
  ```

## Phase 3: Convex Setup

- [ ] Create Convex project: `npm create convex`
- [ ] Initialize Convex: `npx convex dev --init`
- [ ] Verify convex/ directory was created
- [ ] Check .env.local for Convex deployment URL
- [ ] Verify convex.json configuration

## Phase 4: Project Configuration Files

- [ ] Create `vite.config.ts` with React plugin
- [ ] Create `tsconfig.json` with proper TypeScript configuration
- [ ] Create `index.html` in root directory
- [ ] Create `src/` directory structure
- [ ] Update `package.json` scripts for dev and build

## Phase 5: Clerk Authentication Setup

- [ ] Go to clerk.com and create new application
- [ ] Get publishable key and secret key
- [ ] Add keys to `.env.local`
- [ ] Configure JWT template for admin role claims
- [ ] Set up Clerk provider in React app

## Phase 6: Database Schema (convex/schema.ts)

- [ ] Create users table schema
- [ ] Create events table schema
- [ ] Create polls table schema
- [ ] Create questions table schema
- [ ] Create responses table schema
- [ ] Create admin_actions table schema
- [ ] Create flagged_content table schema
- [ ] Add proper indexes for performance

## Phase 7: Convex Functions (convex/functions.ts)

- [ ] Create admin role helper functions
- [ ] Create CRUD operations for polls
- [ ] Create CRUD operations for questions
- [ ] Create CRUD operations for responses
- [ ] Create CRUD operations for events
- [ ] Create analytics functions
- [ ] Create content moderation functions
- [ ] Add proper argument and return validators

## Phase 8: React Frontend Structure

- [ ] Create `src/main.tsx` entry point
- [ ] Create `src/App.tsx` main component
- [ ] Create `src/components/` directory
- [ ] Create `src/pages/` directory
- [ ] Create `src/hooks/` directory
- [ ] Create `src/utils/` directory

## Phase 9: Core React Components

- [ ] Create AdminDashboard component
- [ ] Create LivePolls component
- [ ] Create QASystem component
- [ ] Create WordClouds component
- [ ] Create Quizzes component
- [ ] Create Surveys component
- [ ] Create Analytics component
- [ ] Create ContentModeration component

## Phase 10: Authentication Integration

- [ ] Wrap app with ClerkProvider
- [ ] Implement useConvexAuth hook usage
- [ ] Create protected admin routes
- [ ] Add authentication state handling
- [ ] Implement role-based access control

## Phase 11: Real-time Features

- [ ] Integrate Convex queries for real-time data
- [ ] Implement live updates for polls
- [ ] Implement live updates for Q&A
- [ ] Implement live updates for word clouds
- [ ] Add real-time analytics updates

## Phase 12: Content Moderation System

- [ ] Create admin moderation dashboard
- [ ] Implement content flagging system
- [ ] Create moderation queue interface
- [ ] Add admin action logging
- [ ] Implement content filtering

## Phase 13: Testing and Validation

- [ ] Test Convex functions locally
- [ ] Test React components
- [ ] Test authentication flow
- [ ] Test real-time updates
- [ ] Test admin functionality
- [ ] Test content moderation

## Phase 14: Local Development

- [ ] Start Convex dev server: `npx convex dev`
- [ ] Start Vite dev server: `npm run dev`
- [ ] Test all features in browser
- [ ] Fix any bugs or issues
- [ ] Ensure proper error handling

## Phase 15: Git and GitHub Setup

- [ ] Create `.gitignore` file
- [ ] Add all files to git: `git add .`
- [ ] Make initial commit: `git commit -m "Initial Slidvex setup"`
- [ ] Add GitHub remote: `git remote add origin https://github.com/yourusername/slidvex.git`
- [ ] Push to GitHub: `git push -u origin main`

## Phase 16: Documentation

- [ ] Update README.md with setup instructions
- [ ] Document environment variables needed
- [ ] Add API documentation
- [ ] Create deployment guide
- [ ] Update changelog.md

## Phase 17: Final Testing

- [ ] Test complete application flow
- [ ] Verify all features work correctly
- [ ] Test admin role functionality
- [ ] Ensure proper error handling
- [ ] Test responsive design

## Notes:

- Each checkbox represents a major milestone
- Some steps may require research or troubleshooting
- Keep Convex dev server running during development
- Test frequently as you build
- Use TypeScript strict mode for better code quality
