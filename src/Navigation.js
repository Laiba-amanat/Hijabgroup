import React from 'react'
import { Link, Outlet } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import Header1 from './Header1';

function Navigation() {
  // document.getElementById('pic').style="opacity:1px"
  return (
    <>
      {/* <div className=' w-full h-[50px] bg-black text-white pt-2' style={{fontSize:'10px'}}>
        <div id="header1">FOR INTERNATIONAL WEBSITE VISIT</div>
        <a id="headre2" href=" https://baroque.pk/?country=PK">WWW.BAROQUE.COM.PK</a>

    </div> */}
  <Link to="/Page2"><div id='pic'
      className="relative w-full h-[600px] bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: 'url("https://baroque.pk/cdn/shop/files/MAin_BAnner68.jpg?v=1726313443&width=2000")' }}  // Replace with your image URL
    >
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
      <Link to="/Page2"> <button className="bg-black-500 text-black px-4 py-2 text-lg" style={{fontSize:'20px',backgroundColor:'white', border:'2px solid white'}}>SHOP NOW</button> </Link>
      </div>
      </div>
      </Link>
      <br />
      <br />
      <br />
      <Outlet />
    </>

  )
}

export default Navigation
