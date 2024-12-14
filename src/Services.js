import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import img1 from './images/bg-hero.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropsServices from './PropsServices';

function Services() {
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
                        Services
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
                            SERVICE
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
            <div className="mx-3 mt-20 animate__animated animate__fadeInUp"
                style={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', }}>
                <div style={{ marginRight: '10px', flexGrow: '0.04', width: '25px', height: '2px', backgroundColor: 'orange' }} />
                <h6 style={{ fontSize: '28px', color: 'orange', margin: '0 10px', whiteSpace: 'nowrap', fontStyle: 'oblique' }}>our services</h6>
                <div style={{ marginLeft: '10px', flexGrow: '0.04', height: '2px', width: '25px', backgroundColor: 'orange' }} />
            </div>
            <h1 className='mt-2 animate__animated animate__fadeInUp' style={{ fontSize: '40px', fontWeight: 'bold', fontStyle: 'oblique' }}>Explore Our Services</h1>
            <Container className='mt-5'>
                <Row className="justify-content-md-center">
                    <Col md lg xl="3">
                    <PropsServices iconurl ="fa fa-3x fa-user-tie" title="Master Chefs"/>
                    </Col>
                    <Col md lg xl="3">
                    <PropsServices iconurl ="fa fa-3x fa-utensils" title="Quality Food"/>
                    </Col>
                    <Col md lg xl="3">
                    <PropsServices iconurl ="fa fa-3x fa-cart-plus" title="Online Order"/>
                    </Col>
                    <Col md lg xl="3">
                    <PropsServices iconurl ="fa fa-3x fa-headset" title="24/7 Service"/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md lg xl="3">
                    <PropsServices iconurl ="fa fa-3x fa-user-tie" title="Master Chefs"/>
                    </Col>
                    <Col md lg xl="3">
                    <PropsServices iconurl ="fa fa-3x fa-utensils" title="Quality Food"/>
                    </Col>
                    <Col md lg xl="3">
                    <PropsServices iconurl ="fa fa-3x fa-cart-plus" title="Online Order"/>
                    </Col>
                    <Col md lg xl="3">
                    <PropsServices iconurl ="fa fa-3x fa-headset" title="24/7 Service"/>
                    </Col>
                </Row>
            </Container>

        </div>

    )
}

export default Services
