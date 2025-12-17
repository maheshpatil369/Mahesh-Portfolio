import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink, ArrowRight } from "lucide-react";

const faqData = [
  {
    question: "Which technologies and tools do you primarily work with?",
    answer: (
      <>
        I specialize in <strong>React</strong> and <strong>Node.js</strong>, but I'm also well-versed in Express.js, MongoDB, Tailwind CSS, Flutter, and UI/UX tools like Figma and Adobe XD.{" "}
        <a
          href="#skills"
          className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-500 underline ml-1"
        >
          View in Skills <ExternalLink size={14} />
        </a>
      </>
    ),
  },
  {
    question: "Are you available for freelance, remote, or contract-based opportunities?",
    answer: "Yes, I'm open to freelance, remote work, and internships.",
  },
  {
    question: "Where can I view or download your resume?",
    answer: (
      <>
        Yes!{" "}
        <a
          href="https://drive.google.com/file/d/1cB6joSQcFWk8aM7iEJmFRb2phpgqeKdO/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-500 underline"
        >
          View Resume <ExternalLink size={14} />
        </a>
      </>
    ),
  },
  {
    question: "Can you briefly describe your professional experience?",
    answer: (
      <>
        I worked as a <strong>UI/UX Design Intern</strong> at{" "}
        <strong>AIexecute</strong> since <em>May 2025</em>.{" "}
        <a
          href="https://drive.google.com/file/d/1L1S1968kAuCzPYJ2Gvb3raCc13wFMGLs/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-500 underline"
        >
          View Offer Letter <ExternalLink size={14} />
        </a>
      </>
    ),
  },
  {
    question: "Do you contribute to open-source projects or client-based solutions?",
    answer: (
      <>
        Yes, I love contributing to open source and sharing helpful tools and UI components.
        I’ve also worked on client projects such as 🌾 <strong>FarmSync – Farmer & Crop Management</strong>,
        a comprehensive full-stack system that streamlines agricultural data management and improves decision-making.
        <br/><br/>
        <div className="flex items-center space-x-4 text-xs sm:text-sm">
          <span>
            🔗 GitHub:{" "}
            <a
              href="https://github.com/maheshpatil369/Emp-mange-project"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 underline"
            >
              Click here
            </a>
          </span>
          <span>
            ▶️ YouTube Demo:{" "}
            <a
              href="https://youtu.be/EnL-osAQ8PI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 underline"
            >
              Watch here
            </a>
          </span>
        </div>
      </>
    ),
  },
];


const AQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12 underline decoration-sky-500 underline-offset-[10px]">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6">
        {faqData.map((item, i) => (
          <motion.div
            key={i}
            layout
            className={`rounded-xl backdrop-blur bg-white/5 border border-white/10 p-5 shadow-lg transition-all ${
              openIndex === i
                ? "ring-2 ring-blue-400"
                : "hover:ring-1 hover:ring-white/20"
            }`}
          >
            <button
              onClick={() => toggle(i)}
              className="flex justify-between items-center w-full text-left font-semibold text-lg sm:text-xl"
            >
              <span>{item.question}</span>
              <motion.span
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-6 h-6" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden mt-4"
                >
                  <div className="flex gap-3 items-start text-gray-300 text-sm sm:text-base">
                    <ArrowRight size={18} className="mt-1 text-blue-400 shrink-0" />
                    <div className="leading-relaxed">{item.answer}</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AQSection;
