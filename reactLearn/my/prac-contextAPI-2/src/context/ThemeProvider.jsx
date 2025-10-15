import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import App from '../App';
import Consumer from '../Consumer';

const ThemeContext = createContext();

const ThemeProvider = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }} >
      <Consumer />
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
export { ThemeContext }