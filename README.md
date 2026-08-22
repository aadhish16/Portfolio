# Aadhish Kumar S Portfolio

Personal portfolio for robotics, physical AI, computer vision, IoT, and software engineering projects.

## Requirements

- Node.js 20 or newer
- npm 10 or newer

## Development

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:3000`.

## Validation and production build

```bash
npm run typecheck
npm run build
npm run preview
```

The production files are written to `dist/`. Deploy that directory to any static hosting provider.

For hosts that support client-side routing, configure unknown routes to fall back to `index.html`. The current portfolio uses hash links and does not require server-side API routes.

## Deployment notes

- No API key is required by the current client application.
- Project preview images, fonts, and icons currently load from external services, so production deployments should allow those domains or replace them with self-hosted assets.
