import React, { useContext} from "react";
import { Link } from "react-router-dom";
import Multi from "../Detail/Multi";
import Last from "../Last/Last";
import Nav from "../Nav/Nav";
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

import "./cat.css";
import { AppContext } from "../Context/Context";

export default function Cat() {
  const { cartItems, onAdd, onRemove, onDeleted } = useContext(AppContext);
  console.log(cartItems);
  const itemPrice =
    cartItems && cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const delieveryPrice = "3000";
  const totalPrice = parseInt(itemPrice) + parseInt(delieveryPrice);

  const config = {
    public_key: 'FLWPUBK_TEST-995d55339f4c8ccc70c0399055fdaedc-X',
    tx_ref: Date.now(),
    amount: 100,
    currency: 'UGX',
    country: "UGANDA",
    payment_options: 'mobilemoneyuganda',
    customer: {
      email: 'user@gmail.com',
      phonenumber: '0754008497',
      name: 'joel ugwumadu',
    },
    customizations: {
      title: 'Nalwanga My Wife',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

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
            <button onClick={() => {handleFlutterPayment({
              callback: (response) => {
                console.log(response)
                closePaymentModal()
              },
              onClose: () => {},
            })}}>Checkout </button>
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
                          <h3>Black/Leather</h3>
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
