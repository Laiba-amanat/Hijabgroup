import React from 'react'
import  { useState } from 'react';
// import {Col} from  'react-bootstrap'

function Props(props) {
  const [currentImg, setCurrentImg] = useState(props.imgUrl);
  return (
    <div 
    onMouseEnter={() => setCurrentImg(props.hoverImgUrl)} // Change image on hover
    onMouseLeave={() => setCurrentImg(props.imgUrl)} // Revert back on mouse leave
    >
              <img className='' src={currentImg} alt='description img' />
            <p className='text-center ' style={{fontSize:'20px'}}>{props.title}</p>
            <p className='text-center  font-bold' style={{fontSize:'20px'}}>{props.price}</p>
            <p className='text-center ' style={{fontSize:'15px'}}>{props.subtitle}</p>
        
    </div>
  )
}

export default Props
