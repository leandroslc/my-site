export enum Themes {
  System = '',
  Dark = 'dark',
  Light = 'light',
}

export interface ThemeState {
  theme: Themes
  setTheme: (scheme: Themes) => void
}
