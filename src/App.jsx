import React from "react";
// import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Divider from "./components/Divider";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  return (
    <div class="portfolio">
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section>Hero</section>
      <section id="About">About</section>
      <section id="Services">Skills</section>
      <section id="Porfolio">Projects</section>
      <section id="Contact">Contact</section>
      <section>Footer</section>
      {/* <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer /> */}
    </div>
  );
}
