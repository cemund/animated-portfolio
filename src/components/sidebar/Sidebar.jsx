import { useState } from "react";
import Links from "./links/Links";
import { motion } from "framer-motion";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";

const variants = {
  initial: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 100, // Adjust stiffness
      damping: 20, // Adjust damping
    },
  },

  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 100, // Adjust stiffness
      damping: 20, // Adjust damping
    },
  },
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 100, // Adjust stiffness
      damping: 20,
    },
  },
};
export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        className="sidebar"
        initial="initial"
        animate={!open ? "closed" : "open"}
      >
        <motion.div className="bg" variants={variants}>
          <Links />
        </motion.div>
        <ToggleButton setOpen={setOpen} />
      </motion.div>
    </>
  );
}
