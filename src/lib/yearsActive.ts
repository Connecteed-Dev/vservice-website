// V.Service fondata nel 2000. Anni di attività = anno corrente - 2000.
// Incrementa automaticamente ogni anno.
export const FOUNDING_YEAR = 2000

export function yearsActive(): number {
  return new Date().getFullYear() - FOUNDING_YEAR
}
