import React from "react";
// import "./Hero.css";
import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const whileHoverName = { scale: 1.2, y: -39, rotate: 120 };

export default function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          animate="animate"
          initial="initial"
        >
          <div className="title">
            <motion.h1 variants={textVariants}>Hello, I'm </motion.h1>
            <motion.div variants={textVariants} className="name">
              <motion.h1 whileHover={whileHoverName}>C</motion.h1>
              <motion.h1 whileHover={whileHoverName}>e</motion.h1>
              <motion.h1 whileHover={whileHoverName}>m</motion.h1>
              <motion.h1 whileHover={whileHoverName}>u</motion.h1>
              <motion.h1 whileHover={whileHoverName}>n</motion.h1>
              <motion.h1 whileHover={whileHoverName}>d</motion.h1>
            </motion.div>
          </div>

          <motion.h2 variants={textVariants}>
            Web and Mobile developer
          </motion.h2>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 8px white",
                textShadow: "0px 0px 8px white",
              }}
              whileTap={{ scale: 0.9 }}
              className="button1"
            >
              See my Works
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
        <div className="imageContainer">
          <motion.img
            src="image.png"
            alt="cemund's image"
            initial={{ opacity: 0, y: 1000 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 1 },
            }}
          />
        </div>
      </div>
    </div>
  );
}
