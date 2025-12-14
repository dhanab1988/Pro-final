import React from "react";
import { useNavigate } from "react-router-dom";
import restaurantFood from "./Assets/restauranfood.jpg";

function HeroSection() {
   
  return (
    <section className="home-hero">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family-owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link to="/booking">
  <button className="reserve-btn">Reserve a Table</button>
</Link>

        </div>
      <div className="hero-image">
        <img src={restaurantFood} alt="Restaurant Food" />
      </div>
    </section>
  );
}

export default HeroSection;
