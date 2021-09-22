 import React from 'react'
 import hev from '../images/bag.jpg'
 import './Body.css'
 
 export default function Body() {
     return (
        <div>
        <h3 className="h3__card">We have Got Your Style</h3>
        <div className="card__container">
            <div className="card__wrapper">
                    <div className="card__image">
                        <img src={hev} alt="logo"  width="350px"/>
                    </div>
                    <div className="card__info">
                        <h4>{"heyy"}</h4>
                        <h4>{"5$"}</h4>
                    </div>
                    <div className="card__button">
                        <button type='submit'>Add To Cart</button>
                    </div>   
                </div>
                <div className="card__wrapper">
                    <div className="card__image">
                        <img src={hev} alt="logo" width="350px"/>
                    </div>
                    <div className="card__info">
                        <h4>{"heyy"}</h4>
                        <h4>{"5$"}</h4>
                    </div>
                    <div className="card__button">
                        <button type='submit'>Add To Cart</button>
                    </div>   
                </div>
        </div>
        </div>
     )
 }
 