import React from 'react'
import { render } from '@testing-library/react'
import {
  findTranslationAndReplaceAsReactNodes,
  findTranslationAndReplaceAsString,
} from './FindTranslationHelpers'

describe('helpers.FindTranslationHelpers', () => {
  describe('findTranslationAndReplaceAsString', () => {
    test('Should return translation for given key', () => {
      const items = {
        home: {
          title: 'Hello',
        },
      }

      const translation = findTranslationAndReplaceAsString('home.title', items)

      expect(translation).toEqual('Hello')
    })

    test('Should return translation for given key with parameters', () => {
      const items = {
        home: {
          title: 'Hello {0}! Good {1}',
        },
      }

      const translation = findTranslationAndReplaceAsString(
        'home.title',
        items,
        'World',
        'Day'
      )

      expect(translation).toEqual('Hello World! Good Day')
    })
  })

  describe('findTranslationAndReplaceAsReactNodes', () => {
    test('Should return translation for given key', () => {
      const items = {
        home: {
          title: 'Hello',
        },
      }

      const translation = findTranslationAndReplaceAsReactNodes(
        'home.title',
        items
      )

      const translatedContents = render(<>{translation}</>).container.innerHTML

      expect(translatedContents).toEqual('Hello')
    })

    test('Should return translation for given key with parameters', () => {
      const items = {
        home: {
          title: 'Hello {0}! Good {1}',
        },
      }

      const translation = findTranslationAndReplaceAsReactNodes(
        'home.title',
        items,
        <strong>World</strong>,
        <em>Day</em>
      )

      const translatedContents = render(<>{translation}</>).container.innerHTML

      expect(translatedContents).toEqual(
        'Hello <strong>World</strong>! Good <em>Day</em>'
      )
    })
  })
})
