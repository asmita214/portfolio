// src/components/ProgressBar.jsx
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  
  // Smooth spring effect for the progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gold-accent/50 origin-[0%] z-[1000]"
      style={{ 
        scaleX,
        // Gradient effect for better look
        backgroundImage: 'linear-gradient(90deg, transparent, #cc39f4ff)',
      }}
    />
  );
};

export default ProgressBar;