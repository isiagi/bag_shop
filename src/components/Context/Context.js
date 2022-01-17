import React, { createContext, useState } from "react";

export const AppContext = createContext();

export function Context(props) {
  const [cartItems, setCartItems] = useState([]);
  // const [total, setTotal] = useState(0);

  const cart = (item) => {
    const exist = cartItems.find((x) => x.id === item.id);
    if (!exist) {
      setCartItems([...cartItems, { ...item }]);
    } else {
      alert("Item Already Taken");
    }
  };

  const onAdd = (items) => {
    console.log(cartItems);
    const exist = cartItems.find((x) => x.id === items.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === items.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
      console.log(cartItems);
    } else {
      console.log(items);
      setCartItems([...cartItems, { ...items, qty: 1 }]);
      // alert("No item")
      console.log(cartItems);
    }
  };
  console.log(cartItems);

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) return;
    setCartItems(
      cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      )
    );
  };

  const onDeleted = (product) => {
    if (window.confirm("Do you want to delete this product?")) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    }
  };

  // const getTotalItems = () => {
  //   const itemPrice =
  //     cartItems && cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  //   const delieveryPrice = "3000";
  //   // eslint-disable-next-line
  //   const totalPrice = parseInt(itemPrice) + parseInt(delieveryPrice);
  //   setTotal(totalPrice)
  // };

  return (
    <AppContext.Provider
      value={{ cartItems, setCartItems, onAdd, onRemove, cart, onDeleted }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
