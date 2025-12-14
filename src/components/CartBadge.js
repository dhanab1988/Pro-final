import React from "react";
import { useCart } from "../context/CartContext";

export default function CartBadge() {
  const { cartCount } = useCart();

  return (
    <div className="cart-badge">
      🛒
      {cartCount > 0 && (
        <span className="cart-count">{cartCount}</span>
      )}
    </div>
  );
}
