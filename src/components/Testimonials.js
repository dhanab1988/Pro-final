import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  const reviews = [
    { name: "Vicky", text: "Review text", image: "/Assets/user1.avif" },
    { name: "Stella", text: "Review text", image: "/Assets/user2.avif" },
    { name: "Merline", text: "Review text", image: "/Assets/user3.avif" },
    { name: "Jacob", text: "Review text", image: "/Assets/user4.avif" },
  ];

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>

      <div className="testimonials-grid">
        {reviews.map((review, index) => (
          <TestimonialCard key={index} {...review} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
