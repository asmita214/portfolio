// src/components/Footer.jsx
import React from 'react';
import { FiArrowUp, FiMail, FiPhone } from 'react-icons/fi';
import { motion } from 'framer-motion';

// User Details for Footer
const USER_EMAIL = 'asmitagupta217@gmail.com';
const USER_PHONE = '+917291880361';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      // FIX: Background color remains dark, used dark-card/50
      className="bg-dark-card/50 border-t border-gray-700/50 py-8 px-4"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start text-sm text-gray-500">
        
        {/* Contact Info (Email/Phone) */}
        <div className="flex flex-col space-y-2 mb-4 md:mb-0">
            <p className="text-gray-400 font-semibold mb-2">Connect Directly</p>
            {/* FIX: Hover color changed to Soft Magenta */}
            <a href={`mailto:${USER_EMAIL}`} className="flex items-center space-x-2 text-gray-500 hover:text-[#FF33CC] transition duration-300">
                <FiMail size={16} />
                <span>{USER_EMAIL}</span>
            </a>
            {/* FIX: Hover color changed to Soft Magenta */}
            <a href={`tel:${USER_PHONE}`} className="flex items-center space-x-2 text-gray-500 hover:text-[#FF33CC] transition duration-300">
                <FiPhone size={16} />
                <span>{USER_PHONE}</span>
            </a>
        </div>

        {/* Copyright & Built With */}
        <div className="text-right flex flex-col items-end">
            <p className="mb-2">
                {/* FIX: text-gold-accent replaced with text-[#FF33CC] */}
                <span className="text-[#FF33CC] font-semibold">Asmita</span> - Portfolio
            </p>
            <p className="mb-4">
                © {new Date().getFullYear()} All Rights Reserved.
            </p>

            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                // FIX: text-gold-accent replaced with text-[#FF33CC]
                className="flex items-center space-x-2 text-[#FF33CC] hover:text-white transition duration-300 transform hover:scale-105"
                title="Back to Top"
            >
                <FiArrowUp size={20} />
                <span className="font-medium">Back to Top</span>
            </button>
        </div>

      </div>
    </motion.footer>
  );
};

export default Footer;