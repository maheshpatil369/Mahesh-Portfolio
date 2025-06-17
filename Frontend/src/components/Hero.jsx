// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Github, Linkedin, MessageCircleCode } from 'lucide-react';

// const Hero = () => {
//   const [text, setText] = useState('');
//   const fullText = "Full Stack Developer & UI/UX Designer";
  
//   useEffect(() => {
//     let index = 0;
//     const timer = setInterval(() => {
//       setText(fullText.slice(0, index));
//       index++;
//       if (index > fullText.length) {
//         clearInterval(timer);
//       }
//     }, 100);
    
//     return () => clearInterval(timer);
//   }, []);

//   const socialLinks = [
//     { icon: Github, href: 'https://github.com/maheshpatil369', label: 'GitHub', external:true },
//     { icon: Linkedin, href: 'https://www.linkedin.com/in/mahesh-patil-1a9b9a275/', label: 'LinkedIn', external:true },
//     // { icon: Mail, href: 'https://wa.me/918623900807?text=Hi%21%20I%20came%20across%20your%20work%20and%20found%20it%20really%20inspiring.%20I%E2%80%99d%20love%20to%20connect%20and%20learn%20more%20about%20your%20projects.', label: 'Email', external:true }
//     { icon: MessageCircleCode, href: 'https://wa.me/918623900807?text=Hi%21%20I%20came%20across%20your%20work%20and%20found%20it%20really%20inspiring.%20I%E2%80%99d%20love%20to%20connect%20and%20learn%20more%20about%20your%20projects.', label: 'MessageCircleCode', external:true }
//   ];

//   return (
//     <section id="home" className="min-h-screen p-4 flex items-center justify-center relative">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12">
//         <motion.div
//           initial={{ scale: 0.5, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="relative mb-8"
//         >
//           <div className="w-48 h-48 mx-auto mb-8 relative">
//             <motion.div
//               // animate={{ rotate: 360 }}
//               // transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//               className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 p-1"
//             >
//               <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
//                 <img
//                   src="http://127.0.0.1:5500/iamges/Pi7_Tool_Crop%20%20that%20for%20profile.jpg"
//                   // src="https://images.unsplash.com/photo-1749316028556-dcdb0316d71d?q=80&w=2035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                   alt="Profile"
//                   className="w-44 h-44 rounded-full object-cover"
//                   />
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>

//         <motion.h1
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.8 }}
//           className="text-4xl md:text-7xl font-bold mb-4"
//           // className="text-2xl md:text-7xl font-bold mb-4"
//         >
//           <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
//         Mahesh Patil
//           </span>
//         </motion.h1>

//         <motion.div
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.8 }}
//           className="text-xl md:text-2xl text-slate-300 mb-8 h-8"
//         >
//           {text}
//           <motion.span
//             animate={{ opacity: [1, 0] }}
//             transition={{ duration: 1, repeat: Infinity }}
//             className="text-blue-400"
//           >
//             |
//           </motion.span>
//         </motion.div>

//         <motion.p
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//           className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto"
//         >
//           Passionate about creating beautiful, functional, and user-centered digital experiences.
//           I bring ideas to life through code and design.
//         </motion.p>

//         <motion.div
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.8, duration: 0.8 }}
//           className="flex justify-center space-x-6 mb-2"
//         >
//           {socialLinks.map((link, index) => (
//             // <motion.a
//             //   key={index}
//             //   href={link.href}
//             //   className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700/50 transition-colors duration-300"
//             //   whileHover={{ scale: 1.1, y: -5 }}
//             //   whileTap={{ scale: 0.95 }}
//             //   aria-label={link.label}
//             // >
//             //   <link.icon size={24} className="text-slate-300 hover:text-blue-400 transition-colors" />
//             // </motion.a>
//              <motion.a
//     key={index}
//     href={link.href}
//     target={link.external ? "_blank" : "_self"}
//     rel={link.external ? "noopener noreferrer" : undefined}
//     className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700/50 transition-colors duration-300"
//     whileHover={{ scale: 1.1, y: -5 }}
//     whileTap={{ scale: 0.95 }}
//     aria-label={link.label}
//   >
//     <link.icon size={24} className="text-slate-300 hover:text-blue-400 transition-colors" />
//   </motion.a>
//           ))}
//         </motion.div>

//   <div className="flex flex-wrap justify-center gap-3 mb-6 mt-6">
//   {["React", "Next.js", "Node.js", "TypeScript", "Tailwind"].map((skill, idx) => (
//     <span
//       key={idx}
//       className="text-sm font-medium px-4 py-1.5 rounded-full backdrop-blur-md bg-white/10 text-white border border-white/20 shadow-md hover:scale-105 hover:bg-white/20 transition-all duration-300"
//     >
//       {skill}
//     </span>
//   ))}
// </div>



        

//         <motion.div
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 1, duration: 0.8 }}
//           className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
//         >
//           {/* <motion.button
//             // onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
//             href='https://drive.google.com/file/d/1kTZX_tfnF1BjwJJp-rssxv8lbL36Gx5h/view?usp=sharing'
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
//             whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.5)" }}
//             whileTap={{ scale: 0.95 }}
//           > 
//             View Resume
//           </motion.button>   */}

          
//           <motion.a
//             href="https://drive.google.com/file/d/1kTZX_tfnF1BjwJJp-rssxv8lbL36Gx5h/view?usp=sharing"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
//             whileTap={{ scale: 0.95 }}
//            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.5)" }}
//               >
//                View Resume
//             </motion.a>

