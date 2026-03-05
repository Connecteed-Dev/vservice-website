import { getClipPath, type ClipVariant } from '@/lib/shapes'

interface ShapedPhotoProps {
  variant: ClipVariant
  children: React.ReactNode
  className?: string
  rounded?: boolean
}

export function ShapedPhoto({
  variant,
  children,
  className = '',
  rounded = true,
}: ShapedPhotoProps) {
  return (
    <div
      className={`overflow-hidden ${rounded ? 'rounded-xl' : ''} ${className}`}
      style={{ clipPath: getClipPath(variant) }}
    >
      {children}
    </div>
  )
}
