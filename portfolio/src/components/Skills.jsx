import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaCodeBranch,
  FaLaptopCode,
} from "react-icons/fa";

const skillsData = [
  {
    title: "Frontend",
    icon: FaReact,
    tags: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Backend",
    icon: FaNodeJs,
    tags: ["Node.js", "Express", "REST API"],
  },
  {
    title: "Database",
    icon: FaDatabase,
    tags: ["MongoDB"],
  },
  {
    title: "Languages",
    icon: FaJs,
    tags: ["JavaScript", "Java", "C"],
  },
  {
    title: "Markup",
    icon: FaHtml5,
    tags: ["HTML5", "Semantic HTML"],
  },
  {
    title: "Styling",
    icon: FaCss3Alt,
    tags: ["CSS3", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Tools",
    icon: FaGitAlt,
    tags: ["Git", "GitHub", "VS Code", "Postman", "Chrome DevTools"],
  },
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          My <span className="text-purple">Skills & Tools</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Technologies and tools I use to bring ideas to life
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="
                bg-dark-300
                rounded-2xl
                p-6
                cursor-pointer
                hover:-translate-y-2
                hover:shadow-xl
                transition
              "
            >
              <div className="flex items-center mb-4">
                <skill.icon className="w-10 h-10 text-purple mr-4" />
                <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-dark-400 rounded-full text-sm text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
