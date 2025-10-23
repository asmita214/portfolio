
import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';


const SplitHeading = ({ text }) => {
    const words = text.split(" ");
    const container = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
    };
    const child = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

    return (
        <motion.h2 
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }} 
           
            className="text-5xl md:text-6xl font-extrabold text-[#FF33CC] mb-16 pb-2 text-center tracking-widest uppercase"
            
            style={{ textShadow: '0 0 8px rgba(255, 51, 204, 0.6), 0 0 5px rgba(255, 51, 204, 0.4)' }}
        >
            {words.map((word, index) => (
                <motion.span variants={child} key={index} className="inline-block mr-4"> 
                    {word}
                </motion.span>
            ))}
        </motion.h2>
    );
};


const ParallaxCard = ({ title, icon, content, delay }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-150, 150], [10, -10]);
    const rotateY = useTransform(x, [-150, 150], [-10, 10]);
    // FIX: Glow is now Soft Magenta/Pink
    const glowX = useTransform(x, [-150, 150], [0, 100]); 
    const glowY = useTransform(y, [-150, 150], [0, 100]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2); 
        y.set(e.clientY - rect.top - rect.height / 2); 
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { delay: delay, type: "spring", stiffness: 100 }
        }
    };

    return (
        <motion.div 
            ref={ref}
            variants={itemVariants}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.9 }} 
            style={{ 
                rotateX: rotateX, 
                rotateY: rotateY, 
                transformStyle: "preserve-3d",
                perspective: '1000px'
            }}
            // FIX: Border hover color changed to Neon Cyan/Aqua
            className="relative bg-dark-card p-6 rounded-xl border border-gray-700/50 transition-all duration-300 transform hover:border-[#00FFFF]/80 overflow-hidden"
        >
          
            <motion.div
                style={{ 
                  
                    background: 'radial-gradient(circle at center, rgba(255, 51, 204, 0.45) 0%, transparent 70%)',
                    left: glowX, 
                    top: glowY,
                    translateX: '-50%', 
                    translateY: '-50%',
                    opacity: x.get() === 0 && y.get() === 0 ? 0 : 1, 
                }}
                transition={{ duration: 0.1 }}
                className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300"
            />
            
            {/* CARD CONTENT */}
            <div style={{ transform: "translateZ(30px)" }} className="relative"> 
                
                <h3 className="text-2xl font-bold text-[#FF33CC] mb-3 flex items-center">
                    {icon}
                    {title}
                </h3>
                <p className="text-gray-400">
                    {content}
                </p>
            </div>
            
        </motion.div>
    );
};



const About = () => {

    const introText = [
       "I’m ASMITA GUPTA, a B.Tech student in Computer Science.",
"I design intuitive and modern interfaces with Figma,",
"bring them to life through powerful frontend development using React,",
"and back it all with a solid foundation in C++ and Data Structures.",
"My work blends creativity, logic, and precision to craft seamless digital experiences."
    ];

    const textRevealVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: i => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.3, duration: 0.6, type: "tween", ease: "easeOut" }
        })
    };

  
    const Icons = {
        Design: (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>),
        Frontend: (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>),
        DSA: (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 10v4m14-4v4m-9-4h.01M7 10h.01M17 10h.01M5 14h.01M19 14h.01M9 14h.01M15 14h.01" /></svg>)
    };


    return (
        <motion.section 
            id="about" 
            className="py-24 md:py-40 px-4 md:px-10 bg-[#000000]" 
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="max-w-6xl mx-auto">
                
               
                <SplitHeading text="ABOUT THE CREATOR" />

               
                <div className="bg-dark-card p-8 md:p-12 rounded-2xl shadow-[0_0_20px_rgba(255,51,204,0.1)] border border-gray-800/80 mb-20">
                    <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light italic text-center">
                        {introText.map((line, index) => (
                            <motion.span
                                key={index}
                                custom={index}
                                variants={textRevealVariants}
                                initial="hidden"
                                whileInView="visible"
                                className="block" 
                            >
                                {line}
                            </motion.span>
                        ))}
                    </p>
                </div>
                
               
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    
                    <ParallaxCard 
                        title="UI/UX ARCHITECTURE"
                        icon={Icons.Design}
                        content="Figma Prototyping and User-Centric Design. Crafting intuitive flows that prioritize the end-user journey."
                        delay={0.1}
                    />

                    <ParallaxCard 
                        title="REACTIVE DEVELOPMENT"
                        icon={Icons.Frontend}
                        content="Building performant and scalable interfaces using React and the utility-first power of Tailwind CSS."
                        delay={0.2}
                    />

                    <ParallaxCard 
                        title="DSA FUNDAMENTALS"
                        icon={Icons.DSA}
                        content="Core foundation in C++ and Data Structures, ensuring optimal code efficiency and robust problem-solving."
                        delay={0.3}
                    />
                    
                </div>
                
            </div>
        </motion.section>
    );
};

export default About;