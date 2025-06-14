// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

// const Contact = () => {
//   const [ref, inView] = useInView({
//     threshold: 0.1,
//     triggerOnce: true
//   });

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   setIsSubmitting(true);
    
//   //   // Simulate form submission
//   //   await new Promise(resolve => setTimeout(resolve, 2000));
    
//   //   setIsSubmitting(false);
//   //   setIsSubmitted(true);
//   //   setFormData({ name: '', email: '', message: '' });
    
//   //   // Reset success message after 3 seconds
//   //   setTimeout(() => setIsSubmitted(false), 3000);
//   // };

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setIsSubmitting(true);

//   try {
//     // const response = await fetch('http://localhost:5000/api/send-email', {
//      const response = await fetch(`${API_BASE_URL}/send-email`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       }, 
//       body: JSON.stringify({
//         to: 'contact2mahesh937@gmail.com', // You can use a fixed recipient
//         subject: `New message from ${formData.name}`,
//         html: `
//           <p><strong>Name:</strong> ${formData.name}</p>
//           <p><strong>Email:</strong> ${formData.email}</p>
//           <p><strong>Message:</strong></p>
//           <p>${formData.message}</p>
//         `,
//       }),
//     });

//     const data = await response.json();

//     if (data.success) {
//       setIsSubmitted(true);
//       setFormData({ name: '', email: '', message: '' });
//       setTimeout(() => setIsSubmitted(false), 3000);
//     } else {
//       alert('Failed to send email. Please try again later.');
//     }
//   } catch (error) {
//     console.error('Email sending error:', error);
//     alert('Something went wrong. Please try again.');
//   }

//   setIsSubmitting(false);
// };


//   const contactInfo = [
//     {
//       icon: Mail,
//       title: 'Email',
//       info: 'maheshpatilmp937@gmail.com',
//       href: 'maheshpatilmp937@gmail.com'
//     },
//     {
//       icon: Phone,
//       title: 'Phone',
//       info: '+91 8623900807',
//       href: 'tel:+91 8623900807'
//     },
//     {
//       icon: MapPin,
//       title: 'Location',
//       info: 'Navi Mumbai',
//       href: 'https://maps.app.goo.gl/cA4LskRg7X8JK1Gj6'
//     }
//   ];

//   return (
//     <section id="contact" className="py-16">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
//           {/* Contact Information */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="space-y-8"
//           >
//             <div>
//               <h3 className="text-2xl font-bold text-white mb-3">Let's Connect</h3>
//               <p className="text-slate-400 mb-8">
//                 Whether you have a project in mind, want to collaborate, or just want to say hello,
//                 I'd love to hear from you.
//               </p>
//             </div>

//             <div className="space-y-6">
//               {contactInfo.map((item, index) => (
//                 <motion.a
//                   key={index}
//                   href={item.href}
//                   className="flex items-center space-x-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg hover:bg-slate-700/50 transition-all duration-300 group"
//                   whileHover={{ scale: 1.02, x: 10 }}
//                 >
//                   <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300">
//                     <item.icon size={20} className="text-white" />
//                   </div>
//                   <div>
//                     <h4 className="text-white font-semibold">{item.title}</h4>
//                     <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
//                       {item.info}
//                     </p>
//                   </div>
//                 </motion.a>
//               ))}
//             </div>

//             {/* <motion.div
//               initial={{ opacity: 0 }}
//               animate={inView ? { opacity: 1 } : {}}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               className="mt-8"
//             >
//               <img
//                 src="#"
//                 // src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
//                 alt="Contact"
//                 className="rounded-2xl shadow-2xl"
//               />
//             </motion.div> */}
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-bold text-white mb-2">
//                   Your Name
//                 </label>
//                 <motion.input
//                   whileFocus={{ scale: 1.02 }}
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300"
//                   placeholder="Enter your name"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-bold text-white mb-2">
//                   Your Email
//                 </label>
//                 <motion.input
//                   whileFocus={{ scale: 1.02 }}
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300"
//                   placeholder="Enter your email"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-bold text-white mb-2">
//                   Your Message
//                 </label>
//                 <motion.textarea
//                   whileFocus={{ scale: 1.02 }}
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={6}
//                   className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300 resize-none"
//                   placeholder="Tell me about your project or just say hello..."
//                 />
//               </div>

//               <motion.button
//                 type="submit"
//                 disabled={isSubmitting || isSubmitted}
//                 className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
//                 whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
//                 whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
//               >
//                 {isSubmitting ? (
//                   <>
//                     <motion.div
//                       animate={{ rotate: 360 }}
//                       transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                       className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
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



// Contact.jsx (Frontend React Component with working email API call)
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const API_BASE_URL = import.meta.env.VITE_API_URL;
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/send-email`, {
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
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        alert('Failed to send email. Please try again later.');
      }
    } catch (error) {
      console.error('Email sending error:', error);
      alert('Something went wrong. Please try again.');
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: Mail, title: 'Email', info: 'maheshpatilmp937@gmail.com', href: 'mailto:maheshpatilmp937@gmail.com' },
    { icon: Phone, title: 'Phone', info: '+91 8623900807', href: 'tel:+91 8623900807' },
    { icon: MapPin, title: 'Location', info: 'Navi Mumbai', href: 'https://maps.app.goo.gl/cA4LskRg7X8JK1Gj6' },
  ];

  return (
    <section id="contact" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Get In <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, creative projects, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Let's Connect</h3>
              <p className="text-slate-400 mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you.
              </p>
            </div>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a key={index} href={item.href} className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition duration-300 group" whileHover={{ scale: 1.02, x: 10 }}>
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

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-white mb-2">Your Name</label>
                <motion.input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your name" className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white" whileFocus={{ scale: 1.02 }} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-white mb-2">Your Email</label>
                <motion.input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter your email" className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white" whileFocus={{ scale: 1.02 }} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-white mb-2">Your Message</label>
                <motion.textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} placeholder="Tell me about your project or just say hello..." className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white resize-none" whileFocus={{ scale: 1.02 }} />
              </div>
              <motion.button type="submit" disabled={isSubmitting || isSubmitted} className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg flex items-center justify-center space-x-2 disabled:opacity-50" whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }} whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}>
                {isSubmitting ? (
                  <>
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
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

