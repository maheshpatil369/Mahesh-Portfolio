import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Trophy, Calendar, ExternalLink, X } from "lucide-react";

const Hackathon = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeDoc, setActiveDoc] = useState(null);

  const hackathons = [
    {
      id: 1,
      title: "CodeBits 4.0 2026 - Winner 🥇",
      organization: "Gardha Institute of Technology, Kokan",
      date: "March 2026",
      description:
        "Secured Runner-Up position by developing a scalable solution under tight deadlines with strong teamwork.",
      skills: ["Ollama", "Python", "Fast API", "Flutter"],
      image: "/hackathon1.jpg",
      linkedin:
        "https://www.linkedin.com/posts/mahesh-patil-1a9b9a275_hackathon-cybersecurity-ai-activity-7448965646677176320-oCA8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENF8ZEB2Pc3ukFMJR_fGVosvXroc63w3vk",
      linkText: "View on LinkedIn",
    },
    {
      id: 2,
      title: "HackUP 2024 - Runner Up 🥈",
      organization: "A C Patil College of Engineering, Navi Mumbai",
      date: "April 2026",
      description:
        "Won A C Patil College,Navi Mumbai, building an innovative real-world solution with strong UI/UX and backend integration.",
      skills: ["Ollama", "Fast API", "Flutter"],
      image: "/hackathon2.jpg",
      linkedin:
        "https://www.linkedin.com/posts/mahesh-patil-1a9b9a275_hackathon-ai-legaltech-activity-7439282214766264320-ceAL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENF8ZEB2Pc3ukFMJR_fGVosvXroc63w3vk",
      linkText: "View on LinkedIn",
    },
  ];

  return (
    <>
      <section className="py-10 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              🏆 Hackathon{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
          </motion.div>

          {/* SAME TIMELINE STYLE */}
          <div className="relative border-l-2 border-slate-700 ml-3 md:ml-6 space-y-12">
            {hackathons.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Dot */}
                <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 border-4 border-slate-900" />

                {/* Header */}
                <div className="flex justify-between mb-2">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Trophy size={20} className="text-yellow-400" />
                    {item.title}
                  </h3>
                  <span className="text-sm text-slate-400 flex items-center gap-1">
                    <Calendar size={16} />
                    {item.date}
                  </span>
                </div>

                <h4 className="text-xl text-blue-400 font-semibold mb-4">
                  {item.organization}
                </h4>

                <p className="text-slate-300 mb-4">{item.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs text-cyan-300 bg-cyan-900/30 rounded-full border border-cyan-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button
                  onClick={() => setActiveDoc(item)}
                  className="inline-flex items-center text-sm text-slate-400 hover:text-white hover:underline"
                >
                  {item.linkText} <ExternalLink size={14} className="ml-1" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 MODAL (same as your Experience) */}
      <AnimatePresence>
        {activeDoc && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
            onClick={() => setActiveDoc(null)}
          >
            <motion.div
              className="bg-slate-800 rounded-lg w-full max-w-4xl h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between p-4 border-b border-slate-700">
                <h3 className="text-white font-semibold">{activeDoc.title}</h3>
                <button onClick={() => setActiveDoc(null)}>
                  <X />
                </button>
              </div>

              {/* Content */}
              <div className="h-full">
                {/* Image */}
                <img
                  src={activeDoc.image}
                  alt="hackathon"
                  className="w-full h-full object-contain"
                />

                {/* LinkedIn Button */}
                <div className="absolute bottom-4 right-4">
                  <a
                    href={activeDoc.linkedin}
                    target="_blank"
                    className="bg-blue-500 px-4 py-2 rounded"
                  >
                    Open LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hackathon;
