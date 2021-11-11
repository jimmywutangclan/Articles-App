import React from 'react'
import { ThemeContextConsumer } from './ThemeContext'

export default function Footer() {
    return (
        <ThemeContextConsumer>
            {
                (context) => (
                    <div className={"footer " + context.theme}>
                        <p>This is a test website.</p>
                    </div>
                )
            }
        </ThemeContextConsumer>
    )
}
