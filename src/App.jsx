import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Divider from "./components/Divider";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div class="portfolio">
      <Header />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <Contact />
      <Divider />
      <Footer />
    </div>
  );
}
