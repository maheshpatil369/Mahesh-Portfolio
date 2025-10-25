import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpCircle } from 'lucide-react';

// Corrected import paths relative to App.jsx in the src directory
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import ParticleBackground from './components/ParticleBackground';
import QASection from './components/QASection';

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
  // Force the theme to always be 'dark'
  const theme = 'dark';

  // Always apply the dark class on component mount
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []); // Empty dependency array ensures this runs only once on mount

  // Security features for context menu and developer tools prevention
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) || // Ctrl+Shift+I/J
        (e.ctrlKey && (e.key === "U" || e.key === "S")) // Ctrl+U/S
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

  // Ping Backend on Portfolio Load
  useEffect(() => {
    // Determine the backend URL based on the environment
    const backendUrl = import.meta.env.VITE_API_URL || 'https://your-backend.onrender.com'; // Use VITE_API_URL or fallback

    fetch(`${backendUrl}/ping`) // Use the determined URL
      .then(() => console.log("Backend pinged & woken up 🚀"))
      .catch((err) => console.log("Ping failed ❌", err));
  }, []);


  return (
    // Ensure the root div always has the dark theme classes
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Pass the static 'dark' theme to ParticleBackground */}
      <ParticleBackground theme={theme} />
      {/* Pass the static 'dark' theme to Navigation, remove toggleTheme prop */}
      <Navigation theme={theme} />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div id="home">
          {/* Pass the static 'dark' theme to Hero, remove toggleTheme prop */}
          <Hero theme={theme} />
        </div>
        <About />
        <Skills />
        <Projects />
        <QASection />
        <Contact />
        <ScrollToTopButton />
      </motion.main>

      {/* Footer styled for dark mode */}
      <footer className="bg-slate-800/50 backdrop-blur-sm py-8 text-center transition-colors duration-300">
        <p className="text-slate-400 text-xs sm:text-sm">
          © 2025 Mahesh Patil. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;

