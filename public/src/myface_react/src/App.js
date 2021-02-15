import logo from './logo.svg';
import React from 'react';
import './App.scss';
import {PostsDisplay} from './posts.jsx';
import {Post} from './Post.jsx';
import {Users} from './users.jsx';
import {User} from './user.jsx';
import {BrowserRouter as Router, Switch, Route, Link, useParams} from 'react-router-dom';
import {CreateUser} from './createUser.jsx'

function App() {
  return (
    <Router>
      <div className='banner'><h1>MyFace</h1></div>
      
      <Switch>
        
        
        <Route path='/posts'>
          <h2>Posts</h2>
          <PostsDisplay />
        </Route>
        <Route exact={true} path='/users'>
          <h2>Users</h2>
          <Users />
        </Route>
        <Route exact={true} path='/users/create'>
          <h2>Create New User</h2>
          <CreateUser />
        </Route>
        <Route exact={true} path='/users/:userId'>
          <User />
        </Route>
        
        <Route path=''>
          <h2>Welcome to MyFace</h2>
          <div> <Link to='/posts'><h3>Posts</h3></Link>
                <Link to='/users'><h3>Users</h3></Link>
          </div>
        </Route>
    
    </Switch>
    </Router>
  );
}




export default App;
