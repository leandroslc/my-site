import React from 'react'
import { render } from '@testing-library/react'

export const renderWithProviers = (component: React.ReactElement) => {
  return render(component)
}

export const arrangeWindowMatchMedia = (matches: boolean) => {
  global.matchMedia = jest.fn().mockImplementation(() => ({ matches }))
}
