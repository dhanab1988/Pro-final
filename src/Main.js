import React from 'react';
import appetizers from './Assets/restaurantfood.jpg';
import greekSalad from './Assets/greek salad.jpg';
import bruchetta from './Assets/bruchetta.svg';
import lemonDessert from './Assets/lemon dessert.jpg';

function Main() {
  const dishes = [
    { image: greekSalad, title: 'Greek Salad', price: '$12.99', description: 'Traditional Greek salad with Chicago-style feta, garlic, and rosemary croutons.' },
    { image: bruchetta, title: 'Bruchetta', price: '$5.99', description: 'Grilled bread with garlic, olive oil, and seasoning.' },
    { image: lemonDessert, title: 'Lemon Dessert', price: '$5.00', description: 'Grandma\'s recipe, fresh ingredients, authentic flavor.' }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Fresh, delicious meals with authentic flavors right in the heart of Chicago.</p>
          <a href="#" className="btn">Reserve a Table</a>
        </div>
        <div className="hero-image">
          <img src={appetizers} alt="Appetizers" />
        </div>
      </section>

      {/* Specials Section */}
      <section className="specials">
        <div className="specials-header">
          <h2>This week's specials!</h2>
          <a href="#" className="btn">Online Menu</a>
        </div>
        <div className="specials-cards">
          {dishes.map((dish, index) => (
            <article key={index} className="card">
                <img src={dish.image} alt={dish.title} />

                 <div className="title-price">
                 <h3>{dish.title}</h3>
                    <p className="price">{dish.price}</p>
                    </div>

  <p>{dish.description}</p>
  <span>Delivery Available </span>
</article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
