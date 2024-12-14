import React from 'react'
import 'aos/dist/aos.css';  // Import the AOS styles
import AOS from 'aos';  //animate on scroll
import  { useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import imge1 from './images/testimonial-1.jpg';
import imge2 from './images/testimonial-2.jpg';
import imge3 from './images/testimonial-3.jpg';
import imge4 from './images/testimonial-4.jpg';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



function Testimonals() {

    useEffect(() =>{
        AOS.init({
            duration:1000,
        });
},[] );

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 3 },
};

const items = [
  <div className="item  animationdelay2"       data-aos='fade-up'  data-value="1" >
  <Container fluid className='grid justify-content-center h-46  m-0  bg-stone-50 ' >
  <Row fluid className=' justify-content-center h-30  py-3 '>
    <Col sm={6} lg={3} className='w-[360]  h-[220px] lg:w-96 lg:h-48  bg-white '
      >
    <Row>
    <i className='fa fa-3x fa-quote-left m-3 text-customOrange '></i>
    </Row>
    <Row>
    <Col  className='m-2 '
        >
        Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam </Col>
    </Row>
    <Row>
      <Col xs={2}  lg={2}>
      <Image className='mx-2'  style={{ width: '50px', height: '50px'}} src={imge3} roundedCircle />
      </Col>
      <Col xs={10}  lg={10}>
      <h3 className='text-xl font-bold'>Client Name</h3>
      <p>profession</p>
      </Col>
    </Row></Col>
    </Row>
    </Container>
    </div>,
  <div className="item  animationdelay2"       data-aos='fade-up' data-value="2">
       <Container fluid className='grid justify-content-center h-46 w-100 m-0  bg-stone-50 ' >
  <Row fluid className=' justify-content-center h-30 gap-2 py-3 '>
    <Col sm={6} lg={3} className='w-96 h-48  animationdelay1  bg-customOrange'><Row>
    <i className='fa fa-3x fa-quote-left m-3 text-white '></i>
    </Row>
    <Row>
    <Col  className='m-2 text-white' 
        >
        Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam </Col>
    </Row>
    <Row className='text-white'>
      <Col xs={2} lg={2}>
      <Image className='mx-2'  style={{ width: '50px', height: '50px'}} src={imge1} roundedCircle />
      </Col>
      <Col xs={10} lg={10}>
      <h3 className='text-xl font-bold'>Client Name</h3>
      <p>profession</p>
      </Col>
    </Row></Col>
    </Row>
    </Container>
  </div>,
  <div className="item  animationdelay2"       data-aos='fade-up' data-value="3">
        <Container fluid className='grid justify-content-center h-46  m-0  bg-stone-50 ' >
  <Row fluid className=' justify-content-center h-30 gap-2 py-3 '>
    <Col sm={6} lg={3} className='w-96 h-48  animationdelay1 hover:bg-customOrange  bg-white'><Row>
    <i className='fa fa-3x fa-quote-left m-3 text-customOrange '></i>
    </Row>
   
    <Row>
    <Col  className='m-2 ' 
        >
        Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam </Col>
    </Row>
    <Row>
      <Col xs={2} lg={2}>
      <Image className='mx-2'  style={{ width: '50px', height: '50px'}} src={imge2} roundedCircle />
      </Col>
      <Col xs={10} lg={10}>
      <h3 className='text-xl font-bold'>Client Name</h3>
      <p>profession</p>
      </Col>
    </Row></Col>
    </Row>
    </Container>
  </div>,
  <div className="item  animationdelay2"       data-aos='fade-up' data-value="4">
        <Container fluid className='grid justify-content-center h-46  m-0  bg-stone-50 ' >
  <Row fluid className=' justify-content-center h-30 gap-2 py-3 '>
    <Col sm={6} lg={3} className='w-96 h-48  animationdelay1 bg-customOrange '><Row>
    <i className='fa fa-3x fa-quote-left m-3 text-white'></i>
    </Row>
    <Row>
    <Col  className='m-2 text-white' 
        >
        Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam </Col>
    </Row>
    <Row className='text-white'>
      <Col xs={2} lg={2}>
      <Image className='mx-2'  style={{ width: '50px', height: '50px'}} src={imge3} roundedCircle />
      </Col>
      <Col xs={10} lg={10}>
      <h3 className='text-xl font-bold'>Client Name</h3>
      <p>profession</p>
      </Col>
    </Row></Col>
    </Row>
    </Container>
  </div>,
  <div className="item  animationdelay2"       data-aos='fade-up' data-value="5">  <Container fluid className='grid justify-content-center h-46  m-0  bg-stone-50 ' >
  <Row fluid className=' justify-content-center h-30 gap-2 py-3 '>
    <Col sm={6} lg={3} className='w-96 h-48  animationdelay1 bg-white hover:bg-customOrange  '><Row>
    <i className='fa fa-3x fa-quote-left m-3 text-customOrange '></i>
    </Row>
    <Row>
    <Col  className='m-2 ' 
        >
        Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam </Col>
    </Row>
    <Row>
      <Col xs={2} lg={2}>
      <Image className='mx-2'  style={{ width: '50px', height: '50px'}} src={imge4} roundedCircle />
      </Col>
      <Col xs={10} lg={10}>
      <h3 className='text-xl font-bold'>Client Name</h3>
      <p>profession</p>
      </Col>
    </Row></Col>
    </Row>
    </Container></div>,
];
return (
    <>
      <div  className='bg-stone-50' >
      <p data-aos='fade-up'  className='  text-center text-customOrange animationdelay2 text-2xl font-bold' style={{ fontStyle: 'oblique', paddingTop:"50px" }}>
      <span style={{ display: 'inline-block', width: '60px', height: '1px', backgroundColor: '#FEA116', margin:'5px'}}></span>
  Testimonials 
  <span style={{ display: 'inline-block', width: '60px', height: '1px', backgroundColor: '#FEA116',marginLeft:'5px' }}></span>
</p>
<p   data-aos='fade-up' className='text-center   animationdelay1 text-5xl font-bold mb-5' >Our Clients Say!!!</p>
<div>
      
      <AliceCarousel

        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlay
        autoPlayInterval={2000}
        disableButtonsControls
    />
    </div>
      </div>
    </>
  )
}

export default Testimonals
