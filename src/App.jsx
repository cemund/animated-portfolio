import React from "react";
// import "./App.css";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Cursor from "./components/cursor/Cursor";
import Sidebar from "./components/sidebar/Sidebar";

export default function App() {
  return (
    <div class="portfolio">
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Services">
        <Skills />
      </section>
      <section id="Portfolio">
        <Projects />
      </section>
      <section id="Contact">
        <Contact />
      </section>
      <Sidebar />
    </div>
  );
}
