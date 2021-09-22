import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import imh from '../images/bag.jpg'

export default function Carosuel() {
    return (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <div style={{width: "45%", minHeight: "20vh", display: 'flex', alignItems: 'center'}}>
            <h3 style={{fontSize: "50px", fontWeight: "bold"}}>The Best Quality Bags with Pocket Friendly Price</h3>
        </div>
        <div style={{width: "45%", minHeight: "20vh"}}>
           <Carousel
           autoPlay={true}
           infiniteLoop={true}
           showThumbs={false}
           showArrows={false}
           showStatus={false}
           stopOnHover={true}
           showIndicators={false}
           >
               <div>
                   <img src={imh} alt="Bag" />
               </div>
               <div>
                    <img src={imh} alt="Bag" />
               </div>
           </Carousel>
           </div>  
           </div>     
    )
}
