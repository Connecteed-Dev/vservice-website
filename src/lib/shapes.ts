/**
 * Centralized clip-path values for shaped components (Figma-aligned).
 * Use these constants so all clipped elements stay consistent and easy to tune.
 */

/** Diagonal clip: edge from top-right toward bottom-left (hero & content images) */
export const clipDiagonalTrBl =
  'polygon(0 0, 100% 0, 100% 88%, 12% 100%, 0 100%)'

/** Diagonal clip: edge from top-left toward bottom-right (content images) */
export const clipDiagonalTlBr =
  'polygon(0 0, 88% 0, 100% 12%, 100% 100%, 0 100%)'

/** Shallow upward slope on bottom edge (CTAWide section) */
export const clipCtaBottomSlope =
  'polygon(0 0, 100% 0, 100% 100%, 0 96%)'

/**
 * Hero split layout (inner pages e.g. Azienda): one diagonal, same coordinate system.
 * White title area left, image right. Diagonal slopes downward left-to-right (top-left to bottom-right).
 * White = left of diagonal (0,0) to (48%, 100%); image = right of that line.
 */
export const clipHeroTitleSide =
  'polygon(0 0, 0 100%, 48% 100%, 0 0)'
export const clipHeroImageSide =
  'polygon(0 0, 48% 100%, 100% 100%, 100% 0, 0 0)'

/** Homepage hero: left-side diagonal cut (image visible from ~50% rightward) */
export const clipHeroImageCut =
  'polygon(0% 0%, 50% 0%, 100% 100%, 0% 100%)'

/** Split section: image on left, diagonal on right edge */
export const clipSplitImageCutLeft =
  'polygon(0 0, 100% 0, 100% 88%, 12% 100%, 0 100%)'
/** Split section: image on right, diagonal on left edge */
export const clipSplitImageCutRight =
  'polygon(0 0, 88% 0, 100% 12%, 100% 100%, 0 100%)'

/** Quote/service card: shallow diagonal on bottom edge */
export const clipServiceCardBottom =
  'polygon(0 0, 100% 0, 100% 100%, 0 92%)'

export type ClipVariant = 'diagonal-tr-bl' | 'diagonal-tl-br'

const clipPathMap: Record<ClipVariant, string> = {
  'diagonal-tr-bl': clipDiagonalTrBl,
  'diagonal-tl-br': clipDiagonalTlBr,
}

export function getClipPath(variant: ClipVariant): string {
  return clipPathMap[variant]
}

/** Variants for ClippedBox (hero, split, service cards) */
export type ClippedBoxVariant =
  | 'heroImageCut'
  | 'splitImageCutLeft'
  | 'splitImageCutRight'
  | 'serviceCardLeft'
  | 'serviceCardRight'

const clippedBoxPathMap: Record<ClippedBoxVariant, string> = {
  heroImageCut: clipHeroImageCut,
  splitImageCutLeft: clipSplitImageCutLeft,
  splitImageCutRight: clipSplitImageCutRight,
  serviceCardLeft: clipServiceCardBottom,
  serviceCardRight: clipServiceCardBottom,
}

export function getClippedBoxClipPath(variant: ClippedBoxVariant): string {
  return clippedBoxPathMap[variant]
}
