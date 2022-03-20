import styled from './Day.module.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faUserMinus,faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase-config'
import{ init, send } from '@emailjs/browser';


init("nnAoNVgik2VxZ6aNg");
const Day = ({ day, removeWorker }) => {


    const [User, setUser] = useState(''); 

    onAuthStateChanged(auth,(currentuser)=>{setUser(currentuser)});





    /* const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
          .then((result) => { 
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }; */


const cardClickHandler = () => { 
    removeWorker(day.id); 

    send("service_80x83d6","template_ind8yi7",{
        from_name: User.displayName,
        worker_name: "DJole",
        day: "2.",
        to_email: "djordjedjuric05@gmail.com",
        });
}
    /*  {day.Dan}
       {day.Radnik_1}
       {day.Radnik_2}
       {day.Radnik_3} */

    return (

        <div className={styled.card} >

            <div className={styled.header}> {day.Dan}  </div>
            <ul>
                <li> <FontAwesomeIcon icon={faUser}/> {day.Radnik_1}  </li>
                <li><FontAwesomeIcon icon={faUser}/> {day.Radnik_2}   </li>
                <li> <FontAwesomeIcon icon={faUser}/>{day.Radnik_3}  </li>


            </ul>
            <div className={styled['user-action']}> {(day.Radnik_1==null || day.Radnik_2==null || day.Radnik_3==null )?<FontAwesomeIcon className={styled['user-add']} onClick={cardClickHandler} icon={faUserPlus}/> : <FontAwesomeIcon className={styled['user-remove']} onClick={cardClickHandler} icon={faUserMinus}/> }     </div>
            
        </div>
    )
}

export default Day