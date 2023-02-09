import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroBanner = () => {
  return (
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{height: '370px'}}
              src="https://cdn.shopify.com/s/files/1/0997/6284/files/image_2023_02_08T11_50_53_143Z_1_1500x.png?v=1675920785"
              alt="First slide"
            />
          
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{height: '370px'}}
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2_14329a9e-8a5d-4795-8a7a-50d40065a33f_1400x.jpg?v=1675417827"
              alt="Second slide"
            />
    
           
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{height: '370px'}}
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortal-131_desktop_1400x.jpg?v=1675066019"
              alt="Third slide"
            />
    
          </Carousel.Item>
        </Carousel>
      );          
}

export default HeroBanner