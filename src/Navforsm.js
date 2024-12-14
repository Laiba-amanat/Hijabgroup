import React from 'react'
//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
//import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
//import BgforRes from './Home/BgforRes';
import { Link,Outlet } from "react-router-dom";

function Navforsm() {
  return (
    <div className='d-block d-lg-none bg-success'>
    {[false, ].map((expand) => (
        <Navbar data-bs-theme="light" key={expand} expand={expand} className="bg-gray-950 navbar-light" sticky='top' style={{height:'80px'}}>
          <Container fluid>
          <Navbar.Brand href="#"> <i className="fas fa-utensils " style={{color:'#FEA116' ,fontSize:"40px"}}></i>
            <span to="Home" className='text-xl ml-2 font-bold'  style={{color:'#FEA116',fontSize:"40px"}}>Restoran</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='bg-white' />
            <Navbar.Offcanvas
            className="bg-gray-950 opacity-1  "
            style={{height:"500px" ,width:'480px' ,marginTop:"80px" }}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
                <p style={{width:"100%", height:"1px", backgroundColor:'white'}}></p>
              <Offcanvas.Header closeButton>
                <hr className='bg-white'/>
              </Offcanvas.Header>
              <Offcanvas.Body className='text-white'>
                <Nav className="justify-content-end flex-grow-1  space-x-7 mb-5 text-white" style={{color:'white',fontSize:"20px"}}>
                <Link to="/"  style={{ color: 'white'}} >Home</Link>
                <Link to="/About"  style={{ color: 'white'}} >About</Link>
                <Link to="/Services"  style={{ color: 'white'}} >Services</Link>
                {/* <Link to="/Menu"  style={{ color: 'white'  }}>Menu</Link> */}
                <Link to="/Booking" style={{ color: 'white'  }}>Booking</Link>
                <Link to="/ContactRestorant"  style={{ color: 'white'}} >Contact</Link> 
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      
      ))}
      
    </div>
  )
}

export default Navforsm
