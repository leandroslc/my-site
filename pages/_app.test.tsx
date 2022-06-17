import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import * as styled from 'styled-components'
import { App } from '~/modules/app'
import { useStore } from '~/modules/app/data/state'
import Home from './index'

const mockStyledThemeProvider = jest.fn()

jest.mock('~/modules/theme', () => ({
  GlobalStyles: () => <></>,
  light: 'light',
  dark: 'dark',
}))

jest
  .spyOn(styled, 'ThemeProvider')
  .mockImplementation((props: any) => mockStyledThemeProvider(props))

const arrange = () => {
  render(
    <>
      <App />
      <Home allPosts={[]} />
    </>
  )
}

const arrangeWindowMatchMedia = (matches: boolean) => {
  global.matchMedia = jest.fn().mockImplementation(() => ({ matches }))
}

const expectStoredThemeToBe = (theme: string) => {
  const state = JSON.parse(window.localStorage.getItem('app') || '')

  expect(state).toMatchObject({
    state: {
      theme: theme,
    },
  })
}

afterEach(() => {
  jest.clearAllMocks()
})

describe('<App>', () => {
  describe('Should change theme when selecting option', () => {
    test.each`
      option      | prefersDark | theme      | value
      ${'Dark'}   | ${false}    | ${'dark'}  | ${'dark'}
      ${'Light'}  | ${false}    | ${'light'} | ${'light'}
      ${'System'} | ${true}     | ${'dark'}  | ${''}
      ${'System'} | ${false}    | ${'light'} | ${''}
    `(
      'given "$option" and "prefers-color-scheme: dark" is "$prefersDark"',
      async ({ option, prefersDark, theme, value }) => {
        arrangeWindowMatchMedia(prefersDark)
        arrange()

        // Act
        const darkThemeButton = await screen.findByText(new RegExp(option, 'i'))

        await user.click(darkThemeButton)

        // Assert
        expectStoredThemeToBe(value)
        expect(mockStyledThemeProvider).toBeCalledWith(
          expect.objectContaining({
            theme,
          })
        )
      }
    )
  })

  describe('Should load theme', () => {
    test.each`
      value      | prefersDark | theme
      ${'dark'}  | ${false}    | ${'dark'}
      ${'light'} | ${false}    | ${'light'}
      ${''}      | ${true}     | ${'dark'}
      ${''}      | ${false}    | ${'light'}
    `(
      '"$theme" given value "$value" and "prefers-color-scheme: dark" is "$prefersDark"',
      async ({ value, prefersDark, theme }) => {
        arrangeWindowMatchMedia(prefersDark)

        useStore.setState(() => ({ theme: value }))

        // Act
        arrange()

        // Assert
        expect(mockStyledThemeProvider).toBeCalledWith(
          expect.objectContaining({
            theme,
          })
        )
      }
    )
  })
})
