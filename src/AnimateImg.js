import React from 'react'
import img1 from './images/flower.png';

function AnimateImg() {
  return (
    <div  className=' d-none d-lg-block animate__animated animate__fadeInLeft ease-in-out '> 
     <img
                    src={img1}
                    alt="Background"
                    className=""
                />
    {/* <Image   src={`${process.env.PUBLIC_URL}/phool5.png`}  /> */}
  </div>
    
  )
}

export default AnimateImg
