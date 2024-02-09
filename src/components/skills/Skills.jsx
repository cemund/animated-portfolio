import React, { userRef, useEffect, useState } from "react";
import "./Skills.css";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section class="skills" id="skills">
      <div className="stacks">
        <div className="stack">
          <img src="./postgresql.svg" alt="postgresql icon" height="100" />
          <img src="./express.svg" alt="express icon" height="100" />
          <img src="/react.svg" alt="react icon" height="100" />
          <img src="./node.svg" alt="node js icon" height="100" />
        </div>
      </div>

      <p>my tech stack.</p>
      <h1>WEB AND MOBILE APP DEVELOPMENT</h1>
    </section>
  );
}
