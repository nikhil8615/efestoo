"use client";
import React, { useRef } from "react";
import "./TrendingEvents.css";

const eventData = [
  {
    title: "Bring your vision to life",
    subtitle: "Create and manage extraordinary events effortlessly!",
    button: "Register now",
  },
  {
    title: "Bring your vision to life",
    subtitle: "Create and manage extraordinary events effortlessly!",
    button: "Register now",
  },
  {
    title: "Bring your vision to life",
    subtitle: "Create and manage extraordinary events effortlessly!",
    button: "Register now",
  },
  {
    title: "Plan like a pro",
    subtitle: "Turn your ideas into impactful experiences.",
    button: "Join now",
  },
  {
    title: "Your event, your way",
    subtitle: "Seamless tools for unforgettable events.",
    button: "Get Started",
  },
  {
    title: "Host. Engage. Impress.",
    subtitle: "All-in-one event hosting made easy.",
    button: "Start now",
  },
  {
    title: "Host. Engage. Impress.",
    subtitle: "All-in-one event hosting made easy.",
    button: "Start now",
  },
];

const TrendingEvents = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const amount = 340;
    current.scrollLeft += direction === "left" ? -amount : amount;
  };

  return (
    <div className="trending-container">
      <h2 className="trending-heading"> Trending Events</h2>

      <div className="trending-slider-wrapper">
        <button className="scroll-btn left" onClick={() => scroll("left")}>
          ‹
        </button>
        <div className="trending-slider" ref={scrollRef}>
          {eventData.map((event, idx) => (
            <div className="event-card" key={idx}>
              <div className="event-info">
                <h3>{event.title}</h3>
                <p>{event.subtitle}</p>
                <button className="event-btn">{event.button}</button>
              </div>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scroll("right")}>
          ›
        </button>
      </div>
    </div>
  );
};

export default TrendingEvents;
