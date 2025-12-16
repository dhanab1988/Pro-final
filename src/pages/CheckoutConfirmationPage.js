import { useLocation, useNavigate, Link } from "react-router-dom";

function CheckoutConfirmationPage() {
  const { state } = useLocation(); // Receive cart & subtotal via router state
  const navigate = useNavigate();

  const cartData = state?.cart || [];
  const subtotal = state?.subtotal || 0;

  if (cartData.length === 0) {
    return (
      <section className="confirmation-page">
        <h2>No items in your cart</h2>
        <button onClick={() => navigate("/order-online")}>
          Go to Menu
        </button>
      </section>
    );
  }

  return (
    <section className="confirmation-page">
      <h1>Order Confirmed ✔</h1>
      <p>Thank you for your order! Your delicious meal is on its way.</p>

      <table className="confirmation-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>${(item.price * item.qty).toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="2" className="label">Subtotal</td>
            <td className="value">${subtotal.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

      {/* Navigation Actions */}
      <div className="confirmation-actions">
        <button onClick={() => navigate("/order-online")}>
          Back to Menu
        </button>

        <Link to="/" className="home-link">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default CheckoutConfirmationPage;
