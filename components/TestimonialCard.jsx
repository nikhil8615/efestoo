import React from "react";

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="main">
      <div className="testimonial-card1">
        <div className="testimonial_name">
          <img src={testimonial.image} alt={testimonial.name} />
          <h4>{testimonial.name}</h4>
        </div>
        <p>{testimonial.review}</p>
      </div>
    </div>
  );
}
