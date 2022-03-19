import styled from './Day.module.css'
import React from 'react'

const Day = ({ day, removeWorker }) => {

const cardClickHandler = () => { 
    removeWorker(day.id); 
}
    /*  {day.Dan}
       {day.Radnik_1}
       {day.Radnik_2}
       {day.Radnik_3} */

    return (

        <div className={styled.card} onClick={cardClickHandler}>

            <div className={styled.header}> {day.Dan}  </div>
            <ul>
                <li> {day.Radnik_1}  </li>
                <li> {day.Radnik_2}   </li>
                <li> {day.Radnik_3}  </li>


            </ul>

        </div>
    )
}

export default Day