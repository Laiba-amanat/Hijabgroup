

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
//import TooltipBottom from '../TooltipBottom';
import { Link,Outlet } from "react-router-dom";




function NavforRes() {

  return (
   
    <>
    <div className='d-none d-lg-block '>
   {[false,].map((expand) => (
        <Navbar className=' navbg z-2' >
          <Container fluid >
            <Navbar.Brand href="#"> <i className="fas fa-utensils mb-2" style={{color:'#FEA116' ,fontSize:"40px"}}></i>
            <span to="Home" className='text-xl ml-2 font-bold'  style={{color:'#FEA116',fontSize:"40px"}}>Restoran</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 space-x-14 mb-7 m-4" style={{fontSize:"20px",marginRight:"100px"}}>
                <Link to="/"  style={{ color: 'white'}} >Home</Link>
                <Link to="/About"  style={{ color: 'white'}} >About</Link>
                <Link to="/Services"  style={{ color: 'white'}} >Services</Link>
                <Link to="/Menu"  style={{ color: 'white'  }}>Menu</Link>
                <Link to="/Booking" style={{ color: 'white'  }}>Booking</Link>
                <Link to="/ContactRestorant"  style={{ color: 'white'}} >Contact</Link>
               

               {/*} <Link to="/Menu"  style={{ color: 'white'  }}>Menu</Link>
                <Link to="/Booking" style={{ color: 'white'  }}>Booking</Link>
                <Link to="/Contact" style={{ color: 'white'  }}>Contact</Link>  */}     
              </Nav>
              <Outlet/>     
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      </div>
    </>
  );
}


export default NavforRes

