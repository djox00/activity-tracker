import styled from './Day.module.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faUserMinus,faUserPlus, faUserPen } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase-config'
import{ init, send } from '@emailjs/browser';


init("nnAoNVgik2VxZ6aNg");
const Day = ({ day, removeWorker }) => {


    const [User, setUser] = useState(''); 

    onAuthStateChanged(auth,(currentuser)=>{setUser(currentuser)});



const cardClickHandler = () => { 
    removeWorker(day.id); 

     const mailPeople = [ {person : day.R1_email} , {person : day.R2_email} , {person : day.R3_email}  ]; 
     let mailTosend = mailPeople.filter(el => el.person != User.email); 
     
    send("service_80x83d6","template_ind8yi7",{
        worker_name: User.displayName,
        day: day.Dan + '.',
        month: "Mart", // staticki ali ako se radi dalje napraviti jos kolekcija npr. jan, feb, mart moze biti dinamicki 
        to_email1: mailTosend[0].person,  
        to_email2: mailTosend[1].person ,  // takodjer staticki ali moze se izvesti dinamicki 
        
        });

    
         
}

     

    return (

        <div className={styled.card} >

            <div className={styled.header}> {day.Dan}.  </div>
            <ul>
                <li> <FontAwesomeIcon icon={faUser}/>  {day.Radnik_1}  </li>
                <li><FontAwesomeIcon icon={faUser}/>  {day.Radnik_2}   </li>
                <li> <FontAwesomeIcon icon={faUser}/> {day.Radnik_3}  </li>

            </ul>
            <div className={styled['user-action']}> <span onClick={cardClickHandler} className={styled['user-label']}> add/remove  </span> <FontAwesomeIcon className={styled['user-toggle']} onClick={cardClickHandler} icon={faUserPen}/>     </div>
            
        </div>
    )
}

export default Day