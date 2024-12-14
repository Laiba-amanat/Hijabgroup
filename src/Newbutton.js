import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Newbutton() {
  return (
    <div>
    <div className="mb-2  d-none d-lg-block animate__animated animate__fadeInLeft ease-in-out '" > 
    <Link to="/Booking">
    <Button    className='  px-5 py-3 border-0'  size="lg" style={{ backgroundColor: '#FEA116'}}> 
        BOOK A TABLE 
      </Button>{' '}
 {  /* <motion.p 
    
    initial={{x:-400, scale:0.5}}
    animate={{x:0,scale:1}}
    transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
    style={{ backgroundColor: '#FEA116', border: 'none', outline: 'none' }}
  
    >
      <Button    className='  px-5 py-3 border-0'  size="lg" style={{ backgroundColor: '#FEA116'}}> 
        BOOK A TABLE 
      </Button>{' '}
      </motion.p>*/}
      </Link>
    </div>
  </div>
);
}

export default Newbutton
