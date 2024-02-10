import React, { userRef, useEffect, useState } from "react";
// import "./Skills.css";
import { useRef } from "react";
import "./skills.scss";
import { motion, useInView } from "framer-motion";

const languages = [
  "./dart.svg",
  "./javascript.svg",
  "./php.svg",
  "./python.svg",
  "./java.svg",
];
const frameworks = [
  "./react.svg",
  "./laravel.svg",
  "./flutter.svg",
  "./express.svg",
  "./flask.svg",
];
const database = [
  "./firebase.svg",
  "./mongo.svg",
  "./mysql.svg",
  "./postgresql.svg",
];

const variants = (delay) => ({
  initial: {
    y: -500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delayChildren: delay,
      type: "spring",
      staggerChildren: 0.2,
    },
  },
});

export default function Skills() {
  const ref = useRef();
  const reficons = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <section class="skills" id="skills" ref={ref}>
      <div className="wrapper" ref={reficons}>
        <div className="stacks">
          <motion.div
            className="stack"
            variants={variants(0)}
            initial="initial"
            animate={isInView && "animate"}
          >
            {languages.map((item) => (
              <motion.img
                src={item}
                height={100}
                variants={variants(0)}
                drag
                draggable="false"
                dragConstraints={reficons}
              />
            ))}
          </motion.div>
          <motion.div
            className="stack"
            variants={variants(1)}
            initial="initial"
            animate={isInView && "animate"}
          >
            {frameworks.map((item) => (
              <motion.img
                src={item}
                height={100}
                variants={variants(1)}
                drag
                draggable="false"
                dragConstraints={reficons}
              />
            ))}
          </motion.div>
          <motion.div
            className="stack"
            variants={variants(2)}
            initial="initial"
            animate={isInView && "animate"}
          >
            {database.map((item) => (
              <motion.img
                src={item}
                height={100}
                variants={variants(2)}
                drag
                draggable="false"
                dragConstraints={reficons}
              />
            ))}
          </motion.div>
        </div>

        <p>Move the icons by dragging.</p>

        <h1>
          <motion.span whileHover={{ color: "#41add8" }}>
            <bold>WEB</bold>
          </motion.span>{" "}
          and{" "}
          <motion.span whileHover={{ color: "#41add8" }}>
            <bold>MOBILE</bold>
          </motion.span>{" "}
          app DEVELOPMENT
        </h1>
        <p>my tech stack.</p>
      </div>
    </section>
  );
}
