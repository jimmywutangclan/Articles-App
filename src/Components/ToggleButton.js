import React from 'react'
import { ThemeContextConsumer } from './ThemeContext'

export default function ToggleButton() {
    return (
        <ThemeContextConsumer>
            {
                (context) => (
                    <button onClick={context.toggleTheme}>{(context.theme === 'light' ? 'Dark' : 'Light') + ' Mode'}</button>
                )
            }
        </ThemeContextConsumer>
    )
}
