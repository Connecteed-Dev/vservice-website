'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { localeHref } from '@/lib/localeHref'

export function Header() {
  const tNav = useTranslations('navigation')
  const router = useRouter()
  const pathname = usePathname()

  const currentLocale = pathname.split('/')[1] === 'en' ? 'en' : 'it'

  const switchLanguage = (targetLocale: 'it' | 'en') => {
    const segments = pathname.split('/')
    segments[1] = targetLocale
    router.push(segments.join('/'))
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const close = () => setIsMenuOpen(false)

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href={localeHref(currentLocale, '/')} className="flex items-center">
              <Image
                src="/vservice-logo.svg"
                alt="V.Service"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href={localeHref(currentLocale, '/azienda')} className="text-v-light hover:text-v-dark font-bold">
                {tNav('azienda')}
              </Link>
              <Link href={localeHref(currentLocale, '/impianti')} className="text-v-light hover:text-v-dark font-bold">
                {tNav('impianti')}
              </Link>
              <Link href={localeHref(currentLocale, '/assistenza-clivet')} className="text-v-light hover:text-v-dark font-bold">
                {tNav('assistenzaClivet')}
              </Link>
              <Link href={localeHref(currentLocale, '/servizi')} className="text-v-light hover:text-v-dark font-bold">
                {tNav('servizi')}
              </Link>
              {/* <Link href={localeHref(currentLocale, '/blog')} className="text-v-light hover:text-v-dark font-bold">
                {tNav('blog')}
              </Link> */}
              <Link href={localeHref(currentLocale, '/gallery')} className="text-v-light hover:text-v-dark font-bold">
                {tNav('gallery')}
              </Link>
              <Link href={localeHref(currentLocale, '/contatti')} className="text-v-light hover:text-v-dark font-bold">
                {tNav('contatti')}
              </Link>
            </nav>

            {/* Right Side - Language Selector + User Area */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => switchLanguage(currentLocale === 'it' ? 'en' : 'it')}
                  className="flex items-center space-x-2 text-v-light hover:text-v-dark font-bold"
                >
                  <Image
                    src={currentLocale === 'en' ? '/Eng.svg' : '/Italian-flag.svg'}
                    alt={currentLocale === 'en' ? 'English flag' : 'Italian flag'}
                    width={24}
                    height={16}
                    className="w-auto h-auto"
                  />
                  <span>{currentLocale === 'it' ? 'IT' : 'ENG'}</span>
                </button>
              </div>
              <Link href={localeHref(currentLocale, '/area-riservata')} className="flex items-center space-x-2 text-v-light hover:text-v-dark font-bold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{tNav('areaRiservata')}</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="lg:hidden p-1 text-v-dark"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Apri menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Mobile Drawer Panel */}
      <nav
        className={`fixed top-0 right-0 h-full w-72 z-50 bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile navigation"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 h-20 border-b shrink-0">
          <Image
            src="/vservice-logo.svg"
            alt="V.Service"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
          <button
            onClick={close}
            className="p-1 text-v-dark"
            aria-label="Chiudi menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col flex-1 overflow-y-auto px-6 py-6 space-y-1">
          {[
            { href: '/azienda', label: tNav('azienda') },
            { href: '/impianti', label: tNav('impianti') },
            { href: '/assistenza-clivet', label: tNav('assistenzaClivet') },
            { href: '/servizi', label: tNav('servizi') },
            { href: '/gallery', label: tNav('gallery') },
            { href: '/contatti', label: tNav('contatti') },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={localeHref(currentLocale, href)}
              onClick={close}
              className="text-v-light hover:text-v-dark font-bold py-3 border-b border-v-border/40 last:border-0"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Drawer Footer */}
        <div className="px-6 py-5 border-t flex items-center justify-between shrink-0">
          <button
            onClick={() => { switchLanguage(currentLocale === 'it' ? 'en' : 'it'); close() }}
            className="flex items-center space-x-2 text-v-light hover:text-v-dark font-bold"
          >
            <Image
              src={currentLocale === 'en' ? '/Eng.svg' : '/Italian-flag.svg'}
              alt={currentLocale === 'en' ? 'English flag' : 'Italian flag'}
              width={24}
              height={16}
              className="w-auto h-auto"
            />
            <span>{currentLocale === 'it' ? 'IT' : 'ENG'}</span>
          </button>

          <Link
            href={localeHref(currentLocale, '/area-riservata')}
            onClick={close}
            className="flex items-center space-x-2 text-v-light hover:text-v-dark font-bold"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>{tNav('areaRiservata')}</span>
          </Link>
        </div>
      </nav>
    </>
  )
}
