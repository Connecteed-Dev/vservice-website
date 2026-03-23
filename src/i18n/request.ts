import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

const locales = ['it', 'en'] as const;

export default getRequestConfig(async ({requestLocale}) => {
  const locale = await requestLocale;
  const finalLocale = (locale ?? 'it') as string;

  if (!locales.includes(finalLocale as any)) notFound();

  return {
    locale: finalLocale,
    messages: (await import(`../../messages/${finalLocale}.json`)).default
  };
});