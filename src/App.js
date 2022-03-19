
import React from 'react';
import './App.css';
import NavBar from './UI/NavBar';
import Login from './pages/Login';
import { auth } from './firebase-config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { signOut,onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';






function App() {





  const [User, setUser] = useState(''); 

onAuthStateChanged(auth,(currentuser)=>{setUser(currentuser)}); 
console.log(User); 

  const LoginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
  
             // removes error if its active 
        console.log(user);
       /*  navigate("/Home"); */
        // ...
      }).catch((error) => {
        // Handle Errors here.
          // sets the message 
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  const SignOut = async () =>{ 
     signOut(auth); 
  }
  

  return (
   
 <React.Fragment> 

<NavBar login={LoginWithGoogle} logout={SignOut}/>
<Login />

 </React.Fragment>
  );
}

export default App;
