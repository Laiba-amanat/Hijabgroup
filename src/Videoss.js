import React from 'react'


function Video(props) {
  return (

     <div>
        
         
         <video  width="500" height="600" controls className='relative'>
            <source src={props.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 text-lg" style={{ border: '2px solid white' }}>
        SHOP NOW
      </button> */}
          <button  className="bg-black-500 text-white px-4 py-2 text-lg mt-3" style={{fontSize:'20px',backgroundColor:'black', border:'1px solid white',position:'relative', bottom:"130px"}}>SHOP NOW</button>
        
    </div>
  )
}

export default Video
