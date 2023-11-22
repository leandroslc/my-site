import { ColorScheme } from '../ColorScheme'

export const dark: ColorScheme = {
  all: {
    outline: '#24180b',
    outlineInset: '#eef1f5',
    selection: {
      back: '#f3e6d6',
      text: 'rgba(26, 30, 43, 0.9)',
    },
  },
  contentElements: {
    link: '#7fcbff',
    code: {
      back: '#2d5246',
      text: '#c1fff0',
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
    back: 'linear-gradient(72deg, #121638, #3394af)',
    text: '#ffffff',
    painting: {
      filter: 'brightness(90%) sepia(16%)',
    },
  },
  main: {
    back: '#303344',
  },
  footer: {
    back: '#284f72',
    text: '#ffffff',
    textHover: '#1a1e2b',
    divider: 'rgb(237 234 229 / 10%)',
  },
  body: {
    back: '#303344',
    text: '#ffffff',
    contrast: '#6a6a91',
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
    borderHover: '#ffb46c',
  },
  post: {
    tag: {
      back: '#e3a860',
      text: '#1a1e2b',
    },
  },
  posts: {
    search: {
      back: '#22222e',
      border: '#d2bb9e',
      placeholder: '#8c8174',
      borderHover: '#a8947b',
      shadowHover: '#ffb46c',
    },
  },
}
