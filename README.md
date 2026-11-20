# UCSD Café Finder ☕

A responsive React + TypeScript campus café discovery app with an interactive Google map, search radius, ratings, reviews, routes, filters, and saved favorites.

## Important: two operating modes

**Directory preview (no key):** Opens immediately and displays a small curated list of known UCSD/La Jolla café names. Pins are **approximate**, opening hours/ratings are not fabricated, and the live Google map is unavailable. Links to Google Maps still work. This mode is not a comprehensive or verified inventory.

**Live Google Places mode (site owner configures once):** Map, nearby and text searches, Google photos, ratings, reviews, opening hours, amenity fields, and on-map directions. Visitors never enter an API key. Google results depend on API coverage and quotas; Google does not guarantee every café is returned.

## Requirements

- Node.js 20+
- A Google Cloud project with billing enabled
- A Google Maps Platform browser API key

## Google Cloud setup

1. Open https://console.cloud.google.com/ and create/select a project.
2. Configure billing in **Billing**. Google Maps usage may incur charges.
3. In **APIs & Services → Library**, enable **Maps JavaScript API**, **Places API (New)** and **Directions API**. The app uses the Maps JavaScript DirectionsService; depending on the Cloud project, enable the relevant **Directions API (Legacy)** as required for DirectionsService. Google's APIs and billing product names can change.
4. In **APIs & Services → Credentials**, create an API key.
5. Set **Application restrictions → Websites (HTTP referrers)**. Add `http://localhost:5173/*` for development and `https://your-domain.example/*` for production. Do not leave the production key unrestricted.
6. Set **API restrictions** to the Google Maps Platform APIs the application uses. Verify that the Places API (New) and Directions functionality are permitted.
7. Copy `.env.example` to `.env` and replace the sample value with your key:

   ```bash
   cp .env.example .env
   ```

8. Install and run:

   ```bash
   npm install
   npm run dev
   ```

9. Open http://localhost:5173. The app automatically displays Google Maps and live Places when the key and APIs work.

## Scripts

- `npm run dev` — local Vite server
- `npm run build` — TypeScript check and production bundle
- `npm run preview` — preview the built bundle

## Deployment

**Vercel:** Import the Git repository, select Vite, set build command `npm run build`, output directory `dist`, and add `VITE_GOOGLE_MAPS_API_KEY` under Environment Variables. Deploy and add the production domain to your key's referrer allowlist.

**Netlify:** Import repository, build command `npm run build`, publish directory `dist`. Add the same environment variable and allowed referrer. Configure an SPA redirect if deploying with client-side routing in future versions.

Vite embeds `VITE_` variables in browser assets. **Browser keys are public identifiers, not secrets**. Restrict by HTTP referrer and API, and set Google Cloud quotas and budgets. Never use an unrestricted server-side key in frontend code.

## Troubleshooting

- **Map says directory mode:** `.env` is missing, blank or dev server not restarted.
- **Map error / `RefererNotAllowedMapError`:** Add the exact localhost/production domain to key restrictions.
- **API denied / missing live results:** Check Places API (New), billing, API restrictions and quota in Google Cloud.
- **Directions unavailable:** Check Directions API enablement, billing and whether the route mode is supported for that origin/destination.
- **Location denied:** Browser falls back to campus. Geolocation typically requires HTTPS (localhost is an exception).
- **Some cafés missing:** Google nearby search is capped; the app supplements with text searches but cannot guarantee exhaustive coverage. Try a larger radius.
- **No ratings/reviews:** Google may omit fields for some businesses; the directory never fabricates data.

## Structure

```text
src/
  components/MapView.tsx  Google map, radius, markers, clusters and directions
  components/Details.tsx  Place details, reviews, hours and navigation
  services/google.ts     Places search, details and short-lived in-memory cache
  services/directory.ts  Offline discovery directory (approximate)
  types/index.ts         Domain types
  utils/geo.ts           Distances and map links
  App.tsx                Search, filters, favorites and page layout
  styles.css             Responsive light/dark UI
  main.tsx               React entry point
```

## Known limitations / roadmap

- **Not a verified list of every café:** Google Nearby/Text Search results are capped and coverage changes. Multi-query de-duplication helps, but cannot guarantee exhaustiveness. A future manually verified campus inventory could improve coverage.
- **Campus-only filter is approximate:** Uses a geographic bounding box, not the official UCSD property polygon.
- **Walking times on cards are estimates:** Based on straight-line distance at 3 mph; actual route time appears only after requesting directions.
- **Study-friendly/Wi-Fi filters:** Not reliably available from Google Places; the study filter intentionally matches no entries instead of guessing. Future versions can support verified student-submitted attributes.
- **Rating breakdown:** Google Places does not provide star-count distributions; the UI shows the overall rating, not an invented histogram.
- **Closing time:** Current opening status and weekly hours are displayed when available; an explicit next-closing-time calculation is not implemented.
- **Autocomplete:** Custom address search uses Places Text Search on submit, not interactive autocomplete predictions.
- **Marker hover:** Highlighting is implemented; advanced-marker bounce animation is omitted for accessibility.
- **Mobile bottom sheet:** Slides open/closed but does not implement touch drag-to-resize.
- **Shareable state:** Radius, campus-only filter, and selected café are encoded in the URL; other filters are not.
- **Review policy:** Review text is fetched on demand for the detail panel, not persisted. Keep Google attribution visible and follow current Google Maps Platform policies.
- **Production verification:** A real browser and valid Google Maps API key are required to validate live API functionality, quota handling, accessibility and Lighthouse targets. Do not claim a 90+ Lighthouse score without measuring.
