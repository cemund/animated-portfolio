import React from "react";
import "./Hero.css";
import { Link, Element } from "react-scroll";

export default function Hero() {
  return (
    <section class="hero" id="hero">
      <div class="hero-title">
        <h1>
          Hello, I'm <span class="highlight">Cemund</span>
        </h1>
        <p class="hero-p">
          Full-stack and Flutter developer based in Philippines.
        </p>
        <div class="hero-button">
          <Link to="learn-more" smooth={true} duration={500} offset={-200}>
            <button class="btn">Learn More</button>
          </Link>
        </div>
      </div>
      <div class="hero-image">
        <img src="image.png" alt="cemund's image" />
      </div>
    </section>
  );
}
