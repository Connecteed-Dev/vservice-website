import createMiddleware from 'next-intl/middleware';

// Lives in src/ because the app uses the src/ directory: a root-level middleware.ts is never picked up,
// which left un-prefixed URLs (/azienda, /contatti, …) falling through to [locale] and answering 500.
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['it', 'en'],

  // Used when no locale matches
  defaultLocale: 'it',

  // Keep the site's existing behaviour: un-prefixed URLs always go to Italian,
  // no Accept-Language detection, no extra cookie (cookie consent is handled by iubenda)
  // and no extra Link headers (alternates are already declared in the page metadata).
  localeDetection: false,
  localeCookie: false,
  alternateLinks: false
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
