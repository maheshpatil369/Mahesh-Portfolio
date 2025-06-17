import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaFigma, FaAws } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiPostgresql, SiGraphql, SiAdobexd, SiFirebase } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiOpenai } from 'react-icons/si';
import { HiLightningBolt } from 'react-icons/hi';



const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95, icon: <FaReact className="mr-2 inline-block text-blue-400" /> },
        { name: 'JavaScript', level: 80, icon: <IoLogoJavascript className="mr-2 inline-block text-yellow-400" /> },
        // { name: 'TypeScript', level: 50, icon: <SiTypescript className="mr-2 inline-block text-blue-500" /> },
        { name: 'Tailwind CSS', level: 90, icon: <SiTailwindcss className="mr-2 inline-block text-teal-400" /> },
        { name: 'HTML', level: 95, icon: <><FaHtml5 className="mr-1 inline-block text-orange-500" /></> },
        { name: 'CSS', level: 85, icon: <FaCss3Alt className="mr-2 inline-block text-blue-500 " /> }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85, icon: <FaNodeJs className="mr-2 inline-block text-lime-300" /> },
        { name: 'Python', level: 75, icon: <FaPython className="mr-2 inline-block text-yellow-400" /> },
        { name: 'Express.js', level: 70, icon: <SiExpress className="mr-2 inline-block text-gray-500 dark:text-gray-300" /> },
        { name: 'MongoDB', level: 85, icon: <SiMongodb className="mr-2 inline-block text-green-600" /> },
        { name: 'PostgreSQL', level: 85, icon: <SiPostgresql className="mr-2 inline-block text-blue-600" /> },
        // { name: 'Java', level: 70, icon: <SiGraphql className="mr-2 inline-block text-pink-500" /> }
      ]
    },
    {
      title: 'Tools & Design',
      skills: [
        { name: 'Git', level: 95, icon: <FaGitAlt className="mr-2 inline-block text-orange-600" /> },
        { name: 'ChatGPT', level: 99, icon: <SiOpenai className="mr-2 inline-block text-blue-500" /> },
        // { name: 'Figma', level: 85, icon: <FaFigma className="mr-2 inline-block text-purple-500" /> },
        { name: 'Adobe XD', level: 75, icon: <SiAdobexd className="mr-2 inline-block text-pink-400" /> },
        { name: 'Bolt', level: 85, icon: <HiLightningBolt className="mr-2 inline-block text-orange-500" /> },
        // { name: 'AWS', level: 70, icon: <FaAws className="mr-2 inline-block text-orange-500" /> },
        { name: 'Firebase', level: 60, icon: <SiFirebase className="mr-2 inline-block text-yellow-500" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            I'm constantly learning and improving my skills. Here are the technologies and tools I work with regularly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 font-medium flex items-center">
                        {skill.icon}
                        {skill.name}
                      </span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                        className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;