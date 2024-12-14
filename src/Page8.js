import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { Button } from 'react-bootstrap';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import { FaTags, FaBox, FaPlane, FaUndo, FaLeaf } from 'react-icons/fa';
import { Link, Outlet } from "react-router-dom";
function Page8() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Container className='w-full '>

                {/* Columns are always 50% wide, on mobile and desktop */}
                <Row className="justify-content-md-center">
                    <Col md="7" className='' style={{}}>
                        <Carousel className="block sm:hidden"> {/* Shows only on small screens */}
                            <Carousel.Item>
                                <img className="d-block w-100" src="https://baroque.pk/cdn/shop/files/126_0d9a3c70-1ded-4eaf-ae13-2eb1cc983a1d.jpg?v=1726813941&width=1200" alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src="https://baroque.pk/cdn/shop/files/129_c993a546-e2f8-4fcf-8d32-543dd5e49c7d.jpg?v=1726813941&width=1200" alt="Second slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src="https://baroque.pk/cdn/shop/files/127_224f36ee-b14e-47b0-af7e-e33a7494c0ab.jpg?v=1726813941&width=1200" alt="Third slide" />
                            </Carousel.Item>
                            {/* Add other images similarly */}
                        </Carousel>
                        <Container className='hidden sm:block'>
                            <Row className="justify-content-md-center">
                                <Col xs="12" md lg xl="12" className="mt-10">
                                    <img src="https://baroque.pk/cdn/shop/files/126_0d9a3c70-1ded-4eaf-ae13-2eb1cc983a1d.jpg?v=1726813941&width=1200" alt="" />
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col md lg xl="12" className="mt-10">
                                    <img src="https://baroque.pk/cdn/shop/files/129_c993a546-e2f8-4fcf-8d32-543dd5e49c7d.jpg?v=1726813941&width=1200" alt="" />
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col md lg xl="12" className="mt-10">
                                    <img src="https://baroque.pk/cdn/shop/files/127_224f36ee-b14e-47b0-af7e-e33a7494c0ab.jpg?v=1726813941&width=1200" alt="" />
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col md lg xl="12" className="mt-10">
                                    <img src="https://baroque.pk/cdn/shop/files/125_339099ae-8c70-46f8-9089-6bdba8ddea36.jpg?v=1726813941&width=1200" alt="" />
                                </Col></Row>
                            <Row className="justify-content-md-center">
                                <Col md lg xl="12" className="mt-10">
                                    <img src="https://baroque.pk/cdn/shop/files/130_78dff0d8-b178-4b78-ae35-ef72e9b83aec.jpg?v=1726813942&width=1200" alt="" />
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col md lg xl="12" className="mt-10">
                                    <img src="https://baroque.pk/cdn/shop/files/122_dee3a97c-c27d-4cf4-aebb-0064869fcb69.jpg?v=1726813941&width=1200" alt="" />
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col md lg xl="12" className="mt-10">
                                    <img src="https://baroque.pk/cdn/shop/files/124_b6b139a9-5a25-4e7f-8c9c-d799c755ee9d.jpg?v=1726813941&width=1200" alt="" />
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col md lg xl="12" className="mt-10">
                                    <img src="https://baroque.pk/cdn/shop/files/123_1ac558ff-ecd3-4dd8-a3d0-060359c2cc4e.jpg?v=1726813941&width=1200" alt="" />
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col md="4" style={{ position: 'sticky', top: '0px', height: '950px', textAlign: 'left' }}>
                        <p className='mt-10' style={{ color: 'gray' }}>EMBROIDERED PRINTED LAWN UF-711</p>
                        <br />
                        <p className='' style={{ fontWeight: 'bold' }}>PKR 14,990.00</p>
                        <br />
                        <p className='' style={{ color: 'gray' }}>SKU: BQU-UF-D711-01</p>
                        <br />
                        <p className='' style={{ color: 'gray' }}>3 PIECE</p>
                        <hr />
                        <br />
                        <p className='' style={{}}>TYPE:</p>
                        <br />
                        <div class="flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0">
                            <Button className='' style={{ backgroundColor: 'transparent', border: '1px solid black', borderRadius: '0px', color: 'black' }}>UNSTITCHED</Button>
                            <Button className='' style={{ backgroundColor: 'transparent', border: '1px solid black', borderRadius: '0px', color: 'black' }}>STITCHED</Button>
                        </div>
                        <br />
                        <p className='' style={{}}>SIZE:</p> <br />
                        <Button className='' style={{ backgroundColor: 'transparent', border: '1px solid black', borderRadius: '0px', color: 'black' }}>DEFUALT</Button>
                        <br />
                        <br />
                        <Button className='w-50' style={{ backgroundColor: 'transparent', border: '1px solid gray', borderRadius: '0px', color: 'black' }}>-  1  +</Button>
                        <br />
                        <br />
                        <Button variant="" onClick={handleShow} className='w-100 h-[50px]' style={{ backgroundColor: 'black', color: 'white', borderRadius: '0px' }}>
                            ADD TO CART
                        </Button>
                        <br />
                        <br />
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <FaTags className="me-2" /> Description
                                </Accordion.Header>
                                <Accordion.Body>
                                    Here is the product description.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    <FaBox className="me-2" /> Product Details
                                </Accordion.Header>
                                <Accordion.Body>
                                    Product details go here.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    <FaPlane className="me-2" /> Delivery
                                </Accordion.Header>
                                <Accordion.Body>
                                    Delivery information goes here.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                    <FaUndo className="me-2" /> Returns and Exchange
                                </Accordion.Header>
                                <Accordion.Body>
                                    Returns and exchange policy.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="4">
                                <Accordion.Header>
                                    <FaLeaf className="me-2" /> Care Instructions
                                </Accordion.Header>
                                <Accordion.Body>
                                    Care instructions go here.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Offcanvas show={show} onHide={handleClose} placement="end">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>CART</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <hr />
                                <br />
                                <p className='' style={{ color: 'gray' }}>You are aligible for free shipping</p>
                                <br />
                                <hr />
                                <Container className='mt-20 '>
                                    <Row>
                                        <Col><img src="https://baroque.pk/cdn/shop/files/126_0d9a3c70-1ded-4eaf-ae13-2eb1cc983a1d.jpg?v=1726813941&width=1200" alt="" /></Col>
                                        <Col> <p className='mt-10' style={{ color: '' }}>UNSTITCHED</p>

                                            <p className='' style={{ color: '', fontSize: '12px' }}>EMBROIDERED PRINTED LAWN UF-711</p>

                                            <p className='' style={{ fontWeight: 'bold' }}>PKR 14,990.00</p>
                                            <p className='' style={{ color: 'gray', fontSize: '12px' }}>UNSTITCHED/DEFUALT</p>
                                            <br />
                                            <p className='' style={{}}>TYPE:</p>

                                            <Button className='w-50' style={{ backgroundColor: 'transparent', border: '1px solid gray', borderRadius: '0px', color: 'black' }}>-  1  +</Button>

                                        </Col>
                                    </Row>
                                </Container>

                                <br />
                                <br />
                                <hr />
                                <br />
                                <Link to="/Page9"> <Button className='w-100 h-[40px]' style={{ backgroundColor: 'black', border: '1px solid black', borderRadius: '0px' }}>CHECKOUT.PKR 9900.00</Button></Link>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </Col>
                </Row>
            </Container>
            <Outlet />
        </div>
    )
}

export default Page8
