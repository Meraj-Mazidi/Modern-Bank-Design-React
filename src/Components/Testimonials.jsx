import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import styles, { layout } from "../style";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const fromTop = {
    transform: isInView ? "none" : "translateY(-200px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  };

  const fromBottom = {
    transform: isInView ? "none" : "translateY(200px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  };

  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative w-full`}
      ref={ref}
    >
      {/* background gradient */}
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

      {/* top content */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2} style={fromTop}>
          <span>What people are</span>
          <br className="sm:block hidden" />
          <span>saying about us</span>
        </h1>
        <div className="w-full md:mt-0 mt-6" style={fromBottom}>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
