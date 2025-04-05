"use client";
import React from "react";
import { testimonials } from "../data/testimonial";
import TestimonialCard from "./TestimonialCard";
import "../app/globals.css";

const Testimonial = () => {
  const repeatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="testimonial-container">
      <h1>Here what your friends says</h1>
      <div className="testimonial-track">
        {repeatedTestimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
