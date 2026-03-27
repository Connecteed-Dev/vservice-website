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

  // Get current locale from URL as fallback for better reactivity
  const currentLocale = pathname.split('/')[1] === 'en' ? 'en' : 'it'

  // Language switcher function
  const switchLanguage = (targetLocale: 'it' | 'en') => {
    const segments = pathname.split('/')
    // pathname like: /en/assistenza-clivet
    segments[1] = targetLocale
    router.push(segments.join('/'))
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
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
            {/* Language Selector */}
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

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <Link href={localeHref(currentLocale, '/azienda')} className="text-v-light hover:text-v-dark font-bold py-2">
                {tNav('azienda')}
              </Link>
              
              <Link href={localeHref(currentLocale, '/impianti')} className="text-v-light hover:text-v-dark font-bold py-2">
                {tNav('impianti')}
              </Link>
              
              <Link href={localeHref(currentLocale, '/assistenza-clivet')} className="text-v-light hover:text-v-dark font-bold py-2">
                {tNav('assistenzaClivet')}
              </Link>
              <Link href={localeHref(currentLocale, '/servizi')} className="text-v-light hover:text-v-dark font-bold py-2">
                {tNav('servizi')}
              </Link>
              {/* <Link href={localeHref(currentLocale, '/blog')} className="text-v-light hover:text-v-dark font-bold py-2">
                {tNav('blog')}
              </Link> */}
              <Link href={localeHref(currentLocale, '/gallery')} className="text-v-light hover:text-v-dark font-bold py-2">
                {tNav('gallery')}
              </Link>
              <Link href={localeHref(currentLocale, '/contatti')} className="text-v-light hover:text-v-dark font-bold py-2">
                {tNav('contatti')}
              </Link>
              
              <div className="pt-4 border-t">
                {/* Mobile Language Selector */}
                <div className="flex items-center justify-between py-2">
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
                  
                  <Link href={localeHref(currentLocale, '/area-riservata')} className="flex items-center space-x-2 text-v-light hover:text-v-dark font-bold">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>{tNav('areaRiservata')}</span>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
