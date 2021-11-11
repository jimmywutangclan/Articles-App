import React from 'react'
import { ThemeContextConsumer } from './ThemeContext'

export default function ArticlePreview(props) {
    return (
        <ThemeContextConsumer>
            {
                (context) => (
                    <div className='articlepreview'>
                        <h2>{props.title}</h2>
                        <p>{props.body}</p>
                    </div>
                )
            }
        </ThemeContextConsumer>
    )
}
