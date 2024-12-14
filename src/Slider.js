import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
function Slider() {
  return (
    <Carousel fade >
      <Carousel.Item className='p-0'>
        <img
          className="d-block w-100"
          src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/b/a/banner_89.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/m/e/men1_9.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/m/e/men_banner_online_edition_.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider
