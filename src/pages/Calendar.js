import React from 'react'
import styled from './Calendar.module.css'; 
import { Container, Col, Row } from 'react-bootstrap'; 
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';
import { getFirestore } from '@firebase/firestore';
import { collection, addDoc, getDocs, orderBy, limit, query, updateDoc,doc } from '@firebase/firestore';

import { useFirestoreQuery } from '../hooks/firebase-hooks';
import Day from '../UI/Day';


const Calendar = () => {


    const [User, setUser] = useState(''); 

    onAuthStateChanged(auth,(currentuser)=>{setUser(currentuser)});


    const db = getFirestore(); 
    const calendarRef = collection(db,"Mart"); 
    const q = query(calendarRef,orderBy("Dan", "asc")); 

    const days = useFirestoreQuery(q); 
    console.log(days);



    const removeWorker = async (id) =>{ 
                                                
         const docID = doc(db,"Mart",id); 
         console(docID); 
         await updateDoc(docID,{Radnik_1: null}); 
 



        }



let day =  days.map(data => <Col key={data.id}  className={styled.day} lg={2} > <Day removeWorker={removeWorker} day={data} /> </Col>)

if(User!=null){  

  return (

<React.Fragment> 
<div className={styled['calendar-body']} >
<Container className={styled.days}>
<Row>
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