import React, { useContext, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Basket from "./Basket";
import data from "../../data";
import { AppContext } from "../Context/Context";

import "./Kart.css";

function Cart() {
  const { products } = data;
  const [cartItems, onAdd, onRemove] = useContext(AppContext);
  
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div>
    </div>
  );
}

export default Cart;
