import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Video() {
  return (
    <div style={{ backgroundColor: 'black', border: '10px solid orange', margin: '0 auto', padding: '20px', maxWidth: '100%' }}>
      <Container>
        <div className="text-center mb-4" style={{ backgroundColor: 'black', borderBottom: '10px solid orange' }}>
          <p className="animate__animated animate__zoomIn mt-5" style={{ fontSize: '34px', color: 'orange', fontWeight: 'bold', margin: '0' }}>
            Restoran Video
          </p>
        </div>
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', border: '10px solid orange' }}>
          <Container>
            <Row className="mb-4">
              <Col xs={12} md={6} className="mb-3">
                <video width="100%"  src={`${process.env.PUBLIC_URL}/v1.mp4`} className="animate__animated animate__zoomIn" controls muted autoPlay loop type="video/mp4" />
              </Col>
              <Col xs={12} md={6} className="mb-3">
                <video width="100%" src={`${process.env.PUBLIC_URL}/v2.mp4`}  style={{ animationDelay: '2s' }} className="animate__animated animate__flash" controls muted autoPlay loop type="video/mp4" />
              </Col>
            </Row>
            <Row className="mb-4">
              <Col>
                <video width="100%" src={`${process.env.PUBLIC_URL}/v3.mp4`}  style={{ animationDelay: '2s' }} className="animate__animated animate__flash" controls muted autoPlay loop type="video/mp4" />
              </Col>
            </Row>
            <Row className="mb-4">
              <Col xs={12} md={6} className="mb-3">
                <video width="100%" src={`${process.env.PUBLIC_URL}/v4.mp4`}  style={{ animationDelay: '4s' }} className="animate__bounceOut" controls muted autoPlay loop type="video/mp4" />
              </Col>
              <Col xs={12} md={6} className="mb-3">
                <video width="100%" src={`${process.env.PUBLIC_URL}/v5.mp4`}  style={{ animationDelay: '5.3s' }} className="animate__animated animate__flash" controls muted autoPlay loop type="video/mp4" />
              </Col>
            </Row>
            <Row className="mb-4">
              <Col xs={12} md={6} className="mb-3">
                <video width="100%" src={`${process.env.PUBLIC_URL}/v6.mp4`}  style={{ animationDelay: '5.5s' }} className="animate__animated animate__flash" controls muted autoPlay loop type="video/mp4" />
              </Col>
              <Col xs={12} md={6} className="mb-3">
                <video width="100%" src={`${process.env.PUBLIC_URL}/v7.mp4`}  style={{ animationDelay: '6s' }} className="animate__animated animate__flash" controls muted autoPlay loop type="video/mp4" />
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </div>
  );
}

export default Video;
