import React, { useContext,useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from "react-router-dom";
import { AppContext } from "../Context/Context";
import {productData} from '../API/EndPoints/AppData'

import "./Detail.css";
import Nav from "../Nav";
import Footer from "../Last/Last";
import Multi from "./Multi";

export default function Detail({match}) {
  const { cart } = useContext(AppContext);
  const [item, setItems] = React.useState({})

  useEffect(() => { 
    const g = productData.filter(item => {
      
       return parseInt(match.params.id) === item.id
    })
    console.log(g)
    setItems(g[0])
  }, [])


  console.log(item)
  return (
    <div>
      <Nav />
      <div className="detail__container">
        <div className="detail__wrapper">
          <div className="detail__img">
            <img src={item.image} alt="Bag" />
          </div>
          <div className="detail__word">
            <div className="detail__text">
              <h2>{item.name}</h2>
              <h3>original leather / black</h3>
              <h3 >
                <p>Price {item.price}</p> 
              </h3>
            </div>
            <div className="detail__description">
              <p>
                This is a yellow hard material elegant designer bag that is fit
                in all situation
              </p>
            </div>
            <div className="detail__cart">
            <div>
              <button className="detail__button" >
                <Link to="/Mycart" onClick={() =>  cart(item)}>ADD TO CART</Link>
              </button>
            </div>
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
        <section className="section__wrapper">
          <div className="detail__set">
            <h3 style={{ color: "orange" }}>PREVIEWERS</h3>
            <div style={{ marginTop: "20px" }}>
              <h2>Collo Dev</h2>
              <div className="detail__preview">
                <p>
                  <em>
                    I found this bag to be the best of kind and I deeply love it
                  </em>
                </p>
              </div>
              <p style={{ textAlign: "center" }}>
                <i class="fal fa-star"></i>
                <i class="fal fa-star"></i>
                <i class="fal fa-star"></i>
                <i class="fal fa-star"></i>
                <i class="fal fa-star"></i>
              </p>
            </div>
            <div style={{ marginTop: "20px" }}>
              <h2>Collo Dev</h2>
              <div className="detail__preview">
                <p>
                  <em>
                    I found this bag to be the best of kind and I deeply love it
                  </em>
                </p>
              </div>
              <p style={{ textAlign: "center" }}>
                <i class="fal fa-star"></i>
                <i class="fal fa-star"></i>
                <i class="fal fa-star"></i>
                <i class="fal fa-star"></i>
                <i class="fal fa-star"></i>
              </p>
            </div>
            <div style={{ marginTop: "20px" }}>
              <h2>Collo Dev</h2>
              <div className="detail__preview">
                <p>
                  <em>
                    I found this bag to be the best of kind and I deeply love it
                  </em>
                </p>
              </div>
              <p style={{ textAlign: "center" }}>
                <i class="fal fa-star"></i>
                <i class="fal fa-star"></i>
                <i class="fal fa-star"></i>
                <i class="fal fa-star"></i>
                <i class="fal fa-star"></i>
              </p>
            </div>
          </div>
          <div>
            <h2>SUBMIT YOUR PREVIEW</h2>
            <form>
              <input type="text" placeholder="name" />
              <br />
              <input type="text" placeholder="email" />
              <br />
              <textarea placeholder="Enter Preview Here"></textarea>
              <br />
              <button
                type="submit"
                style={{ background: "orange", color: "white" }}
              >
                Submit Preview
              </button>
              <br />
            </form>
          </div>
        </section>
        <section className="content">
          <h3>Related Products</h3>
          <Multi />
        </section>
      </div>
      <Footer />
    </div>
  );
}
