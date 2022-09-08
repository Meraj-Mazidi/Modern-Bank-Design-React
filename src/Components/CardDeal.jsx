import React, { useRef } from "react";
import styles, { layout } from "../style";
import { card } from "../assets";
import Button from "./Button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const CardDeal = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section className={layout.section} ref={ref}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          <span>Find a better card deal</span>{" "}
          <br className="sm:block hidden" /> in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          nam enim a saepe blanditiis voluptatum iste facilis fugiat adipisci
          obcaecati?
        </p>
        <span
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <Button styles="mt-10" />
        </span>
      </div>

      {/* right side */}
      <div
        className={layout.sectionImg}
        style={{
          transform: isInView ? "none" : "translateX(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
