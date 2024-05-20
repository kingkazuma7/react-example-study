import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContextProvider';

const Card = () => {
  const theme = useContext(ThemeContext);
  return (
    <div 
      style={{
        backgroundColor: theme.first.main,
        color: theme.first.sub,
      }}
    >Card</div>
  )
}

export default Card