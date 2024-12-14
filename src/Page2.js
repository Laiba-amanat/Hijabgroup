import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Props from './Props';
import { Link, Outlet } from "react-router-dom";

function Page2() {
  return (
    <div>
      <div className='mt-10 mb-10' style={{fontSize:'40px'}}>UNSTITCHED</div>
      <hr />
      <div><span className='mx-auto' style={{fontSize:'20px'}}>35 PRODUCTS</span>
      {/* <select className='' name="sortedbt" id="" style={{backgroundColor:'transparent', color:'gray', marginLeft:'200px'}}>
            <option value="">SORTED By</option>
            <option value="" >Featured</option>
            <option value="">Best selling</option>
            <option value="">Alphabaticalliy A-Z</option>
            <option value="">Alphabaticalliy Z-A</option>
            <option value="">Price , low to high</option>
            <option value="">Date,old to new</option>
             
        
        </select> */}
      </div>
      < hr />
      <Container fluid className='w-full mb-10'>

      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row className="justify-content-md-center">
        <Col md="4" className='d-none d-lg-block  d-md-block' style={{position:'sticky' , top: '0px', height: '100vh', overflowY: 'auto'}}>
         <Accordion defaultActiveKey={['0']} alwaysOpen className='mt-10'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>AVAILBILITY</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>PRICE</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>PRODUCTS TYPE</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>TYPE</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>FABRIC</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>SIZE</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>PRICE</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>PRODUCTS STYLE</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion></Col>
        <Col md  ="8" style={{}}>
        <Container className='mt-5 '>
     <Row className="justify-content-md-center">
     <Col  md lg xl ="6" className="">
     <Link to="/Page8"><Props  imgUrl = "https://baroque.pk/cdn/shop/files/24_d8ca67ea-d0ee-48da-95db-a57ed8b3055f.jpg?v=1725624149&width=600"
      hoverImgUrl="https://baroque.pk/cdn/shop/files/130_78dff0d8-b178-4b78-ae35-ef72e9b83aec.jpg?v=1726813942&width=600"
     title = "EMBROADRAY NET CH-34" price="PKR 17999.00" subtitle="CHENTTLE" /> </Link>
</Col>
 <Col  md lg xl ="6" className="">
<Props imgUrl = "https://baroque.pk/cdn/shop/files/24_b119ac5a-74fd-4ba8-83c8-4f64f1f83e93.jpg?v=1709621740&width=600"
hoverImgUrl="https://baroque.pk/cdn/shop/files/25_4f82128e-474e-44c3-a159-aed503a7cf2d.jpg?v=1709621740&width=1000" title = "EMBROADRAY NET CH-34" price="17999.00" subtitle="CHENTTELE" />
</Col>

</Row>
</Container>
<Container className='mt-5'>
     <Row className="justify-content-md-center">
     <Col  md lg xl ="6" className="">
<Props  imgUrl = "https://baroque.pk/cdn/shop/files/119_fc1ca3a7-be49-4327-bb80-9d3e77dfd9e8.jpg?v=1726304396&width=600"
hoverImgUrl="https://baroque.pk/cdn/shop/files/25_4f82128e-474e-44c3-a159-aed503a7cf2d.jpg?v=1709621740&width=1000" title = "EMBROADRAY NET CH-34" price="PKR 17999.00" subtitle="CHENTTLE" />
</Col>
 <Col  md lg xl ="6" className="">
<Props imgUrl = "https://baroque.pk/cdn/shop/files/118_51386154-cd4b-4e2c-939f-da8bc804eda9.jpg?v=1726304166&width=600"
hoverImgUrl="https://baroque.pk/cdn/shop/files/25_4f82128e-474e-44c3-a159-aed503a7cf2d.jpg?v=1709621740&width=1000" title = "EMBROADRAY NET CH-34" price="17999.00" subtitle="CHENTTELE" />
</Col>

</Row>
</Container>
<Container className='mt-5'>
     <Row className="justify-content-md-center">
     <Col  md lg xl ="6" className="">
<Props  imgUrl = "https://baroque.pk/cdn/shop/files/49_6dcd29b5-b6a8-413a-bc69-5f53946c902f.jpg?v=1725532777&width=600" 
hoverImgUrl="https://baroque.pk/cdn/shop/files/25_4f82128e-474e-44c3-a159-aed503a7cf2d.jpg?v=1709621740&width=1000"title = "EMBROADRAY NET CH-34" price="PKR 17999.00" subtitle="CHENTTLE" />
</Col>
 <Col  md lg xl ="6" className="">
<Props imgUrl = "https://baroque.pk/cdn/shop/files/31_00a995be-89f6-4650-8c9d-e8751d866b46.jpg?v=1725624580&width=600"
hoverImgUrl="https://baroque.pk/cdn/shop/files/25_4f82128e-474e-44c3-a159-aed503a7cf2d.jpg?v=1709621740&width=1000" title = "EMBROADRAY NET CH-34" price="17999.00" subtitle="CHENTTELE" />
</Col>

</Row>
</Container>
<Container className='mt-5'>
     <Row className="justify-content-md-center">
     <Col  md lg xl ="6" className="">
<Props  imgUrl = "https://baroque.pk/cdn/shop/files/49_bf18e3ee-18d4-4ff9-b43b-fd3682c3218f.jpg?v=1725625630&width=600"
hoverImgUrl="https://baroque.pk/cdn/shop/files/25_4f82128e-474e-44c3-a159-aed503a7cf2d.jpg?v=1709621740&width=1000" title = "EMBROADRAY NET CH-34" price="PKR 17999.00" subtitle="CHENTTLE" />
</Col>
 <Col  md lg xl ="6" className="">
<Props imgUrl = "https://baroque.pk/cdn/shop/files/158_1208ef43-010d-4c8c-89ac-a371cc2e3bbf.jpg?v=1699794694&width=600"
hoverImgUrl="https://baroque.pk/cdn/shop/files/25_4f82128e-474e-44c3-a159-aed503a7cf2d.jpg?v=1709621740&width=1000" title = "EMBROADRAY NET CH-34" price="17999.00" subtitle="CHENTTELE" />
</Col>

</Row>
</Container>
<Container className='mt-5'>
     <Row className="justify-content-md-center">
     <Col  md lg xl ="6" className="">
<Props  imgUrl = "https://baroque.pk/cdn/shop/files/71_2a3981bd-f61d-444a-801b-f82bf5a6f6c5.jpg?v=1726304113&width=600"
hoverImgUrl="https://baroque.pk/cdn/shop/files/25_4f82128e-474e-44c3-a159-aed503a7cf2d.jpg?v=1709621740&width=1000" title = "EMBROADRAY NET CH-34" price="PKR 17999.00" subtitle="CHENTTLE" />
</Col>
 <Col  md lg xl ="6" className="">
<Props imgUrl = "https://baroque.pk/cdn/shop/files/02_6e3f0c28-fc5d-4524-8e46-a9bb41fe2e42.jpg?v=1725623070&width=600"
hoverImgUrl="https://baroque.pk/cdn/shop/files/25_4f82128e-474e-44c3-a159-aed503a7cf2d.jpg?v=1709621740&width=1000" title = "EMBROADRAY NET CH-34" price="17999.00" subtitle="CHENTTELE" />
</Col>

</Row>
</Container>
<Container className='mt-5'>
     <Row className="justify-content-md-center">
     <Col  md lg xl ="6" className="">
<Props  imgUrl = "https://baroque.pk/cdn/shop/files/08_d06c74e9-f0b9-4103-aff3-9b17ec06a973.jpg?v=1725623587&width=600"
hoverImgUrl="https://baroque.pk/cdn/shop/files/25_4f82128e-474e-44c3-a159-aed503a7cf2d.jpg?v=1709621740&width=1000" title = "EMBROADRAY NET CH-34" price="PKR 17999.00" subtitle="CHENTTLE" />
</Col>
 <Col  md lg xl ="6" className="">
<Props imgUrl = "https://baroque.pk/cdn/shop/files/81_a342bf6b-04b9-41ce-8338-b6ad8b1a8f13.jpg?v=1726304256&width=1000"
hoverImgUrl="https://baroque.pk/cdn/shop/files/25_4f82128e-474e-44c3-a159-aed503a7cf2d.jpg?v=1709621740&width=1000" title = "EMBROADRAY NET CH-34" price="17999.00" subtitle="CHENTTELE" />
</Col>

</Row>
</Container>
        </Col>
      </Row>
    </Container>
    <Outlet />
    </div>
  )
}

export default Page2
