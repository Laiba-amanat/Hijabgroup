import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


function Next() {
  return (
    <div className='mt-5'>
        <hr />
        <div style={{fontSize:'50px',textDecoration:'underline'}}>SHOP THE LOOK</div>
    <Carousel data-bs-theme="dark">
    <Carousel.Item>
    <div className="flex justify-evenly  h-[800px]">
      <div className=" w-500 h-[700px] p-5"><img
        className="w-500 h-[700px]"
        src="https://baroque.pk/cdn/shop/files/Shop_The_Look76.jpg?v=1725975148&width=800"
        alt="First slide"
      /></div>
      <div className="w-300 h-[700px]  flex   justify-evenly items-center">
          <div className="w-300 h-[400px]" >
          <img
        className="w-300 h-[400px]"
        src="https://baroque.pk/cdn/shop/files/24_d8ca67ea-d0ee-48da-95db-a57ed8b3055f.jpg?v=1725624149&width=1000"
        alt="First slide"
      /> 
      <br />
      <p>EMBRODARY PRINTED LAWN <br />UF-711 <br/> <span style={{fontWeight:'bold'}}>PKR 899.00</span> <br /> <button className="bg-black text-white px-4 py-2 text-lg" style={{fontSize:'20px', border:'2px solid white'}}>VIEW PRODUCT</button> </p>
          </div>
          {/* <div className='w-300 h-[200px]'>kfpoiewur</div> */}
      </div>
     
    </div>
  
    </Carousel.Item>
    <Carousel.Item>
    <div className="flex justify-evenly  h-[800px]">
      <div className=" w-500 h-[700px] p-5"><img
        className="w-500 h-[700px]"
        src="https://baroque.pk/cdn/shop/files/Shop_The_Look75.jpg?v=1725265568&width=1000"
        alt="First slide"
      /></div>
      <div className="w-300 h-[700px]  flex   justify-evenly items-center">
          <div className="w-300 h-[400px]" >
          <img
        className="w-300 h-[400px]"
        src="https://baroque.pk/cdn/shop/files/133_b58ef877-3768-4a51-be77-57b70661e81e.jpg?v=1724493924&width=1000"
        alt="First slide"
      /> 
      <br />
      <p>EMBRODARY PRINTED LAWN <br />UF-711 <br/> <span style={{fontWeight:'bold'}}>PKR 899.00</span> <br /> <button className="bg-black text-white px-4 py-2 text-lg" style={{fontSize:'20px', border:'2px solid white'}}>VIEW PRODUCT</button> </p>
          </div>
          {/* <div className='w-300 h-[200px]'>kfpoiewur</div> */}
      </div>
     
    </div>
    </Carousel.Item>
    <Carousel.Item>
    <div className="flex justify-evenly  h-[800px]">
      <div className=" w-500 h-[700px] p-5"><img
        className="w-500 h-[700px]"
        src="https://baroque.pk/cdn/shop/files/Shop_The_Look77.jpg?v=1725975311&width=1000"
        alt="First slide"
      /></div>
      <div className="w-300 h-[700px]  flex   justify-evenly items-center ">
          <div className="w-300 h-[400px]" >
          <img
        className="w-300 h-[400px]"
        src="https://baroque.pk/cdn/shop/files/62_9bb5b00f-523f-4430-86e6-54b287245c7b.jpg?v=1725626909&width=1000"
        alt="First slide"
      /> 
      <br />
      <p>EMBRODARY PRINTED LAWN <br />UF-711 <br/> <span style={{fontWeight:'bold'}}>PKR 899.00</span> <br /> <button className="bg-black text-white px-4 py-2 text-lg" style={{fontSize:'20px', border:'2px solid white'}}>VIEW PRODUCT</button> </p>
          </div>
          {/* <div className='w-300 h-[200px]'>kfpoiewur</div> */}
      </div>
     
    </div>
    </Carousel.Item>
  </Carousel>
  </div>

  )
}

export default Next
