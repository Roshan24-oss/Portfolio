import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showPopup, setShowPopup] = useState(false); // Popup state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    setShowPopup(true);

    
    setFormData({ name: "", email: "", message: "" });

    
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          Get In <span className="text-purple">Touch</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Let&apos;s talk!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-dark-300 p-8 rounded-2xl shadow-lg"
          >
            <div>
              <label className="block text-gray-300 mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full bg-dark-400 border border-dark-100 rounded-lg px-4 py-3 text-white outline-none focus:border-purple"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full bg-dark-400 border border-dark-100 rounded-lg px-4 py-3 text-white outline-none focus:border-purple"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full bg-dark-400 border border-dark-100 rounded-lg px-4 py-3 text-white outline-none focus:border-purple resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-purple text-white font-medium rounded-lg hover:bg-purple-700 transition"
            >
              Send Message
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Location */}
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-purple text-2xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white">Location</h3>
                <p className="text-gray-400">Lainchaur-26, Kathmandu</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-purple text-2xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <p className="text-gray-400">roshankhadayat72052@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <FaPhone className="text-purple text-2xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white">Phone</h3>
                <p className="text-gray-400">+977 9761811885</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 text-center">
              <h3 className="text-lg font-semibold text-white mb-4">
                Follow Me
              </h3>
              <div className="flex justify-center gap-6 text-2xl text-gray-400">
                <a
                  href="https://github.com/Roshan24-oss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple transition"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/roshan-khadayat-14386332a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple transition"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.facebook.com/roshan.khadayat.781590"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple transition"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-dark-300 rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl"
          >
            <div className="text-green-400 text-5xl mb-4">✓</div>

            <h3 className="text-2xl font-semibold text-white mb-2">
              Message Sent!
            </h3>

            <p className="text-gray-400 mb-6">
              Thank you for reaching out. I’ll get back to you soon.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="px-6 py-2 bg-purple text-white rounded-lg hover:bg-purple-700 transition"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Contact;
