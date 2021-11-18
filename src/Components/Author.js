import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';

export default function Author(props) {
    const { id } = useParams();

    if (!id || isNaN(id) || id > props.authors.length || id <= 0 || !Number.isInteger(Number(id))) {
        return <div class={'body'}>
            <h1>Author not found</h1>
        </div>;
    }

    const user = props.authors[id - 1];
    return (
        <div>
            <h1>{user.name}</h1>
            <h3>Email: {user.email}</h3>
            <p>{user.company.catchPhrase}</p>
        </div>
    )
}
