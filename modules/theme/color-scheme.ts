export const light = {
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
  },
}

export type ColorScheme = typeof light

export const dark: ColorScheme = {
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
  },
}
