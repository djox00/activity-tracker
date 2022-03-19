
import React from 'react';
import './App.css';
import NavBar from './UI/NavBar';
import Login from './pages/Login';
import { auth } from './firebase-config';

function App() {






  return (
   
 <React.Fragment> 

<NavBar />
<Login />

 </React.Fragment>
  );
}

export default App;
