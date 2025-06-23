// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Hero from './components/Hero';
// import About from './components/About';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Navigation from './components/Navigation';
// import ParticleBackground from './components/ParticleBackground';

// function App() {
//   const [theme, setTheme] = useState(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//       return savedTheme;
//     }
//     return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
//   });

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   useEffect(() => {
//     if (theme === 'dark') {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   useEffect(() => {
//     const handleContextMenu = (e) => e.preventDefault();
//     const handleKeyDown = (e) => {
//       if (
//         e.keyCode === 123 ||
//         (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
//         (e.ctrlKey && (e.key === "U" || e.key === "S"))
//       ) {
//         e.preventDefault();
//       }
//     };

//     document.addEventListener("contextmenu", handleContextMenu);
//     document.addEventListener("keydown", handleKeyDown);

//     return () => {
//       document.removeEventListener("contextmenu", handleContextMenu);
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-white overflow-x-hidden transition-colors duration-300">
//       <ParticleBackground theme={theme} />
//       <Navigation theme={theme} toggleTheme={toggleTheme} />
//       <motion.main
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Hero theme={theme} toggleTheme={toggleTheme} />
//         <About />
//         <Skills />
//         <Projects />
//         <Contact />
//       </motion.main>

//       <footer className="bg-slate-100 dark:bg-slate-800/50 backdrop-blur-sm py-8 text-center transition-colors duration-300">
//         <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
//           © 2025 Mahesh Patil. All rights reserved.
//         </p>
//       </footer>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpCircle } from 'lucide-react';

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import ParticleBackground from './components/ParticleBackground';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeTop = document.getElementById('home')?.getBoundingClientRect().top || 0;
      setShowButton(homeTop < -200); // show after leaving home section
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHome = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    showButton && (
<button
  onClick={scrollToHome}
  title="Back to Top"
  className="fixed bottom-5 right-4 z-50 p-2 md:p-3 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 animate-bounce"
  aria-label="Scroll to Home"
>
  <ArrowUpCircle className="w-5 h-5 md:w-7 md:h-7" />
</button>
    )
  );
};

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      if (
        e.keyCode === 123 ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
        (e.ctrlKey && (e.key === "U" || e.key === "S"))
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-white overflow-x-hidden transition-colors duration-300">
      <ParticleBackground theme={theme} />
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Make sure Hero has id="home" */}
        <div id="home">
          <Hero theme={theme} toggleTheme={toggleTheme} />
        </div>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <ScrollToTopButton />
      </motion.main>

      <footer className="bg-slate-100 dark:bg-slate-800/50 backdrop-blur-sm py-8 text-center transition-colors duration-300">
        <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
          © 2025 Mahesh Patil. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;

