import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { useState } from 'react';
import { Link, Outlet } from "react-router-dom";

function Header1() {
  const [showCart, setShowCart] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false); // New state for Navbar Offcanvas

  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  const handleCloseNavbar = () => setShowNavbar(false); // Close Navbar Offcanvas
  const handleShowNavbar = () => setShowNavbar(true);   // Open Navbar Offcanvas

  return (
    <div>
         {[false,].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary" style={{ position:'sticky', top:'0px', zIndex: 1000,}}>
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={handleShowNavbar} />
            <Navbar.Brand href="#"className="mx-auto text-3xl " style={{fontStyle:'oblique'}}>BAROQUE</Navbar.Brand>
            <div className='' style={{ textAlign: 'right', marginRight: '5px', marginTop: '20px'}}>
              <ul className='' style={{ display: 'flex', listStyleType: 'none', padding: 0, margin: 0, marginRight: '0px', marginTop: '0px'}}>
                <li className='d-none d-lg-block d-md-block' style={{ marginRight: '0px', marginTop:'10px' }}>
                  <select name="pakistan" id="" style={{width:'100px',border:'none',backgroundColor:'transparent'}}>
                    <option value="">Pakistan</option>
                    <option value="">India</option>
                    <option value="">America</option>
                    <option value="">Bangladesh</option>
                    <option value="">China</option>
                  </select>
                </li>
                <li style={{ marginRight: '0px' }}>
                  <img src="https://png.pngtree.com/png-vector/20220608/ourmid/pngtree-black-contact-person-icon-on-white-background-png-image_4933592.png" width="50px" height="50px" alt=""/>
                </li>
                <Button variant="" onClick={handleShowCart} style={{ backgroundColor: 'transparent' }}>
                  <li style={{ marginRight: '0px', marginTop: '0px' }}>
                    <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3215489/bag-icon-md.png" width="30px" height="30px" alt=""/>
                  </li>
                </Button>
                <Offcanvas show={showCart} onHide={handleCloseCart} placement="end">
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>CART</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <hr />
                    <br />
                    <p className='' style={{ color: 'gray' }}>You are eligible for free shipping</p>
                    <br />
                    <hr />
                    <Container className='mt-20 '>
                      <Row>
                        <Col>
                          <img src="https://baroque.pk/cdn/shop/files/126_0d9a3c70-1ded-4eaf-ae13-2eb1cc983a1d.jpg?v=1726813941&width=1200" alt="" />
                        </Col>
                        <Col>
                          <p className='mt-10' style={{ color: '' }}>UNSTITCHED</p>
                          <p className='' style={{ color: '', fontSize: '12px' }}>EMBROIDERED PRINTED LAWN UF-711</p>
                          <p className='' style={{ fontWeight: 'bold' }}>PKR 14,990.00</p>
                          <p className='' style={{ color: 'gray', fontSize: '12px' }}>UNSTITCHED/DEFAULT</p>
                          <br />
                          <p className='' style={{ }}>TYPE:</p>
                          <Button className='w-50' style={{ backgroundColor: 'transparent', border: '1px solid gray', borderRadius: '0px', color: 'black' }}>- 1 +</Button>
                        </Col>
                      </Row>
                    </Container>
                    <br />
                    <br />
                    <hr />
                    <br />
                    <Link to="/Page9">
                      <Button className='w-100 h-[40px]' style={{ backgroundColor: 'black', border: '1px solid black', borderRadius: '0px' }}>
                        CHECKOUT. PKR 9900.00
                      </Button>
                    </Link>
                  </Offcanvas.Body>
                </Offcanvas>
              </ul>
            </div>
            <Navbar.Offcanvas
              show={showNavbar} // Use new state to control Navbar offcanvas
              onHide={handleCloseNavbar} // Close Navbar offcanvas on close
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  BAROQUE
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/Page1">CHENTTELE</Link>
                  <hr />
                  <br />
                  <Link to="/Page2">UNSTITCHED</Link>
                  <hr />
                  <br />
                  <Link to="/Page3">SHAWLS</Link>
                  <hr />
                  <br />
                  <Link to="/Page4">READY TO WEAR</Link>
                  <hr />
                  <br />
                  <Link to="/Page5">SPECIAL PRICES</Link>
                  <hr />
                  <br />
                  <Link to="/Page6">BOTTOMS</Link>
                  <hr />
                  <br />
                  <Link to="/Page7">DUPATTAS</Link>
                  <br />
                  <NavDropdown title="Pakistan" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Outlet />
    </div>
  )
}

export default Header1;
