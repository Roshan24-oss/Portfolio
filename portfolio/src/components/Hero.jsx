import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-[#0f172a] overflow-hidden pt-24 lg:pt-28 px-4 sm:px-6 lg:px-20"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full gap-12">

       
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full lg:w-1/2 bg-[#1e293b] rounded-2xl shadow-2xl border border-slate-700 overflow-hidden flex flex-col justify-between h-[85%] md:h-[90%]"
        >
          {/* Editor Top Bar */}
          <div className="flex items-center gap-3 px-6 py-3 bg-[#020617] border-b border-slate-700">
            <span className="w-4 h-4 bg-red-500 rounded-full"></span>
            <span className="w-4 h-4 bg-yellow-400 rounded-full"></span>
            <span className="w-4 h-4 bg-green-500 rounded-full"></span>
            <span className="ml-4 text-base sm:text-2xl md:text-3xl text-slate-400 font-mono font-bold">
              MY INTRODUCTION
            </span>
          </div>

          {/* Code Content */}
          <div className="p-6 sm:p-8 font-mono text-xl sm:text-2xl md:text-3xl text-slate-200 leading-snug flex-1 overflow-y-auto">
            
            <p>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-emerald-400">developer</span>{" "}
              <span className="text-slate-400">=</span>{" "}
              <span className="text-yellow-300">{"{"}</span>
            </p>

            <p className="ml-6 sm:ml-8">
              <span className="text-sky-400">name</span>
              <span className="text-slate-400">:</span>{" "}
              <span className="text-amber-300">"Roshan Khadayat"</span>,
            </p>

            <p className="ml-6 sm:ml-8">
              <span className="text-sky-400">role</span>
              <span className="text-slate-400">:</span>{" "}
              <span className="text-amber-300">"Full Stack Developer"</span>,
            </p>

            <p className="ml-6 sm:ml-8">
              <span className="text-sky-400">focus</span>
              <span className="text-slate-400">:</span>{" "}
              <span className="text-amber-300">
                "Modern, scalable & performant web applications"
              </span>,
            </p>

            <p className="ml-6 sm:ml-8">
              <span className="text-sky-400">status</span>
              <span className="text-slate-400">:</span>{" "}
              <span className="text-green-400">"Open to opportunities"</span>
            </p>

            <p className="text-yellow-300 mt-2">{"};"}</p>
          </div>

          {/* Buttons */}
          <div className="px-6 sm:px-8 pb-6 flex flex-wrap gap-4 justify-start">
            <a
              href="#projects"
              aria-label="View my projects"
              className="px-5 sm:px-6 py-3 bg-green-600 text-white rounded-lg text-lg sm:text-xl font-semibold hover:bg-purple-700 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              aria-label="Contact me"
              className="px-5 sm:px-6 py-3 border border-purple-500 text-purple-300 rounded-lg text-lg sm:text-xl font-semibold hover:bg-purple-500/10 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-1/2 flex justify-center h-full items-center"
        >
          <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 h-64 sm:h-72 md:h-80 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl opacity-70"></div>

            <motion.img
              src={profileImg}
              alt="Roshan Khadayat"
              className="relative z-10 w-full h-full rounded-full object-cover border-4 border-white/30"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
