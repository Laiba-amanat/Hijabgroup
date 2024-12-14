import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'tailwindcss/tailwind.css';
import Image from 'react-bootstrap/Image';
import { useState } from 'react'
import 'aos/dist/aos.css';  // Import the AOS styles
import AOS from 'aos';  //animate on scroll
import { useEffect } from 'react';
import imge1 from './images/team-1.jpg';
import imge2 from './images/team-2.jpg';
import imge3 from './images/team-3.jpg';
import imge4 from './images/team-4.jpg';


function Ganjay() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, [])
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
        <div className='mt-5 mb-5'>


            <Container fluid className=" xxl w-100% bg-stone-50"  >
                <div
                    className="mx-3"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center', // Center elements horizontally
                        textAlign: 'center'

                    }}

                >
                    <div />
                    <p data-aos='fade-up' className=' text-center text-customOrange animationdelay2 text-2xl font-bold ' style={{ fontStyle: 'oblique' }}>
                        <span style={{ display: 'inline-block', width: '60px', height: '1px', backgroundColor: '#FEA116', margin: '5px' }}></span>
                        Team Members
                        <span style={{ display: 'inline-block', width: '60px', height: '1px', backgroundColor: '#FEA116', margin: '5px' }}></span>
                    </p>
                </div>
                <h1 data-aos='fade-up' className='text-center animationdelay2' style={{ fontSize: '40px', fontWeight: 'bold', fontStyle: 'oblique' }} >Our Master Chefs</h1>
                <Row className="justify-content-md-center g-3">
                    <Col
                        md
                        lg
                        xl
                        xxl="3"
                        className="d-flex justify-content-center mt-20 animate_animated animate_fadeInUp"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{ animationDelay: '2.3s', animationName: 'fadeInUp' }}
                    >
                        <div
                            data-aos='fade-up'
                            style={{
                                width: '280px',
                                height: '350px',
                                backgroundColor: 'white',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                position: 'relative',

                            }}
                            className='transition-transform  duration-200 ease-in-out delay-200'
                        >
                            <Image className={`transition-transform duration-500 mt-6 ${isHovering ? 'transform scale-110' : ''} `} style={{ width: '220px', height: '220px', marginTop: '10px' }} src={imge1} roundedCircle />
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
                                    backgroundColor: 'white',
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
                        className="d-flex justify-content-center mt-20 animate_animated animate_fadeInUp"
                        onMouseEnter={handleMouseEnter1}
                        onMouseLeave={handleMouseLeave1}
                        style={{ animationDelay: '2.5s', animationName: 'fadeInUp' }}
                    >

                        <div
                            data-aos='fade-up'
                            style={{
                                width: '280px',
                                height: '350px',
                                backgroundColor: 'white',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                position: 'relative',

                            }}
                            className='transition-transform  duration-300 ease-in-out delay-300'
                        >
                            <Image className={`transition-transform duration-500 mt-6 ${isHovering1 ? 'transform scale-110' : ''} `} style={{ width: '220px', height: '220px', marginTop: '10px' }} src={imge2} roundedCircle />
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
                                    backgroundColor: 'white',
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
                        className="d-flex justify-content-center mt-20 animate_animated animate_fadeInUp"
                        onMouseEnter={handleMouseEnter2}
                        onMouseLeave={handleMouseLeave2}
                        style={{ animationDelay: '2.7s', animationName: 'fadeInUp' }}
                    >
                        <div
                            data-aos='fade-up'
                            style={{
                                width: '280px',
                                height: '350px',
                                backgroundColor: 'white',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                position: 'relative',

                            }}
                            className='atransition-transform  duration-500 ease-in-out delay-500'
                        >
                            <Image className={`transition-transform duration-500 mt-6 ${isHovering2 ? 'transform scale-110' : ''} `} style={{ width: '220px', height: '220px', marginTop: '10px' }} src={imge3} roundedCircle />
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
                                    backgroundColor: 'white',
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
                        className="d-flex justify-content-center mt-20 animate_animated animate_fadeInUp"
                        onMouseEnter={handleMouseEnter3}
                        onMouseLeave={handleMouseLeave3}
                        style={{ animationDelay: '2.9s', animationName: 'fadeInUp' }}
                    >
                        <div
                            data-aos='fade-up'
                            style={{
                                width: '280px',
                                height: '350px',
                                backgroundColor: 'white',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                position: 'relative',

                            }}
                            className='transition-transform  duration-700 ease-in-out delay-700'
                        >
                            <Image className={`transition-transform duration-500 mt-6 ${isHovering3 ? 'transform scale-110' : ''} `} style={{ width: '220px', height: '220px', marginTop: '10px' }} src={imge4} roundedCircle />
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
                                    backgroundColor: 'white',
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
    )
}

export default Ganjay
