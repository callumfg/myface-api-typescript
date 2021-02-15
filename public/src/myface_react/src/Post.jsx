import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function Post(props) {
    return <div className='singlePost'>
        
        <div className='postInfo'>
        <img src={props.imageUrl} className='postImg'/>
            <div className='postUserInfo'>
                <img src={props.profilePic} className='postProfilePic'/>
                <div className='postUser'><Link to={`/users/${props.userId}`}> {props.user} </Link></div>
            </div>
            <div className='message'>
                <p className='postMess'>{props.message}</p>
                <p className='postTime'>{props.date}</p>
            </div>
        </div>
       
        
        <div class='likes'>
            Likes: {props.likes}<br/>
            Dislikes: {props.dislikes}
        </div>
        
        
    </div>

}


export {Post};