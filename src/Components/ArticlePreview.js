import React from 'react'
import { ThemeContextConsumer } from './ThemeContext'

export default function ArticlePreview(props) {
    return (
        <ThemeContextConsumer>
            {
                (context) => (
                    <div className='articlepreview'>
                        <a href={'/articles/' + props.id}><h2>{props.title}</h2></a>
                        <p>{props.body}</p>
                    </div>
                )
            }
        </ThemeContextConsumer>
    )
}
