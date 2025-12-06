function TestimonialCard({ name, text, image }) {
  return (
    <div className="testimonial-card">
      <h4 className="rating">Rating ★★★★☆</h4>

      <img src={image} alt={name} className="testimonial-img" />

      <h5 className="testimonial-name">{name}</h5>

      <p className="testimonial-text">{text}</p>
    </div>
  );
}

export default TestimonialCard;
