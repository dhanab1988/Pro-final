import React from "react";

export const MENU = [
  {
    id: 1,
    name: "Pizza Margherita",
    description: "Tomato sauce, oregano, garlic and fresh basil",
    price: 7.0,
    img: process.env.PUBLIC_URL + "/Assets/pizza-margherita.jpg",
    category: "Pizza",
  },
  {
    id: 2,
    name: "Pizza Capricciosa",
    description: "Tomato sauce, mozzarella, ham, artichoke, black olives, parmesan and basil",
    price: 7.0,
    img: process.env.PUBLIC_URL + "/Assets/Pizza Capricciosa.jpg",
    category: "Pizza",
  },
  {
    id: 3,
    name: "Greek Salad",
    description: "Cucumber, tomato, olives, feta cheese",
    price: 6.0,
    img: process.env.PUBLIC_URL + "/Assets/greek salad.jpg",
    category: "Salads",
  },
  {
    id: 4,
    name: "Caesar Salad",
    description: "Romaine, parmesan, croutons, Caesar dressing",
    price: 6.5,
    img: process.env.PUBLIC_URL + "/Assets/Caesar Salad.jpg",
    category: "Salads",
  },
  {
    id: 5,
    name: "Lemon Dessert",
    description: "Fresh lemon, sugar, cream",
    price: 5.0,
    img: process.env.PUBLIC_URL + "/Assets/lemon dessert.jpg",
    category: "Desserts",
  },
  {
    id: 6,
    name: "Chocolate Cake",
    description: "Rich chocolate, cream, fresh berries",
    price: 5.5,
    img: process.env.PUBLIC_URL + "/Assets/chocolate-cake.jpg",
    category: "Desserts",
  },
];

function MenuPage() {
  // Get unique categories
  const categories = [...new Set(MENU.map(item => item.category))];

  return (
    <section className="menu-page container">
      <h1>Our Menu</h1>

      {categories.map(category => (
        <div key={category} className="menu-category">
          <h2>{category}</h2>
          <div className="menu-content">
            {/* Left column: menu items */}
            <div className="menu-items">
              {MENU.filter(item => item.category === category).map(item => (
                <div key={item.id} className="menu-item">
                  <img src={item.img} alt={item.name} className="menu-thumb" />
                  <div className="menu-text">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                  <span className="menu-price">${item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>

            {/* Right column: feature image (first item in category) */}
            <div className="menu-feature">
              <img
                src={
                  MENU.find(item => item.category === category)?.img ||
                  process.env.PUBLIC_URL + "/Assets/default.jpg"
                }
                alt={`${category} Feature`}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default MenuPage;
