import React from 'react'

function Email() {
  return (
    <div> <hr />
        <div className='mt-10' style={{fontSize:'20px'}}>SUBSCRIBE FOR NEWSLETTER</div>
        <input type='email' placeholder='Email' className='px-4 py-2 text-lg mt-3' style={{border:'1px solid gray', width:'300px', height:'50px'}}></input>
        <button  className="bg-black-500 text-white px-4 py-2 text-lg mt-3 ml-5" style={{fontSize:'20px',backgroundColor:'black', border:'1px solid white' , height:'50px', width:'200px'}}>SHOP NOW</button>
        <br />
        <br />
        </div>
  )
}

export default Email
