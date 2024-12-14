import React from 'react'
import NavforRes from './NavforRes';
import Navforsm from './Navforsm';
import AnimateImg from './AnimateImg';
import Newbutton from './Newbutton';
import SlideRight from './SlideRight';
import Quality from './Quality';
import Ganjay from './Ganjay';
import Testimonals from './Testimonals';
import Textmotion from './Textmotion';
import BgforRes from './BgforRes';

function Home() {
  return (
    <div>
      <div className='relative'>
     <BgforRes/>
      <div className='absolute top-1 left-0 z-1'>
    <AnimateImg/>
      </div>
      <div className='absolute top-52 left-10  font-bold ml-5 ' style={{fontSize:60,color:'white' ,fontFamily:"Noto Sans, sans-serif"}}>
     <Textmotion title1="Enjoy Our"
     title2='Delicious Meal'
      />
      </div>
      <div className='absolute top:70 left-10   ml-5 text-lg  text-white' style={{top:'400px'}}>
     <Textmotion  title1="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet "  />
      </div>
      <div className='absolute bottom-32 left-10 ml-5'>
      <Newbutton />
        </div>
        <div className='absolute top-3/4 right-0 z-1'>
          <SlideRight />
        </div>
        </div>
        <Quality/>
        <Ganjay/>
       <Testimonals/>
    </div>
  )
}

export default Home
