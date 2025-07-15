import React, { useState } from "react";
import { ChevronDown, ExternalLink, ArrowRight } from "lucide-react";

const faqData = [
  {
    question: "What technologies do you specialize in?",
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
    question: "Are you open to freelance or remote work?",
    answer: "Yes, I'm open to freelance, remote work, and internships.",
  },
  {
    question: "Can I view your resume?",
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
    question: "Tell me about your work experience.",
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
    question: "Do you contribute to open source?",
    answer:
      "Yes, I love contributing to open source and sharing helpful tools and UI components.",
  },
];

const AQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
      <h2 className="text-4xl font-bold text-center mb-12 underline decoration-sky-500 underline-offset-[10px]">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {faqData.map((item, i) => (
          <div
            key={i}
            className={`rounded-xl backdrop-blur bg-white/5 border border-white/10 p-5 transition-all duration-300 shadow-lg ${
              openIndex === i ? "ring-2 ring-blue-400" : "hover:ring-1 hover:ring-white/20"
            }`}
          >
            <button
              onClick={() => toggle(i)}
              className="flex justify-between items-center w-full text-left font-semibold text-lg sm:text-xl"
            >
              <span>{item.question}</span>
              <ChevronDown
                className={`w-6 h-6 transition-transform ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === i ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
              }`}
            >
              <div className="text-gray-300 text-sm sm:text-base flex gap-2 items-start">
                <ArrowRight size={18} className="mt-1 text-blue-400 shrink-0" />
                <div className="leading-relaxed">{item.answer}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AQSection;
