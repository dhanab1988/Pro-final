import SpecialCard from "./SpecialCard";

function Specials() {
  const specials = [
    {
      title: "Greek Salad",
      price: "$12.99",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and Chicago style feta cheese.",
      image: "Assets/greek salad.jpg",
    },
    {
      title: "Bruchetta",
      price: "$5.99",
      description:
        "Our Bruchetta is made from grilled bread that has been smeared with garlic and olive oil.",
      image: "Assets/bruchetta.svg",
    },
    {
      title: "Lemon Dessert",
      price: "$5.00",
      description:
        "Straight from grandma's recipe book, every last ingredient is as authentic as can be imagined.",
      image: "Assets/lemon dessert.jpg",
    },
  ];

  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This week Specials!</h2>
        <button>Online Menu</button>
      </div>

      <div className="specials-grid">
        {specials.map((item, index) => (
          <SpecialCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Specials;
