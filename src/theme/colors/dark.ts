export const dark = {
  all: {
    outline: '#24180b',
    outlineInset: '#eef1f5',
    selection: {
      back: '#f3e6d6',
      text: 'rgba(26, 30, 43, 0.9)',
    },
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
      border: '#050317',
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
    borderHover: '#ffb46c',
  },
  post: {
    backToHome: {
      border: '#fefefe',
    },
  },
}

export type ColorScheme = typeof dark
