import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import d from '../images/7.jpg';
import { Link } from 'react-router-dom'

import './Detail.css';

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
        <Link to='/detail'><div className="multi__wrapper">
            <img src={d} alt="" width="100%" height="300px"/>
            <p>Nice Elegant Bag</p>
            <p>Shs 20000</p>
            <p>View</p>
        </div></Link>
        <div className="multi__wrapper">
        <img src={d} alt="" width="100%" height="300"/>
            <p>Nice Elegant Bag</p>
            <p>Shs 20000</p>
            <p>View</p>
        </div>
        <div className="multi__wrapper">
        <img src={d} alt="" width="100%" height="300"/>
            <p>Nice Elegant Bag</p>
            <p>Shs 20000</p>
            <p>View</p>
        </div>
        <div className="multi__wrapper"> 
        <img src={d} alt="" width="100%" height="300"/>
            <p>Nice Elegant Bag</p>
            <p>Shs 20000</p>
            <p>View</p>
        </div>
        <div className="multi__wrapper">
        <img src={d} alt="" width="100%" height="300"/>
            <p>Nice Elegant Bag</p>
            <p>Shs 20000</p>
            <p>View</p>
        </div>
      </Carousel>
    </div>
  );
}
