import React from "react";

function MenuPage() {
  const MENU = [
    { id: 1, name: "Greek Salad", price: 12.99 },
    { id: 2, name: "Bruschetta", price: 8.99 },
    { id: 3, name: "Lemon Dessert", price: 6.99 },
    { id: 4, name: "Pasta", price: 10.99 },
    { id: 5, name: "Grilled Fish", price: 15.99 },
  ];

  return (
    <section className="menu-page">
      <h1>Our Menu</h1>

      <div className="menu-grid">
        {MENU.map((item) => (
          <div key={item.id} className="menu-card">
            <h3>{item.name}</h3>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MenuPage;
