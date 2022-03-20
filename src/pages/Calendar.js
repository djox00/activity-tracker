import React from 'react'
import styled from './Calendar.module.css'; 
import { Container, Col, Row } from 'react-bootstrap'; 
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';
import { getFirestore } from '@firebase/firestore';
import { collection, addDoc, getDocs, getDoc , orderBy, limit, query, updateDoc,doc, setDoc,} from '@firebase/firestore';
import { useEffect } from 'react';
import { useFirestoreQuery } from '../hooks/firebase-hooks';
import Day from '../UI/Day';

import SideBar from '../UI/SideBar';



const Calendar = () => {


    const [User, setUser] = useState(''); 

    onAuthStateChanged(auth,(currentuser)=>{setUser(currentuser)});



    const db = getFirestore(); 
    const calendarRef = collection(db,"Mart"); 
    const q = query(calendarRef,orderBy("Dan", "asc")); 

    const days = useFirestoreQuery(q); 
   
console.log(days); 

/* const addmail = async () => {

    days.forEach(element => {
        const docRef = doc(db,"Mart",element.id); 
         updateDoc(docRef,{R3_email: "maid.idrizovic@fet.ba"}); 
     
 });   



}

addmail();  */


    const removeWorker = async (id) =>{ 
                                                
         const docRef = doc(db,"Mart",id); 
         
         
       const document =  await getDoc(docRef); 
      
       if( document.data().Radnik_1!=null && document.data().R1_email == User.email ){

        await updateDoc(docRef,{Radnik_1: null}); 
    }
    if( document.data().Radnik_2!=null && document.data().R2_email == User.email ){

        await updateDoc(docRef,{Radnik_2: null}); 
    }
    if( document.data().Radnik_3!=null && document.data().R3_email == User.email ){

        await updateDoc(docRef,{Radnik_3: null}); 
    }

    if( document.data().Radnik_1==null && document.data().R1_email == User.email ){

        await updateDoc(docRef,{Radnik_1: User.displayName}); 
    }
    if( document.data().Radnik_2==null && document.data().R2_email == User.email ){

        await updateDoc(docRef,{Radnik_2: User.displayName}); 
    }
    if( document.data().Radnik_3==null && document.data().R3_email == User.email ){

        await updateDoc(docRef,{Radnik_3: User.displayName}); 
    }



// 
 

        }

 






let day =  days.map(data => <Col key={data.id}  className={styled.day} lg={2} > <Day removeWorker={removeWorker} day={data} /> </Col>)

if(User!=null){  

  return (

<React.Fragment> 
    <SideBar />
<div className={styled['calendar-body']} >
<Container className={styled.days}>
<Row lg={12} md={6} sm={3} xs={2}>
  {day}
  </Row>
</Container>
    
    
    
    
    
     </div>

</React.Fragment>
  )} else {
      return ( 
        <div>Please Login</div>

      )
  }

}

export default Calendar