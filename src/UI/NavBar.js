import React from 'react'
import styled from './NavBar.module.css'; 
import GoogleButton from './GoogleButton';
import { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';

const NavBar = ({login,logout}) => {

    const [User, setUser] = useState(''); 

    onAuthStateChanged(auth,(currentuser)=>{setUser(currentuser)}); 


  return (
    <React.Fragment> 

    

       <Navbar className={styled.navBar} collapseOnSelect expand="lg" bg="dark" variant="dark"  >
    <Navbar.Brand className={styled.logo} href='Home' ><h1 className={styled.brother}>Brother</h1><h1 className={styled.crew}>Crew</h1></Navbar.Brand>
    
  <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{border : "none", boxShadow : "none"}} />
  <Navbar.Collapse id="responsive-navbar-nav" c={true}>
    <Nav style={{marginLeft: "20px"}} >
        <div className={styled['nav-labels']}>
      <Nav.Link href="Home">Početna</Nav.Link>
      <Nav.Link href="Calendar">Kalendar</Nav.Link>
      </div>
    
    </Nav>
    
    <div className={styled.login}> {User== null ? <div className={styled.login}>   <GoogleButton onClick={login}>Login with Google</GoogleButton> </div> : <div onClick={logout} className={styled.logout}>Sign out</div> }   </div>
  
  </Navbar.Collapse>

  
</Navbar>
         

    </React.Fragment>
  )
}

export default NavBar