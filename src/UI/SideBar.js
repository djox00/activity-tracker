import React from 'react'
import styled from './SideBar.module.css'; 
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
const SideBar = () => {

const [Toggle, setToggle] = useState(false); 

const props = useSpring({
    to:{left: "0px"}
   ,
    from: { left: "-200px"},

    config: { duration: 500 },
  }); 






  return (
   
<React.Fragment> 
    <animated.div style={props}>    
<div className={styled.sidebar}> 
        


        </div>
        </animated.div>
    
         </React.Fragment>
     
  
  )
}

export default SideBar