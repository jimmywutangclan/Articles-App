import React from 'react'

export default function ArticlePreview(props) {
    return (
        <div className='articlepreview'>
            <a href={'/articles/' + props.id}><h2>{props.title}</h2></a>
            <p>{props.body}</p>
        </div>
    )
}
