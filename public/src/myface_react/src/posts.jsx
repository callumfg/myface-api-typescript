import React, { useState, useEffect } from 'react';
import {Post} from './Post.jsx';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


function PostsDisplay(){
    const [myPosts, setMyPosts] = useState(null);
    useEffect (() => {fetch('http://localhost:3001/posts/')
    .then(response => response.json())
    .then(data => {console.log(data);
    setMyPosts(data)});
}, []);


    if (!myPosts) {
        return <div>Loading posts!</div>
    }    return myPosts.results.map((posts) =>
    
    <div> <Post 
            profilePic={posts.postedBy.profileImageUrl}
            imageUrl={posts.imageUrl} 
            message={posts.message} 
            user={posts.postedBy.username} 
            userId={posts.postedBy.id}
            date={posts.createdAt}
            likes={posts.likedBy.length}
            dislikes={posts.dislikedBy.length}
    /></div>)
    
}

export {PostsDisplay};