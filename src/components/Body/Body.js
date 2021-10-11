import React from 'react';
import hev from '../images/bag.jpg';
import o from '../images/1.jpg';
import k from '../images/2.jpg';
import a from '../images/3.jpg';
import './Body.css';
import { Link } from 'react-router-dom';

export default function Body() {
  return (
    <div>
      <h3 className="h3__card">We have Got Your Style</h3>
      <div className="card__container">
        <Link to="/detail">
          <div className="card__wrapper">
            <div className="card__image">
              <img src={hev} alt="logo" width="300px" />
            </div>
            <div className="card__info">
              <h4>{'Designer Hand Bag'}</h4>
              <h4 className="card__h4">Price {'60,000'}shs</h4>
            </div>
          </div>
        </Link>
        <Link to="/detail">
          <div className="card__wrapper">
            <div className="card__image">
              <img src={o} alt="logo" width="350px" height="300px"/>
            </div>
            <div className="card__info">
              <h4>{'Designer Hand Bag'}</h4>
              <h4 className="card__h4">Price {'60,000'}shs</h4>
            </div>
          </div>
        </Link>
        <Link to="/detail">
          <div className="card__wrapper">
            <div className="card__image">
              <img src={k} alt="logo" width="300px" height="300px"/>
            </div>
            <div className="card__info">
              <h4>{'Designer Hand Bag'}</h4>
              <h4 className="card__h4">Price {'60,000'}shs</h4>
            </div>
          </div>
        </Link>
        <Link to="/detail">
          <div className="card__wrapper">
            <div className="card__image">
              <img src={a} alt="logo" width="350px" height="300px"/>
            </div>
            <div className="card__info">
              <h4>{'Designer Hand Bag'}</h4>
              <h4 className="card__h4"><em>Price {'60,000'}shs</em></h4>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
