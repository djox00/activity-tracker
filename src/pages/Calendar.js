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
    const q = query(calendarRef); 

    const days = useFirestoreQuery(q); 
    console.log(days["1."]);



let day =  days.map((data) => <Col  className={styled.day} lg={2} > <Day workers={data} /> </Col>)


  return (
<React.Fragment> 

<div className={styled['calendar-body']} >
    
<Container className={styled.days}>

<Row  >
  {day}
  
   
  </Row>

 
</Container>
    
    
    
    
    
     </div>

</React.Fragment>
  )
}

export default Calendar