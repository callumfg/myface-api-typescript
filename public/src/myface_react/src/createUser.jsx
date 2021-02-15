import React, { useState, useEffect } from 'react';

function CreateUser() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [profileImage, setProfileImage] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const [validName, setValidName] = useState(false);
    const [validUsername, setValidUsername] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [validProfileUrl, setValidProfileUrl] = useState(false);
    const [validCoverUrl, setValidCoverUrl] = useState(false);

    
    const handleSubmit = (e) =>{
        e.preventDefault();
        fetch('http://localhost:3001/users/create', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "name": name,
                "username": username,
                "email": email,
                "profileImageUrl": profileImage,
                "coverImageUrl":coverImage }),
          })
          .then(response => response.json())
          .then(json =>console.log(json));
    }
    function onChangeName(e){
        if(e.target.value.length<2){
           setValidName(false);
        } else{
            setValidName(true);  
        }
        setName(e.target.value)
    }
    function onChangeUsername(e){
        if(e.target.value.length<2){
           setValidUsername(false);
        } else{
            setValidUsername(true);  
        }
        setUsername(e.target.value)
    }
    function onChangeEmail(e){
        if(!e.target.value.includes('@')){
           setValidEmail(false);
        } else{
            setValidEmail(true);  
        }
        setEmail(e.target.value)
    }
    function onChangeProfileUrl(e){
        if(e.target.value.length<2){
           setValidProfileUrl(false);
        } else{
            setValidProfileUrl(true);  
        }
        setProfileImage(e.target.value)
    }
    function onChangeCoverUrl(e){
        if(e.target.value.length<2){
           setValidCoverUrl(false);
        } else{
            setValidCoverUrl(true);  
        }
        setCoverImage(e.target.value)
    }



    return <div className="createUserContainer">
            <form>
    <label>
        Name:<br/>
        <div className='submit'><input type="text" value={name} onChange={onChangeName} required/><div className={validName? "green":"red"} ></div></div>
    </label>
    <label>
        Username:<br/>
        <div className='submit'><input type="text" value={username} onChange={onChangeUsername} required/><div className={validUsername? "green":"red"} ></div></div>
    </label>
    <label>
        Email:<br/>
        <div className='submit'><input type="email" value={email} onChange={onChangeEmail} required/><div className={validEmail? "green":"red"} ></div></div>
    </label>
    <label>
        Profile Image Url:<br/>
        <div className='submit'><input type="url" value={profileImage} onChange={onChangeProfileUrl} required/><div className={validProfileUrl? "green":"red"} ></div></div>
    </label>
    <label>
        Cover Image Url:<br/>
        <div className='submit'><input type="url" value={coverImage} onChange={onChangeCoverUrl} required/><div className={validCoverUrl? "green":"red"} ></div></div>
    </label>
    <button className="submit" onClick={handleSubmit}>Submit</button>
        </form>
         </div>

}

export {CreateUser}