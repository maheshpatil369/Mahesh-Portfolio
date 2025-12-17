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
import QASection from './components/QASection';
import Experience from './components/Experiance';

// ✅ Vercel Analytics import (React version)
import { Analytics } from "@vercel/analytics/react";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeTop =
        document.getElementById('home')?.getBoundingClientRect().top || 0;
      setShowButton(homeTop < -200);
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
  // Removed useState for theme as it is hardcoded to 'dark'
  const theme = 'dark'; 

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Protect content (disable inspect)
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

  // Ping backend on load
  useEffect(() => {
    const backendUrl =
      import.meta.env.VITE_API_URL || 'https://your-backend.onrender.com';

    fetch(`${backendUrl}/ping`)
      .then(() => console.log("Backend pinged 🚀"))
      .catch((err) => console.log("Ping failed ❌", err));
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <ParticleBackground theme={theme} />
      {/* Removed theme prop as it is not used in the updated Navigation component */}
      <Navigation /> 

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* The ID for 'home' is crucial for navigation */}
        <div id="home">
          <Hero theme={theme} />
        </div>

        <About />
        <Experience />
        <Skills />
        <Projects />
        <QASection />
        <Contact />
        <ScrollToTopButton />
      </motion.main>

      <footer className="bg-slate-800/50 backdrop-blur-sm py-8 text-center transition-colors duration-300">
        <p className="text-slate-400 text-xs sm:text-sm">
          © 2025 Mahesh Patil. All rights reserved.
        </p>
      </footer>

      {/* ⭐ Vercel Analytics Tracking */}
      <Analytics />
    </div>
  );
}

export default App;