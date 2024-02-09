import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          C3M4l Dev
        </motion.span>
        <div className="socials">
          <a href="">
            <img src="/gmail-light.svg" alt="" />
          </a>
          <a href="">
            <img src="/gmail-light.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
