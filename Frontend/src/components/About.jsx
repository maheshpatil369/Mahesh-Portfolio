import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Zap, Heart } from 'lucide-react';
import GitHubCalendar from 'react-github-calendar';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [showGraph, setShowGraph] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null); // ✅ mobile toggle state

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code that stands the test of time.'
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting beautiful interfaces that provide exceptional user experiences.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency across all devices.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Bringing enthusiasm and dedication to every project I work on.'
    }
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            I'm a passionate developer with over 1 year of experience creating digital solutions.
            My journey started with curiosity about how websites work, and it has evolved into
            a career dedicated to building meaningful experiences through technology.
          </p>
        </motion.div>

        {/* GitHub Section */}
        <motion.div
          className="w-full flex justify-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <section className="w-full max-w-4xl p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6 text-center"> GitHub Contributions </h2>

            <button
              onClick={() => setShowGraph(!showGraph)}
              className="mx-auto block mb-6 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition"
            >
              {showGraph ? 'Show Normal Chart' : 'Show Activity Graph'}
            </button>

            {!showGraph ? (
              <GitHubCalendar
                username="maheshpatil369"
                blockSize={14}
                blockMargin={5}
                fontSize={15}
                theme={{
                  dark: ['#1e293b', '#4ade80', '#22c55e', '#16a34a', '#15803d']
                }}
                className="w-full overflow-x-auto"
              />
            ) : (
              <img
                src="https://github-readme-activity-graph.vercel.app/graph?username=maheshpatil369&bg_color=00000000&color=15bc2f&line=15bc2f&point=15bc2f&hide_border=true"
                alt="GitHub Activity Graph"
                className="w-full object-contain"
                style={{ height: 260 }}
              />
            )}
          </section>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 cursor-pointer"
              onClick={() =>
                setActiveFeature(activeFeature === index ? null : index)
              }
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center mb-4"
              >
                <feature.icon size={24} className="text-white" />
              </motion.div>

              <h4 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h4>

              {/* Desktop description */}
              <p className="hidden md:block text-slate-400 text-sm">
                {feature.description}
              </p>

              {/* Mobile toggle description */}
              <motion.p
                initial={false}
                animate={{
                  height: activeFeature === index ? 'auto' : 0,
                  opacity: activeFeature === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden text-slate-400 text-sm"
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default About;
