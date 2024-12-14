import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'tailwindcss/tailwind.css';
import 'aos/dist/aos.css';  // Import the AOS styles
import AOS from 'aos';  //animate on scroll
import  { useEffect } from 'react';
import PropsServices from './PropsServices';


function Quality() {
    // const [isHovered1, setIsHovered1] = useState(false);
    // const [isHovered2, setIsHovered2] = useState(false);
    // const [isHovered3, setIsHovered3] = useState(false);
    // const [isHovered4, setIsHovered4] = useState(false);
    // const [isHovered5, setIsHovered5] = useState(false);
    // const [isHovered6, setIsHovered6] = useState(false);
    // const [isHovered7, setIsHovered7] = useState(false);
    // const [isHovered8, setIsHovered8] = useState(false);
    useEffect(() => {   // jb kisi cheez ko render karwana ho lana ho
                            // useEffect ke andar AOS (Animate On Scroll) ka initialization hota hai. Jab component pehli baar render hota hai, tab AOS.init() call hota hai. Yeh ensure karta hai ke animations sirf tab set ho jab component pehli dafa screen par aaye.
        AOS.init({
          duration: 1000,   // Set animation duration
              
        });
      }, []); //[ek hi baar setup hota hai]
  return (
    <>
     <Container className='mt-10'>
                <Row className="justify-content-md-center">
                    <Col md lg xl="3" data-aos='fade-up'>
                    <PropsServices iconurl ="fa fa-3x fa-user-tie" title="Master Chefs"/>
                    </Col>
                    <Col md lg xl="3" data-aos='fade-up'>
                    <PropsServices iconurl ="fa fa-3x fa-utensils" title="Quality Food"/>
                    </Col>
                    <Col md lg xl="3" data-aos='fade-up'>
                    <PropsServices iconurl ="fa fa-3x fa-cart-plus" title="Online Order"/>
                    </Col>
                    <Col md lg xl="3" data-aos='fade-up'>
                    <PropsServices iconurl ="fa fa-3x fa-headset" title="24/7 Service"/>
                    </Col>
                </Row>
                </Container>
     {/* <Container fluid className='grid justify-content-center h-46 w-100 py-5 bg-stone-50 ' >
      <Row fluid className=' justify-content-center  py-5  xl:gap-20 '>
      <Col sm={6} md={3} lg={3} data-aos='fade-up'  className='transition-transform  duration-200 ease-in-out delay-200 border-4 border-white w-64 h-64 m-2 hover:bg-customOrange   hover:text-white  '
      onMouseEnter={() => {

        setIsHovered1(false);
        setIsHovered5(true); // Optional: Reset other hover state
      }}
      onMouseLeave={()=>{setIsHovered1(true);
        setIsHovered5(false)}
      }>
        <Row>
        <i className={`fa fa-3x fa-user-tie m-3 text-customOrange ${isHovered5 ? 'text-white' : 'text-customOrange'}`}></i>
        </Row>
        <Row>
            <Col className='font-bold text-3xl m-2 '>
            Master Chefs</Col>
        </Row>
        <Row>
        <Col  className={`m-2 ${isHovered1 ? 'animate__animated animate__fadeIn animate-slow' : ''}`} 
            >
            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam </Col>
        </Row>
        </Col>
        <Col sm={6} md={6} lg={3} data-aos='fade-up' className='transition-transform duration-300 ease-in-out delay-300 border-4 border-white w-64 h-64 m-2 animationdelay2  hover:text-white  hover:bg-customOrange  '
         onMouseEnter={() => {
            setIsHovered2(false);
            setIsHovered6(true); // Optional: Reset other hover state
          }}
          onMouseLeave={()=>{setIsHovered2(true);
            setIsHovered6(false)}
          }>
        <Row>
       
        <Col> 
        <i className={`fa fa-3x fa-utensils t m-3 text-customOrange ${isHovered6 ? 'text-white' : 'text-customOrange'}`}></i></Col>
        </Row>
        <Row>
            <Col className='font-bold text-3xl m-2'>
            Quality Food</Col>
        </Row>
        <Row>
        <Col  className={`m-2 ${isHovered2 ? 'animate__animated animate__fadeIn animate-slow' : ''}`} >
        Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</Col>
        </Row>
        </Col>
       
        <Col sm={6} md={6} lg={3} data-aos='fade-up' className=' transition-transform duration-500 ease-in-out delay-500 border-4 border-white w-64 h-64 m-2 animationdelay3  hover:text-white hover:bg-customOrange '
         onMouseEnter={() => {
            setIsHovered3(false);
            setIsHovered7(true); // Optional: Reset other hover state
          }}
          onMouseLeave={()=>{setIsHovered3(true);
            setIsHovered7(false)}
          }>
        <Row>
        <Col>  <i className={`fa fa-3x fa-cart-plus m-3 text-customOrange ${isHovered7 ? 'text-white' : 'text-customOrange'}`}></i>
         </Col>
        </Row>
        <Row>
            <Col className='font-bold text-3xl m-2'>
            Online Order</Col>
        </Row>
        <Row>
        <Col  className={`m-2 ${isHovered3 ? 'animate__animated animate__fadeIn animate-slow' : ''}`} >
        Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</Col>
        </Row>
        </Col>
     
        <Col sm={6} md={3} lg={3} data-aos='fade-up' className='transition-transform duration-700 ease-in-out delay-700 w-64 h-64 m-2 border-4 border-white  animationdelay4  hover:text-white hover:bg-customOrange '
          onMouseEnter={() => {
            setIsHovered4(false);
            setIsHovered8(true); // Optional: Reset other hover state
          }}
          onMouseLeave={()=>{setIsHovered4(true);
            setIsHovered8(false)}
          }>
        <Row>
        <Col>  <i className={`fa fa-3x fa-headset m-3 text-customOrange ${isHovered8 ? 'text-white' : 'text-customOrange'}`}></i>
        </Col>
        </Row> 
        <Row>
            <Col className='font-bold text-3xl m-2'>
            24/7 Service</Col>
        </Row>
        <Row>
        <Col  className={`m-2 ${isHovered4 ? 'animate__animated animate__fadeIn animate-slow' : ''}`} >
        Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</Col>
        </Row>
        </Col>
       
      </Row>
    </Container> */}
    </>
  )
}

export default Quality

/*Animation Types
AOS provides various animation types that you can use with data-aos, including:

Fade Animations:

fade: Fades in from transparent to opaque.
fade-up: Fades in while moving upwards.
fade-down: Fades in while moving downwards.
fade-left: Fades in while moving from the left.
fade-right: Fades in while moving from the right.
Slide Animations:

slide-up: Slides in from below.
slide-down: Slides in from above.
slide-left: Slides in from the left.
slide-right: Slides in from the right.
Zoom Animations:

zoom-in: Scales up from smaller size.
zoom-out: Scales down from larger size.
Other Effects:

flip-left: Flips in from the left.
flip-right: Flips in from the right.
flip-up: Flips in from below.
flip-down: Flips in from above.*/
