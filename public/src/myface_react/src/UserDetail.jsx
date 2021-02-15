import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function UserDetail (props) {
    return<div>
        
        <img src={props.coverImage} />
        <img src={props.profileImage} />
        <Link to={`/users/${props.userId}`}><div>{props.username}</div></Link>
        <div>{props.name}</div>
        <div>{props.email}</div>
    </div>
}

export {UserDetail}