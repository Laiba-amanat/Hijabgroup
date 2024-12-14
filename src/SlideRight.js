import React from 'react'
import 'animate.css';
import img1 from './images/phool4.png';

function SlideRight() {
  return (
    <div  className=' d-none d-lg-block animate__animated animate__fadeInRight ease-in-out '> 
   <img
                    src={img1}
                    alt="Background"
                    className=""
                />
 </div>
)
}
  
export default SlideRight
