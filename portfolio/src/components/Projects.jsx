import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio built using React, Tailwind CSS, and Framer Motion.",
    image: "/src/assets/project1.jpg",
    tech: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "E-commerce App",
    description: "A full-stack e-commerce application with authentication and payments.",
    image: "/src/assets/project2.jpg",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Manager",
    description: "A productivity app to manage tasks with CRUD functionality.",
    image: "/src/assets/project3.jpg",
    tech: ["React", "Express", "MongoDB"],
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          My <span className="text-purple">Projects</span>
        </h2>

        <p className="text-gray-400 text-center mx-auto mb-16 max-w-2xl">
          A selection of my recent work
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
