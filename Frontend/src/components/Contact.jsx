// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

// const Contact = () => {
//   const API_BASE_URL = import.meta.env.VITE_API_URL;
//   const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [showToast, setShowToast] = useState(false); // ✅ for toast

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const response = await fetch(`${API_BASE_URL}/api/send-email`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           to: 'contact2mahesh937@gmail.com',
//           subject: `New message from ${formData.name}`,
//           html: `
//             <p><strong>Name:</strong> ${formData.name}</p>
//             <p><strong>Email:</strong> ${formData.email}</p>
//             <p><strong>Message:</strong></p>
//             <p>${formData.message}</p>
//           `,
//         }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         setIsSubmitted(true);
//         setFormData({ name: '', email: '', message: '' });

//         setShowToast(true);
//         setTimeout(() => setShowToast(false), 3000);

//         setTimeout(() => setIsSubmitted(false), 3000);
//       } else {
//         alert('Failed to send email. Please try again later.');
//       }
//     } catch (error) {
//       console.error('Email sending error:', error);
//       alert('Something went wrong. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const contactInfo = [
//     { icon: Mail, title: 'Email', info: 'maheshpatilmp937@gmail.com', href: 'mailto:maheshpatilmp937@gmail.com' },
//     { icon: Phone, title: 'Phone', info: '+91 8623900807', href: 'tel:+918623900807' },
//     { icon: MapPin, title: 'Location', info: 'Navi Mumbai', href: 'https://maps.app.goo.gl/cA4LskRg7X8JK1Gj6' },
//   ];

//   return (
//     <section id="contact" className="py-16">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {showToast && (
//           <div className="fixed top-6 right-6 z-50">
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               className="bg-slate-800/70 backdrop-blur-md text-white px-4 py-3 rounded-xl shadow-xl border border-slate-700"
//             >
//               <p className="text-sm font-medium">✅ Message sent successfully!</p>
//             </motion.div>
//           </div>
//         )}

//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-3">
//             Get In <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
//           </h2>
//           <p className="text-lg text-slate-400 max-w-3xl mx-auto">
//             I'm always open to discussing new opportunities, creative projects, or just having a chat about technology.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="space-y-8"
//           >
//             <div>
//               <h3 className="text-2xl font-bold text-white mb-3">Let's Connect</h3>
//               <p className="text-slate-400 mb-8">
//                 Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you.
//               </p>
//             </div>
//             <div className="space-y-6">
//               {contactInfo.map((item, index) => (
//                 <motion.a
//                   key={index}
//                   href={item.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition duration-300 group"
//                   whileHover={{ scale: 1.02, x: 10 }}
//                 >
//                   <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
//                     <item.icon size={20} className="text-white" />
//                   </div>
//                   <div>
//                     <h4 className="text-white font-semibold">{item.title}</h4>
//                     <p className="text-slate-400 group-hover:text-slate-300">{item.info}</p>
//                   </div>
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-bold text-white mb-2">Your Name</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   placeholder="Enter your name"
//                   className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-bold text-white mb-2">Your Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   placeholder="Enter your email"
//                   className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block text-sm font-bold text-white mb-2">Your Message</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={6}
//                   placeholder="Tell me about your project or just say hello..."
//                   className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//               </div>
//               <motion.button
//                 type="submit"
//                 disabled={isSubmitting || isSubmitted}
//                 className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg flex items-center justify-center space-x-2 disabled:opacity-50"
//                 whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
//                 whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
//               >
//                 {isSubmitting ? (
//                   <>
//                     <motion.div
//                       animate={{ rotate: 360 }}
//                       transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
//                       className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
//                     />
//                     <span>Sending...</span>
//                   </>
//                 ) : isSubmitted ? (
//                   <>
//                     <CheckCircle size={20} />
//                     <span>Message Sent!</span>
//                   </>
//                 ) : (
//                   <>
//                     <Send size={20} />
//                     <span>Send Message</span>
//                   </>
//                 )}
//               </motion.button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;




  import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const API_BASE_URL = import.meta.env.VITE_API_URL;
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [suggestions, setSuggestions] = useState([]);

  const commonDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'aol.com', 'icloud.com'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'email' && value.includes('@')) {
      const parts = value.split('@');
      const domainPart = parts[1];
      const filteredSuggestions = commonDomains.filter(domain => domain.startsWith(domainPart));
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (domain) => {
    const parts = formData.email.split('@');
    const newEmail = parts[0] + '@' + domain;
    setFormData({ ...formData, email: newEmail });
    setSuggestions([]);
  };

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' });
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill out all fields.', 'warning');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'contact2mahesh937@gmail.com',
          subject: `New message from ${formData.name}`,
          html: `
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Message:</strong></p>
            <p>${formData.message}</p>
          `,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        showToast('Message sent successfully!', 'success');
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        showToast('Failed to send email. Please try again later.', 'error');
      }
    } catch (error) {
      console.error('Email sending error:', error);
      showToast('Something went wrong. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, title: 'Email', info: 'maheshpatilmp937@gmail.com', href: 'mailto:maheshpatilmp937@gmail.com' },
    { icon: Phone, title: 'Phone', info: '+91 8623900807', href: 'tel:+918623900807' },
    { icon: MapPin, title: 'Location', info: 'Navi Mumbai', href: 'https://maps.app.goo.gl/cA4LskRg7X8JK1Gj6' },
  ];

  return (
    <section id="contact" className="py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence>
          {toast.show && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`fixed top-6 right-6 z-50 p-4 rounded-xl shadow-xl border ${
                toast.type === 'success'
                  ? 'bg-green-800/70 backdrop-blur-md text-white border-green-700'
                  : toast.type === 'error'
                    ? 'bg-red-800/70 backdrop-blur-md text-white border-red-700'
                    : 'bg-yellow-800/70 backdrop-blur-md text-white border-yellow-700'
              }`}
            >
              <div className="flex items-center space-x-2">
                {toast.type === 'success' ? <CheckCircle size={20} /> : toast.type === 'error' ? <XCircle size={20} /> : <AlertCircle size={20} />}
                <p className="text-sm font-medium">{toast.message}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Get In <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, creative projects, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Let's Connect</h3>
              <p className="text-slate-400 mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you.
              </p>
            </div>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition duration-300 group"
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                    <item.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                    <p className="text-slate-400 group-hover:text-slate-300">{item.info}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-white mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-bold text-white mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <AnimatePresence>
                  {suggestions.length > 0 && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 right-0 top-full mt-2 bg-slate-800/90 backdrop-blur-md rounded-lg shadow-lg border border-slate-700/50 z-10"
                    >
                      {suggestions.map((domain, index) => (
                        <motion.li
                          key={index}
                          className="px-4 py-2 text-slate-300 hover:bg-slate-700/50 cursor-pointer first:rounded-t-lg last:rounded-b-lg"
                          onClick={() => handleSuggestionClick(domain)}
                          whileHover={{ scale: 1.01, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="text-blue-400 font-semibold">{formData.email.split('@')[0]}</span>@{domain}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-white mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell me about your project or just say hello..."
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg flex items-center justify-center space-x-2 disabled:opacity-50"
                whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                    />
                    <span>Sending...</span>
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
