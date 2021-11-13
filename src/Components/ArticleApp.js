import React from 'react'
import { Routes } from 'react-router';
import ArticlePreview from './ArticlePreview'
import { ThemeContextConsumer, ThemeContextProvider } from './ThemeContext'
import ToggleButton from './ToggleButton'

export default function ArticleApp(props) {
    let x = 0;
    const articleHtml = props.articles.map((article) => <ArticlePreview title={article.title} body={article.body} id={x++}/>);

    return (
        <ThemeContextConsumer>
            {
                (context) => (
                    <div className={'body ' + context.theme}>
                        {articleHtml}
                    </div>
                )
            }
        </ThemeContextConsumer>
    )
}
