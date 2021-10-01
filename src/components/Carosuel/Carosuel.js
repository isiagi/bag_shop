import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import imh from '../images/bag.jpg'
import img6 from '../images/2.jpg'
import img12 from '../images/14.jpg'

import './Carosuel.css'

export default function Carosuel() {
    return (
        <div className="carosuel__container">
        <div className="carosuel__wrapper">
            <h3>The <span style={{color: "#BEA3A3"}}>Best Quality Bags</span> with Pocket <span style={{color: "#f1b3b3"}}>Friendly Prices</span></h3>
        </div>
        <div className="carosuel__div">
           <Carousel
           autoPlay={true}
           infiniteLoop={true}
           showThumbs={false}
           showArrows={false}
           showStatus={false}
           stopOnHover={true}
           showIndicators={false}
           dynamicHeight
           >
               <div>
                   <img src={imh} alt="Bag" height="600px"/>
               </div>
               <div>
                    <img src={img12} alt="Bag" height="600px"/>
               </div>
               <div>
                    <img src={img6} alt="Bag" height="600px"/>
               </div>
           </Carousel>
           </div>  
           </div>     
    )
}
