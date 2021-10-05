import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import d from '../images/7.jpg';

export default function Multi() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel responsive={responsive}>
        <div style={{}}>
            <img src={d} alt="" width="200px" height="300px"/>
            <p>Nice Elegant Bag</p>
            <p>Shs 20000</p>
        </div>
        <div style={{}}>
        <img src={d} alt="" width="200" height="300"/>
            <p>Nice Elegant Bag</p>
            <p>Shs 20000</p>
        </div>
        <div style={{ }}>
        <img src={d} alt="" width="200" height="300"/>
            <p>Nice Elegant Bag</p>
            <p>Shs 20000</p>
        </div>
        <div>
        <img src={d} alt="" width="200" height="300"/>
            <p>Nice Elegant Bag</p>
            <p>Shs 20000</p>
        </div>
        <div>
        <img src={d} alt="" width="200" height="300"/>
            <p>Nice Elegant Bag</p>
            <p>Shs 20000</p>
        </div>
      </Carousel>
    </div>
  );
}
