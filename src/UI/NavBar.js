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
                                    <h1 className={styled.brother}>Brother</h1><h1 className={styled.crew}>Crew</h1>
                            </div>
                            <h5 className={styled.brocrew}>Profesionalna rješenja za automatizaciju radnog mjesta</h5>
                        </div>
                        <nav className={styled.navigacija}>
                            <a href="login.html">Početna</a>
                            <a href="Calendar">Kalendar</a>
                            <a href="upit.html">Kontakt</a>
                            </nav>
                           {User== null ? <div className={styled.login}>   <GoogleButton onClick={login}>Login with Google</GoogleButton> </div> : <div onClick={logout} className={styled.logout}>Sign out</div> } 
                       
                      
                    </div>
                </header>
         

    </React.Fragment>
  )
}

export default NavBar