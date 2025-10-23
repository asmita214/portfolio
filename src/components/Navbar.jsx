// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Scroll listener to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, delay: 4.5 }}
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-dark-bg/90 backdrop-blur-sm shadow-xl shadow-[#FF00FF]/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo/Name */}
          <a href="#home" className="text-2xl font-extrabold text-[#FF00FF] tracking-widest hover:text-white transition duration-300">
            ASMITA
          </a>
          
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                // FIX: Cleaned up comments and set Neon color
                className="text-gray-300 text-lg font-medium hover:text-[#FF00FF] transition duration-300 relative group"
              >
                {link.name}
                {/* Underline Hover Effect */}
                {/* FIX: Set Neon color */}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF00FF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </a>
            ))}
          </div>
          
          {/* Hamburger Menu (if needed, abhi chhod de) */}
          <div className="md:hidden">
            {/* ... Mobile Menu ... */}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;