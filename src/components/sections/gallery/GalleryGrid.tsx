'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

type GalleryImage = {
  src: string
  alt: string
}

type GalleryGridProps = {
  images: GalleryImage[]
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const open = (i: number) => setLightboxIndex(i)
  const close = () => setLightboxIndex(null)
  const prev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length))
  }, [images.length])
  const next = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length))
  }, [images.length])

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex, prev, next])

  return (
    <>
      {/* ── Grid ── */}
      <div className="grid grid-cols-10 gap-3 md:gap-4">
        {/* Row 1: large left + small right */}
        <button
          onClick={() => open(0)}
          className="col-span-10 md:col-span-7 h-[280px] md:h-[400px] relative overflow-hidden rounded-2xl group focus:outline-none"
        >
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 70vw"
          />
          <div className="absolute inset-0 bg-v-dark/0 group-hover:bg-v-dark/20 transition-colors duration-300 rounded-2xl" />
          <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ZoomIcon />
          </span>
        </button>

        <button
          onClick={() => open(1)}
          className="col-span-10 md:col-span-3 h-[240px] md:h-[400px] relative overflow-hidden rounded-2xl group focus:outline-none"
        >
          <Image
            src={images[1].src}
            alt={images[1].alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 30vw"
          />
          <div className="absolute inset-0 bg-v-dark/0 group-hover:bg-v-dark/20 transition-colors duration-300 rounded-2xl" />
          <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ZoomIcon />
          </span>
        </button>

        {/* Row 2: small left + large right */}
        <button
          onClick={() => open(2)}
          className="col-span-10 md:col-span-3 h-[240px] md:h-[360px] relative overflow-hidden rounded-2xl group focus:outline-none"
        >
          <Image
            src={images[2].src}
            alt={images[2].alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 30vw"
          />
          <div className="absolute inset-0 bg-v-dark/0 group-hover:bg-v-dark/20 transition-colors duration-300 rounded-2xl" />
          <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ZoomIcon />
          </span>
        </button>

        <button
          onClick={() => open(3)}
          className="col-span-10 md:col-span-7 h-[280px] md:h-[360px] relative overflow-hidden rounded-2xl group focus:outline-none"
        >
          <Image
            src={images[3].src}
            alt={images[3].alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 70vw"
          />
          <div className="absolute inset-0 bg-v-dark/0 group-hover:bg-v-dark/20 transition-colors duration-300 rounded-2xl" />
          <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ZoomIcon />
          </span>
        </button>
      </div>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={close}
        >
          {/* Image container — stop propagation so clicks inside don't close */}
          <div
            className="relative w-full max-w-5xl max-h-[90vh] aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Close */}
          <button
            onClick={close}
            className="absolute top-5 right-5 text-white/80 hover:text-white transition-colors"
            aria-label="Chiudi"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
            aria-label="Precedente"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
            aria-label="Successivo"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}

function ZoomIcon() {
  return (
    <svg className="w-10 h-10 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zM11 8v6M8 11h6" />
    </svg>
  )
}
