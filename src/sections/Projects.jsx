
import React, { useRef } from 'react'; 
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';


const PROJECTS_DATA = [
    {
        title: "ARGO Visualizing Oceanic Data",
        description: "Developed an advanced oceanic data visualization platform by training an ML model to extract meaningful insights from complex datasets. The platform features an intelligent chatbot for real-time user interaction, allowing users to query data effortlessly. Additionally, a comprehensive automated reporting system was integrated, providing detailed analysis and summaries. This project combines data science, frontend visualization, and interactive UX to transform raw oceanic data into actionable insights",
        tags: ["React", "Tailwind CSS", "JavaScript" ],
        github: "https://github.com/asmita214/project",
        live: "https://float-two.vercel.app/",
        image: "https://img.freepik.com/free-photo/beautiful-shot-sea-waves-near-rocks-cloudy-sky-sunset_181624-2974.jpg?semt=ais_hybrid&w=740&q=80", 
        
    }
];


const ProjectShowcase = ({ project, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const isOdd = index % 2 !== 0; 

    const slideVariants = {
        hidden: isOdd ? { opacity: 0, x: 100 } : { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, type: "easeOut" } }
    };
    
    const imageSlideVariants = {
        hidden: isOdd ? { opacity: 0, x: -50 } : { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, type: "easeOut" } }
    };

    return (
        <motion.div
            ref={ref}
            className={`flex flex-col md:flex-row items-center mb-24 md:mb-36 ${isOdd ? 'md:flex-row-reverse' : ''}`}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
           
            <motion.div 
                variants={imageSlideVariants}
                
                className={`w-full md:w-5/12 rounded-xl shadow-2xl shadow-[#FF33CC]/10 overflow-hidden border border-gray-700/50 transition-all duration-300 transform hover:scale-[1.03] ${isOdd ? 'md:ml-12' : 'md:mr-12'} mb-8 md:mb-0`}
                whileHover={{ y: -5, boxShadow: '0 0 30px rgba(255, 51, 204, 0.5)' }}
            >
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                />
            </motion.div>

           
            <motion.div 
                variants={slideVariants}
                className={`w-full md:w-7/12 relative ${isOdd ? 'md:text-left' : 'md:text-right'}`}
            >
                
                <p className={`text-sm font-semibold text-[#FF33CC] mb-2 ${isOdd ? 'md:text-left' : 'md:text-right'}`}>
                    Project {index + 1} // {project.type}
                </p>
                
               
                <h3 className={`text-3xl md:text-4xl font-extrabold text-white mb-4 ${isOdd ? 'md:text-left' : 'md:text-right'}`}>
                    {project.title}
                </h3>
                
                
                <div className={`p-6 md:p-8 rounded-lg shadow-lg bg-dark-card/80 border-t-2 border-[#FF33CC]/50 mb-6`}>
                    <p className="text-gray-300 text-lg">{project.description}</p>
                </div>
                
                
                <div className={`flex flex-wrap gap-3 mb-6 ${isOdd ? 'justify-start' : 'justify-end'}`}>
                    {project.tags.map(tag => (
                        
                        <span key={tag} className="text-sm text-[#FF33CC] border border-[#FF33CC]/50 px-3 py-1 rounded-full bg-[#FF33CC]/10">
                            {tag}
                        </span>
                    ))}
                </div>

                
                <div className={`flex space-x-6 ${isOdd ? 'justify-start' : 'justify-end'}`}>
                    <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-white transition-colors duration-300 transform hover:scale-110"
                        title="GitHub Repository"
                    >
                        <FiGithub size={24} />
                    </a>
                    {project.live && (
                        <a 
                            href={project.live} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            
                            className="text-[#FF33CC] hover:text-white transition-colors duration-300 transform hover:scale-110"
                            title="Live Demo"
                        >
                            <FiExternalLink size={24} />
                        </a>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};


const Projects = () => {
    return (
        <section id="projects" className="py-24 md:py-40 px-4 bg-dark-bg">
            <div className="max-w-7xl mx-auto">
                
                
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    
                    className="text-5xl md:text-6xl font-extrabold text-[#FF33CC] mb-4 text-center tracking-wider uppercase"
                >
                    Featured Work
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl text-gray-400 mb-20 text-center"
                >
                    A minimalist timeline of my significant technical creations.
                </motion.p>
                
                
                <div className="relative">
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-800 hidden md:block"></div>
                    
                    {PROJECTS_DATA.map((project, index) => (
                        <ProjectShowcase key={index} project={project} index={index} />
                    ))}
                </div>
                
            </div>
        </section>
    );
};

export default Projects;