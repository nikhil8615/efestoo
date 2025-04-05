import React from "react";
import Image from "next/image";
import styles from "./EventHighlight.module.css";

export default function EventHighlight() {
  return (
    <div className={styles.highlightContainer}>
      <div className={styles.highlightLeft}>
        <h2>
          Bring your vision to life—create and manage extraordinary events
          effortlessly!
        </h2>
        <p>Start your journey as a creator today</p>
        <button>Create Event</button>
      </div>
      <div className={styles.highlightRight}>
        {/* <img
          src="/images/banner_people.png"
          alt="People collaborating"
          width={300}
          height={300}
        /> */}
      </div>
    </div>
  );
}
