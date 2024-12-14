import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Button } from 'react-bootstrap';



function Page9() {
  return (
    <div> <Container fluid>
    <Row>
      <Col md lg xl ="8" className="mt-5" style={{}}>
      <Container className=''>
      <Row>
        <Col style={{fontWeight:'bold',textAlign:'left'}}>CONTACT</Col>
        <Col style={{textDecoration:'underline',textAlign:'right'}}>login</Col>
      </Row>
      <Row>
        <Col style={{textAlign:'left'}}>
        <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label></Form.Label>
        <Form.Control className='h-[50px]' style={{border:'1px solid black'}} type="email" placeholder="Enter email" />
       <br />
        <input type="checkbox" className="form-check-input" id="customCheck"  style={{
          backgroundColor: "", // Custom background color
          borderColor: "black", // Custom border color
         
        }}
      />
      <label className="form-check-label" htmlFor="customCheck" style={{paddingLeft:'10px'}} >
         Email me with news offer
      </label>
      </Form.Group>
    </Form>
     <div style={{border:'1px solid gray', height:'100px', borderRadius:'10px', backgroundColor:'lightgray', paddingLeft:'20px', paddingTop:'10px'}}>
        <p style={{fontWeight:'bold'}}>International Website:</p> 
        <p style={{fontSize:'10px', paddingTop:'10px'}}>To deliver products outside of Pakistan visit:</p>
        <p style={{fontSize:'10px'}}>http//::ppyy</p> 
     </div>
     <p className='mt-3 mb-2' style={{fontWeight:'bold', fontSize:'30px'}} >Delivery</p>
     <Form.Select aria-label="Default select example" className='h-[50px] mb-3' style={{border:'1px solid black'}}>
      <option>Pakistan</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label></Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="First name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label></Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue=""
          
          />
           </Form.Group>
           </Row>
           <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="Address" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Appartment ,suit,etc.">
        <Form.Control type="text" placeholder="Appartment ,suit,etc. " />
      </FloatingLabel>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label></Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="City"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label></Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Postal code"
            defaultValue=""
          
          />
           </Form.Group>
           </Row>
           <Form>
      <Form.Group className="mb-2" controlId="formGroupEmail">
        <Form.Label></Form.Label>
        <Form.Control className='h-[50px]' style={{border:'1px solid black'}} type="email" placeholder="Phone" />
       <br />
        <input type="checkbox" className="form-check-input" id="customCheck"  style={{
          backgroundColor: "", // Custom background color
          borderColor: "black", // Custom border color
         
        }}
      />
      <label className="form-check-label" htmlFor="customCheck" style={{paddingLeft:'10px',color:'gray'}} >
         Save this information for next time
      </label>
      </Form.Group>
    </Form>
    <p className='mt-3 mb-2' style={{fontWeight:'bold', fontSize:'20px'}} >Select your city</p>
     <Form.Select aria-label="Default select example" className='h-[50px] mb-3' style={{border:'1px solid black'}}>
      <option></option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    <p className='mt-3 mb-2' style={{fontWeight:'bold', fontSize:'20px'}} >Shipping method</p>
    <Row style={{border:'1px solid black', height:'60px',borderRadius:'10px',paddingTop:'10px'}}>
        <Col style={{textAlign:'left'}}>Local Delivery</Col>
        <Col style={{fontWeight:'bold',textAlign:'right'}}>Free</Col>
      </Row>
      <p className='mt-3' style={{fontWeight:'bolde', fontSize:'25px'}} >payment</p>
      <p  className='mb-2'style={{fontSize:'12px',color:'gray'}}>All transaction secure encrypted</p>
       <div style={{border:'1px solid black',height:'60px',paddingTop:'20px', paddingLeft:'5px'}}>
       <input type="radio" className="form-check-input" id="customCheck"  style={{
          backgroundColor: "", // Custom background color
          borderColor: "black", // Custom border color
          border:'1px solid black',
        }}
      />
      <label className="form-check-label" htmlFor="customCheck" style={{paddingLeft:'10px'}} >
        cash on delivery code
      </label>
      </div>
      <div style={{border:'1px solid lightgray',height:'60px',paddingTop:'20px', paddingLeft:'5px'}}>
       <input type="radio" className="form-check-input" id="customCheck"  style={{
          backgroundColor: "", // Custom background color
          borderColor: "black", // Custom border color
          border:'1px solid black',
        }}
      />
      <label className="form-check-label" htmlFor="customCheck" style={{paddingLeft:'10px'}} >
        cash on delivery code
      </label>
      </div>
      <Button className='w-100 h-[60px] mt-3 mb-3' style={{ backgroundColor: 'black', border: '1px solid black', borderRadius: '5px', fontWeight:'bold' }}>Complete Order</Button>
        </Col>
      </Row>
    </Container>
      </Col>
      <Col md lg xl ="4" className="" style={{position: 'sticky', top: '0px', height: '100vh', backgroundColor:'#F5F5F5'}}>
      <Container className='mt-20 '>
                                    <Row>
                                        <Col><img src="https://baroque.pk/cdn/shop/files/126_0d9a3c70-1ded-4eaf-ae13-2eb1cc983a1d.jpg?v=1726813941&width=1200" alt="" style={{height:'120px'}} /></Col>
                                        <Col> <p className='mt-' style={{ color: '' }}>UNSTITCHED</p>

                                            <p className='' style={{ color: '', fontSize: '12px' }}>EMBROIDERED PRINTED LAWN UF-711</p>

                                          
                                           
                                            <br />
                                           
                                            </Col>
                                            <Col>
                                            <p className='' style={{ fontWeight: 'bold' }}>PKR 14,990.00</p></Col>
                                    </Row>
                                    <Row className='mt-10'>
                                        <Col md lg xl ="6" >  <Form.Control  type="text" placeholder="discount code or gift card"  style={{ backgroundColor: '' ,border:'1px solid black'}} />
                                        </Col>
                                        <Col md lg xl ="6"> <Button className='w-50' style={{ backgroundColor: 'gray', border: '1px solid gray', borderRadius: '0px' }}>Apply</Button></Col>
                                    </Row>
                                    <Row className='mt-10'>
                                        <Col style={{textAlign:'left'}}>
                                        <p style={{fontSize:'12px'}}>Subtotal</p>
                                        <br />
                                        <p style={{fontSize:'12px'}} >shipping</p>
                                        <br />
                                        <p style={{fontWeight:'bold', fontSize:'25px'}}>Total</p>
                                        </Col>
                                        <Col style={{textAlign:'right'}}>
                                        <p style={{fontSize:'12px'}}>Rs 17,980.00</p>
                                        <br />
                                        <p style={{fontSize:'12px'}} >Free</p>
                                        <br />
                                        <p style={{fontWeight:'bold', fontSize:'25px'}}>
                                        Rs 17,980.00</p>
                                        </Col>
                                    </Row>
                                </Container>
      </Col>
    </Row>
  </Container></div>
  )
}

export default Page9
