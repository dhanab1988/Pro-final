import { Link } from "react-router-dom";

function SpecialCard({ title, price, description, image }) {
  return (
    <div className="special-card">
      <img src={image} alt={title} />

      <div className="special-card-header">
        <h3>{title}</h3>
        <span className="price">{price}</span>
      </div>

      <p>{description}</p>

      <Link to="/order" className="order-link">
  Order a delivery 🚴
</Link>
    </div>
  );
}

export default SpecialCard;
