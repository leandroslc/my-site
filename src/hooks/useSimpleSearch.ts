import { FormEventHandler, RefObject } from 'react'

const HIDDEN_ATTRIBUTE = 'hidden'

type Props = {
  itemSelector: string
  searchOnRef: RefObject<HTMLElement>
  noResultsRef: RefObject<HTMLElement>
}

const toggleVisibility = (element: Element, visible: boolean) => {
  visible
    ? element.removeAttribute(HIDDEN_ATTRIBUTE)
    : element.setAttribute(HIDDEN_ATTRIBUTE, 'true')
}

const findInContent = (element: Element, input?: string) => {
  if (!input) {
    return true
  }

  for (const innerElement of element.querySelectorAll('span, p, h1')) {
    const content = innerElement.textContent?.toUpperCase() ?? ''

    if (content.indexOf(input.toUpperCase()) !== -1) {
      return true
    }
  }

  return false
}

export const useSimpleSearch = ({
  itemSelector,
  searchOnRef,
  noResultsRef,
}: Props) => {
  const search = (text?: string) => {
    if (!searchOnRef.current || !noResultsRef.current) {
      return
    }

    const items = searchOnRef.current.querySelectorAll(itemSelector)
    let totalFoundItems = 0

    for (const item of items) {
      const found = findInContent(item, text)

      toggleVisibility(item, found)

      totalFoundItems += found ? 1 : 0
    }

    toggleVisibility(searchOnRef.current, totalFoundItems > 0)
    toggleVisibility(noResultsRef.current, totalFoundItems === 0)
  }

  const onSearch: FormEventHandler<HTMLInputElement> = (event) => {
    const value = event.currentTarget.value

    search(value)
  }

  return { onSearch }
}
