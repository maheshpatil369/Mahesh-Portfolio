import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, MessageCircleCode } from 'lucide-react';

// Removed toggleTheme prop
const Hero = ({ theme }) => {
  const [text, setText] = useState('');
  const fullText = 'Full Stack Developer & UI/UX Designer';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/maheshpatil369', label: 'GitHub', external: true },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mahesh-patil-1a9b9a275/', label: 'LinkedIn', external: true },
    { icon: MessageCircleCode, href: 'https://wa.me/918623900807?text=Hi%21...', label: 'Message', external: true },
  ];

  const skills = [
    { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "MongoDB", logo: "https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png" },
    { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center p-4 relative">
      <div className="max-w-6xl w-full text-center mx-auto pt-12 px-2 sm:px-6 lg:px-8">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          <div className="w-48 h-48 mx-auto mb-8 relative cursor-pointer" >
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 p-1"
            >
              {/* Updated background to dark slate */}
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center transition-colors duration-300">
                <img
                  src="https://ik.imagekit.io/6honyi0g1d/IMG_20241121_224443_337%20(2).webp?updatedAt=1758457608205"
                  alt="Profile"
                  className="w-44.5 h-44.5 rounded-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-3xl sm:text-7xl font-bold mb-4"
        >
          {/* Updated text color class */}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            {/* Removed onClick and title */}
            <button
              style={{
                transition: window.innerWidth >= 1024 ? 'all 0.3s ease' : 'none',
              }}
            >
              Mahesh Patil
            </button>
          </span>
        </motion.h1>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          // Updated text color class
          className="text-base sm:text-2xl text-slate-300 mb-6 h-6 transition-colors duration-300"
        >
          {text}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
             // Updated text color class
            className="text-blue-400"
          >
            |
          </motion.span>
        </motion.div>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
           // Updated text color class
          className="text-sm sm:text-lg text-slate-400 mb-8 max-w-2xl mx-auto transition-colors duration-300"
        >
          Passionate about creating beautiful, functional, and user-centered digital experiences.
          I bring ideas to life through code and design.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex justify-center space-x-6 mb-4"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              // Updated background and border classes
              className="p-3 bg-slate-800/40 backdrop-blur-md border border-white/10 rounded-full hover:bg-slate-700/50 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{
                scale: 0.95,
                backgroundColor: "rgba(99, 102, 241, 0.5)", // indigo-500 with opacity
                transition: { duration: 0.1 }
              }}
              aria-label={link.label}
            >
              {/* Updated icon color and hover classes */}
              <link.icon size={22} className="text-slate-300 hover:text-blue-400 transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        {/* Skills */}
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3 mb-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
               // Updated border and hover classes
              className="flex flex-row items-center p-2 rounded-lg backdrop-blur-[2px] border border-white/20 shadow-md hover:scale-105 hover:border-white/30 transition-all duration-300 cursor-pointer"
              // Updated background color based on fixed dark theme
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
              whileHover={{ y: -3 }}
              whileTap={{
                scale: 0.95,
                 // Updated tap background color based on fixed dark theme
                backgroundColor: "rgba(200, 200, 255, 0.15)",
                transition: { duration: 0.05 }
              }}
            >
              <img src={skill.logo} alt={skill.name} className="h-5 w-5 sm:h-6 sm:w-6 object-contain mr-2" />
               {/* Updated text color class */}
              <span className="text-xs sm:text-sm text-slate-200 transition-colors duration-300">{skill.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <motion.a
            href="https://drive.google.com/drive/folders/1GZss4tmnKB3WKRqQKmsU7R1COlvfP82m"
            target="_blank"
            rel="noopener noreferrer"
             // Updated shadow classes
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-[0_10px_25px_rgba(59,130,246,0.3)] hover:shadow-[0_10px_30px_rgba(59,130,246,0.4)]"
            whileTap={{
              scale: 0.95,
              backgroundColor: "rgba(37, 99, 235, 0.8)",
              transition: { duration: 0.1 }
            }}
             // Updated box shadow
            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(59, 130, 246, 0.5)' }}
          >
            View Resume
          </motion.a>

          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            // Updated border, text, and hover classes
            className="px-8 py-3 border-2 border-blue-400 rounded-lg font-semibold text-blue-400 hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{
              scale: 0.95,
              // Updated tap background color based on fixed dark theme
              backgroundColor: "rgba(96, 165, 250, 0.4)",
              transition: { duration: 0.1 }
            }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
