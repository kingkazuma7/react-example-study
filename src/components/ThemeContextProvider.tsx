import React, { createContext } from 'react'
import { theme } from './Theme';

export const ThemeContext = createContext(theme);
console.log(ThemeContext);

type ThemeContextProviderProps = {
  children: React.ReactNode;
}

const ThemeContextProvider = ({children} : ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  )
}

export default ThemeContextProvider