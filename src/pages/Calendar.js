import React from 'react'
import styled from './Calendar.module.css'; 
import { Container, Col, Row } from 'react-bootstrap'; 
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore } from '@firebase/firestore';
import { collection, addDoc, getDocs, orderBy, limit, query } from '@firebase/firestore';
import { useFirestoreQuery } from '../hooks/firebase-hooks';
import Day from '../UI/Day';


const Calendar = () => {

    const db = getFirestore(); 
    const calendarRef = collection(db,"Mart"); 
    const q = query(calendarRef,orderBy("Dan", "asc")); 

    const days = useFirestoreQuery(q); 
    console.log(days);



    const removeWorker = (id) =>{ 
        console.log(id); 

    }



let day =  days.map(data => <Col key={data.id}  className={styled.day} lg={2} > <Day removeWorker={removeWorker} day={data} /> </Col>)


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
  )
}

export default Calendar