//           <motion.button
//             onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
//             className="px-8 py-3 border-2 border-blue-400 rounded-lg font-semibold text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Get In Touch
//           </motion.button>
          
//         </motion.div>

        
//       </div>

//       {/* <motion.div
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2" */}
//       {/* > */}
//         {/* <ChevronDown size={32} className="text-slate-400" /> */}
//       {/* </motion.div> */}
//     </section>
//   );
// };

// export default Hero;


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, MessageCircleCode } from 'lucide-react';

const Hero = ({ theme, toggleTheme }) => {
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
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          {/* <div className="w-52 h-52 sm:w-48 sm:h-48 mx-auto relative">
            <motion.div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 p-[2px]">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <img
                  src="https://ik.imagekit.io/xh7qx43uk/Pi7_Tool_Crop%20%20that%20for%20profile.jpg?updatedAt=1749462587781"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </motion.div>
          </div> */}

<div className="w-48 h-48 mx-auto mb-8 relative cursor-pointer" onClick={toggleTheme} title="Toggle Theme">
       <motion.div
              // animate={{ rotate: 360 }}
              // transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 p-1"
            >
              <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center transition-colors duration-300">
                <img
                  src="https://ik.imagekit.io/xh7qx43uk/Pi7_Tool_Crop%20%20that%20for%20profile.jpg?updatedAt=1749462587781"
                  // src="https://images.unsplash.com/photo-1749316028556-dcdb0316d71d?q=80&w=2035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Profile"
                  className="w-44.5 h-44.5 rounded-full object-cover"
                  />
              </div>
            </motion.div>
          </div>


        </motion.div>

        {/* Name */}
        {/* <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-3xl sm:text-7xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent dark:text-transparent">
            <button onClick={toggleTheme} 
      title="Toggle Theme"
      transition={{ duration: 0.3 }}>Mahesh Patil</button>
          </span>
        </motion.h1> */}

{/* Name */}
<motion.h1
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.2, duration: 0.8 }}
  className="text-3xl sm:text-7xl font-bold mb-4"
>
  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent dark:text-transparent">
    <button
      onClick={toggleTheme}
      title="Toggle Theme"
      style={{
        transition: window.innerWidth >= 1024 ? 'all 0.3s ease' : 'none',
      }}
    >
      Mahesh Patil
    </button>
  </span>
</motion.h1>


        {/* Typing Text */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-base sm:text-2xl text-slate-700 dark:text-slate-300 mb-6 h-6 transition-colors duration-300"
        >
          {text}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="text-blue-500 dark:text-blue-400"
          >
            |
          </motion.span>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-sm sm:text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto transition-colors duration-300"
        >
          Passionate about creating beautiful, functional, and user-centered digital experiences.
          I bring ideas to life through code and design.
        </motion.p>

        {/* Social Icons */}
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
              className="p-3 bg-slate-200/40 dark:bg-slate-800/40 backdrop-blur-md border border-slate-300/20 dark:border-white/10 rounded-full hover:bg-slate-300/50 dark:hover:bg-slate-700/50 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{
                scale: 0.95,
                backgroundColor: "rgba(99, 102, 241, 0.5)", // indigo-500 with opacity
                transition: { duration: 0.1 }
              }}
              aria-label={link.label}
            >
              <link.icon size={22} className="text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        {/* Skills */}
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3 mb-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="flex flex-row items-center p-2 rounded-lg backdrop-blur-[2px] border border-slate-300/30 dark:border-white/20 shadow-md hover:scale-105 hover:border-slate-400/40 dark:hover:border-white/30 transition-all duration-300 cursor-pointer"
              style={{ backgroundColor: theme === 'light' ? 'rgba(0, 0, 0, 0.03)' : 'rgba(255, 255, 255, 0.05)' }}
              whileHover={{ y: -3 }}
              whileTap={{
                scale: 0.95,
                backgroundColor: theme === 'light' ? 'rgba(0,0,0,0.07)' : "rgba(200, 200, 255, 0.15)",
                transition: { duration: 0.05 }
              }}
            >
              <img src={skill.logo} alt={skill.name} className="h-5 w-5 sm:h-6 sm:w-6 object-contain mr-2" /> {/* Styles for brightness/saturation can be added here if still desired */}
              <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 transition-colors duration-300">{skill.name}</span>
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
            href="https://drive.google.com/file/d/1MqLkt3SGSjeZMvXpT6CNOmFvZJNxe_LG/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 dark:shadow-[0_10px_25px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_10px_30px_rgba(59,130,246,0.4)]"
            whileTap={{
              scale: 0.95,
              backgroundColor: "rgba(37, 99, 235, 0.8)", // darker blue for gradient buttons
              transition: { duration: 0.1 }
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(59, 130, 246, 0.5)' }}
          >
            View Resume
          </motion.a>

          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border-2 border-blue-500 dark:border-blue-400 rounded-lg font-semibold text-blue-500 dark:text-blue-400 hover:bg-blue-500 dark:hover:bg-blue-400 hover:text-white dark:hover:text-slate-900 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{
              scale: 0.95,
              backgroundColor: theme === 'light' ? "rgba(59, 130, 246, 0.2)" : "rgba(96, 165, 250, 0.4)",
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
