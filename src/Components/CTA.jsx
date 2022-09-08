import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import styles from "../style";
import Button from "./Button";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
      ref={ref}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>
          Let’s try our service{" "}
          <span
            className="text-gradient"
            style={{
              transform: isInView ? "none" : "translateY(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            now
          </span>{" "}
          !
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      <div
        className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <Button styles="w-[250px] h-[80px] text-2xl" />
      </div>
    </section>
  );
};

export default CTA;
