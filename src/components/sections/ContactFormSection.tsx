'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { useTranslations } from 'next-intl'

export function ContactFormSection() {
  const t = useTranslations('contatti.form')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [privacyChecked, setPrivacyChecked] = useState(false)
  const [promoChecked, setPromoChecked] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const isFormValid = () => formData.email.trim() !== '' && validateEmail(formData.email) && privacyChecked

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isFormValid()) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
        setPrivacyChecked(false)
        setPromoChecked(false)
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const infoGrid: { left: InfoItem; right: InfoItem }[] = [
    {
      left: {
        title: t('sedeLabel'),
        iconSrc: '/icons/marker-pin-white.svg',
        lines: [t('sedeOperativa'), t('sedeLegale')],
      },
      right: {
        title: t('emailLabel'),
        iconSrc: '/icons/drafts-white.svg',
        lines: ['info@vservice.it', 'vservicehelp@gmail.it'],
      },
    },
    {
      left: {
        title: t('telefonoLabel'),
        iconSrc: '/icons/call-white.svg',
        lines: ['06 7610790', '06 76967940'],
      },
      right: {
        title: t('orariLabel'),
        iconSrc: '/icons/history-toggle-white.svg',
        lines: [t('orariDays'), t('orariMorning'), t('orariAfternoon')],
      },
    },
  ]

  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[20px]">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/bgcards/bgcontactform.png"
              alt="Contatti background"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 md:p-12">
            {/* LEFT (50%) */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-10">{t('sectionTitle')}</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-10">
                {infoGrid.map((row, idx) => (
                  <div key={idx} className="contents">
                    <InfoBlock {...row.left} />
                    <InfoBlock {...row.right} />
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT (50%) */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder={t('namePlaceholder')}
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />

                <Input
                  placeholder={t('emailPlaceholder')}
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  type="email"
                  error={!!formData.email && !validateEmail(formData.email)}
                />

                <Input
                  placeholder={t('phonePlaceholder')}
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  type="tel"
                />

                <Textarea
                  placeholder={t('messagePlaceholder')}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                />

                {/* Checkboxes */}
                <div className="space-y-3 pt-2">
                  <CheckboxRow
                    checked={privacyChecked}
                    onChange={setPrivacyChecked}
                    text={t('privacyText')}
                  />
                  <CheckboxRow
                    checked={promoChecked}
                    onChange={setPromoChecked}
                    text={t('promoText')}
                  />
                </div>

                {/* Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={!isFormValid() || isSubmitting}
                    className="w-full rounded-[40px] border border-v-faded bg-transparent px-5 py-3 text-sm font-semibold text-v-faded
                               placeholder:text-v-fadedoutline-none hover:border-v-faded transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? t('submitting') : t('submit')}
                  </button>
                </div>

                {submitStatus === 'success' && (
                  <p className="text-sm text-green-200">{t('success')}</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-sm text-red-200">{t('error')}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

/* ---------- Small components ---------- */

type InfoItem = {
  title: string
  iconSrc: string
  lines: string[]
}

function InfoBlock({ title, iconSrc, lines }: InfoItem) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-white font-semibold">
        <Image src={iconSrc} alt="" width={18} height={18} className="opacity-90" />
        <span>{title}</span>
      </div>

      <div className="text-sm leading-relaxed text-white/85 ml-7">
        {lines.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>
    </div>
  )
}

function Input({
  placeholder,
  name,
  value,
  onChange,
  type = 'text',
  error = false,
}: {
  placeholder: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  error?: boolean
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full rounded-[14px] border px-5 py-3 text-v-faded placeholder:text-v-faded outline-none
                  bg-transparent focus:border-v-faded ${
                    error ? 'border-red-400/70' : 'border-v-faded'
                  }`}
    />
  )
}

function Textarea({
  placeholder,
  name,
  value,
  onChange,
}: {
  placeholder: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}) {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={4}
      className="w-full rounded-[14px] border border-v-faded bg-transparent px-5 py-3 text-v-faded placeholder:text-v-faded outline-none focus:border-v-faded resize-none"
    />
  )
}

function CheckboxRow({
  checked,
  onChange,
  text,
}: {
  checked: boolean
  onChange: (v: boolean) => void
  text: string
}) {
  return (
    <label className="flex items-start gap-3 text-sm text-white/80 leading-relaxed">
      <div className="relative mt-1">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />
        <div className={`w-4 h-4 rounded-[4px] border border-white/30 bg-transparent flex items-center justify-center transition-all ${
          checked ? 'border-white/50' : 'border-white/30'
        }`}>
          {checked && (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 4L3.5 6.5L9 1"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
      <span>{text}</span>
    </label>
  )
}
