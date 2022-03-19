import React from 'react'
import styled from './Calendar.module.css'; 
import { Container, Col, Row } from 'react-bootstrap'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore } from '@firebase/firestore';
import { collection, addDoc, getDocs, orderBy, limit, query } from '@firebase/firestore';
import { useFirestoreQuery } from '../hooks/firebase-hooks';
import Day from '../UI/Day';
const Calendar = () => {

    const db = getFirestore(); 
    const calendarRef = collection(db,"Calendar"); 
    const q = query(calendarRef); 

    const days = useFirestoreQuery(q); 
    console.log(days["0"]);

  return (
<React.Fragment> 

<div className={styled['calendar-body']} >
    
    
    <Container>  

    <div className={styled.calendar}>  

    <Row lg={5} md={3} sm={2} xs={1} >

<Col lg={1}  md={1}> 1 </Col>
<Col lg={1}  md={1}> 2 </Col>
<Col lg={1}  md={1}>  3</Col>




</Row>

</div> 
    </Container>
    
    
    
    
    
    
    
     </div>

</React.Fragment>
  )
}

export default Calendar