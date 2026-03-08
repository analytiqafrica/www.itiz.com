# www.itiz.com

Next.js (React + TypeScript) migration of the original static HTML template from `html/`, preserving the page output and behavior while adding SEO support.

## Stack

- Next.js (App Router)
- React
- TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` - Start local development server
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run lint` - Run lint checks

## Project Structure

- `app/layout.tsx` - Global layout, metadata, CSS links, JS script loading
- `app/page.tsx` - Home page content migrated from `html/index.html`
- `app/robots.ts` - `robots.txt` generation
- `app/sitemap.ts` - `sitemap.xml` generation
- `public/` - Static assets copied from `html/` (`css`, `js`, `img`, `plugins`)
- `html/` - Original source template kept for reference

## SEO

SEO is configured through Next.js metadata in `app/layout.tsx`:

- Title and description
- Canonical URL
- Open Graph metadata
- Robots directives
- `robots.txt` and `sitemap.xml`

## Notes

- Legacy route `/index.html` redirects to `/` (configured in `next.config.ts`).
- Favicon files referenced by the original template are not present in the provided source (`img/favicon`), so those links currently point to missing files.
