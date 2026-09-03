import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {yearsActive} from '@/lib/yearsActive';

const locales = ['it', 'en'] as const;

// Rimpiazza il token __YEARS__ con gli anni di attività dinamici.
// Fatto server-side una volta, così client e SEO restano coerenti (no hydration mismatch).
function injectYears(messages: unknown): unknown {
  const years = String(yearsActive());
  return JSON.parse(JSON.stringify(messages).replaceAll('__YEARS__', years));
}

export default getRequestConfig(async ({requestLocale}) => {
  const locale = await requestLocale;
  const finalLocale = (locale ?? 'it') as string;

  if (!locales.includes(finalLocale as any)) notFound();

  const messages = (await import(`../../messages/${finalLocale}.json`)).default;

  return {
    locale: finalLocale,
    messages: injectYears(messages) as Record<string, unknown>
  };
});
