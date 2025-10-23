
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownloadCloud } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';


const FORM_URL = 'https://formspree.io/f/xgvnjgzz';
const RESUME_PATH = '/Resume.pdf';


const SOCIALS = [
  { name: 'GitHub', icon: FiGithub, href: 'https://github.com/asmita214' },
  { name: 'LinkedIn', icon: FiLinkedin, href: 'https://www.linkedin.com/in/asmita-gupta-12b313332/' },
  { name: 'LeetCode', icon: SiLeetcode, href: 'https://leetcode.com/u/MnoE1SW499/' },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Contact = () => {
  
  const [status, setStatus] = useState('');

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch(FORM_URL, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus('SUCCESS');
        e.target.reset(); 
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      console.error(error);
      setStatus('ERROR');
    }
  };

  return (
    <motion.section 
      id="contact" 
      className="py-24 md:py-40 px-4 bg-dark-bg"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-4xl mx-auto">
        
      
        <motion.h2 
          variants={itemVariants}
          className="text-5xl md:text-6xl font-extrabold text-[#FF33CC] mb-4 text-center tracking-wider uppercase"
        >
          Connect with Me
        </motion.h2>
        <motion.p variants={itemVariants} className="text-xl text-gray-400 mb-10 text-center">
          Let's build something fundamentally robust together.
        </motion.p>
        
    
        <motion.div 
          variants={containerVariants}
          className="bg-dark-card p-8 rounded-xl shadow-2xl shadow-[#FF33CC]/5 border border-gray-800/80 mb-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
        >
         
          <div className="flex flex-col items-center md:items-start">
            <motion.p 
              variants={itemVariants} 
              className="text-lg font-semibold text-gray-200 mb-3 uppercase tracking-wider"
            >
              My Socials
            </motion.p>
            <motion.div variants={itemVariants} className="flex space-x-8">
              {SOCIALS.map(social => (
                <a 
                  key={social.name}
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#FF33CC] transition duration-300 transform hover:scale-125"
                  title={social.name}
                >
                  <social.icon size={40} />
                </a>
              ))}
            </motion.div>
          </div>

         
          <motion.a 
            variants={itemVariants}
            href={RESUME_PATH} 
            download 
            className="px-6 py-3 text-base font-bold rounded-full border border-[#FF33CC] text-[#FF33CC] hover:bg-[#FF33CC] hover:text-dark-bg transition duration-300 shadow-md shadow-[#FF33CC]/20 flex items-center space-x-2"
          >
            <FiDownloadCloud size={20} />
            <span>Download Resume</span>
          </motion.a>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="bg-dark-card p-8 md:p-10 rounded-xl shadow-2xl shadow-[#FF33CC]/5 border border-gray-800/80"
        >
          <motion.p variants={itemVariants} className="text-xl text-white mb-6 font-semibold uppercase tracking-wider text-center">
            Send A Direct Message
          </motion.p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.input 
              variants={itemVariants}
              type="text" 
              name="name" 
              placeholder="Your Name" 
              required
              className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-gray-200 focus:border-[#FF33CC] focus:ring-1 focus:ring-[#FF33CC] transition duration-300"
            />
            <motion.input 
              variants={itemVariants}
              type="email" 
              name="email" 
              placeholder="Your Email" 
              required 
              className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-gray-200 focus:border-[#FF33CC] focus:ring-1 focus:ring-[#FF33CC] transition duration-300"
            />
            <motion.textarea 
              variants={itemVariants}
              name="message" 
              rows="5" 
              placeholder="Your Message" 
              required 
              className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-gray-200 focus:border-[#FF33CC] focus:ring-1 focus:ring-[#FF33CC] transition duration-300"
            ></motion.textarea>
            
            <motion.button 
              variants={itemVariants}
              type="submit"
              className="w-full px-6 py-3 text-lg font-bold rounded-lg bg-[#FF33CC] text-dark-bg hover:bg-[#FF33CC]/80 transition duration-300 transform hover:scale-[1.02] shadow-xl shadow-[#FF33CC]/50"
            >
              Send Message
            </motion.button>
          </form>

          {status === 'SUCCESS' && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-green-400 mt-6 font-semibold"
            >
              ✅ Message sent successfully! I’ll get back to you soon.
            </motion.p>
          )}
          {status === 'ERROR' && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-red-400 mt-6 font-semibold"
            >
              ❌ Something went wrong. Please try again.
            </motion.p>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
