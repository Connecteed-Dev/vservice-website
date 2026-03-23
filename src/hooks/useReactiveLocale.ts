'use client'

import { useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

const SUPPORTED_LOCALES = ['it', 'en'] as const;
type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];
const SUPPORTED_SET = new Set<SupportedLocale>(SUPPORTED_LOCALES);

export function useReactiveLocale(): SupportedLocale {
  const locale = useLocale()  // Primary: next-intl's authoritative locale
  const pathname = usePathname()
  
  const currentLocale = useMemo(() => {
    const seg = pathname.split('/')[1];
    return SUPPORTED_SET.has(seg as SupportedLocale) ? (seg as SupportedLocale) : (locale as SupportedLocale);
  }, [pathname, locale])
  
  return currentLocale
}
