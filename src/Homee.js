import React from 'react'
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Sample from './Sample';
import Next from './Next';
import Video from './Video';
import Col from 'react-bootstrap/Col';
import Videos from './Videos';
import Email from './Email';
import Bottomemail from './Bottomemail';


function Home() {
  return (
    <div>
         <Navigation />
   
   <Container className='mt-5'>
     <Row className="justify-content-md-center">
<Sample  imgUrl = "https://baroque.pk/cdn/shop/files/02_Banner186.jpg?v=1725974261&width=600" title = "READY TO WEAR" />
<Sample imgUrl = "https://baroque.pk/cdn/shop/files/02_Banner15_a036f587-c326-4c84-b635-f1353a2df2fa.jpg?v=1725974235&width=600" title = "SHAWLS" />
<Sample imgUrl = "https://baroque.pk/cdn/shop/files/02_Banner187_48cb710e-bf55-427e-a61e-f7185a960780.jpg?v=1725974285&width=600"  title  = "LAWNS" />
</Row>
</Container>
<Next />
<Videos />
<container className='mt-20 h-[900px] w-100%'>
     <Row className="justify-content-md-center mx-auto">
     <Col md={4} className="mb-4">
   
<Video   videoUrl = "https://baroque.pk/cdn/shop/videos/c/vp/0bf46de8408d43f2a95a61ce1db9cf76/0bf46de8408d43f2a95a61ce1db9cf76.HD-720p-1.6Mbps-34838812.mp4?v=0" />
{/* <button  className="bg-black-500 text-white px-4 py-2 text-lg mt-3 absolute " style={{fontSize:'20px',backgroundColor:'black', border:'2px solid white'}}>SHOP NOW</button> */}
</Col>
<Col md={4} className="mb-4">
<Video  videoUrl = "https://baroque.pk/cdn/shop/videos/c/vp/8fc59a5cb22a4beb84cae8305256b751/8fc59a5cb22a4beb84cae8305256b751.HD-1080p-2.5Mbps-28444638.mp4?v=0" />
</Col>
<Col md={4} className="mb-4">
<Video  videoUrl = "https://baroque.pk/cdn/shop/videos/c/vp/c4f8512cecd141088ba3cdfe059a0c55/c4f8512cecd141088ba3cdfe059a0c55.HD-1080p-7.2Mbps-34838829.mp4?v=0" />
</Col>
   
     </Row>
</container>
<Email />
<Container className='mt-5 mb-10'>
<Row className="justify-content-md-center">
<Col md={3} className="mb-4">
<Bottomemail imgUrl = "https://cdn1.iconfinder.com/data/icons/ios-edge-line-3/25/Delivered-1024.png" title = "Free Shipping" subtitle="We provide free shipping all across Pakistan on all of our orders" />
</Col>
<Col md={3} className="mb-4">
<Bottomemail imgUrl = "https://baroque.pk/cdn/shop/files/Untitled-1_e6d95532-99dc-4ec7-8c65-f4686061ae80.png?v=1722062801&width=48" title = "Custom SIze" subtitle="We provide free shipping all across Pakistan on all of our orders" />
</Col>
<Col md={3} className="mb-4">
<Bottomemail imgUrl = "https://icon-library.com/images/order-icon/order-icon-18.jpg" title = "Order Exchange" subtitle="We provide free shipping all across Pakistan on all of our orders" />
</Col>
<Col md={3} className="mb-4">
<Bottomemail imgUrl = "https://cdn.iconscout.com/icon/premium/png-512-thumb/priority-5607795-4689534.png" title = "Priority Stitching" subtitle="We provide free shipping all across Pakistan on all of our orders" />
</Col>
</Row>
</Container>
<hr />

 
    </div>
  )
}

export default Home
