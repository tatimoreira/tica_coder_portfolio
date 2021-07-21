import React, { useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const defaultState = {
  dark: false,
  toggleTheme: () => {},
};

const ThemeContext = React.createContext(defaultState);

// Getting dark mode information from OS!
const supportsDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true;

const ThemeProvider = ({ children }) => {
  const [storedTheme, setTheme] = useLocalStorage("theme");

  useEffect(() => {
    // Getting dark mode value from localStorage!
    const myTheme = storedTheme;
    if (myTheme !== "dark") {
      setTheme(myTheme);
    } else if (supportsDarkMode()) {
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    storedTheme === "dark" ? setTheme("light") : setTheme("dark");
  
  };
  return (
    <ThemeContext.Provider
      value={{
        storedTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
export { ThemeProvider };
