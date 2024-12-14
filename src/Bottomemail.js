import React from 'react'


function Bottomemail(props) {
  return (
    <div >
        
             <img className='mx-auto mt-5' style={{width:'40px',height:'40px '}} src = {props.imgUrl} alt='description img' />
             <p className='mt-3'style={{fontSize:'20px', fontWeight:''}} >{props.title}</p>
             <p className='mt-3'style={{fontSize:'15px', fontWeight:''}} >{props.subtitle}</p>
           
    

    </div>
  )
}

export default Bottomemail
