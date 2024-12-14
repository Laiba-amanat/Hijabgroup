import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';


function FooterRes() {
  return (
    <div>
       <div style={{ backgroundColor: 'black', color: 'white' }}>
      <Container>
        <Row className="py-5">
          <Col xs={12} md={3} className="mb-4">
            <h5 style={{ color: 'orange' }}>Company</h5>
            <div>    <i className="fas fa-chevron-right text-white"></i>  About Us</div>
            
            <div>     <i className="fas fa-chevron-right text-white"></i> Contact Us</div>
            <div>     <i className="fas fa-chevron-right text-white"></i> Reservation</div>
            <div>     <i className="fas fa-chevron-right text-white"></i> Privacy Policy</div>
            <div>     <i className="fas fa-chevron-right text-white"></i> Terms & Conditions</div>
          </Col>
          <br />
          <Col xs={12} md={3} className="mb-4">
            <h5 style={{ color: 'orange' }}>Contact</h5>
            <p>
              <i className="fas fa-map-marker-alt mr-2"></i>123 Street, New York, USA
            </p>
            <p>
              <i className="fas fa-phone-alt mr-2"></i>+012 345 67890
            </p>
            <p>
              <i className="fas fa-envelope mr-2"></i>info@example.com
            </p>
          </Col>
          <Col xs={12} md={3} className="mb-4">
            <h5 style={{ color: 'orange' }}>Opening</h5>
            <p>Monday - Saturday: 09AM - 09PM</p>
            <p>Sunday</p>
            <p>10AM - 08PM</p>
          </Col>
          <Col xs={12} md={3} className="mb-4">
            <h5 style={{ color: 'orange' }}>Newsletter</h5>
            <p> Dolor amet sit justo amet elitr clita</p>
            <p> ipsum elitr est.</p>
            <rowspan className='border-0'>
    <div className="input-container">
   
      <input type="email" placeholder="Enter your email" className="email-input" />
      <button  className="submit-button">Sign Up</button>
    </div>
    </rowspan>
          </Col>
        </Row>
        <Row className="text-center my-4">
          <Col>
            <div className="d-flex justify-content-center">
              <a href="#" className="btn btn-light btn-circle mx-1"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="btn btn-light btn-circle mx-1"><i className="fab fa-youtube"></i></a>
              <a href="#" className="btn btn-light btn-circle mx-1"><i className="fab fa-twitter"></i></a>
              <a href="#" className="btn btn-light btn-circle mx-1"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </Col>
        </Row>
        <hr className="my-4" style={{ borderColor: 'white' }} />
        <Row className="text-center">
          <Col md={6}>
            <p>© <u>Your Site Name</u>, All Rights Reserved. Designed By <u>HTML Codex</u></p>
          </Col>
          <Col md={6}>
            <div className="d-flex justify-content-center">
              <p className="mx-2">Home</p>
              <p className="mx-2">Cookies</p>
              <p className="mx-2">Help</p>
              <p className="mx-2">FAQs</p>
            </div>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <p>Distributed By <u>ThemeWagon</u></p>
          </Col>
        </Row>
      </Container>
</div>

    </div>
  )
}

export default FooterRes
