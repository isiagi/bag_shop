import React, { useContext } from "react";
import d from "../images/7.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from "react-router-dom";
import { AppContext } from "../Context/Context";

import "./Detail.css";
import Nav from "../Nav";
import Footer from "../Last/Last";
import Multi from "./Multi";

export default function Detail() {
  const [cartItems, setCartItems] = useContext(AppContext);
  let items = { id: 1, name: "bag", price: 1500, image: "" };

  const onAdd = (items) => {
    console.log(cartItems);
    const exist = cartItems.find((x) => x.id === items.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === items.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
      console.log(cartItems) 
    } else {
      console.log(items);
      setCartItems([...cartItems, { ...items, qty: 1 }]);
      console.log(cartItems)
    }
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
                This is a yellow hard material elegant designer bag that is fit
                in all situation
              </p>
            </div>
            <div className="detail__cart">
              <button className="detail__button" onClick={() =>  onAdd(items)}>
                <Link to="/Mycart">ADD TO CART</Link>
                {/* ADD TO CART */}
              </button>
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
