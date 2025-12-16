import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CartBadge({ showText = false }) {
  const { cart } = useCart();

  // total quantity, not just item count
  const count = cart.reduce((sum, item) => sum + item.qty, 0);

  if (count === 0) return null;

  return (
    <Link to="/cart" className="cart-badge-link">
      🛒
      <span className="badge-count">{count}</span>
      {showText && <span className="cart-text"> Cart</span>}
    </Link>
  );
}

export default CartBadge;
