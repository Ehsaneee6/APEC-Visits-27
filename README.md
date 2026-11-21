# APEC Site

Mecha / Nexus themed website. React + Vite + React Router + Framer Motion.

## Run it
```bash
npm install
npm run dev        # http://localhost:5173
npm run lint
npm run build
```

## Structure
```
src/
  styles/        tokens.css (colors, fonts, spacing) and global.css      -> Member 1
  components/
    ui/          Button, Card, CrtPanel, Placeholder                     -> Member 1
    layout/      Layout, Navbar, Footer, Backdrop                        -> Member 1
  features/
    landing/     HomePage                                                -> Member 2
    results/     ResultsPage                                             -> Member 2
    nexus/       NexusPage, ChoosePage, MultiversePage                   -> Member 3
    forms/       ApplyPage                                               -> Member 4
    admin/       AdminPage                                               -> Member 4
  lib/           API / Supabase client (Phase 2)                         -> Member 4
```
Routes live in `src/App.jsx`. Import with the `@/` alias, e.g. `@/components/ui/Button`.

## Rules
1. Never push to `main`. Branch as `feat/<area>-<thing>` (e.g. `feat/nexus-terminal`) and open a pull request.
2. One owner per folder (see `.github/CODEOWNERS`). Need a change in someone else's folder? Ask them.
3. Shared components and tokens are Member 1's. Request changes in an issue.
4. No hard-coded colors, fonts or spacing. Use the `var(--token)` values in `tokens.css`.
5. Every interactive element is keyboard reachable, with a visible focus ring. Respect `prefers-reduced-motion`.
6. Build with mock data until the backend is ready.
7. Check at phone width (390px) before you ask for review.
