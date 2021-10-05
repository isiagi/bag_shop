import React, { useState, useEffect } from 'react';
import API from '../../api';
import hev from '../images/bag.jpg';
import './Body.css';
import { Link } from 'react-router-dom';

export default function Body() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    col();
  }, data);

  const col = async () => {
    const res = await API.get('products');
    setData(res.data.data);
  };
  console.log(data);
  return (
    <div>
      <h3 className="h3__card">We have Got Your Style</h3>
      <div className="card__container">
        {data.map((card) => (
          <div className="card__wrapper">
            <div className="card__image">
              <img src={hev} alt="logo" width="350px" />
            </div>
            <div className="card__info">
              <h4>{card.productDescription}</h4>
              <h4>{card.price}</h4>
            </div>
            <div className="card__button">
              <button type="submit">
                <Link to={`/details/${card._id}`}>Add To Cart</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
