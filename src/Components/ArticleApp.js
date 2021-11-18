import React from 'react'
import { Routes } from 'react-router';
import ArticlePreview from './ArticlePreview'
import ToggleButton from './ToggleButton'

export default function ArticleApp(props) {
    let x = 0;
    const articleHtml = props.articles.map((article) => <ArticlePreview title={article.title} body={article.body} id={x++}/>);

    return (
        <div className={'article_list'}>
            {articleHtml}
        </div>
    )
}
