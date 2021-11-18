import React from 'react'

export default function UsersList(props) {
    const users = props.users;
    const usersHtml = users.map((user) => <li key={user.id}><a href={"/authors/" + user.id}>{user.name}</a></li>);

    return (
        <div>
            {usersHtml}
        </div>
    );
}
