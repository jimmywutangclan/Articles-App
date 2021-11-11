import React from 'react'
import { ThemeContextConsumer } from './ThemeContext'
import ToggleButton from './ToggleButton'

export default function Nav(props) {
    return (
        <ThemeContextConsumer>
            {
                (context) => (
                    <div className={'header ' + context.theme}>
                        <div>
                            <a href="/"><h1>{props.blogName}</h1></a>
                        </div>
                        <div>
                            <a href="/login">Login</a>
                            <ToggleButton />
                        </div>
                    </div>
                )
            }
        </ThemeContextConsumer>
    )
}
