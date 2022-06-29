import { screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import * as styled from 'styled-components'
import { useStore } from '@/src/modules/app/data/state'
import Home from '@/src/pages/index'
import { arrangeWindowMatchMedia, renderWithProviers } from '@/tests/utils'

const themeProvider = jest.spyOn(styled, 'ThemeProvider')

const arrange = () => {
  renderWithProviers(<Home allPosts={[]} />)
}

const expectStoredThemeToBe = (theme: string) => {
  const state = JSON.parse(window.localStorage.getItem('app') || '')

  expect(state).toMatchObject({
    state: {
      theme: theme,
    },
  })
}

const expectCurrentThemeToBe = (theme: string) => {
  const passedArguments = themeProvider.mock.lastCall[0]

  expect(passedArguments).toMatchObject({
    theme: {
      name: theme,
    },
  })
}

afterEach(() => {
  jest.clearAllMocks()
})

describe('<App>', () => {
  describe('Should change theme', () => {
    test.each`
      option      | prefersDark | theme      | value
      ${'Dark'}   | ${false}    | ${'dark'}  | ${'dark'}
      ${'Light'}  | ${true}     | ${'light'} | ${'light'}
      ${'System'} | ${true}     | ${'dark'}  | ${''}
      ${'System'} | ${false}    | ${'light'} | ${''}
    `(
      'to "$theme" given option "$option" and "prefers-color-scheme: dark" is "$prefersDark"',
      async ({ option, prefersDark, theme, value }) => {
        arrangeWindowMatchMedia(prefersDark)
        arrange()

        // Act
        const themeSelect = await screen.findByText(/theme/i)

        await user.click(themeSelect)

        const themeOptionButton = await screen.findByText(
          new RegExp(option, 'i')
        )

        expect(themeOptionButton).toBeVisible()

        await user.click(themeOptionButton)

        // Assert
        expectStoredThemeToBe(value)
        expectCurrentThemeToBe(theme)
      }
    )
  })

  describe('Should load theme', () => {
    test.each`
      value      | prefersDark | theme
      ${'dark'}  | ${false}    | ${'dark'}
      ${'light'} | ${true}     | ${'light'}
      ${''}      | ${true}     | ${'dark'}
      ${''}      | ${false}    | ${'light'}
    `(
      'from "$theme" given value "$value" and "prefers-color-scheme: dark" is "$prefersDark"',
      async ({ value, prefersDark, theme }) => {
        arrangeWindowMatchMedia(prefersDark)

        useStore.setState(() => ({ theme: value }))

        // Act
        arrange()

        // Assert
        expectCurrentThemeToBe(theme)
      }
    )
  })
})
