import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

import HamroChat from "../assets/HamroChat (2).jpg";
import virtualassistant from "../assets/virtualassistant.jpg";
import chat from "../assets/chat.png";

const projectsData = [
  {
    title: "HamroChat",
    description: "Online texting platform built with React, Node.js, and Socket.io.",
    image: HamroChat,
    link: "https://hamrochat-c1dt.onrender.com",
    position: "right",
    tech: ["React", "Tailwind", "Node.js", "Socket.io", "Express", "MongoDB"],
  },
  {
    title: "Virtual Assistant",
    description: "A virtual assistant with speech recognition and response features.",
    image: virtualassistant,
    link: "https://virtualassistant-rrq4.onrender.com",
    tech: ["React", "Node.js", "MongoDB", "Gemini API"],
  },
  {
    title: "Hello-Stranger",
    description: "A random video chat application connecting users worldwide.",
    image: chat,
    link: "https://hellofriend-seven.vercel.app",
    tech: ["Next.js", "ZegoCloud", "Tailwind CSS", "socket.io"],
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          My <span className="text-purple">Projects</span>
        </h2>

        <p className="text-gray-400 text-center mb-16">
          A selection of my recent work
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tech={project.tech}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
