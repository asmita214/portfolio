// src/sections/Skills.jsx
import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
// Icons ke liye (Install karna mat bhoolna!)
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as IoIcons from 'react-icons/io5'; 
// Import your data file (make sure skillData.json file is created!)
import skillData from '../data/skillData.json'; 

// Utility function to get icons dynamically
const getIcon = (iconName) => {
  const IconComponent = IoIcons[iconName] || SiIcons[iconName] || FaIcons[iconName];
  return IconComponent ? <IconComponent className="text-4xl md:text-5xl" /> : <div className="text-4xl text-gray-500">?</div>;
};

// --- Animation Variants (The Matrix Reveal Part) ---
const skillCardVariants = {
    hidden: { 
        opacity: 0, 
        x: -100, // Slide from left
        skewX: -15, // Slant effect
        filter: 'grayscale(100%)', // Start B&W
    },
    visible: { 
        opacity: 1, 
        x: 0, 
        skewX: 0, // End straight
        filter: 'grayscale(0%)', // End color
        transition: { 
            duration: 0.8, 
            type: "easeOut", 
        } 
    }
};

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 }); 

    // Dynamically get all categories
    const categories = ['All', ...new Set(skillData.map(skill => skill.category))];
    
    // Filter skills based on active category
    const filteredSkills = activeCategory === 'All' 
        ? skillData 
        : skillData.filter(skill => skill.category === activeCategory);


    return (
        <section 
            ref={ref}
            id="skills" 
            className="py-24 md:py-40 px-4 max-w-7xl mx-auto bg-[#000000]" // Deep Black Background
        >
            {/* 1. Heading */}
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                // FIX: text-gold-accent replaced with text-[#FF33CC] (Soft Magenta)
                className="text-4xl md:text-5xl font-extrabold text-[#FF33CC] mb-4 text-center tracking-wider uppercase"
            >
                My Core Strengths
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.8 } : {}}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-400 mb-12 text-center"
            >
                My command over design, frontend and logic.
            </motion.p>

            {/* 2. Category Pills/Tabs (Neon Theme) */}
            <div className="flex justify-center flex-wrap gap-3 mb-16">
                {categories.map((cat, index) => (
                    <motion.button
                        key={cat}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-2 rounded-full font-semibold transition duration-300 text-sm md:text-base border ${
                            activeCategory === cat 
                                // FIX: Active button uses Soft Magenta fill
                                ? 'bg-[#FF33CC] text-dark-bg border-[#FF33CC] shadow-lg shadow-[#FF33CC]/50' 
                                // FIX: Hover uses Soft Magenta text and Cyan border
                                : 'bg-dark-card text-gray-300 border-gray-700 hover:text-[#FF33CC] hover:border-[#00FFFF]/50'
                            }`
                        }
                    >
                        {cat}
                    </motion.button>
                ))}
            </div>

            {/* 3. Skills Grid (Matrix Reveal & Stagger) */}
            <motion.div 
                key={activeCategory} 
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
                {filteredSkills.map((skill) => (
                    <motion.div
                        key={skill.name}
                        variants={skillCardVariants} // The Matrix Reveal animation
                        className={`bg-dark-card p-6 rounded-xl shadow-xl flex flex-col items-center justify-center relative
                            border-2 border-gray-800 transition-all duration-300 ease-in-out cursor-default
                            // FIX: Hover border is now Cyan, shadow uses Soft Magenta
                            hover:border-[#00FFFF] hover:shadow-[0_0_20px_rgba(255,51,204,0.5)] transform hover:translate-y-[-5px]`}
                        whileHover={{ scale: 1.05, rotateZ: 1 }} // Subtle lift and rotation on hover
                    >
                        {/* Gold Accent Top Bar */}
                        {/* FIX: Top bar gradient uses Soft Magenta */}
                        <div className={`absolute top-0 left-0 h-1 w-full rounded-t-lg bg-gradient-to-r from-transparent via-[#FF33CC]/70 to-transparent`}></div>

                        {/* Icon with Color Accent */}
                        <div className={`mb-3 ${skill.color}`}>
                            {getIcon(skill.icon)}
                        </div>
                        
                        {/* Skill Name & Category */}
                        <h3 className="text-xl font-bold text-white mt-1">{skill.name}</h3>
                        <p className="text-sm text-gray-500">{skill.category}</p>
                    </motion.div>
                ))}
                
                {/* Fallback for no skills */}
                {filteredSkills.length === 0 && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        className="col-span-4 text-center text-lg text-gray-500 mt-8"
                    >
                        // No data found for this category.
                    </motion.p>
                )}
            </motion.div>
        </section>
    );
};

export default Skills;