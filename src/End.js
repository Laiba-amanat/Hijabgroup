import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function End() {
  return (
    <div>
          <Container className='mt-10'>
      <Row className="justify-content-md-center">
        <Col><p className='mt-3'style={{fontSize:'25px', fontWeight:'', color:'black'}} >About</p></Col>
        <Col><p className='mt-3'style={{fontSize:'25px', fontWeight:'', color:'black'}} >Customer Service</p></Col>
        <Col><p className='mt-3'style={{fontSize:'25px', fontWeight:'', color:'black'}} >Policies</p></Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col><p className=''style={{fontSize:'15px', fontWeight:'', color:'gray'}} >095780938909</p></Col>
        <Col><p className=''style={{fontSize:'15px', fontWeight:'', color:'gray'}} >8598458099</p></Col>
        <Col><p className=''style={{fontSize:'15px', fontWeight:'', color:'gray'}} >90488900</p></Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col><p className=''style={{fontSize:'15px', fontWeight:'', color:'gray'}} >The requierd inporemtiom</p></Col>
        <Col><p className=''style={{fontSize:'15px', fontWeight:'', color:'gray'}} >The requierd inporemtiom</p></Col>
        <Col><p className=''style={{fontSize:'15px', fontWeight:'', color:'gray'}} >The requierd inporemtiom</p></Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col><p className=''style={{fontSize:'15px', fontWeight:'', color:'gray'}} >Dispatch Timeline</p></Col>
        <Col><p className=''style={{fontSize:'15px', fontWeight:'', color:'gray'}} >Dispatch Timeline</p></Col>
        <Col><p className=''style={{fontSize:'15px', fontWeight:'', color:'gray'}} >TDispatch Timeline</p></Col>
      </Row>
      <Row className="justify-content-md-center mb-10">
        <Col><p className=''style={{fontSize:'15px', fontWeight:'', color:'gray'}} >Email: info@baroque.pk</p></Col>
        <Col><p className=''style={{fontSize:'15px', fontWeight:'', color:'gray'}} >Email: info@baroque.pk</p></Col>
        <Col><p className=''style={{fontSize:'15px', fontWeight:'', color:'gray'}} >Email: info@baroque.pk</p></Col>
      </Row>
    </Container>
    <ul className='' style={{display: 'flex', listStyleType: 'none', padding: 0, margin: 0 , marginLeft:'100px',marginTop:'50px'}}>
         <li  style={{ marginRight: '10px' }}><img src=" https://tse1.mm.bing.net/th?id=OIP.qAvEb6dwa1l715giSS_qBAHaHa&pid=Api&P=0&h=220"width="30px" height="30px" alt="" /></li>
         <li  style={{ marginRight: '10px' }}><img src="https://www.pngplay.com/wp-content/uploads/5/Instagram-Black-Logo-PNG.png"width="30px" height="30px" alt=""/></li>
         <li  style={{ marginRight: '10px' }}><img src="https://static.vecteezy.com/system/resources/previews/006/712/509/large_2x/tik-tok-flat-icon-template-black-color-editable-tik-tok-flat-icon-symbol-flat-illustration-for-graphic-and-web-design-free-vector.jpg"width="30px" height="30px" alt=""/></li>
         <li  style={{ marginRight: '10px' }}><img src="https://tse3.mm.bing.net/th?id=OIP.VKMedD_riSyt-mwW1jooHgHaGE&pid=Api&P=0&h=220"width="30px" height="30px" alt=""/></li>
      </ul>
      <div className=''style={{ textAlign: 'left',  marginLeft:'100px',marginTop:'20px'}}>
         <select name="pakistan" id="" style={{width:'200px',border:'none',backgroundColor:'white'}}>
            <option value="">Pakistan</option>
            <option value="">India</option>
            <option value="">America</option>
            <option value="">Banglladaish</option>
            <option value="">China</option>
            
         </select>
         </div>
    </div>
  )
}

export default End
