import React, { useState } from 'react';
import d from '../images/7.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import './Detail.css';
import Nav from '../Nav';
import Multi from './Multi';

export default function Detail() {
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleSub = () => {
    if (count === 1) return;
    setCount(count - 1);
  };
  return (
    <div>
    <Nav />
    <div className="detail__container">
      <div className="detail__wrapper">
        <div className="detail__img">
          <img src={d} alt="Bag" />
        </div>
        <div className="detail__word">
          <div className="detail__text">
            <h2>Elegant Designer Bag</h2>
            <h3>
              <small>Price</small> Shs 20,000
            </h3>
          </div>
          <div className="detail__description">
            <p>
              This is a yellow hard material elegant designer bag that is fit in
              all situation
            </p>
          </div>
          <div className="detail__cart">
            <button className="detail__button">ADD TO CART</button>
          </div>
        </div>
      </div>
      <section className="detail__info">
        <div className="onee">
          <i class="fas fa-lock"></i>
          <p>We offer product that fix your description, No fake product</p>
        </div>
        <div className="onee">
          <i class="fas fa-truck"></i>
          <p>We offer product that fix your description, No fake product</p>
        </div>
        <div className="onee">
          <i class="fas fa-undo"></i>
          <p>We offer product that fix your description, No fake product</p>
        </div>
      </section>
      <section className="detail__set">
        <h3>PREVIEWERS</h3>
        <div style={{ marginTop: '20px' }}>
          <div className="detail__preview">
            <i class="fas fa-user-circle"></i>
            <p>I found this bag to be the best of kind and I deeply love it</p>
          </div>
          <p style={{ textAlign: 'center' }}>
            Rating <i class="fal fa-star"></i>
          </p>
        </div>
        <div style={{ marginTop: '20px' }}>
          <div className="detail__preview">
            <i class="fas fa-user-circle"></i>
            <p>I found this bag to be the best of kind and I deeply love it</p>
          </div>
          <p style={{ textAlign: 'center' }}>
            Rating <i class="fal fa-star"></i>
          </p>
        </div>
        <div style={{ marginTop: '20px' }}>
          <div className="detail__preview">
            <i class="fas fa-user-circle"></i>
            <p>I found this bag to be the best of kind and I deeply love it</p>
          </div>
          <p style={{ textAlign: 'center' }}>
            Rating <i class="fal fa-star"></i>
          </p>
        </div>
      </section>
      <section className="content">
      <h3>Related Products</h3>
        <Multi />
      </section>
    </div>
    </div>
  );
}
