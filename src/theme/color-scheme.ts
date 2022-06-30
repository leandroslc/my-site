export const light = {
  name: 'light',
  all: {
    outline: '#24180b',
    outlineInset: '#eef1f5',
  },
  header: {
    back: 'linear-gradient(72deg, #000851, #1cb5e0)',
    text: '#ffffff',
  },
  main: {
    back: '#e5ede8',
  },
  body: {
    back: '#000851',
    text: '#1a1e2b',
  },
  dropdown: {
    button: {
      back: '#0c1127',
      text: '#ffffff',
      shadowRing: 'rgb(0 0 0 / 0.1)',
      shadow: 'rgb(0 0 0 / 0.1)',
    },
    menu: {
      back: '#0c1127',
      text: '#ffffff',
      shadowRing: '#ffffff',
      shadow: 'rgb(0 0 0 / 0.1)',
    },
    item: {
      backActive: '#d9f2f2',
      textActive: '#1a1e2b',
      backHover: '#252e5a',
      textHover: '#ffffff',
    },
  },
  postCard: {
    borderHover: '#284da9',
  },
}

export type ColorScheme = typeof light

export const dark: ColorScheme = {
  ...light,
  name: 'dark',
}
