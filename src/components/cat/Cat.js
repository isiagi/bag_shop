import React, { useContext} from "react";
import { Link } from "react-router-dom";
import Multi from "../Detail/Multi";
import Last from "../Last/Last";
import Nav from "../Nav/Nav";

import "./cat.css";
import { AppContext } from "../Context/Context";

export default function Cat() {
  const { cartItems, onAdd, onRemove, onDeleted } = useContext(AppContext);
  console.log(cartItems);
  // const items = cartItems.filter(cart => cart.cart)
  //  alert(JSON.stringify(items))
  const itemPrice =
    cartItems && cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const delieveryPrice = "3000";
  const totalPrice = parseInt(itemPrice) + parseInt(delieveryPrice);

  // const a = cartItems.map((v) => ({ value: v.qty, label: v.qty }));
  return (
    <div>
      <Nav />
      <div className="cat__container">
        <section>
          <div className="cat__wrapper1">
            <h1>Your Bag</h1>
            <p>
              <Link to="/Register">Login and Checkout Faster</Link>
            </p>
          </div>
          <div className="cat__wrapper1">
            <p>
              Total items:{" "}
              <span class>[{cartItems && cartItems.length} items]</span>$400
            </p>
            <button>Checkout </button>
          </div>
        </section>
        <section className="cat__wrapper3">
          <div style={{ display: "flex", gap: 10, flexDirection: "column" }}>
            {cartItems && cartItems.length === 0
              ? "No Items In The Cart"
              : cartItems &&
                cartItems.map((x) => (
                  <div className="cat__section2">
                    <img src={x.image} alt="hello" />
                    <div>
                      <div className="cat__section3">
                        <span>
                          <h3>{x.name}</h3>
                          <h3>Black/Leather/Elegant</h3>
                        </span>
                        <span className="cat__px">Shs {x.price * x.qty}</span>
                      </div>
                      <span onClick={() => onDeleted(x)}>X</span>
                      <div className="cat__select">
                        <h4>Size: large</h4>
                        <div className="cat__buttons">
                          <button
                            className="cat__pa"
                            onClick={() => onRemove(x)}
                          >
                            -
                          </button>
                          {x.qty}
                          <button className="cat__pa" onClick={() => onAdd(x)}>
                            +
                          </button>
                        </div>
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
                  <p>Shs {itemPrice}</p>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <p>Deliever price</p>
                  <p>Shs {itemPrice && delieveryPrice}</p>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <p>Total price</p>
                  <p>Shs {itemPrice && totalPrice}</p>
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
