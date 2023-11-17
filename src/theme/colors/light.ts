import { ColorScheme } from '../ColorScheme'

export const light: ColorScheme = {
  all: {
    outline: '#24180b',
    outlineInset: '#eef1f5',
    selection: {
      back: 'rgba(26, 30, 43, 0.9)',
      text: '#ffffff',
    },
  },
  contentElements: {
    link: '#2649ff',
    code: {
      back: '#d9e9e5',
      text: '#2b5753',
    },
    codeBlock: {
      selection: {
        back: 'rgba(29, 59, 83, 0.99)',
        text: '#fff',
      },
    },
  },
  elements: {
    emphasys: 'rgb(0 191 255)',
    emphasys30: 'rgb(0 191 255 / 36%)',
  },
  header: {
    back: 'linear-gradient(72deg, #000851, #1cb5e0)',
    text: '#ffffff',
    painting: {
      filter: 'brightness(95%) sepia(12%)',
    },
  },
  main: {
    back: '#edeae5',
  },
  footer: {
    back: '#0a4f8b',
    text: '#ffffff',
    textHover: '#1a1e2b',
    divider: 'rgb(237 234 229 / 10%)',
  },
  body: {
    back: '#edeae5',
    text: '#1a1e2b',
    contrast: '#cfcbc5',
  },
  dropdown: {
    button: {
      back: '#0c1127',
      text: '#ffffff',
      shadowRing: 'rgb(0 0 0 / 0.1)',
      shadow: 'rgb(0 0 0 / 0.1)',
    },
    menu: {
      back: 'rgb(12 17 39 / 75%)',
      backFull: 'rgb(12 17 39 / 100%)',
      border: '#050317',
      text: '#ffffff',
      shadowRing: '#ffffff',
      shadow: 'rgb(0 0 0 / 0.1)',
    },
    item: {
      backActive: '#d9f2f2',
      textActive: '#1a1e2b',
      backHover: 'rgb(42 99 132 / 50%)',
      textHover: '#ffffff',
    },
  },
  postCard: {
    borderHover: '#284da9',
  },
  post: {
    backToHome: {
      border: '#1a1e2b',
    },
    tag: {
      back: '#0a4f8b',
      text: '#ffffff',
    },
  },
}
