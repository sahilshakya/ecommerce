import React, { useState } from "react";
import CartContext from "./CartContext";

const CartState = ({ children }) => {
  const [cartProduct, setCartProduct] = useState([]);

  const addProduct = (id) => {
    // cartProduct.push(id);
    // setCartProduct(cartProduct);
    setCartProduct((prev) => [...prev, id]);
  };
  const removeFromCart = (id) => {
    // index === "-1";
    const index = cartProduct.findIndex((prod) => {
      return prod._id !== id;
    });
    if (index !== -1) {
      const prods = cartProduct.filter((_, i) => {
        return i !== index;
      });
      setCartProduct(prods);
    }
  };

  const findProductInCartId = (id) => {
    const filteredProds = cartProduct.filter((value) => {
      return value === id;
    });
    setCartProduct(filteredProds);
    return filteredProds.length;
  };

  return (
    <CartContext.Provider
      value={{ cartProduct, addProduct, removeFromCart, findProductInCartId }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
