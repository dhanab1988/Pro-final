// src/context/CartContext.js
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((c) => {
      const exist = c.find((i) => i.id === item.id);
      if (exist) return c.map((i) => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      return [...c, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((c) => c.filter((i) => i.id !== id));
  };

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
