import React, { createContext, useState } from 'react'

const ThemeContext = createContext();
const localStorageTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';

function ThemeContextProvider(props) {

    const [ theme, setTheme ] = useState(localStorageTheme);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeContextProvider }