import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, ExternalLink, X } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // 🔥 Modal state
  const [activeDoc, setActiveDoc] = useState(null);

  const experiences = [
    {
      id: 1,
      role: 'Web Developer Intern',
      company: 'AIexecute',
      date: 'May 2025 - Present',
      description:
        'Leading the design of intuitive user interfaces and enhancing user experience for AI-driven applications. Collaborating with developers to bridge the gap between design and implementation.',
      skills: ['React', 'Express', 'MongoDB', 'MySQL', 'Tailwind CSS'],
      docType: 'drive',
      docId: '1jvQs8l8IjdWUkbAD6vstne73SkJB8tHn',
      linkText: 'View Offer Letter',
    },
    {
      id: 2,
      role: 'Government Project',
      company: 'Freelance',
      date: 'June 2025 - July 2025',
      description:
        'A comprehensive platform for managing crop data, enabling farmers to track growth, yield, and health metrics effectively.',
      skills: ['React', 'TypeScript', 'Express', 'Flutter', 'Firebase'],
      docType: 'youtube',
      docUrl: 'https://www.youtube.com/embed/EnL-osAQ8PI',
      linkText: 'View Payment Slip / Demo',
    },
  ];

  return (
    <>
      <section id="experience" className="py-10 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Work{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              My professional journey and the companies I've had the privilege to work with.
            </p>
          </motion.div>

          <div className="relative border-l-2 border-slate-700 ml-3 md:ml-6 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative pl-8 md:pl-12"
              >
                <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 border-4 border-slate-900" />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Briefcase size={20} className="text-blue-400" />
                    {exp.role}
                  </h3>
                  <span className="text-sm text-slate-400 flex items-center gap-1">
                    <Calendar size={16} />
                    {exp.date}
                  </span>
                </div>

                <h4 className="text-xl text-blue-400 font-semibold mb-4">
                  {exp.company}
                </h4>

                <p className="text-slate-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-900/30 rounded-full border border-cyan-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setActiveDoc(exp)}
                  className="inline-flex items-center text-sm text-slate-400 hover:text-white hover:underline transition-colors"
                >
                  {exp.linkText} <ExternalLink size={14} className="ml-1" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 MODAL (same UX as Hero Resume) */}
      <AnimatePresence>
        {activeDoc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={() => setActiveDoc(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-slate-800 rounded-lg w-full max-w-4xl h-[90vh] overflow-hidden border border-slate-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b border-slate-700">
                <h3 className="text-lg font-semibold text-white">
                  {activeDoc.linkText}
                </h3>
                <button
                  onClick={() => setActiveDoc(null)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-full"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="h-full">
                {activeDoc.docType === 'drive' && (
                  <iframe
                    src={`https://drive.google.com/file/d/${activeDoc.docId}/preview`}
                    className="w-full h-full border-0"
                    allow="fullscreen"
                  />
                )}

                {activeDoc.docType === 'youtube' && (
                <iframe
  src={`${activeDoc.docUrl}?autoplay=1&mute=1`}
  className="w-full h-full border-0"
  allow="autoplay; encrypted-media"
  allowFullScreen
/>

                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Experience;
