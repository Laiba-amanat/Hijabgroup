import React from 'react'

function Footer(props) {
  return (
    <div>
          <p className='mt-3'style={{fontSize:'25px', fontWeight:'', color:'black'}} >{props.title}</p>
          <p className='mt-3'style={{fontSize:'15px', fontWeight:'', color:'gray'}} >{props.subtitle}</p>
          <p className='mt-3'style={{fontSize:'15px', fontWeight:'', color:'gray'}} >{props.info}</p>
          <p className='mt-3'style={{fontSize:'15px', fontWeight:'', color:'gray'}} >{props.contact}</p>
          <p className='mt-3'style={{fontSize:'15px', fontWeight:'', color:'gray'}} >{props.about}</p>
    </div>
  )
}

export default Footer
