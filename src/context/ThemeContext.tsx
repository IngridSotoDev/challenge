import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  useCallback,
  PropsWithChildren,
} from 'react'

interface ThemeContextProps {
  isDarkMode: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = useCallback(() => {
    setIsDarkMode((prevMode) => !prevMode)
    document.documentElement.classList.toggle('theme-dark')
  }, [])

  const theme = useMemo(
    () => ({
      isDarkMode,
      toggleTheme,
    }),
    [isDarkMode, toggleTheme],
  )

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
