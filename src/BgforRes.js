import React from 'react'
import { motion } from 'framer-motion';
import imge3 from './images/bg-hero.jpg';
import imge4 from './images/hero.png';
function BgforRes() {
  return (
    <>
    <div className="relative">
    {/* Background Image */}
    <img
     src={imge3}
      alt="Background"
       className='object-cover  lg:h-[700px] lg:w-[100%] h-[1200px] '
    />
    
    {/* Overlay with black background */}
    <div
      className="absolute top-0 left-0 w-full h-full"
      style={{ opacity: 0.9, backgroundColor: '#0F172B' }}
    ></div>
     <div
      className="absolute top-2/4 right-10 lg:top-20 lg:right-20  flex justify-end  truncate " >
      <img
      src={imge4}
      alt="Background"
      
      className='object-cover divmove lg:h-[550px] lg:w-[550px] w-96 h-96'
    />
    </div>
   </div>
   </>

  );
}



export default BgforRes
