import React from 'react'
import ArticlePreview from './ArticlePreview'
import { ThemeContextConsumer, ThemeContextProvider } from './ThemeContext'
import ToggleButton from './ToggleButton'

export default function ArticleApp(props) {
    const articleHtml = props.articles.map((article) => <ArticlePreview title={article.title} body={article.body} />);

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
