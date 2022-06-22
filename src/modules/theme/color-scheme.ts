export const light = {
  name: 'light',
  all: {
    outline: '#6366f1',
    outlineInset: '#eef1f5',
  },
  body: {
    back: '#eef1f5',
    text: '#1a1e2b',
  },
  dropdown: {
    button: {
      back: '#ffffff',
      text: '#1a1e2b',
      border: 'rgb(209, 213, 219)',
      shadowRing: 'rgb(0 0 0 / 0.1)',
      shadow: 'rgb(0 0 0 / 0.1)',
    },
    menu: {
      back: '#ffffff',
      border: 'rgb(229, 231, 235)',
      shadowRing: '#ffffff',
      shadow: 'rgb(0 0 0 / 0.1)',
    },
    item: {
      backActive: '#e7efff',
      backHover: '#efefef',
    },
  },
}

export type ColorScheme = typeof light

export const dark: ColorScheme = {
  name: 'dark',
  all: {
    outline: '#6366f1',
    outlineInset: '#eef1f5',
  },
  body: {
    back: '#0e0c21',
    text: '#ffffff',
  },
  dropdown: {
    button: {
      back: '#000000',
      text: '#ffffff',
      border: '#888888',
      shadowRing: 'rgb(0 0 0 / 0.1)',
      shadow: 'rgb(0 0 0 / 0.1)',
    },
    menu: {
      back: '#44424e',
      border: 'rgb(229, 231, 235)',
      shadowRing: '#ffffff',
      shadow: 'rgb(0 0 0 / 0.1)',
    },
    item: {
      backActive: '#e7efff',
      backHover: '#efefef',
    },
  },
}
