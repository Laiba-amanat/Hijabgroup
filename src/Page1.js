import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Props from './Props';

function Page1() {
  return (
    <div>
      <div className='mt-10 mb-10' style={{fontSize:'40px'}}>CHANTELLE</div>
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
<Props  imgUrl = "https://baroque.pk/cdn/shop/products/87_36907ca8-ca65-43a3-b140-2c8cf6c09a99.jpg?v=1669115381&width=800"
hoverImgUrl="https://baroque.pk/cdn/shop/files/25_4f82128e-474e-44c3-a159-aed503a7cf2d.jpg?v=1709621740&width=1000"  title = "EMBROADRAY NET CH-34" price="PKR 17999.00" subtitle="CHENTTLE" />
</Col>
 <Col  md lg xl ="6" className="">
<Props imgUrl = "https://baroque.pk/cdn/shop/products/82_5491962c-0861-47a2-ab32-74173b23039f.jpg?v=1669115366&width=1000"
hoverImgUrl="https://baroque.pk/cdn/shop/files/25_4f82128e-474e-44c3-a159-aed503a7cf2d.jpg?v=1709621740&width=1000"  title = "EMBROADRAY NET CH-34" price="17999.00" subtitle="CHENTTELE" />
</Col>

</Row>
</Container>
<Container className='mt-5'>
     <Row className="justify-content-md-center">
     <Col  md lg xl ="6" className="">
<Props  imgUrl = "https://baroque.pk/cdn/shop/products/57_fd253598-1ab5-4938-9888-b602f874c65f.jpg?v=1677322864&width=800"
hoverImgUrl="https://baroque.pk/cdn/shop/files/25_4f82128e-474e-44c3-a159-aed503a7cf2d.jpg?v=1709621740&width=1000"  title = "EMBROADRAY NET CH-34" price="PKR 17999.00" subtitle="CHENTTLE" />
</Col>
 <Col  md lg xl ="6" className="">
<Props imgUrl = "https://baroque.pk/cdn/shop/products/PS1_1.jpg?v=1612432225&width=800"
hoverImgUrl="https://baroque.pk/cdn/shop/files/25_4f82128e-474e-44c3-a159-aed503a7cf2d.jpg?v=1709621740&width=1000"  title = "EMBROADRAY NET CH-34" price="17999.00" subtitle="CHENTTELE" />
</Col>

</Row>
</Container>
<Container className='mt-5'>
     <Row className="justify-content-md-center">
     <Col  md lg xl ="6" className="">
<Props  imgUrl = "https://baroque.pk/cdn/shop/products/87_36907ca8-ca65-43a3-b140-2c8cf6c09a99.jpg?v=1669115381&width=800"
hoverImgUrl="https://baroque.pk/cdn/shop/files/25_4f82128e-474e-44c3-a159-aed503a7cf2d.jpg?v=1709621740&width=1000"  title = "EMBROADRAY NET CH-34" price="PKR 17999.00" subtitle="CHENTTLE" />
</Col>
 <Col  md lg xl ="6" className="">
<Props imgUrl = "https://baroque.pk/cdn/shop/products/82_5491962c-0861-47a2-ab32-74173b23039f.jpg?v=1669115366&width=1000"
hoverImgUrl="https://baroque.pk/cdn/shop/files/25_4f82128e-474e-44c3-a159-aed503a7cf2d.jpg?v=1709621740&width=1000"  title = "EMBROADRAY NET CH-34" price="17999.00" subtitle="CHENTTELE" />
</Col>

</Row>
</Container>
<Container className='mt-5'>
     <Row className="justify-content-md-center">
     <Col  md lg xl ="6" className="">
<Props  imgUrl = "https://baroque.pk/cdn/shop/products/57_fd253598-1ab5-4938-9888-b602f874c65f.jpg?v=1677322864&width=800" title = "EMBROADRAY NET CH-34" price="PKR 17999.00" subtitle="CHENTTLE" />
</Col>
 <Col  md lg xl ="6" className="">
<Props imgUrl = "https://baroque.pk/cdn/shop/products/PS1_1.jpg?v=1612432225&width=800" title = "EMBROADRAY NET CH-34" price="17999.00" subtitle="CHENTTELE" />
</Col>

</Row>
</Container>
<Container className='mt-5'>
     <Row className="justify-content-md-center">
     <Col  md lg xl ="6" className="">
<Props  imgUrl = "https://baroque.pk/cdn/shop/products/87_36907ca8-ca65-43a3-b140-2c8cf6c09a99.jpg?v=1669115381&width=800" title = "EMBROADRAY NET CH-34" price="PKR 17999.00" subtitle="CHENTTLE" />
</Col>
 <Col  md lg xl ="6" className="">
<Props imgUrl = "https://baroque.pk/cdn/shop/products/82_5491962c-0861-47a2-ab32-74173b23039f.jpg?v=1669115366&width=1000" title = "EMBROADRAY NET CH-34" price="17999.00" subtitle="CHENTTELE" />
</Col>

</Row>
</Container>
<Container className='mt-5'>
     <Row className="justify-content-md-center">
     <Col  md lg xl ="6" className="">
<Props  imgUrl = "https://baroque.pk/cdn/shop/products/57_fd253598-1ab5-4938-9888-b602f874c65f.jpg?v=1677322864&width=800" title = "EMBROADRAY NET CH-34" price="PKR 17999.00" subtitle="CHENTTLE" />
</Col>
 <Col  md lg xl ="6" className="">
<Props imgUrl = "https://baroque.pk/cdn/shop/products/PS1_1.jpg?v=1612432225&width=800" title = "EMBROADRAY NET CH-34" price="17999.00" subtitle="CHENTTELE" />
</Col>

</Row>
</Container>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Page1
