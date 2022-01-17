import React, { useContext } from "react";
import Header from "./Header";
import Main from "./Main";
import Basket from "./Basket";
import data from "../../data";
import { AppContext } from "../Context/Context";

// import {onAdd} from '../utils/Util'

import "./Kart.css";

function Cart() {
  const { products } = data;
  const [cartItems, setCartItems] = useContext(AppContext);
  // const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist) {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        );
        console.log(cartItems);
      } else {
        setCartItems([...cartItems, { ...product, qty: 1 }]);
        console.log(cartItems);
      }
    };

  // const onAdd = onAdd(cartItems, products, setCartItems)

    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
          setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
          setCartItems(
            cartItems.map((x) =>
              x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
            )
          );
        }
      };
  
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
