'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isImpiantiOpen, setIsImpiantiOpen] = useState(false)
  const [isMobileImpiantiOpen, setIsMobileImpiantiOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState('IT')

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
          <Link href="/" className="flex items-center">
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
            <Link href="/azienda" className="text-v-light hover:text-v-dark font-bold">
              Azienda
            </Link>
            
            {/* Impianti Dropdown */}
            <div className="relative impianti-dropdown-container">
              <button 
                className="text-v-light hover:text-v-dark font-bold flex items-center space-x-1"
                onClick={() => setIsImpiantiOpen(!isImpiantiOpen)}
              >
                <span>Impianti</span>
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
                        Impianti di riscaldamento
                      </div>
                      <Link href="/impianti/riscaldamento/progettazione-e-installazione" className="flex items-center justify-between px-4 py-2 text-sm text-v-light hover:text-v-dark hover:bg-white/50" onClick={() => setIsImpiantiOpen(false)}>
                        <span>Progettazione e installazione</span>
                        <Image src="/icons/Icon-submenu.svg" alt="" width={6} height={12} />
                      </Link>
                      <Link href="/impianti/riscaldamento/manutenzione-e-assistenza" className="flex items-center justify-between px-4 py-2 text-sm text-v-light hover:text-v-dark hover:bg-white/50" onClick={() => setIsImpiantiOpen(false)}>
                        <span>Manutenzione e assistenza</span>
                        <Image src="/icons/Icon-submenu.svg" alt="" width={6} height={12} />
                      </Link>
                    </div>
                    
                    {/* Right Column - Impianti di condizionamento */}
                    <div className="flex-1 pl-4">
                      <div className="px-4 py-2 font-bold text-v-light">
                        Impianti di condizionamento
                      </div>
                      <Link href="/impianti/condizionamento/progettazione-e-installazione" className="flex items-center justify-between px-4 py-2 text-sm text-v-light hover:text-v-dark hover:bg-white/50" onClick={() => setIsImpiantiOpen(false)}>
                        <span>Progettazione e installazione</span>
                        <Image src="/icons/Icon-submenu.svg" alt="" width={6} height={12} />
                      </Link>
                      <Link href="/impianti/condizionamento/manutenzione-e-assistenza" className="flex items-center justify-between px-4 py-2 text-sm text-v-light hover:text-v-dark hover:bg-white/50" onClick={() => setIsImpiantiOpen(false)}>
                        <span>Manutenzione e assistenza</span>
                        <Image src="/icons/Icon-submenu.svg" alt="" width={6} height={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/assistenza-clivet" className="text-v-light hover:text-v-dark font-bold">
              Assistenza Clivet
            </Link>
            
            <Link href="/servizi" className="text-v-light hover:text-v-dark font-bold">
              Servizi
            </Link>
            
            <Link href="/blog" className="text-v-light hover:text-v-dark font-bold">
              Blog
            </Link>
            
            <Link href="/gallery" className="text-v-light hover:text-v-dark font-bold">
              Gallery
            </Link>
            
            <Link href="/contatti" className="text-v-light hover:text-v-dark font-bold">
              Contatti
            </Link>
          </nav>

          {/* Right Side - Language Selector + User Area */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setCurrentLang(currentLang === 'IT' ? 'ENG' : 'IT')}
                className="flex items-center space-x-2 text-v-light hover:text-v-dark font-bold"
              >
                <Image 
                  src="/italian-flag.svg" 
                  alt="Italian flag" 
                  width={24} 
                  height={16}
                  className="w-auto h-auto"
                />
                <span>{currentLang === 'IT' ? 'IT' : 'ENG'}</span>
              </button>
            </div>
            
            <Link href="/area-riservata" className="flex items-center space-x-2 text-v-light hover:text-v-dark font-bold">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Area riservata</span>
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
              <Link href="/azienda" className="text-v-light hover:text-v-dark font-bold py-2">
                Azienda
              </Link>
              
              {/* Mobile Impianti Dropdown */}
              <div>
                <button
                  onClick={() => setIsMobileImpiantiOpen(!isMobileImpiantiOpen)}
                  className="flex items-center justify-between w-full text-v-light hover:text-v-dark font-bold py-2"
                >
                  <span>Impianti</span>
                  <svg className={`w-4 h-4 transform transition-transform ${isMobileImpiantiOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isMobileImpiantiOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <div className="font-bold text-v-dark py-1">
                      Impianti di riscaldamento
                    </div>
                    <Link href="/impianti/riscaldamento/progettazione-e-installazione" className="block ml-4 py-1 text-sm text-v-light hover:text-v-dark">
                      Progettazione e installazione
                    </Link>
                    <Link href="/riscaldamento/manutenzione" className="block ml-4 py-1 text-sm text-v-light hover:text-v-dark">
                      Manutenzione e assistenza
                    </Link>
                    
                    <div className="font-bold text-v-dark py-1 pt-2">
                      Impianti di condizionamento
                    </div>
                    <Link href="/impianti/condizionamento/progettazione-e-installazione" className="block ml-4 py-1 text-sm text-v-light hover:text-v-dark">
                      Progettazione e installazione
                    </Link>
                    <Link href="/impianti/condizionamento/manutenzione-e-assistenza" className="block ml-4 py-1 text-sm text-v-light hover:text-v-dark">
                      Manutenzione e assistenza
                    </Link>
                  </div>
                )}
              </div>
              
              <Link href="/assistenza-clivet" className="text-v-light hover:text-v-dark font-bold py-2">
                Assistenza Clivet
              </Link>
              <Link href="/servizi" className="text-v-light hover:text-v-dark font-bold py-2">
                Servizi
              </Link>
              <Link href="/blog" className="text-v-light hover:text-v-dark font-bold py-2">
                Blog
              </Link>
              <Link href="/gallery" className="text-v-light hover:text-v-dark font-bold py-2">
                Gallery
              </Link>
              <Link href="/contatti" className="text-v-light hover:text-v-dark font-bold py-2">
                Contatti
              </Link>
              
              <div className="pt-4 border-t">
                {/* Mobile Language Selector */}
                <div className="flex items-center justify-between py-2">
                  <button 
                    onClick={() => setCurrentLang(currentLang === 'IT' ? 'ENG' : 'IT')}
                    className="flex items-center space-x-2 text-v-light hover:text-v-dark font-bold"
                  >
                    <Image 
                      src="/italian-flag.svg" 
                      alt="Italian flag" 
                      width={24} 
                      height={16}
                      className="w-auto h-auto"
                    />
                    <span>{currentLang === 'IT' ? 'IT' : 'ENG'}</span>
                  </button>
                  
                  <Link href="/area-riservata" className="flex items-center space-x-2 text-v-light hover:text-v-dark font-bold">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Area riservata</span>
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
