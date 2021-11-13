import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext';

export default function ToggleButton() {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme}>{(theme === 'light' ? 'Dark' : 'Light') + ' Mode'}</button>
    )
}
