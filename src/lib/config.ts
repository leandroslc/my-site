import { join } from 'path'

export const postsDirectory =
  typeof window !== 'undefined'
    ? ''
    : join(process.cwd(), process.env.POSTS_DIRECTORY!)

export const cssThemePropsPrefix = `--${
  process.env.CSS_THEME_PROPS_PREFIX ?? 'lb-tm'
}`

export const cssDarkThemeClass = process.env.CSS_DARK_THEME_CLASS ?? 'dark'
