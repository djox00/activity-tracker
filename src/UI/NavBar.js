import React from 'react'
import styled from './NavBar.module.css'; 
import GoogleButton from './GoogleButton';
const NavBar = () => {
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
                            <a href="kalendar.html">Kalendar</a>
                            <a href="upit.html">Kontakt</a>
                            <a> <GoogleButton>Login with Google</GoogleButton>  </a> 
                        </nav>
                      
                    </div>
                </header>
         

    </React.Fragment>
  )
}

export default NavBar