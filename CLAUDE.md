# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

**V.Service** is a bilingual (Italian/English) Next.js 14 website for an HVAC company (heating & air conditioning services).

### Routing

The site uses **next-intl** for locale-aware routing:
- Root `/` redirects to `/it`
- All pages exist under both `/[locale]/` and `/(site)/` route groups
- `middleware.ts` intercepts all non-API/static requests and injects locale (`it` | `en`, default: `it`)
- i18n config lives in `src/i18n/request.ts`; translation strings in `messages/it.json` and `messages/en.json`

### Route Groups

- `app/(site)/` — non-localized route group (layout includes `<Header>` + `<Footer>`)
- `app/[locale]/` — localized routes with `NextIntlClientProvider`
- `app/api/contact/route.ts` — contact form POST endpoint (email sending not yet implemented)

### Path Alias

`@/*` maps to `src/*` — use this in all imports.

### Component Structure

- `src/components/layout/` — `Header` (client, has dropdowns + mobile menu + language switcher), `Footer`, `Container`
- `src/components/sections/` — page-level sections organized by page (e.g. `homePage/`, `impianti/`, `azienda/`)
- `src/components/ui/` — primitives: `Button`, `Card`, `ClippedBox`, `ChecklistItem`, `ShapedPhoto`

### ClippedBox

`src/components/ui/ClippedBox.tsx` provides 13 named `clip-path: polygon()` variants (e.g. `quoteCardBothCuts`, `splitImageCutLeft`) used throughout the site for diagonal/angled card shapes. Pass a `variant` prop or a custom `clipPath` string.

### Localization Pattern

- Server components: use `getTranslations()` from `next-intl/server`
- Client components: use `useTranslations()` from `next-intl`
- For locale-aware links, use the `localeHref(locale, href)` utility (`src/lib/localeHref.ts`) to safely prefix URLs
- `useReactiveLocale()` hook (`src/hooks/useReactiveLocale.ts`) extracts current locale from the URL pathname for client components

### Static Content

- `src/content/news.ts` — `NewsArticle[]` array (title, slug, excerpt, content, date, category)
- `src/content/services.ts` — `Service[]` array (title, slug, description, content, icon)
- `src/data/homeNews.ts` — transforms news for homepage display

### Design System

Custom Tailwind colors defined in `tailwind.config.ts`:

| Token | Hex | Usage |
|---|---|---|
| `v-dark` | `#0F2D58` | Primary dark blue (backgrounds, headings) |
| `v-light` / `v-sky` | `#1059C4` | Buttons, accents |
| `v-faded` | `#F8F8F8` | Light section backgrounds |
| `v-grey` | `#ADADAD` | Footer, secondary text |
| `v-border` | `#D0D0D0` | Borders |

Plugin: `tailwind-scrollbar-hide` for hiding scrollbars.

### Known TODOs

- `src/app/api/contact/route.ts` — email sending is not implemented (currently just logs to console)
