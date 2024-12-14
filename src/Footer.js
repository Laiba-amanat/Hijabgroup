import React from 'react'
import Footern from './Footern';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <div>
      <Container className='mt-5'>
       <Row className="justify-content-md-center">
        <Col md={4}>
         <Footern title="About" subtitle="Who We Are" info="Dispatch Timeline" contact="Call: +92 325 700 1111" about="Exchange Information"/>
        </Col>
        <Col md={4}>
         <Footern title="Customer Service" subtitle="Who We Are" info="Dispatch Timeline" contact="Call: +92 325 700 1111" about="Exchange Information"/>
        </Col>
        <Col md={4}>
         <Footern title="Policies" subtitle="Who We Are" info="Call: +92 325 700 1111" contact="Dispatch Timeline" about="Exchange Information"/>
        </Col>
       </Row>
     </Container>
    </div>



    //       <p className='mt-3'style={{fontSize:'25px', fontWeight:'', color:'black'}} >{props.title}</p>
    //       <p className='mt-3'style={{fontSize:'15px', fontWeight:'', color:'gray'}} >{props.subtitle}</p>
    //       <p className='mt-3'style={{fontSize:'15px', fontWeight:'', color:'gray'}} >{props.info}</p>
    //       <p className='mt-3'style={{fontSize:'15px', fontWeight:'', color:'gray'}} >{props.contact}</p>
    //       <p className='mt-3'style={{fontSize:'15px', fontWeight:'', color:'gray'}} >{props.about}</p>
  
  )
}

export default Footer
