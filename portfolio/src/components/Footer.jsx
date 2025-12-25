import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark-200 text-gray-400 py-4 md:py-6">
      <div className="container mx-auto px-6 flex flex-col items-center">

        {/* Social Icons */}
        <div className="flex space-x-6 mb-3">
          <a
            href="https://github.com/Roshan24-oss"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple transition duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/roshan-khadayat-14386332a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.facebook.com/roshan.khadayat.781590"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple transition duration-300"
          >
            <FaFacebook size={24} />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Roshan Khadayat. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
