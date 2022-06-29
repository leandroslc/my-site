import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from '@/src/modules/app'

export const renderWithProviers = (component: React.ReactElement) => {
  return render(<ThemeProvider>{component}</ThemeProvider>)
}

export const arrangeWindowMatchMedia = (matches: boolean) => {
  global.matchMedia = jest.fn().mockImplementation(() => ({ matches }))
}
