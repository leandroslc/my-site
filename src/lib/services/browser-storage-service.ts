export const createStorage = (prefix: string) => {
  const get = () => {
    return localStorage.getItem(prefix)
  }

  const set = (name: string) => {
    localStorage.setItem(prefix, name)
  }

  return { get, set }
}
