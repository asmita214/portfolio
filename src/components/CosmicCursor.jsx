
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TRAIL_LENGTH = 12; 

const CosmicCursor = () => {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
    
      const newPoint = { x: e.clientX, y: e.clientY };
      
     
      setPoints(currentPoints => {
        const updatedPoints = [newPoint, ...currentPoints];
        
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
           
            width: `${12 - index * 0.8}px`,
            height: `${12 - index * 0.8}px`,
            opacity: 1 - index / TRAIL_LENGTH,
                        backgroundColor: '#FF33CC', 
                        boxShadow: '0 0 5px rgba(255, 51, 204, 0.6)',
          }}
          animate={{ x: point.x, y: point.y }}
          transition={{
            type: 'spring',
            stiffness: 100 + index * 10, 
            damping: 10 + index * 0.5,
            mass: 0.1,
          }}
        />
      ))}
    </div>
  );
};

export default CosmicCursor;