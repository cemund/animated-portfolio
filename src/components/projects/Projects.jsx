import { useState } from "react";
// import "./Projects.css";
import "./project.scss";
import Project from "./project/Project";
import Modal from "./modals/Modal";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Furniverse",
    subtitle:
      "The project component represents a single project and has a hover interactivity on it.",
    src: "./image.png",
    color: "#000000",
    tech: ["Flutter", "Firebase"],
  },

  {
    title: "TOS Watchdog",
    src: "./image.png",
    subtitle:
      "The project component represents a single project and has a hover interactivity on it.",
    tech: ["Javascript", "Python", "Flask"],
    color: "#8C8C8C",
  },

  {
    title: "Notention",
    src: "./image.png",
    subtitle:
      "The project component represents a single project and has a hover interactivity on it.",
    tech: ["Flutter", "Firebase"],
    color: "#EFE8D3",
  },

  {
    title: "Silencio",
    src: "./image.png",
    subtitle:
      "The project component represents a single project and has a hover interactivity on it.",
    tech: ["Flutter", "Firebase"],
    color: "#706D63",
  },
];

const variants = {
  initial: {
    y: -200,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
      type: "spring",
    },
  },
};

export default function Projects() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <section class="projects" id="projects">
      <main className="wrapper">
        <h1>Selected Works</h1>
        <motion.div
          className="body"
          variants={variants}
          initial="initial"
          whileInView="animate"
        >
          {projects.map((project, index) => {
            return (
              <motion.div variants={variants}>
                <Project
                  index={index}
                  title={project.title}
                  setModal={setModal}
                  key={index}
                  subtitle={project.subtitle}
                  tech={project.tech}
                />
              </motion.div>
            );
          })}
        </motion.div>

        <Modal modal={modal} projects={projects} />
      </main>

      {/* <h1 className="projects-title">SELECTED WORKS</h1>
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
      </div> */}
    </section>
  );
}
