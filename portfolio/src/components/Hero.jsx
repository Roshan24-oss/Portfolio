import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets.js";

const Hero = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Hi, I&apos;m{" "}
            <span className="text-purple">Roshan Khadayat</span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold mb-6 typewriter text-white">
            Full Stack Developer
          </h2>

          <p className="text-lg text-gray-300 mb-8 max-w-xl">
            I create stunning web experiences with modern technologies and
            innovative design.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-purple text-white rounded-lg font-medium hover:bg-purple-700 transition"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-purple text-white rounded-lg font-medium hover:bg-purple/20 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink opacity-70 blur-xl"></div>

            {/* Image */}
            <motion.img
              src={assets.profileImg}
              alt="Roshan Khadayat profile"
              className="relative z-10 w-full h-full rounded-full object-cover"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
