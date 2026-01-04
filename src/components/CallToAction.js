import React from "react";
import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="cta">
      <div className="cta-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family-owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link to="/booking">
          <button type="button">Reserve a Table</button>
        </Link>
      </div>

      <div className="cta-image">
        <img
          src={process.env.PUBLIC_URL + "/Assets/restaurantfood.jpg"}
          alt="Restaurant food"
        />
      </div>
    </section>
  );
}

export default CallToAction;
