import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <section class="projects" id="projects">
      <h1 className="projects-title">SELECTED WORKS</h1>
      <div class="project">
        <div className="project-header">
          <div class="left">
            <h2>Furniverse</h2>
          </div>
          <div class="right">
            <button class="btn-outline">Flutter</button>
            <button class="btn-outline">Dart</button>
            <button class="btn-outline">Firebase</button>
          </div>
        </div>
        <p>
          Furniture ecommerce mobile application where users can view products
          realistically in their own environment using augmented reality
          augmented reality features.
        </p>
      </div>
      <div class="project">
        <div className="project-header">
          <div class="left">
            <h2>TOS Watchdog</h2>
          </div>
          <div class="right">
            <button class="btn-outline">Javascript</button>
            <button class="btn-outline">Python</button>
            <button class="btn-outline">Flask</button>
            <button class="btn-outline">ML</button>
          </div>
        </div>
        <p>
          Chrome extension designed to empower users by automatically
          highlighting unfair clauses within online Terms of Service (TOS)
          agreements in websites.
        </p>
      </div>
      <div class="project">
        <div className="project-header">
          <div class="left">
            <h2>Notention</h2>
          </div>
          <div class="right">
            <button class="btn-outline">Java</button>
            <button class="btn-outline">MySQL</button>
          </div>
        </div>
        <p>
          Note-taking desktop application with built-in quiz app and progress
          tracker.
        </p>
      </div>
    </section>
  );
}
