import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
  return (
  //   <Carousel>
  //   <Carousel.Item>
  //     <img
  //       className="d-block w-100"
  //       style={{height: '370px'}}
  //       src="https://cdn.shopify.com/s/files/1/0997/6284/files/image_2023_02_07T13_08_57_429Z_1_1_1500x.png?v=1675793312"
  //       alt="First slide"
  //     />
    
  //   </Carousel.Item>
  //   <Carousel.Item>
  //     <img
  //       className="d-block w-100"
  //       style={{height: '370px'}}
  //       src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2_14329a9e-8a5d-4795-8a7a-50d40065a33f_1400x.jpg?v=1675417827"
  //       alt="Second slide"
  //     />

     
  //   </Carousel.Item>
  //   <Carousel.Item>
  //     <img
  //       className="d-block w-100"
  //       style={{height: '370px'}}
  //       src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortal-131_desktop_1400x.jpg?v=1675066019"
  //       alt="Third slide"
  //     />

  //   </Carousel.Item>
  // </Carousel>
  <>
  <div className="maylike-products-wrapper">
          <div className="marquee">
            <div className="maylike-products-container track">
             <img src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/445-360_without_CTA_445x.jpg?v=1669790046'       style={{width: '300px', height: '300px'}} />
             <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/newsletter_carousel-banner_445x.png?v=1672738706"      style={{width: '300px', height: '300px'}}  />
             <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Bring_Your_World_On_Your_Wrist_446x360_66921214-c5ee-4bda-a433-f52b1c2124d4_445x.jpg?v=1672749745"      style={{width: '300px', height: '300px'}}  />
             <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD113.jpg?v=1665574303"      style={{width: '300px', height: '300px'}}  />
             <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/stone_1_445x.png?v=1670244742"      style={{width: '300px', height: '300px'}}  />
             <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/121_2f8218b7-7c14-4d7b-b493-8e4373939c04.jpg?v=1665574319"      style={{width: '300px', height: '300px'}}  />
             <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/carousel_banner_445x.png?v=1671097960"      style={{width: '300px', height: '300px'}}  />
             <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortal-121.jpg?v=1671621358"      style={{width: '300px', height: '300px'}}  />
            </div>
          </div>
      </div>
  </>
  )
}

export default FooterBanner