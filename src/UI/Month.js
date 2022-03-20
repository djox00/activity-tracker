import React from 'react'
import styled from './Month.module.css'; 
const Month = (props) => {
  return (
    <div className={styled.month}>
   <p>    {props.children} </p>
    </div>
  )
}

export default Month