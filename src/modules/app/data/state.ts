import create from 'zustand'
import { persist } from 'zustand/middleware'
import { Themes, ThemeState } from './types'

export const useStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: Themes.System,
      setTheme: (theme: Themes) => set(() => ({ theme: theme })),
    }),
    {
      name: 'app',
    }
  )
)
