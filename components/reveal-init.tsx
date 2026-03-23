'use client'

import { ReactNode } from 'react'
import { useReveal } from '@/hooks/use-reveal'

export function RevealInit({ children }: { children: ReactNode }) {
  useReveal()
  return <>{children}</>
}
