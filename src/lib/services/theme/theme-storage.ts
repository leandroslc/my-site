const THEME_PREFIX = 'theme'

const get = () => {
  return localStorage.getItem(THEME_PREFIX)
}

const set = (name: string) => {
  localStorage.setItem(THEME_PREFIX, name)
}

export const themeStorage = {
  get,
  set,
}
