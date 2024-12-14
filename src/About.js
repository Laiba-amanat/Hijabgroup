import React from 'react';
import img1 from './images/bg-hero.jpg';
import img2 from './images/about-1.jpg';
import img3 from './images/about-2.jpg';
import img4 from './images/about-3.jpg';
import img5 from './images/about-4.jpg';
import imge1 from './images/team-1.jpg';
import imge2 from './images/team-2.jpg';
import imge3 from './images/team-3.jpg';
import imge4 from './images/team-4.jpg';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
//import NavforRes from './NavforRes';


function About() {
  const [count, setCount] = useState(1); // Initialize state to start from 1

  useEffect(() => {
    // Check if the count is less than or equal to 15
    if (count < 15) {
      const timer = setInterval(() => {
        setCount(prevCount => prevCount + 1); // Increment count by 1
      }, 200); // Set interval to 100 milliseconds (0.1 seconds)

      // Clear the interval when count reaches 15 or the component unmounts
      return () => clearInterval(timer);
    }
  }, [count]);
  const [countr, setCountr] = useState(1); // Initialize state to start from 1

  useEffect(() => {
    // Check if the count is less than or equal to 50
    if (countr < 50) {
      const timer1 = setInterval(() => {
        setCountr(prevCount => prevCount + 1); // Increment count by 1
      }, 200); // Set interval to 100 milliseconds (0.1 seconds)

      // Clear the interval when count reaches 15 or the component unmounts
      return () => clearInterval(timer1);
    }
  }, [countr]);
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseEnter() {
    setIsHovering(true);
  }

  function handleMouseLeave() {
    setIsHovering(false);
  }
  const [isHovering1, setIsHovering1] = useState(false);

  function handleMouseEnter1() {
    setIsHovering1(true);
  }

  function handleMouseLeave1() {
    setIsHovering1(false);
  }
  const [isHovering2, setIsHovering2] = useState(false);

  function handleMouseEnter2() {
    setIsHovering2(true);
  }

  function handleMouseLeave2() {
    setIsHovering2(false);
  }
  const [isHovering3, setIsHovering3] = useState(false);

  function handleMouseEnter3() {
    setIsHovering3(true);
  }

  function handleMouseLeave3() {
    setIsHovering3(false);
  }
  
  return (
    <div >
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
           {/* <div  className="absolute top-0 left-0">
            <NavforRes />
           </div> */}
        {/* Text Content */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white pt-20">
          <h1 class="animate__animated animate__fadeInDown" style={{ fontSize: '60px', color: 'white', fontWeight: 'bold' }}>
            About Us
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
              ABOUT
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <div>

        <Container fluid className='mt-20 xxl mb-40px'>
          <Row className="justify-content-md-center">
            <Col md lg xl xll="6" className="" style={{ height: '700px', width: '600px' }}>
              <Row className="justify-content-md-center">
                <Col sm md lg xl="6" className="h-[270px] mr-0 ml-0 w-64" style={{ borderRadius: '10px' }}>
                  <img
                    src={img2}
                    alt="Background"
                    style={{ animationDelay: '0.8s', animationName: 'zoomIn' }}
                    className="object-cover h-[270px] w-64 img-fluid  animate__animated animate__zoomIn"
                  />
                </Col>
                <Col sm md lg xl="6" className="h-52 w-48 ml-0 mt-16" style={{}}>
                  <img
                    src={img3}
                    alt="Background"
                    style={{ animationDelay: '1s', animationName: 'zoomIn' }}
                    className="object-cover h-52 w-48 img-fluid  animate__animated animate__zoomIn"
                  />
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col sm md lg xl="6" className="h-52 w-48   mt-4" style={{}}>
                  <img
                    src={img4}
                    alt="Background"
                    style={{ animationDelay: '1.3s', animationName: 'zoomIn' }}
                    className="object-cover h-52 w-48 img-fluid  animate__animated animate__zoomIn"
                  />
                </Col>
                <Col sm md lg xl="6" className="h-[270px] w-64 ml-2 mt-4 " style={{}}>
                  <img
                    src={img5}
                    alt="Background"
                    style={{ animationDelay: '1.7s', animationName: 'zoomIn' }}
                    className="object-cover h-[270px] w-64 img-fluid  animate__animated animate__zoomIn"
                  />
                </Col>
              </Row>
            </Col>
            <Col sm md lg xl xll="6" className="" style={{ height: '700px', width: '600px' }}>
              <div className="mx-3 mt-3"
                style={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                {/* <div style={{ marginRight: '10px', flexGrow: '0.04', width: '25px', height: '2px', backgroundColor: 'orange' }} /> */}
                <h5 style={{ color: 'orange', margin: '0 10px', whiteSpace: 'nowrap', fontSize: '1.59rem', fontStyle: 'oblique' }}>about us</h5>
                <div style={{ marginLeft: '10px', flexGrow: '0.04', height: '2px', width: '45px', backgroundColor: 'orange' }} />
              </div>
              <h1 className='text-start' style={{ fontSize: '40px', fontWeight: 'bold', fontStyle: 'oblique' }}>Welcom to <i style={{ color: 'orange' }} class='fas fa-utensils'></i> Restoran</h1>
              <div className='mt-5 text-start' style={{ color: 'gray', fontSize: '17px' }}>
                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
                  <br />
                  amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit
                </p>
              </div>
              <div className='mt-5 text-start' style={{ color: 'gray', fontSize: '17px' }}>
                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
                  <br />amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita
                  <br />
                  amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit
                </p>
              </div>
              <Row className="justify-content-md-center">
                <Col sm md lg xl xll="6" className="">
                  <div className="mx-3 mt-5"
                    style={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    <div style={{ marginRight: '10px', flexGrow: '0.01', width: '5px', height: '55px', backgroundColor: 'orange' }} />
                    <h5 style={{ color: 'orange', margin: '0 10px', whiteSpace: 'nowrap', fontSize: '50px', fontStyle: '', fontWeight: 'bolder' }}> {count}</h5>
                    <p className='text-start' style={{ color: 'gray', margin: '0 10px', whiteSpace: 'nowrap', fontSize: '17px', fontStyle: '', fontWeight: '' }}>Years of
                      <br /><span style={{ color: 'black', fontWeight: 'bold', fontSize: '22px' }}>EXPERIENCE</span>
                    </p>
                  </div>
                </Col>

                <Col sm md lg xl xll="6" className="">
                  <div className="mx-3 mt-5"
                    style={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    <div style={{ marginRight: '10px', flexGrow: '0.01', width: '5px', height: '55px', backgroundColor: 'orange' }} />
                    <h5 style={{ color: 'orange', margin: '0 10px', whiteSpace: 'nowrap', fontSize: '50px', fontStyle: '', fontWeight: 'bolder' }}>{countr}</h5>
                    <p className='text-start' style={{ color: 'gray', margin: '0 10px', whiteSpace: 'nowrap', fontSize: '17px', fontStyle: '', fontWeight: '' }}>popular
                      <br /><span style={{ color: 'black', fontWeight: 'bold', fontSize: '22px' }}>MASTER CHEFS</span>
                    </p>
                  </div>
                </Col>
              </Row>
              <div className="flex justify-start mt-5">
                <button className="text-white px-4 py-2 text-lg  " style={{ fontSize: '20px', backgroundColor: 'orange', border: '1px solid white', height: '60px', width: '200px', color: 'white', borderRadius: '5px' }}>READ MORE</button>
              </div>
              <br />
            </Col>
          </Row>
        </Container>
        <div>

          <Container className="mt-20 xxl w-100% mb-20">
            <div
              className="mx-3 mt-20"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center', // Center elements horizontally
                textAlign: 'center'

              }}
            >
              <div className='' style={{ marginRight: '10px', flexGrow: '0.04', width: '25px', height: '2px', backgroundColor: 'orange' }} />
              <h5 style={{ color: 'orange', margin: '0 10px', whiteSpace: 'nowrap', fontSize: '1.59rem', fontStyle: 'oblique' }}>Team members</h5>
              <div style={{ marginLeft: '10px', flexGrow: '0.04', height: '2px', width: '45px', backgroundColor: 'orange' }} />
            </div>
            <h1 className='' style={{ fontSize: '40px', fontWeight: 'bold', fontStyle: 'oblique' }}>Our Master Chefs</h1>
            <Row className="justify-content-md-center g-3">
            <Col 
                md
                lg
                xl
                xxl="3"
                className="d-flex justify-content-center mt-20 animate__animated animate__fadeInUp"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{animationDelay:'2.3s',animationName:'fadeInUp'}}
              >
                <div
                  style={{
                    width: '280px',
                    height: '350px',
                    backgroundColor: '#F7FAFC',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',

                  }}
                >
                  <Image className={`transition-transform duration-500 mt-6 ${isHovering ? 'transform scale-110' : ''} `}  style={{ width: '220px', height: '220px', marginTop: '10px' }} src={imge1} roundedCircle />
                  <p style={{ marginTop: '25px', fontSize: '25px', fontWeight: 'bold', fontStyle: 'oblique' }}>Full Name</p>
                  <p style={{ fontSize: '20px', fontStyle: 'oblique', color: 'gray' }}>Designation</p>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      gap: '10px',
                      position: 'absolute',
                      bottom: '-60px', // Start hidden below the container
                      left: '50%',
                      transform: 'translateX(-50%)', // Center it
                      backgroundColor: '#F7FAFC',
                      width: '280px',
                      height: '60px',
                      opacity: isHovering ? 1 : 0, // Control opacity
                      visibility: isHovering ? 'visible' : 'hidden', // Control visibility
                      transition: 'opacity 0.3s ease, visibility 0s linear 0.3s', // Smooth transition
                      pointerEvents: isHovering ? 'auto' : 'none', // Allow clicks only when visible
                      zIndex: 1, // Ensure buttons are above other elements
                    }}
                  >
                    <button style={{ backgroundColor: 'orange', width: '50px', height: '50px', borderTopLeftRadius: '50%', borderTopRightRadius: '50%' }}><i style={{ color: 'white', fontSize: '20px' }} class='fab fa-facebook-f'></i> </button>
                    <button style={{ backgroundColor: 'orange', width: '50px', height: '50px', borderTopLeftRadius: '50%', borderTopRightRadius: '50%' }}><i style={{ color: 'white', fontSize: '20px' }} class='fab fa-instagram'></i></button>
                    <button style={{ backgroundColor: 'orange', width: '50px', height: '50px', borderTopLeftRadius: '50%', borderTopRightRadius: '50%' }}><i style={{ color: 'white', fontSize: '20px' }} class='fab fa-twitter'></i></button>
                  </div>
                </div>
              </Col>
              <Col
                md
                lg
                xl
                xxl="3"
                className="d-flex justify-content-center mt-20 animate__animated animate__fadeInUp"
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
                style={{animationDelay:'2.5s',animationName:'fadeInUp'}}
              >
                <div
                  style={{
                    width: '280px',
                    height: '350px',
                    backgroundColor: '#F7FAFC',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',

                  }}
                >
                  <Image className={`transition-transform duration-500 mt-6 ${isHovering1 ? 'transform scale-110' : ''} `}  style={{ width: '220px', height: '220px', marginTop: '10px' }} src={imge2} roundedCircle />
                  <p style={{ marginTop: '25px', fontSize: '25px', fontWeight: 'bold', fontStyle: 'oblique' }}>Full Name</p>
                  <p style={{ fontSize: '20px', fontStyle: 'oblique', color: 'gray' }}>Designation</p>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      gap: '10px',
                      position: 'absolute',
                      bottom: '-60px', // Start hidden below the container
                      left: '50%',
                      transform: 'translateX(-50%)', // Center it
                      backgroundColor: '#F1F8FF',
                      width: '280px',
                      height: '60px',
                      opacity: isHovering1 ? 1 : 0, // Control opacity
                      visibility: isHovering1 ? 'visible' : 'hidden', // Control visibility
                      transition: 'opacity 1.2s ease, visibility 0s linear 0.3s', // Smooth transition
                      pointerEvents: isHovering1 ? 'auto' : 'none', // Allow clicks only when visible
                      zIndex: 1, // Ensure buttons are above other elements
                    }}
                  >
                    <button style={{ backgroundColor: 'orange', width: '50px', height: '50px', borderTopLeftRadius: '50%', borderTopRightRadius: '50%' }}><i style={{ color: 'white', fontSize: '20px' }} class='fab fa-facebook-f'></i> </button>
                    <button style={{ backgroundColor: 'orange', width: '50px', height: '50px', borderTopLeftRadius: '50%', borderTopRightRadius: '50%' }}><i style={{ color: 'white', fontSize: '20px' }} class='fab fa-instagram'></i></button>
                    <button style={{ backgroundColor: 'orange', width: '50px', height: '50px', borderTopLeftRadius: '50%', borderTopRightRadius: '50%' }}><i style={{ color: 'white', fontSize: '20px' }} class='fab fa-twitter'></i></button>
                  </div>
                </div>
              </Col>
              <Col
                md
                lg
                xl
                xxl="3"
                className="d-flex justify-content-center mt-20 animate__animated animate__fadeInUp"
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
                style={{animationDelay:'2.7s',animationName:'fadeInUp'}}
              >
                <div
                  style={{
                    width: '280px',
                    height: '350px',
                    backgroundColor: '#F7FAFC',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',

                  }}
                >
                  <Image className={`transition-transform duration-500 mt-6 ${isHovering2 ? 'transform scale-110' : ''} `}  style={{ width: '220px', height: '220px', marginTop: '10px' }} src={imge3} roundedCircle />
                  <p style={{ marginTop: '25px', fontSize: '25px', fontWeight: 'bold', fontStyle: 'oblique' }}>Full Name</p>
                  <p style={{ fontSize: '20px', fontStyle: 'oblique', color: 'gray' }}>Designation</p>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      gap: '10px',
                      position: 'absolute',
                      bottom: '-60px', // Start hidden below the container
                      left: '50%',
                      transform: 'translateX(-50%)', // Center it
                      backgroundColor: '#F7FAFC',
                      width: '280px',
                      height: '60px',
                      opacity: isHovering2 ? 1 : 0, // Control opacity
                      visibility: isHovering2 ? 'visible' : 'hidden', // Control visibility
                      transition: 'opacity 0.3s ease, visibility 0s linear 0.3s', // Smooth transition
                      pointerEvents: isHovering2 ? 'auto' : 'none', // Allow clicks only when visible
                      zIndex: 1, // Ensure buttons are above other elements
                    }}
                  >
                    <button style={{ backgroundColor: 'orange', width: '50px', height: '50px', borderTopLeftRadius: '50%', borderTopRightRadius: '50%' }}><i style={{ color: 'white', fontSize: '20px' }} class='fab fa-facebook-f'></i> </button>
                    <button style={{ backgroundColor: 'orange', width: '50px', height: '50px', borderTopLeftRadius: '50%', borderTopRightRadius: '50%' }}><i style={{ color: 'white', fontSize: '20px' }} class='fab fa-instagram'></i></button>
                    <button style={{ backgroundColor: 'orange', width: '50px', height: '50px', borderTopLeftRadius: '50%', borderTopRightRadius: '50%' }}><i style={{ color: 'white', fontSize: '20px' }} class='fab fa-twitter'></i></button>
                  </div>
                </div>
              </Col>

              <Col
                md
                lg
                xl
                xxl="3"
                className="d-flex justify-content-center mt-20 animate__animated animate__fadeInUp fd"
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
                style={{animationDelay:'2.9s',animationName:'fadeInUp'}}
              >
                <div
                  style={{
                    width: '280px',
                    height: '350px',
                    backgroundColor: '#F7FAFC',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',

                  }}
                >
                  <Image className={`transition-transform duration-500 mt-6 ${isHovering3 ? 'transform scale-110' : ''} `}  style={{ width: '220px', height: '220px', marginTop: '10px' }} src={imge4} roundedCircle />
                  <p style={{ marginTop: '25px', fontSize: '25px', fontWeight: 'bold', fontStyle: 'oblique' }}>Full Name</p>
                  <p style={{ fontSize: '20px', fontStyle: 'oblique', color: 'gray' }}>Designation</p>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      gap: '10px',
                      position: 'absolute',
                      bottom: '-60px', // Start hidden below the container
                      left: '50%',
                      transform: 'translateX(-50%)', // Center it
                      backgroundColor: '#F7FAFC',
                      width: '280px',
                      height: '60px',
                      opacity: isHovering3 ? 1 : 0, // Control opacity
                      visibility: isHovering3 ? 'visible' : 'hidden', // Control visibility
                      transition: 'opacity 0.3s ease, visibility 0s linear 0.3s', // Smooth transition
                      pointerEvents: isHovering3 ? 'auto' : 'none', // Allow clicks only when visible
                      zIndex: 1, // Ensure buttons are above other elements
                    }}
                  >
                    <button style={{ backgroundColor: 'orange', width: '50px', height: '50px', borderTopLeftRadius: '50%', borderTopRightRadius: '50%' }}><i style={{ color: 'white', fontSize: '20px' }} class='fab fa-facebook-f'></i> </button>
                    <button style={{ backgroundColor: 'orange', width: '50px', height: '50px', borderTopLeftRadius: '50%', borderTopRightRadius: '50%' }}><i style={{ color: 'white', fontSize: '20px' }} class='fab fa-instagram'></i></button>
                    <button style={{ backgroundColor: 'orange', width: '50px', height: '50px', borderTopLeftRadius: '50%', borderTopRightRadius: '50%' }}><i style={{ color: 'white', fontSize: '20px' }} class='fab fa-twitter'></i></button>
                  </div>
                </div>
              </Col>

            </Row>
          </Container>



        </div>

      </div>
    </div>
  );
}

export default About;
