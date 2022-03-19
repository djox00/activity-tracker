import React from 'react'
import styled from './NavBar.module.css'; 
import GoogleButton from './GoogleButton';
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';

const NavBar = ({login,logout}) => {

    const [User, setUser] = useState(''); 

    onAuthStateChanged(auth,(currentuser)=>{setUser(currentuser)}); 


  return (
    <React.Fragment> 

                <header className={styled["main-header"]}>
                    <div className={styled.container}>
                        <div className={styled.naslovalign}>
                            <div className={styled.naslovanim}>
                                <a href="login.html" className={styled.brothercrewclick}>
                                    <h1 className={styled.brother}>Brother</h1><h1 className={styled.crew}>Crew</h1>
                                </a>
                            </div>
                            <h5 className={styled.brocrew}>Profesionalna rješenja za automatizaciju radnog mjesta</h5>
                        </div>
                        <nav className={styled.navigacija}>
                            <a href="login.html">Početna</a>
                            <a href="Calendar">Kalendar</a>
                            <a href="upit.html">Kontakt</a>
                           {User== null ?  <a className={styled.google}> <GoogleButton onClick={login}>Login with Google</GoogleButton>  </a> : <div onClick={logout} className={styled.logout}>Sign out</div> } 
                        </nav>
                      
                    </div>
                </header>
         

    </React.Fragment>
  )
}

export default NavBar