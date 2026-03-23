export function localeHref(locale: string, href: string) {
  if (!href.startsWith('/')) return href;
  // Avoid double prefix
  if (href === `/${locale}` || href.startsWith(`/${locale}/`)) return href;
  return `/${locale}${href}`;
}
