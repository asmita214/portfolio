// src/sections/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation'; 

const Hero = () => {
    
  // --- Text Content & Timing Calculation ---
  const LINE_1 = "Shaping Ideas into"; 
  const LINE_2 = "Bold Digital Realities";
  const FULL_TEXT = `${LINE_1}\n${LINE_2}`; 
  
  const H2_TEXT = "Asmita Gupta | UI/UX Designer & Frontend Developer";
  
  const TYPING_SPEED = 50; 
  const H1_TOTAL_DURATION_SEC = (47 * TYPING_SPEED / 1000) + 0.5; 
  const H2_REVEAL_DELAY = H1_TOTAL_DURATION_SEC + 0.3; 

  // --- Animation Variants ---
  
  const subtextVariant = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
        delay: H2_REVEAL_DELAY, 
      },
    },
  };

  // Button delay: H2 delay + H2 reveal time (approx 0.4s)
  const ctaDelay = H2_REVEAL_DELAY + 0.4; 

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Video Background (Same) */}
      <video
        autoPlay loop muted
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30" 
        src="/backg.mp4" 
      >
        Your browser does not support the video tag.
      </video>

      {/* MAIN CONTENT */}
      <div className="relative z-10 text-center px-4 max-w-6xl">
        
        {/* H1 Text Animation (Same) */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            className="text-6xl md:text-8xl font-extrabold text-white tracking-tighter mb-6 leading-tight" 
            style={{ textShadow: '0 0 15px #FF00FF66, 0 0 5px #00FFFF44' }} 
        >
            <TypeAnimation
                sequence={[ 500, FULL_TEXT, 1000, ]}
                style={{ whiteSpace: 'pre' }} 
                wrapper="div" 
                speed={TYPING_SPEED} 
                cursor={false} 
                repeat={1}
            />
        </motion.div>
        
        {/* H2 Text Animation (Same) */}
        <motion.h2
            variants={subtextVariant}
            initial="hidden"
            animate="visible"
            className="text-xl md:text-3xl text-neon-secondary font-medium mb-10 mt-6" 
        >
            {H2_TEXT}
        </motion.h2>
        
        {/* CTA Button FIX: Transparent BG, Neon Border, Bright Text */}
        <motion.a 
            href="#about"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: ctaDelay, duration: 0.5 }} 
            // NEW CSS for visibility
            className="inline-flex items-center justify-center px-8 py-3 
                      bg-transparent text-white border-2 border-neon-accent text-lg font-semibold 
                      rounded-full transition duration-300 transform hover:scale-105 
                      shadow-xl shadow-neon-accent/50 hover:bg-neon-accent/20" // Shadow added for visibility
            whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 0 30px rgba(255, 0, 255, 1)', // Brighter shadow on hover
            }}
        >
          Explore Now
        </motion.a>
        
      </div>
    </section>
  );
};
export default Hero;