// src/components/CosmicCursor.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Trail length ko adjust kar sakte ho
const TRAIL_LENGTH = 12; 

const CosmicCursor = () => {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // New position add karo
      const newPoint = { x: e.clientX, y: e.clientY };
      
      // Points array ko update karo
      setPoints(currentPoints => {
        const updatedPoints = [newPoint, ...currentPoints];
        // Sirf TRAIL_LENGTH tak ke points rakho
        return updatedPoints.slice(0, TRAIL_LENGTH);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="hidden md:block fixed inset-0 pointer-events-none z-[9999]">
      {points.map((point, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            // Size aur Opacity ko trail ke hisaab se chhota karte jao
            width: `${12 - index * 0.8}px`,
            height: `${12 - index * 0.8}px`,
            opacity: 1 - index / TRAIL_LENGTH,
            // FIX: Background color changed to Soft Magenta (#FF33CC)
            backgroundColor: '#FF33CC', 
            // FIX: Box Shadow changed to Soft Magenta, opacity reduced
            boxShadow: '0 0 5px rgba(255, 51, 204, 0.6)',
          }}
          // Position ko Framer Motion se smooth karte hain
          animate={{ x: point.x, y: point.y }}
          transition={{
            type: 'spring',
            stiffness: 100 + index * 10, // Peeche wale points thode slow
            damping: 10 + index * 0.5,
            mass: 0.1,
          }}
        />
      ))}
    </div>
  );
};

export default CosmicCursor;