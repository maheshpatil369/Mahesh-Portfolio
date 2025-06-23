import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Employee Management System',
      category: 'fullstack',
      description: 'A streamlined platform to manage employee profiles, assign tasks with deadlines, and handle leave requests. It enhances team productivity by centralizing responsibilities and ensuring timely task completion.',
      image: 'https://ik.imagekit.io/xh7qx43uk/employeemanagementsystem.png?updatedAt=1749470008664',
      technologies: ['React', 'Node.js', 'LocalStorage', 'Tailwind CSS'],
      liveUrl: 'https://employee-management-system-maheshpatil369s-projects.vercel.app/',
      githubUrl: 'https://github.com/maheshpatil369/Employee-Management-System.git'
    },
    {
      id: 2,
       title: 'PlanPal – Plan, Track, Explore',
      category: 'fullstack',
      description: 'PlanPal is a comprehensive tour management platform designed to simplify the planning, recording, and organization of tours. It helps agencies schedule trips, track bookings, manage itineraries, and maintain client records—all in one intuitive interface. With PlanPal, travel agencies can streamline operations, improve customer service, and ensure seamless travel experiences',
      image: 'https://ik.imagekit.io/xh7qx43uk/Screenshot%202025-06-23%20123235.png?updatedAt=1750662671688',
      technologies: ['React', 'Python', 'FastAPI', 'WebSocket'],
      liveUrl: 'https://trip-manager-pro-rx7z.vercel.app/',
      githubUrl: 'https://github.com/maheshpatil369/TripManager-Pro.git'
     
    },
    {
      id: 3,
        title: 'Obyes Agency Clone',
      category: 'frontend',
      description: 'A responsive and modern clone of the Obyes creative agency website. It replicates the clean layout, smooth animations, and interactive design elements to showcase UI/UX skills. Built to demonstrate frontend precision and visual fidelity in real-world design replication..',
      image: 'https://ik.imagekit.io/xh7qx43uk/Screenshot%202025-06-09%20172613.png?updatedAt=1749470204263',
      technologies: ['JavaScript', 'Tailwind CSS', 'GSAC Animation', 'HTML'],
      liveUrl: 'https://obyes-agency-clone.vercel.app/',
      githubUrl: 'https://github.com/maheshpatil369/obys-agency-clone.git'

    },
    {
      id: 4,
           title: 'Web Vulnerability Scanner',
      category: 'frontend',
      description: 'Designed to automate the detection of common web vulnerabilities—such as SQL injection, XSS, and insecure headers—to help developers and security teams proactively identify and fix issues before they can be exploited.',
      image: 'https://ik.imagekit.io/xh7qx43uk/api%20python.png?updatedAt=1749471347852',
      technologies: ['Python', 'Tkinter', 'Shodan API'],
      liveUrl: 'https://github.com/maheshpatil369/WebVulnScannerPython/blob/main/readme.md',
      githubUrl: 'https://github.com/maheshpatil369/WebVulnScannerPython.git'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'design',
      description: 'A responsive portfolio website with modern animations and smooth scrolling effects showcasing creative work.',
      image: 'https://ik.imagekit.io/xh7qx43uk/Screenshot%202025-06-09%20173112.png?updatedAt=1749470491233',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
      liveUrl: 'maheshpatil.tech',
      githubUrl: 'https://github.com/maheshpatil369?tab=repositories'
    },
    {
      id: 6,
      // title: 'PlanPal – Plan, Track, Explore',
      // category: 'fullstack',
      // description: 'PlanPal is a comprehensive tour management platform designed to simplify the planning, recording, and organization of tours. It helps agencies schedule trips, track bookings, manage itineraries, and maintain client records—all in one intuitive interface. With PlanPal, travel agencies can streamline operations, improve customer service, and ensure seamless travel experiences',
      // image: 'https://ik.imagekit.io/xh7qx43uk/Screenshot%202025-06-23%20123235.png?updatedAt=1750662671688',
      // technologies: ['React', 'Python', 'FastAPI', 'WebSocket'],
      // liveUrl: 'https://trip-manager-pro-rx7z.vercel.app/',
      // githubUrl: ''
       title: 'Student Feedback System',
      category: 'backend',
      description: 'An interactive platform where students can submit feedback on courses, instructors, or college services. Designed to collect and analyze responses, it helps institutions improve teaching quality and address student concerns efficiently.',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/065/307/364/small_2x/coming-soon-teaser-mysterious-reveal-ahead-video.jpg',
      technologies: ['React', 'MongoDB', 'Tailwind CSS', 'Tailwind CSS'],
      liveUrl: '',
      githubUrl: '#'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'design', label: 'Design' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-slate-800/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-8">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                    : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      className="p-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Eye size={20} />
                    </motion.button>
                    <motion.a
                      href={project.liveUrl}
                      className="p-2 bg-green-500 rounded-full text-white hover:bg-green-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="p-2 bg-gray-500 rounded-full text-white hover:bg-gray-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700/50 text-blue-400 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
         


{selectedProject && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    onClick={() => setSelectedProject(null)} 
  >
    <button
      onClick={() => setSelectedProject(null)}
      className="absolute top-6 right-6 text-white text-3xl hover:text-red-400 z-50"
      aria-label="Close"
    >
      &times;
    </button>

    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      className="relative bg-slate-800 rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={selectedProject.image}
        alt={selectedProject.title}
        className="w-full max-h-[38 0px] object-cover rounded-lg mb-6"
      />
      <h3 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h3>
      <p className="text-slate-400 mb-6">{selectedProject.description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {selectedProject.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-slate-700/50 text-blue-400 text-sm rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex space-x-4">
        <motion.a
          href={selectedProject.liveUrl}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ExternalLink size={16} />
          <span>Live Demo</span>
        </motion.a>
        <motion.a
          href={selectedProject.githubUrl}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Github size={16} />
          <span>View Code</span>
        </motion.a>
      </div>
    </motion.div>
  </motion.div>
)}



        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;