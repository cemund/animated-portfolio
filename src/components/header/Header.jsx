import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <section class="header">
      <h3>C3M4l.</h3>
      <ul class="nav" id="nav">
        <li>
          <a href="#about" className="nav-about">
            ABOUT
          </a>
        </li>
        <li>
          <a href="#skills" className="nav-services">
            SERVICES
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-projects">
            PROJECTS
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-contact">
            CONTACT
          </a>
        </li>
      </ul>
    </section>
  );
}
