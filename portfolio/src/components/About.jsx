import React from "react";
import img from "../assets/profile2.jpg";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaUserGraduate,
  FaProjectDiagram,
} from "react-icons/fa";

const aboutInfo = [
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "I write clean, maintainable, and scalable code following best practices.",
  },
  {
    icon: FaLaptopCode,
    title: "Full Stack Developer",
    description:
      "Experienced in building both frontend and backend applications.",
  },
  {
    icon: FaUserGraduate,
    title: "Continuous Learning",
    description:
      "Always learning new tools and technologies to stay up to date.",
  },
  {
    icon: FaProjectDiagram,
    title: "Real Projects",
    description:
      "Built multiple real-world projects using modern tech stacks.",
  },
];

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          About <span className="text-purple">Me</span>
        </h2>

        {/* Intro paragraph */}
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Hello! I&apos;m <span className="text-white font-medium">Roshan Khadayat</span>, a passionate Full Stack Developer who loves building clean,
          responsive, and user-friendly web applications. I specialize in turning
          complex problems into simple, beautiful digital experiences using modern
          technologies.
        </p>

        {/* Layout: Image + Vertical Cards */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-12">

          {/* Profile Image */}
          <div className="md:w-1/2 relative flex justify-center mb-10 md:mb-0">
            {/* Soft animated glow */}
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-4 rounded-3xl bg-gradient-to-b from-purple/40 to-pink/30 blur-2xl"
            />
            {/* Floating image */}
            <motion.img
              src={img}
              alt="Roshan Khadayat profile"
              className="relative z-10 w-64 h-80 md:w-72 md:h-96 object-cover rounded-3xl shadow-2xl"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
            />
          </div>

          {/* Vertical Info Cards */}
          <div className="md:w-1/2 flex flex-col gap-6">
            {aboutInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-dark-300 p-6 rounded-xl shadow-lg flex flex-col items-start hover:scale-105 transition"
              >
                <item.icon className="text-purple text-3xl mb-3" />
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default About;
