# Convex auth with GitHub and Google

## What we are building

- **Goal**: Add Convex Auth to a React app to authenticate with GitHub and Google, persist users, and gate admin features with a server guard
- **Outcome**: Users can sign in with either provider and admins can access protected admin queries and mutations
- **Scope**: Frontend is a Vite React app, backend is Convex Cloud, deploy frontend on Vercel, keep secrets in Convex environment

## OAuth setup for GitHub and Google

- **GitHub app**
  - Create a new OAuth application in GitHub settings for developers
  - Homepage URL should be your Vercel domain during production and `http://localhost:5173` during local development
  - Authorization callback URL should match your app origin and the path your auth UI will use for completion for example `https://your-vercel-domain.com/auth/callback`
  - Copy client id and client secret

- **Google credentials**
  - Create an OAuth client in Google Cloud console for a web application
  - Authorized JavaScript origins include your Vercel production domain and localhost for local development
  - Authorized redirect URIs include your auth completion path for example `https://your-vercel-domain.com/auth/callback`
  - Copy client id and client secret

- **Convex environment**
  - Store secrets in Convex environment not in the frontend
  - Suggested keys
    - `OAUTH_GITHUB_CLIENT_ID`
    - `OAUTH_GITHUB_CLIENT_SECRET`
    - `OAUTH_GOOGLE_CLIENT_ID`
    - `OAUTH_GOOGLE_CLIENT_SECRET`
  - Set them with the Convex CLI or dashboard and use them inside Convex functions that orchestrate the OAuth exchange

## Convex auth implementation

- **Project creation**
  - If starting fresh use the Convex starter and choose React Vite and Convex Auth. See the linked docs for the flow

- **Frontend flow**
  - Provide Sign in with GitHub and Sign in with Google buttons
  - Clicking a button starts the provider flow and on success the app returns to your callback route and updates client auth state
  - The React app renders a signed in view when authenticated and a signed out view otherwise

- **Backend flow**
  - On return from the provider Convex Auth exchanges the code for tokens and establishes a Convex identity
  - Create or update a user document keyed by identity id and store display name and email and provider id
  - Return a session to the client using Convex Auth primitives

## Admin role design and guards

- **Role model**
  - Add a `users` table with fields `identityId` and `email` and `role`
  - Allowed roles are `admin` and `user`
  - Seed the first admin by a simple allowlist on email or by a one time mutation you call manually

- **Server guard pattern**

```ts
// convex/functions example
import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

async function requireIdentity(ctx) {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) throw new Error("Authentication required");
  return identity;
}

async function requireAdmin(ctx) {
  const identity = await requireIdentity(ctx);
  const user = await ctx.db
    .query("users")
    .withIndex("by_identityId", (q) => q.eq("identityId", identity.subject))
    .unique();
  if (!user || user.role !== "admin") throw new Error("Admin role required");
  return user;
}

export const listAdminData = query({
  args: {},
  returns: v.array(v.string()),
  handler: async (ctx) => {
    await requireAdmin(ctx);
    return ["ok"];
  },
});

export const setUserRole = mutation({
  args: {
    identityId: v.string(),
    role: v.union(v.literal("admin"), v.literal("user")),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    const existing = await ctx.db
      .query("users")
      .withIndex("by_identityId", (q) => q.eq("identityId", args.identityId))
      .unique();
    if (!existing) throw new Error("User not found");
    await ctx.db.patch(existing._id, { role: args.role });
    return null;
  },
});
```

- **Frontend skip pattern**
  - Use `useConvexAuth` to wait until auth is loaded
  - Pass `"skip"` to admin queries until authenticated

## Deployment on Vercel and environment

- **Is this strategy good**
  - Yes this is a good setup for Vercel
  - Vercel serves the React app and Convex Cloud hosts the backend and auth which removes any need for server code on Vercel

- **Secrets and config**
  - Keep OAuth secrets in Convex environment only
  - The frontend needs only the Convex deployment URL and any public configuration
  - Set provider redirect URIs to your Vercel domain and to localhost for development

- **Notes**
  - Next.js server components and middleware support for Convex Auth is experimental
  - React client apps served from a CDN like Vercel work well

## Acceptance criteria

- GitHub and Google sign in buttons work and complete the flow
- Users are created in a `users` table with identity id and email and role
- Admin role can be set for a user and required by protected functions
- Admin only pages correctly skip queries until authenticated
- Vercel deployment works with the configured redirect URIs and Convex environment secrets

## Sources

- [Convex Auth docs](https://docs.convex.dev/auth/convex-auth)
