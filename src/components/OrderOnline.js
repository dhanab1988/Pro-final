import React from "react";
import { useCart } from "../context/CartContext";
import { MENU } from "../pages/MenuPage";
import { useNavigate } from "react-router-dom";

export default function OrderOnline() {
  const { cart, addToCart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Navigate to checkout confirmation page with cart and subtotal
    navigate("/checkout-confirmation", { state: { cart, subtotal } });
  };

  return (
    <section className="order-page container">
      <h1>Order Online</h1>

      <div className="order-content">
        {/* Menu Grid */}
        <div className="order-grid">
          {MENU.map((item) => (
            <div key={item.id} className="order-card">
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p className="description">{item.description}</p>
              <p className="price">${item.price.toFixed(2)}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>

        {/* Cart Section */}
        <div className="cart">
          <h2>Your Cart</h2>

          {cart.length === 0 ? (
            <p>No items yet</p>
          ) : (
            <div>
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <span>
                    {item.name} × {item.qty}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>
              ))}

              <div className="cart-subtotal">
                Subtotal: ${subtotal.toFixed(2)}
              </div>

              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout - ${subtotal.toFixed(2)}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
