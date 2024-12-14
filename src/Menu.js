import React, { useState } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from './images/menu-1.jpg';
import img2 from './images/menu-2.jpg';
import img3 from './images/menu-3.jpg';
import img4 from './images/menu-4.jpg';
import img5 from './images/menu-5.jpg';
import img6 from './images/menu-6.jpg';
import img7 from './images/menu-7.jpg';
import img8 from './images/menu-8.jpg';
import img9 from './images/bg-hero.jpg';



function Menu() { 
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };
 
  return (
    <div>
    <div className="relative">
      {/* Background Image */}
      <img
            src={img9}
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
      <div className="absolute top-0 left-0 w-full h-full flex flex-col  items-center justify-center text-white pt-20">
          <h1  class="animate__animated animate__fadeInDown"
           style={{ fontSize: '60px', color: 'white', fontWeight: 'bold' }}>
            Food Menu
          </h1>

        {/* Breadcrumb */}
        <Breadcrumb className="my-3"
         class="animate__animated animate__backInDown"
        >
          <Breadcrumb.Item
            style={{ textDecoration: 'none', fontSize: '20px', color: 'orange' }} // Orange color
            href="#"
          >
            HOME
          </Breadcrumb.Item>
          <span style={{ textDecoration: 'none', fontSize: '20px', color: 'white' }} className="mx-2">/</span>
          <Breadcrumb.Item
            style={{ textDecoration: 'none', fontSize: '20px', color: 'orange' }} // Orange color
            href="#"
          >
            PAGES
          </Breadcrumb.Item>
          <span style={{ textDecoration: 'none', fontSize: '20px', color: 'white' }} className="mx-2">/</span>
          <Breadcrumb.Item style={{ textDecoration: 'none', fontSize: '20px', color: 'white' }} active>
            MENU
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    
    </div>
    <br />
      <br />
        <div >
      
      
        <div style={{display:'flex', justifyContent: 'center',textAlign:'center'}}
       
       className="mx-3">
      <div    class="animate__animated animate__flash "
       style={{ marginRight: '10px',flexGrow: '0.04',width:'25px', 
        height: '2px', backgroundColor: 'orange'}}/>
      <h6 
      class="animate__animated animate__flash " 

       style={{fontSize: '24px',color:'orange',

        fontFamily:'cursive',  margin: '0 10px',  whiteSpace: 'nowrap'}}>Food Menu</h6>
      <div  class="animate__animated animate__flash "
      style={{ marginLeft: '10px',flexGrow: '0.04', height: '2px', width:'25px', backgroundColor: 'orange'}} />
    </div>
 <p  
  class="animate__animated animate__zoomIn"
 style={{fontSize: '34px', color:'black', textAlign:'center', fontWeight:'bold', margin: '0 10px'}}
      
 className="mx-2">Most Popular Items</p>
<br />
 <br />
 
<div   class="animate__animated animate__heartBeat "
 className="mx-2"
style={{ display: 'flex', flex: 'row', textAlign:'center',justifyContent:'center'}}>
  <div
        onClick={() => handleSectionClick('Breakfast')}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          cursor: 'pointer',
          marginBottom: '20px',
         
        }}
      >
        <div style={{position:'relative'}}>
          <i style={{ fontSize: '38px', color: 'orange', margin: '0 10px' }} className="fas fa-coffee"></i>
        </div>
        <div>
          <p style={{ fontSize: '18px', color: 'grey', margin: '0 10px' }}>Popular</p>
          <p style={{ fontSize: '20px', color: 'black', margin: '0 10px' }}>Breakfast</p>
        </div>
      </div>
      <br />

      {/* Lunch Section */}
      <div
        onClick={() => handleSectionClick('Lunch')}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          cursor: 'pointer',
          marginBottom: '20px'
        }}
      >
        <div style={{position:'relative'}}>
          <i style={{ fontSize: '38px', color: 'orange', margin: '0 10px' }} className="fas fa-hamburger"></i>
        </div>
        <div>
          <p style={{ fontSize: '18px', color: 'grey', margin: '0 10px' }}>Special</p>
          <p style={{ fontSize: '20px', color: 'black', margin: '0 10px' }}>Lunch</p>
        </div>
      </div>

      {/* Dinner Section */}
      <div
        onClick={() => handleSectionClick('Dinner')}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          cursor: 'pointer',
          marginBottom: '20px',
          
        }}
      >
        <div style={{position:'relative'}}>
          <i style={{ fontSize: '38px', color: 'orange', margin: '0 10px' }} className="fas fa-utensils"></i>
        </div>
        <div>
          <p style={{ fontSize: '18px', color: 'grey', margin: '0 10px' }}>Lovely</p>
          <p style={{ fontSize: '20px', color: 'black', margin: '0 10px' }}>Dinner</p>
          
        </div>
        
      </div>
      
      {/* Display Content Based on Active Section */}
      <div className=' h-[900px]'>
      <div style={{ textAlign: 'center', marginTop: '170px' , position:'absolute'}}>
          <div className='w-[800px] h-[900px ] 'style={{marginLeft:'-600px'}} >
            <div>
  <div>
  <Container className="mx-3 "> 
      <Row>
        <Col xs={12} md={6}>
        <div > 
          <div  class="animate__animated animate__heartBeat"
          style={{display:'flex' }}>
        <img
        src={img1}
        alt=""
        style={{ height: '110px', width: '90px' }}
        className="object-cover"
      />
      
      <p style={{fontSize: '28px', color:'black', fontWeight: 'bold', margin: '0 10px'}}>
        Chicken  Burger 
        <hr className=' w-full' />
        <p style={{fontSize: '14px', color:'grey', font: 'pecifica', margin: '0 10px'}} >Ipsum ipsum clita erat amet dolor justo diam</p></p>
      </div>
      
      
      
      

        </div>
        </Col>
        
        <Col xs={12} md={6}>
       
          <div  class="animate__animated animate__heartBeat"
          style={{display:'flex' }}>
        <img
        src={img2}
        alt=""
        style={{ height: '110px', width: '90px' }}
        className="object-cover"
      />
      
      <p style={{fontSize: '28px', color:'black', fontWeight: 'bold', margin: '0 10px'}}>
        Chicken  Burger 
        <hr className=' w-full' />
        <p style={{fontSize: '14px', color:'grey', font: 'pecifica', margin: '0 10px'}} >Ipsum ipsum clita erat amet dolor justo diam</p></p>
      </div></Col>
      </Row>
      </Container>
      <br />
      <Container className="mx-3"> 
      <Row>
        <Col xs={12} md={6}>
       
          <div  class="animate__animated animate__heartBeat"
          style={{display:'flex' }}>
        <img
       src={img3}
        alt=""
        style={{ height: '110px', width: '90px' }}
        className="object-cover"
      />
      
      <p style={{fontSize: '28px', color:'black', fontWeight: 'bold', margin: '0 10px'}}>
        Chicken  Burger 
        <hr className=' w-full' />
        <p style={{fontSize: '14px', color:'grey', font: 'pecifica', margin: '0 10px'}} >Ipsum ipsum clita erat amet dolor justo diam</p></p>
      </div>
        
        </Col>
        <Col xs={12} md={6}>
       
          <div  class="animate__animated animate__heartBeat"
          style={{display:'flex' }}>
        <img style={{height: '110px', width: '90px'}}
      
      src={img4}
        alt=""
        
        className="object-cover"
      />
      
      <p style={{fontSize: '28px', color:'black', fontWeight: 'bold', margin: '0 10px'}}>
        Chicken  Burger 
        <hr className=' w-full' />
        <p style={{fontSize: '14px', color:'grey', font: 'pecifica', margin: '0 10px'}} >Ipsum ipsum clita erat amet dolor justo diam</p></p>
      </div>
      </Col>
      </Row>
      </Container>
      <br />
      <Container className="mx-3"> 
      <Row>
        <Col 
        xs={12} md={6}>
         
          <div  class="animate__animated animate__heartBeat"
          style={{display:'flex' }}>
        <img style={{height: '110px', width: '90px'}}
     
         src={img5}
         alt=""
       
        className="object-cover"
      />
      
      <p style={{fontSize: '28px', color:'black', fontWeight: 'bold', margin: '0 10px'}}>
        Chicken  Burger 
        <hr className=' w-full' />
        <p style={{fontSize: '14px', color:'grey', font: 'pecifica', margin: '0 10px'}} >Ipsum ipsum clita erat amet dolor justo diam</p></p>
      </div>
        </Col>
        <Col xs={12} md={6}>
        
          <div    class="animate__animated animate__heartBeat"
           style={{display:'flex' }}>
        <img style={{height: '110px', width: '90px'}}
      
        src={img6}
        alt=""
        className="object-cover"
      />
      
      <p style={{fontSize: '28px', color:'black', fontWeight: 'bold', margin: '0 10px'}}>
        Chicken  Burger 
        <hr className=' w-full' />
        <p style={{fontSize: '14px', color:'grey', font: 'pecifica', margin: '0 10px'}} >Ipsum ipsum clita erat amet dolor justo diam</p></p>
      </div></Col>
      </Row>
      </Container>
      <br />
       <Container className="mx-3"> 
      <Row>
        <Col xs={12} md={6}>
        
          <div  class="animate__animated animate__heartBeat"
          style={{display:'flex' }}>
        <img style={{height: '110px', width: '90px'}}
          src={img7}
        alt=""
        className="object-cover"
      />
      
      <p style={{fontSize: '28px', color:'black', fontWeight: 'bold', margin: '0 10px'}}>
        Chicken  Burger 
        <hr className=' w-full' />
        <p style={{fontSize: '14px', color:'grey', font: 'pecifica', margin: '0 10px'}} >Ipsum ipsum clita erat amet dolor justo diam</p></p>
      </div>
        </Col>
        <Col xs={12} md={6}>
         
          <div  class="animate__animated animate__heartBeat"
          style={{display:'flex' }}>
        <img style={{height: '110px', width: '90px'}}
      
         src={img8}
        alt=""
        className="object-cover"
      />
      
      <p style={{fontSize: '28px', color:'black', fontWeight: 'bold', margin: '0 10px'}}>
        Chicken  Burger 
        <hr className=' w-full' />
        <p style={{fontSize: '14px', color:'grey', font: 'pecifica', margin: '0 10px'}} >Ipsum ipsum clita erat amet dolor justo diam</p></p>
      </div></Col>
      </Row>
      </Container> 
  </div>
</div>
          </div>
    </div>
    </div>
      </div> 
     
    <br />
    
  <br />

      
    </div>
     
    </div>
  );
}

export default Menu;
