import React from 'react'
import { motion } from 'framer-motion';

function Textmotion(props) {
  return (
<div  className='  animate__animated animate__fadeInLeft ease-in-out xl:w-[300px] left-10 '  > 
<p className=' xl:w-[600px]'>{props.title1}
  <br/>
{props.title2}
    </p>

       {/*<motion.p 
    style={{width:400}} 
    initial={{x:-400, scale:0.5}}
    animate={{x:0,scale:1}}
    transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
 
    >
    <p style={{width:"600px"}}>{props.title1}
        <br />
        {props.title2}
    </p>
    </motion.p>*/}
    </div>
  )
}

export default Textmotion
