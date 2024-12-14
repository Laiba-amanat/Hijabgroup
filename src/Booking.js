import React, { useState } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import img9 from './images/bg-hero.jpg';
import img3 from './images/video.jpg';

function Booking() {
  const [dateTime, setDateTime] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (event) => setDateTime(event.target.value);
  const handleChange1 = (event) => setSelectedOption(event.target.value);

  return (
    <div>
      {/* Header Section with Background Image */}
      <div className="relative">
        <img   src={img9} alt="Background" style={{ height: '400px', width: '100%' }} className="object-cover" />
        <div className="absolute top-0 left-0 w-full h-full" style={{ opacity: 0.9, backgroundColor: '#0F172B' }}></div>

        {/* Text Content */}
        <div className="absolute top-0 left-0 w-full h-full d-flex flex-column align-items-center justify-content-center text-white pt-4">
          <h1 className="animate__animated animate__fadeInDown" style={{ fontSize: '60px', fontWeight: 'bold' }}>Booking</h1>
          <Breadcrumb className="my-3 animate__animated animate__backInDown">
            <Breadcrumb.Item href="#" style={{ fontSize: '20px', color: 'orange' }}>HOME</Breadcrumb.Item>
            <span style={{ fontSize: '20px', color: 'white' }} className="mx-2">/</span>
            <Breadcrumb.Item href="#" style={{ fontSize: '20px', color: 'orange' }}>PAGES</Breadcrumb.Item>
            <span style={{ fontSize: '20px', color: 'white' }} className="mx-2">/</span>
            <Breadcrumb.Item active style={{ fontSize: '20px', color: 'white' }}>Booking</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <Container className="my-5">
        <Row>
          {/* Left Column with Image and Button */}
          <Col xs={12} md={6} className="text-center mb-4">
            <div style={{ position: 'relative' }}>
              <img   src={img3} alt="Background" className="animate__animated animate__zoomIn" style={{ height: '100%', width: '100%' }} />
              <Link to="/Video">
              <button 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="animate__animated animate__zoomIn"
                style={{
                  backgroundColor: isHovered ? 'white' : 'orange',
                  position: 'absolute',
                  width: '90px',
                  height: '90px',
                  border: '10px solid orange',
                  transition: 'background-color 0.3s ease',
                  borderRadius: '50%',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <i style={{ color: 'black', fontSize: '30px' }} className="fab fa-youtube"></i>
              </button>
              </Link>
            </div>
          </Col>

          {/* Right Column with Form */}
          <Col xs={12} md={6}>
            <div className="bg-dark p-4" style={{ borderRadius: '10px', height: '100%' }}>
              <Container>
                <Row>
                  <Col>
                    <p className="animate__animated animate__pulse" style={{ fontSize: '28px', color: 'orange', fontWeight: 'bold' }}>
                      Reservation
                    </p>
                    <p className="animate__animated animate__pulse" style={{ fontSize: '34px', color: 'white' }}>Book A Table Online</p>
                  </Col>
                </Row>

                <Row className="mt-4">
                  <Col xs={12} md={6} className="mb-3">
                    <input type="text" placeholder="Your Name" className="form-control animate__animated animate__pulse" style={{ border: '2px solid orange' }} />
                  </Col>
                  <Col xs={12} md={6} className="mb-3">
                    <input type="text" placeholder="Your Email" className="form-control animate__animated animate__pulse" style={{ border: '2px solid orange' }} />
                  </Col>
                </Row>

                <Row className="mt-2">
                  <Col xs={12} md={6} className="mb-3">
                    <input type="datetime-local" value={dateTime} onChange={handleChange} className="form-control animate__animated animate__pulse" style={{ border: '2px solid orange' }} />
                  </Col>
                  <Col xs={12} md={6} className="mb-3">
                    <select
                      value={selectedOption}
                      onChange={handleChange1}
                      className="form-control animate__animated animate__pulse"
                      style={{ border: '2px solid orange' }}
                    >
                      <option value="">Select People</option>
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                    </select>
                  </Col>
                </Row>

                <Row className="mt-2">
                  <Col>
                    <textarea placeholder="Special Request" className="form-control animate__animated animate__pulse" style={{ border: '2px solid orange', resize: 'none' }} rows="3"></textarea>
                  </Col>
                </Row>

                <Row className="mt-4">
                  <Col>
                    <button className="btn btn-lg w-100 animate__animated animate__pulse" style={{ backgroundColor: 'orange', color: 'white', fontSize: '28px' }}>
                      Book Now
                    </button>
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Booking;
