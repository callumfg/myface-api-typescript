import React, { useState, useEffect } from 'react';
import {UserDetail} from './UserDetail.jsx';

function Users(){
    const [users, setUsers] = useState(null);
    useEffect (() => {fetch('http://localhost:3001/users')
    .then(response => response.json())
    .then(data => {console.log(data);
    setUsers(data)});
}, []);


    if (!users) {
        return <div>Loading!</div>
    }    return users.results.map((items) =>
    <div> <UserDetail 
            coverImage={items.coverImageUrl} 
            profileImage={items.profileImageUrl} 
            username={items.username} 
            name={items.name} 
            email={items.email}
            userId={items.id}
    /></div>)
    
}

export {Users};