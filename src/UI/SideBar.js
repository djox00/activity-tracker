import React from 'react'
import styled from './SideBar.module.css'; 
import { useState } from 'react';
import { useSpring, animated, useTransition } from 'react-spring';
import { useRef } from 'react';
import Month from './Month'; 
const SideBar = () => {

const [Toggle, setToggle] = useState(false); 






  return (
   
<React.Fragment> 
     
<div className={styled.sidebar}> 
<Month> Jan</Month>
<Month> Feb</Month>
<Month> Mart</Month>
<Month> Apr</Month>
<Month> Maj</Month>
<Month> Jun</Month>
<Month> Jul</Month>
<Month> Aug</Month>
<Month> Sep</Month>
<Month> Okt</Month>
<Month> Nov</Month>
<Month> Dec</Month>





        </div>
      
    
         </React.Fragment>
     
  
  )
}

export default SideBar