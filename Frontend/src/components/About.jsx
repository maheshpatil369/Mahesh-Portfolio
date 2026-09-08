import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Zap, Heart } from 'lucide-react';
import GitHubCalendar from 'react-github-calendar';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [showGraph, setShowGraph] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description:
        'Writing maintainable and scalable code that stands the test of time.',
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description:
        'Crafting beautiful interfaces that provide exceptional user experiences.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description:
        'Optimizing applications for speed and efficiency across all devices.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description:
        'Bringing enthusiasm and dedication to every project I work on.',
    },
  ];

  return (
    <section id="about" className="py-10 bg-slate-800/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            I'm a passionate developer with over 1 year of experience creating
            digital solutions. My journey started with curiosity about how
            websites work, and it has evolved into a career dedicated to
            building meaningful experiences through technology.
          </p>
        </motion.div>

        {/* GitHub Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full flex justify-center mb-12"
        >
          {/* IMPORTANT: div instead of section */}
          <div className="w-full max-w-5xl p-5 md:p-6 rounded-xl border border-slate-700/50 bg-slate-900/40 backdrop-blur-sm shadow-lg overflow-hidden">

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-5">
              <h3 className="text-xl font-semibold text-white">
                GitHub Contributions
              </h3>

              <button
                onClick={() => setShowGraph((prev) => !prev)}
                className="px-4 py-2 text-sm bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors"
              >
                {showGraph ? 'Show Contributions' : 'Show Activity Graph'}
              </button>
            </div>

            {/* Normal GitHub Calendar */}
            {!showGraph ? (
              <div className="w-full overflow-x-auto overflow-y-hidden pb-2 scrollbar-custom">
                <div className="min-w-max">
                  <GitHubCalendar
                    username="maheshpatil369"
                    blockSize={12}
                    blockMargin={4}
                    fontSize={13}
                    colorScheme="dark"
                    theme={{
                      dark: [
                        '#161b22',
                        '#4b3520',
                        '#76501f',
                        '#b87325',
                        '#e6a34a',
                      ],
                    }}
                  />
                </div>
              </div>
            ) : (
              /* Activity Graph */
              <div className="w-full overflow-hidden">
                <img
                  src="https://github-readme-activity-graph.vercel.app/graph?username=maheshpatil369&bg_color=00000000&color=e6a34a&line=e6a34a&point=e6a34a&hide_border=true"
                  alt="GitHub Activity Graph"
                  className="block w-full h-auto"
                />
              </div>
            )}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 cursor-pointer"
                onClick={() =>
                  setActiveFeature(
                    activeFeature === index ? null : index
                  )
                }
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center mb-4"
                >
                  <Icon size={24} className="text-white" />
                </motion.div>

                <h4 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h4>

                {/* Desktop */}
                <p className="hidden md:block text-slate-400 text-sm">
                  {feature.description}
                </p>

                {/* Mobile */}
                <motion.p
                  initial={false}
                  animate={{
                    height: activeFeature === index ? 'auto' : 0,
                    opacity: activeFeature === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden overflow-hidden text-slate-400 text-sm"
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
