'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { localeHref } from '@/lib/localeHref'

export function Header() {
  const locale = useLocale()
  const tNav = useTranslations('navigation')
  const tHeader = useTranslations('header')
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
  const [isImpiantiOpen, setIsImpiantiOpen] = useState(false)
  const [isMobileImpiantiOpen, setIsMobileImpiantiOpen] = useState(false)

  // Click outside handler for Impianti dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      // Don't close if clicking inside the dropdown container
      if (!target.closest('.impianti-dropdown-container')) {
        setIsImpiantiOpen(false);
      }
    };

    if (isImpiantiOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isImpiantiOpen]);

  return (
    <header className="bg-white shadow-sm">
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
            
            {/* Impianti Dropdown */}
            <div className="relative impianti-dropdown-container">
              <button 
                className="text-v-light hover:text-v-dark font-bold flex items-center space-x-1"
                onClick={() => setIsImpiantiOpen(!isImpiantiOpen)}
              >
                <span>{tNav('impianti')}</span>
                <svg className={`w-4 h-4 transform transition-transform duration-200 ${isImpiantiOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isImpiantiOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-[650px] h-[152px] bg-v-faded shadow-lg rounded-[20px] py-4 z-50"
                  onMouseLeave={() => setIsImpiantiOpen(false)}
                >
                  <div className="flex h-full">
                    {/* Left Column - Impianti di riscaldamento */}
                    <div className="flex-1 border-r border-white/20 pr-4">
                      <div className="px-4 py-2 font-bold text-v-light">
                        {tHeader('impiantiRiscaldamento')}
                      </div>
                      <Link href={localeHref(currentLocale, '/impianti/riscaldamento/progettazione-e-installazione')} className="flex items-center justify-between px-4 py-2 text-sm text-v-light hover:text-v-dark hover:bg-white/50" onClick={() => setIsImpiantiOpen(false)}>
                        <span>{tHeader('progettazioneInstallazione')}</span>
                        <Image src="/icons/Icon-submenu.svg" alt="" width={6} height={12} />
                      </Link>
                      <Link href={localeHref(currentLocale, '/impianti/riscaldamento/manutenzione-e-assistenza')} className="flex items-center justify-between px-4 py-2 text-sm text-v-light hover:text-v-dark hover:bg-white/50" onClick={() => setIsImpiantiOpen(false)}>
                        <span>{tHeader('manutenzioneAssistenza')}</span>
                        <Image src="/icons/Icon-submenu.svg" alt="" width={6} height={12} />
                      </Link>
                    </div>
                    
                    {/* Right Column - Impianti di condizionamento */}
                    <div className="flex-1 pl-4">
                      <div className="px-4 py-2 font-bold text-v-light">
                        {tHeader('impiantiCondizionamento')}
                      </div>
                      <Link href={localeHref(currentLocale, '/impianti/condizionamento/progettazione-e-installazione')} className="flex items-center justify-between px-4 py-2 text-sm text-v-light hover:text-v-dark hover:bg-white/50" onClick={() => setIsImpiantiOpen(false)}>
                        <span>{tHeader('progettazioneInstallazione')}</span>
                        <Image src="/icons/Icon-submenu.svg" alt="" width={6} height={12} />
                      </Link>
                      <Link href={localeHref(currentLocale, '/impianti/condizionamento/manutenzione-e-assistenza')} className="flex items-center justify-between px-4 py-2 text-sm text-v-light hover:text-v-dark hover:bg-white/50" onClick={() => setIsImpiantiOpen(false)}>
                        <span>{tHeader('manutenzioneAssistenza')}</span>
                        <Image src="/icons/Icon-submenu.svg" alt="" width={6} height={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link href={localeHref(currentLocale, '/assistenza-clivet')} className="text-v-light hover:text-v-dark font-bold">
              {tNav('assistenzaClivet')}
            </Link>
            
            <Link href={localeHref(currentLocale, '/servizi')} className="text-v-light hover:text-v-dark font-bold">
              {tNav('servizi')}
            </Link>
            
            <Link href={localeHref(currentLocale, '/blog')} className="text-v-light hover:text-v-dark font-bold">
              {tNav('blog')}
            </Link>
            
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
                  src={currentLocale === 'en' ? '/Eng.svg' : '/italian-flag.svg'} 
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
              
              {/* Mobile Impianti Dropdown */}
              <div>
                <button
                  onClick={() => setIsMobileImpiantiOpen(!isMobileImpiantiOpen)}
                  className="flex items-center justify-between w-full text-v-light hover:text-v-dark font-bold py-2"
                >
                  <span>{tNav('impianti')}</span>
                  <svg className={`w-4 h-4 transform transition-transform ${isMobileImpiantiOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isMobileImpiantiOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <div className="font-bold text-v-dark py-1">
                      {tHeader('impiantiRiscaldamento')}
                    </div>
                    <Link href={localeHref(currentLocale, '/impianti/riscaldamento/progettazione-e-installazione')} className="block ml-4 py-1 text-sm text-v-light hover:text-v-dark">
                      {tHeader('progettazioneInstallazione')}
                    </Link>
                    <Link href={localeHref(currentLocale, '/impianti/riscaldamento/manutenzione-e-assistenza')} className="block ml-4 py-1 text-sm text-v-light hover:text-v-dark">
                      {tHeader('manutenzioneAssistenza')}
                    </Link>
                    
                    <div className="font-bold text-v-dark py-1 pt-2">
                      {tHeader('impiantiCondizionamento')}
                    </div>
                    <Link href={localeHref(currentLocale, '/impianti/condizionamento/progettazione-e-installazione')} className="block ml-4 py-1 text-sm text-v-light hover:text-v-dark">
                      {tHeader('progettazioneInstallazione')}
                    </Link>
                    <Link href={localeHref(currentLocale, '/impianti/condizionamento/manutenzione-e-assistenza')} className="block ml-4 py-1 text-sm text-v-light hover:text-v-dark">
                      {tHeader('manutenzioneAssistenza')}
                    </Link>
                  </div>
                )}
              </div>
              
              <Link href={localeHref(currentLocale, '/assistenza-clivet')} className="text-v-light hover:text-v-dark font-bold py-2">
                {tNav('assistenzaClivet')}
              </Link>
              <Link href={localeHref(currentLocale, '/servizi')} className="text-v-light hover:text-v-dark font-bold py-2">
                {tNav('servizi')}
              </Link>
              <Link href={localeHref(currentLocale, '/blog')} className="text-v-light hover:text-v-dark font-bold py-2">
                {tNav('blog')}
              </Link>
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
                      src={currentLocale === 'en' ? '/Eng.svg' : '/italian-flag.svg'} 
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
