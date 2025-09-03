# LiveQ - Convex AMA Questions Platform

LiveQ is an Convex AMA Questions - Convex AMA Questions platform built with Convex.dev and React, designed to facilitate real-time interactions during meetings and events.

## Features

### 🎯 AMA Events (Primary Feature)

- **Admin-created events**: Hosts can create AMA events with title, description, and optional dates
- **Anonymous questions**: Users can submit questions without authentication
- **Public upvoting**: Anyone can upvote questions without logging in
- **Real-time updates**: Live question and upvote updates using Convex
- **Admin comments**: Admins can leave comments on any question without authentication

### 📊 Analytics Dashboard

- Question counts and upvote tracking
- User participation metrics
- Content health monitoring
- Event engagement statistics

### 🛡️ Content Moderation

- Admin tools to hide inappropriate questions
- Content flagging system
- Moderation action logging
- Spam detection capabilities

## Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Backend**: Convex.dev (Database + Real-time functions)
- **Styling**: Custom CSS with design system following theme.md guidelines
- **Routing**: React Router DOM
- **State Management**: Convex real-time queries and mutations

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Convex account

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd slidvex
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up Convex**

   ```bash
   npm create convex
   npx convex dev --init
   ```

4. **Configure environment variables**
   - Copy `.env.local.example` to `.env.local`
   - Add your Convex deployment URL

5. **Start development servers**

   ```bash
   # Terminal 1: Start Convex dev server
   npx convex dev

   # Terminal 2: Start Vite dev server
   npm run dev
   ```

6. **Open your browser**
   - Navigate to `http://localhost:3000`

## Project Structure

```
slidvex/
├── convex/                 # Convex backend functions and schema
│   ├── schema.ts          # Database schema definition
│   ├── functions.ts       # Convex functions (queries, mutations)
│   └── _generated/        # Auto-generated Convex types
├── src/                   # React frontend
│   ├── components/        # Reusable UI components
│   │   └── Header.tsx    # Navigation header
│   ├── pages/            # Page components
│   │   ├── HomePage.tsx  # Events listing page
│   │   ├── EventPage.tsx # Individual event page
│   │   └── AdminPage.tsx # Admin dashboard
│   ├── App.tsx           # Main app component with routing
│   ├── main.tsx          # App entry point
│   └── index.css         # Global styles and design system
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

## Usage

### For Users

1. **Browse Events**: Visit the homepage to see upcoming AMA events
2. **Submit Questions**: Click on an event to submit questions (no login required)
3. **Upvote Questions**: Support questions you like by clicking the upvote button
4. **Read Comments**: View admin responses and other user comments

### For Admins

1. **Create Events**: Use the admin dashboard to create new AMA events
2. **Moderate Content**: Hide inappropriate questions or delete spam
3. **Leave Comments**: Respond to questions with admin insights
4. **Monitor Analytics**: Track event engagement and participation

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npx convex dev` - Start Convex development server

### Adding New Features

1. **Database Schema**: Update `convex/schema.ts`
2. **Backend Functions**: Add queries/mutations in `convex/functions.ts`
3. **Frontend Components**: Create React components in `src/components/`
4. **Pages**: Add new pages in `src/pages/`
5. **Routing**: Update routes in `src/App.tsx`

### Convex Functions

The project uses Convex's new function syntax:

```typescript
export const myFunction = query({
  args: { param: v.string() },
  returns: v.string(),
  handler: async (ctx, args) => {
    return "Hello " + args.param;
  },
});
```

## Design System

The application follows a clean, minimalist design philosophy:

- **Colors**: Black and white with subtle grays
- **Typography**: Inter font family for readability
- **Layout**: Generous whitespace and clean borders
- **Components**: Consistent button styles and form elements

See `theme.md` for detailed design guidelines.

## Deployment

### Frontend

- Build the project: `npm run build`
- Deploy the `dist/` folder to your hosting provider

### Backend

- Convex automatically deploys when you push to your main branch
- Use `npx convex deploy` for manual deployment

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Support

For questions or issues:

- Check the Convex documentation: https://docs.convex.dev
- Review the project's PRD: `slidvex.md`
- Open an issue in the repository

---

Built with ❤️ using Convex.dev and React
# liveq
