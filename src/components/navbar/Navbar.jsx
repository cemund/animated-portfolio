import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="navbar">
      {/* <Sidebar /> */}
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          C3M4l Dev
        </motion.span>
        <motion.div
          className="socials"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.a
            href="#About"
            whileHover={{
              textShadow: "0px 0px 4px white",
              scale: 1.2,
            }}
            whileTap={{ scale: 0.8 }}
          >
            About
          </motion.a>
          |
          <motion.a
            href="#Services"
            whileHover={{
              scale: 1.2,
              textShadow: "0px 0px 4px white",
            }}
            whileTap={{ scale: 0.8 }}
          >
            Services
          </motion.a>
          |
          <motion.a
            href="#Portfolio"
            whileHover={{
              textShadow: "0px 0px 4px white",
              scale: 1.2,
            }}
            whileTap={{ scale: 0.8 }}
          >
            Portfolio
          </motion.a>
          |
          <motion.a
            href="#Contact"
            whileHover={{
              textShadow: "0px 0px 4px white",
              scale: 1.2,
            }}
            whileTap={{ scale: 0.8 }}
          >
            Contact
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
