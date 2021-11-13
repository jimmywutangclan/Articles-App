import React from 'react'
import { useParams } from 'react-router'
import { ThemeContextConsumer, ThemeContextProvider } from './ThemeContext'
import ArticleApp from './ArticleApp';

export default function Article(props) {
    const { id } = useParams();

    if (!id || isNaN(id) || id >= props.articles.length || id < 0 || !Number.isInteger(Number(id))) {
        return <div>
            <h1>Article not found</h1>
        </div>;
    }

    return (
        <ThemeContextConsumer>
            {
                (context) => (
                    <div class={'body ' + context.theme}>
                        <h1>{props.articles[id].title}</h1>
                        <p>{props.articles[id].body}</p>
                    </div>
                )
            }
        </ThemeContextConsumer>
    );
}
