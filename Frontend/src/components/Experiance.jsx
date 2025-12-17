import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  // Hook to track if the component is in view for animation triggering
  const [ref, inView] = useInView({
    threshold: 0.1, // Trigger when 10% of the component is visible
    triggerOnce: true, // Only trigger the animation once
  });

  // Data for the experience timeline
  const experiences = [
    {
      id: 1,
      role: 'UI/UX Design Intern',
      company: 'AIexecute',
      date: 'May 2025 - Present',
      description: 'Leading the design of intuitive user interfaces and enhancing user experience for AI-driven applications. Collaborating with developers to bridge the gap between design and implementation.',
      skills: ['Figma', 'Prototyping', 'User Research', 'Wireframing'],
      link: 'https://drive.google.com/file/d/1L1S1968kAuCzPYJ2Gvb3raCc13wFMGLs/view?usp=sharing',
      linkText: 'View Offer Letter'
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            My professional journey and the companies I've had the privilege to work with.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-slate-700 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 border-4 border-slate-900" />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Briefcase size={20} className="text-blue-400" />
                  {exp.role}
                </h3>
                <span className="text-sm text-slate-400 flex items-center gap-1 mt-1 sm:mt-0">
                  <Calendar size={16} />
                  {exp.date}
                </span>
              </div>

              <h4 className="text-xl text-blue-400 font-semibold mb-4">{exp.company}</h4>
              
              <p className="text-slate-300 mb-4 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {exp.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-900/30 rounded-full border border-cyan-700/50">
                    {skill}
                  </span>
                ))}
              </div>

              {exp.link && (
                <a 
                  href={exp.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-slate-400 hover:text-white transition-colors hover:underline"
                >
                  {exp.linkText} <ExternalLink size={14} className="ml-1" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;