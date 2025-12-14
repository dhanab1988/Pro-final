import React from "react";
import { useCart } from "../context/CartContext";

const MENU = [
  { id: 1, name: "Greek Salad", price: 12.99, img: "Assets/greek salad.jpg" },
  { id: 2, name: "Bruschetta", price: 8.99, img: "Assets/bruchetta.svg" },
  { id: 3, name: "Lemon Dessert", price: 6.99, img: "Assets/lemon dessert.jpg" },
];


export default function OrderOnline() {
  const { cart, addToCart, removeFromCart } = useCart();

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <section className="order-online container">
      <h1>Order Online</h1>

      <div className="menu-grid">
        {MENU.map((item) => (
          <div key={item.id} className="menu-card">
             <img src={item.img} alt={item.name} className="menu-img" />
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(item)}
              className="btn-primary"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart */}
      <div className="cart">
        <h2>Your Cart</h2>

        {cart.length === 0 ? (
          <p>No items yet</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                {item.name} × {item.qty}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="cart-subtotal">
              <strong>Subtotal:</strong> ${subtotal.toFixed(2)}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
