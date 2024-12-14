import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import img1 from './images/bg-hero.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


function ContactRastroant() {
    return (
        <div>
            <div className="relative">
                {/* Background Image */}
                <img
                    src={img1}
                    alt="Background"
                    style={{ height: '400px', width: '100%' }}
                    className="object-cover"
                />

                {/* Overlay with black background */}
                <div
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ opacity: 0.9, backgroundColor: '#0F172B' }}
                ></div>

                {/* Text Content */}
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white pt-20">
                    <h1 class="animate__animated animate__fadeInDown" style={{ fontSize: '60px', color: 'white', fontWeight: 'bold' }}>
                        Contact Us
                    </h1>

                    {/* Breadcrumb */}
                    <Breadcrumb className="my-3">
                        <Breadcrumb.Item
                            style={{ textDecoration: 'none', fontSize: '20px', color: '#FEA116' }} // Orange color
                            href="#"
                        >
                            HOME
                        </Breadcrumb.Item>
                        <span style={{ textDecoration: 'none', fontSize: '20px', color: 'white' }} className="mx-2">/</span>
                        <Breadcrumb.Item
                            style={{ textDecoration: 'none', fontSize: '20px', color: '#FEA116' }} // Orange color
                            href="#"
                        >
                            PAGES
                        </Breadcrumb.Item>
                        <span style={{ textDecoration: 'none', fontSize: '20px', color: 'white' }} className="mx-2">/</span>
                        <Breadcrumb.Item style={{ textDecoration: 'none', fontSize: '20px', color: 'white' }} active>
                            CONTACT
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
            <div className="mx-3 mt-20 animate__animated animate__fadeInUp"  
                style={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', }}>
                <div style={{ marginRight: '10px', flexGrow: '0.04', width: '25px', height: '2px', backgroundColor: 'orange' }} />
                <h6 style={{ fontSize: '28px', color: 'orange', margin: '0 10px', whiteSpace: 'nowrap', fontStyle: 'oblique' }}>contact us</h6>
                <div style={{ marginLeft: '10px', flexGrow: '0.04', height: '2px', width: '25px', backgroundColor: 'orange' }} />
            </div>
            <h1 className='mt-2 animate__animated animate__fadeInUp' style={{ fontSize: '40px', fontWeight: 'bold', fontStyle: 'oblique' }}>Contact For Any Query</h1>
            <Container className='mt-5 animate__animated animate__fadeInUp'>
                <Row className="justify-content-md-center m-5">
                    <Col md lg xl="4">
                        <div className="mx-3 mt-3 "
                            style={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                            {/* <div style={{ marginRight: '10px', flexGrow: '0.04', width: '25px', height: '2px', backgroundColor: 'orange' }} /> */}
                            <h5 style={{ color: 'orange', margin: '0 10px', whiteSpace: 'nowrap', fontSize: '1.29rem', fontStyle: 'oblique' }}>Booking</h5>
                            <div style={{ marginLeft: '10px', flexGrow: '0.04', height: '2px', width: '45px', backgroundColor: 'orange' }} />
                        </div>
                        <p className='text-start pl-5 mt-2' style={{ color: 'gray', fontSize: '20px' }}><i style={{ color: 'orange' }} class='fa fa-envelope-open'></i>tech@example.com</p>
                    </Col>
                    <Col md lg xl="4">
                        <div className="mx-3 mt-3"
                            style={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                            {/* <div style={{ marginRight: '10px', flexGrow: '0.04', width: '25px', height: '2px', backgroundColor: 'orange' }} /> */}
                            <h5 style={{ color: 'orange', margin: '0 10px', whiteSpace: 'nowrap', fontSize: '1.29rem', fontStyle: 'oblique' }}>Genral</h5>
                            <div style={{ marginLeft: '10px', flexGrow: '0.04', height: '2px', width: '45px', backgroundColor: 'orange' }} />
                        </div>
                        <p className='text-start pl-5 mt-2' style={{ color: 'gray', fontSize: '20px' }}><i style={{ color: 'orange' }} class='fa fa-envelope-open'></i>tech@example.com</p>
                    </Col>
                    <Col md lg xl="4">
                        <div className="mx-3 mt-3"
                            style={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                            {/* <div style={{ marginRight: '10px', flexGrow: '0.04', width: '25px', height: '2px', backgroundColor: 'orange' }} /> */}
                            <h5 style={{ color: 'orange', margin: '0 10px', whiteSpace: 'nowrap', fontSize: '1.29rem', fontStyle: 'oblique' }}>Technical</h5>
                            <div style={{ marginLeft: '10px', flexGrow: '0.04', height: '2px', width: '45px', backgroundColor: 'orange' }} />
                        </div>
                        <p className='text-start pl-5 mt-2' style={{ color: 'gray', fontSize: '20px' }}><i style={{ color: 'orange' }} class='fa fa-envelope-open'></i>tech@example.com</p>
                    </Col>
                </Row>
            </Container>

            <Container className='mt-5'>
                <Row className="justify-content-md-center g-4">
                    <Col sm={12} md={6}>
                        <iframe
                            title="Google Maps location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.3443424924767!2d74.26298247431433!3d31.733800736568664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391921d4cf0afc2b%3A0xb74bd88d44d05562!2sPIND%20Restaurant!5e0!3m2!1sen!2s!4v1730461876717!5m2!1sen!2s"
                            width="100%"
                            height="400"
                            style={{ border: '0px' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </Col>
                    <Col sm={12} md={6} className='mb-5'>
                        <Form>
                            <Form.Group className="d-flex flex-wrap align-items-center mb-3" style={{ gap: '5px' }}>
                                <Form.Control
                                    style={{ flex: '1', margin: '5px 0', borderRadius: '0', border: '1px solid black', height: '60px' }}
                                    type="text"
                                    placeholder="Your Name"
                                />
                                <Form.Control
                                    style={{ flex: '1', margin: '5px 0', borderRadius: '0', border: '1px solid black', height: '60px' }}
                                    type="email"
                                    placeholder="Email"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    style={{ borderRadius: '0', border: '1px solid black', color: 'black', height: '60px' }}
                                    type="text"
                                    placeholder="Subject"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    style={{ borderRadius: '0', border: '1px solid black', color: 'black', height: '150px' }}
                                    as="textarea"
                                    rows={3}
                                    placeholder="Message"
                                />
                            </Form.Group>
                            <button className="btn btn-warning w-100" style={{ fontSize: '20px', height: '60px', color: 'white' }}>
                                Read More
                            </button>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default ContactRastroant





