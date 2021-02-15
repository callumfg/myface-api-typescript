import React, { useState, useEffect } from 'react';
import {UserDetail} from './UserDetail.jsx';
import { useParams } from "react-router-dom";

function User(){
    let { userId } = useParams()
    const [user, setUser] = useState(null);
    useEffect (() => {fetch(`http://localhost:3001/users/${userId}`)
    .then(response => response.json())
    .then(data => {console.log(data);
    setUser(data)});
}, []);


    if (!user) {
        return <div>Loading users!</div>
    }    return <div>
        <div className='container'>
            <img src={user.coverImageUrl} className='userCover'/>
            <div className='userProfile'>
            <img src={user.profileImageUrl} className='profilePic'/>
            <p className ='userDetailName'>{user.name}</p>
                <div className='user'>
                
                    <p className='udUser'>{user.username}</p>
                    <p className='udEmail'>{user.email}</p>
                </div>
            </div>
        </div>
    </div>
    
}

export {User};