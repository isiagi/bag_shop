import React, {useContext} from "react";
import { Link } from "react-router-dom";
import Multi from "../Detail/Multi";
import img from "../images/6.jpg";
import Last from "../Last/Last";
import Nav from "../Nav/Nav";
import Select from "react-select";

import "./cat.css";
import { AppContext } from "../Context/Context";

const options = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
];

export default function Cat() {
  const [cartItems] = useContext(AppContext);

  const a = cartItems.map((v) => (
    { value: v.qty, label: v.qty}
  ))
  return (
    <div>
      <Nav />
      <div className="cat__container">
        <section>
          <div className="cat__wrapper1">
          
            <h1>Your Bag</h1>
            <p>
              <Link to='/Register'>Login and Checkout Faster</Link>
            </p>
          </div>
          <div className="cat__wrapper1">
            <p>
              Total items: <span class>[4 items]</span>$400
            </p>
            <button>Checkout </button>
          </div>
        </section>
        <section className="cat__wrapper3">
          <div style={{ display: "flex", gap: 10, flexDirection: "column" }}>
          {cartItems.length === 0 ? "No Items In The Cart" : cartItems.map( x => (
            <div className="cat__section2">
              <img src={img} alt="hello" />
              <div>
                <div className="cat__section3">
                  <span>
                    <h3>Elegant Designer Bag</h3>
                    <h3>Black/Leather/Elegant</h3>
                  </span>
                  <span className="cat__px">$140</span>
                </div>
                <div className="cat__select">
                  <h4>Size: large</h4>
                  
                  <Select
                    value={options.value}
                    options={options}
                    defaultValue={a}
                    className="select"
                  />
                </div>
              </div>
            </div>
          ))}
          </div>
          <div>
            <div className="cat__wrapper9">
              <h2>Order Summary</h2>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <p>original price</p>
                  <p>$300</p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                  <p>original price</p>
                  <p>$300</p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                  <p>original price</p>
                  <p>$300</p>
                </div>
              </div>
            </div>
          </div>
        </section>
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
      <div style={{ marginTop: "3rem", marginBottom: "1rem" }}>
        <h3 style={{ textAlign: "center", fontSize: "2rem" }}>
          Other Product You May Like
        </h3>
        <Multi />
      </div>
      <Last />
    </div>
  );
}
