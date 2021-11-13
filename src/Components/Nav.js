import React from 'react'
import ToggleButton from './ToggleButton'

export default function Nav(props) {
    return (
        <div className={'header'}>
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
