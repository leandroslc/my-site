import { CODE_HIGHLIGHT_BASE_URL } from '@/src/config/constants'
import { createStorage } from './BrowserStorageService'

const CODE_HIGHLIGHT_LINK = 'highlight-theme-link'
const STORAGE_PREFIX = 'code'

export enum CodeHighlights {
  Dracula = 'Dracula',
  NightOwl = 'Night Owl',
  OneLight = 'One Light',
}

const CodeHighlightThemes = {
  [CodeHighlights.Dracula]: 'prism-dracula',
  [CodeHighlights.NightOwl]: 'prism-night-owl',
  [CodeHighlights.OneLight]: 'prism-one-light',
}

const defaultCodeHighlight = CodeHighlights.Dracula

const storage = createStorage(STORAGE_PREFIX)

const updateOrAddLink = (href: string) => {
  const link = document.getElementById(CODE_HIGHLIGHT_LINK)

  if (link) {
    link.setAttribute('href', href)
    return
  }

  const newLink = document.createElement('link')
  newLink.setAttribute('rel', 'stylesheet')
  newLink.setAttribute('href', href)
  newLink.setAttribute('id', CODE_HIGHLIGHT_LINK)

  document.body.append(newLink)
}

export const injectTheme = (highlight: CodeHighlights) => {
  if (typeof window === 'undefined') {
    return
  }

  if (!Object.values(CodeHighlights).includes(highlight)) {
    return
  }

  updateOrAddLink(
    `${CODE_HIGHLIGHT_BASE_URL}/${CodeHighlightThemes[highlight]}.css`,
  )
}

export const getCurrentCodeHighlight = (): CodeHighlights => {
  if (typeof window === 'undefined') {
    return defaultCodeHighlight
  }

  const highlight = storage.get() as CodeHighlights | null

  if (!highlight || !Object.values(CodeHighlights).includes(highlight)) {
    return defaultCodeHighlight
  }

  return highlight
}

export const setCurrentCodeHighlight = (highlight: CodeHighlights) => {
  if (typeof window === 'undefined') {
    return
  }

  storage.set(highlight)
  injectTheme(highlight)
}
