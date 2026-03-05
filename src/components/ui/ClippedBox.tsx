import React from 'react'

export type ClipVariant =
  | 'splitImageCutRight'
  | 'splitImageCutLeft'
  | 'heroImageCut'
  | 'quoteCardCutBottomLeft'
  | 'quoteCardCutTopRight'
  | 'quoteCardBothCuts'
  | 'aziendaCutLeftStraight'
  | 'aziendaCutRightStraight'
  | 'ctaImageCutLeftStraight'
  | 'serviziCardCut'
  | 'serviziSmallCardCut'
  | 'splitImageCutBottomRight'
  | 'cosaOffriamoCardCut'
type ClippedBoxProps =
  | {
      variant: ClipVariant
      clipPath?: never
      className?: string
      innerClassName?: string
      style?: React.CSSProperties
      children: React.ReactNode
    }
  | {
      variant?: never
      clipPath: string
      className?: string
      innerClassName?: string
      style?: React.CSSProperties
      children: React.ReactNode
    }

const clipPaths: Record<ClipVariant, string> = {
  splitImageCutLeft:
    'polygon(12% 0, 100% 0, 100% 100%, 0 100%, 0 50%)',
  splitImageCutRight:
    'polygon(0 0, 88% 0, 100% 50%, 100% 100%, 0 100%)',
  splitImageCutBottomRight:
    'polygon(0 0, 100% 0, 88% 100%, 0 100%)',
  heroImageCut:
    "polygon(0 0, 75% 0, 100% 50%, 100% 100%, 0% 100%)",
  // Quote cards: small cut bottom-left (left card), big cut top-right (right card)
  quoteCardCutBottomLeft:
    'polygon(0 0, 100% 0, 100% 100%, 14% 100%, 0 86%, 0 0)',
  quoteCardCutTopRight:
    'polygon(0 0, 78% 0, 100% 22%, 100% 100%, 0 100%, 0 0)',
  // Same shape for both cards: big cut top-right + small cut bottom-left
  quoteCardBothCuts:
    'polygon(0 0, 78% 0, 100% 22%, 100% 100%, 14% 100%, 0 86%, 0 0)',

    // NEW: straight diagonal (NO midpoint => no spike)
  aziendaCutLeftStraight:
    'polygon(12% 0, 100% 0, 100% 100%, 0 100%)',

  aziendaCutRightStraight:
    'polygon(0 0, 88% 0, 100% 100%, 0 100%)',
  ctaImageCutLeftStraight: 'polygon(14% 0, 100% 0, 100% 100%, 0 100%)',
  // Servizi card: cuts from top-right and bottom-left
  serviziCardCut: 'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)',
  // Servizi small card: small cut from top-right 72% makes the diagonal start more to the left 24% makes the slope more “strong” like Figma
serviziSmallCardCut: "polygon(0 0, 60% 0, 100% 15%, 100% 100%, 0 100%)",
  cosaOffriamoCardCut:
    'polygon(0 0, 65% 0, 100% 35%, 100% 100%, 0 100%, 0 0)',
}

export function ClippedBox({
  variant,
  clipPath: clipPathOverride,
  className,
  innerClassName,
  style,
  children,
}: ClippedBoxProps) {
  const clipPath =
    clipPathOverride ?? (variant ? clipPaths[variant] : undefined)

  return (
    <div className={className}>
      <div
        className={innerClassName ?? 'h-full w-full'}
        style={{
          clipPath,
          WebkitClipPath: clipPath,
          overflow: 'hidden',
          ...style,
        }}
      >
        {children}
      </div>
    </div>
  )
}
