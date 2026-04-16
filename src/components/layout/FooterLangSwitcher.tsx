'use client'

import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { useReactiveLocale } from '@/hooks/useReactiveLocale'

export function FooterLangSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = useReactiveLocale()

  const switchLanguage = (targetLocale: 'it' | 'en') => {
    const segments = pathname.split('/')
    segments[1] = targetLocale
    router.push(segments.join('/'))
  }

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={() => switchLanguage('it')}
        className={`flex items-center space-x-1 transition-opacity ${currentLocale === 'it' ? 'opacity-100 font-bold' : 'opacity-50 hover:opacity-80'}`}
        aria-label="Italiano"
      >
        <Image src="/Italian-flag.svg" alt="Italian" width={20} height={14} />
        <span>IT</span>
      </button>
      <button
        onClick={() => switchLanguage('en')}
        className={`flex items-center space-x-1 transition-opacity ${currentLocale === 'en' ? 'opacity-100 font-bold' : 'opacity-50 hover:opacity-80'}`}
        aria-label="English"
      >
        <Image src="/Eng.svg" alt="English" width={20} height={14} />
        <span>EN</span>
      </button>
    </div>
  )
}
