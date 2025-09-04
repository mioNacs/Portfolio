import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import SectionHeading from './SectionHeading';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState(null);
  const [formTouched, setFormTouched] = useState({
    name: false,
    email: false,
    message: false,
  });
  
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/mioNacs',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/be_mionacs/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      url: 'https://x.com/mioNacs',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mionacs/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@mioNacs',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      ),
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  
  const handleBlur = (e) => {
    const { name } = e.target;
    setFormTouched({
      ...formTouched,
      [name]: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Set all fields as touched for validation
    setFormTouched({
      name: true,
      email: true,
      message: true,
    });
    
    // Simple validation
    if (!formState.name || !formState.email || !formState.message) {
      setFormStatus('error');
      return;
    }
    
    // In a real scenario, you would send this to a backend
    console.log('Form submitted:', formState);
    setFormStatus('success');
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormState({ name: '', email: '', message: '' });
      setFormTouched({ name: false, email: false, message: false });
      setFormStatus(null);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent opacity-10 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-highlight opacity-10 rounded-tr-full"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <SectionHeading 
            title="Contact Me" 
            subtitle="Have a question or want to work together? Feel free to reach out!"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-highlight mb-6">Get In Touch</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's connect and create something amazing together!
                </p>
                
                <div className="mb-8">
                  <div className="flex items-center mb-4 group">
                    <div className="bg-accent p-3 rounded-full mr-4 group-hover:bg-highlight transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-1">Email</h4>
                      <a 
                        href="mailto:navneet78030@gmail.com" 
                        className="text-highlight hover:underline"
                      >
                        navneet78030@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-highlight mb-4">Connect With Me</h4>
                <div className="flex flex-wrap gap-5">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-highlight transition-colors duration-300"
                      aria-label={link.name}
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: [0, -10, 10, -10, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="bg-primary p-6 rounded-lg shadow-xl overflow-hidden relative">
                {/* Form decoration */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-highlight opacity-10 rounded-full"></div>
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-accent opacity-10 rounded-full"></div>
                
                <div className="mb-5">
                  <label htmlFor="name" className="block text-gray-400 mb-2 text-sm font-medium">
                    Your Name <span className="text-highlight">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full p-3 bg-secondary border ${
                        formTouched.name && !formState.name 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-accent focus:ring-highlight'
                      } rounded-md focus:outline-none focus:ring-2 transition-colors duration-300`}
                      placeholder="John Doe"
                    />
                    {formTouched.name && !formState.name && (
                      <p className="text-red-500 text-xs mt-1">Please enter your name</p>
                    )}
                  </div>
                </div>
                
                <div className="mb-5">
                  <label htmlFor="email" className="block text-gray-400 mb-2 text-sm font-medium">
                    Your Email <span className="text-highlight">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full p-3 bg-secondary border ${
                        formTouched.email && !formState.email 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-accent focus:ring-highlight'
                      } rounded-md focus:outline-none focus:ring-2 transition-colors duration-300`}
                      placeholder="example@email.com"
                    />
                    {formTouched.email && !formState.email && (
                      <p className="text-red-500 text-xs mt-1">Please enter a valid email</p>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-400 mb-2 text-sm font-medium">
                    Your Message <span className="text-highlight">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      rows="5"
                      className={`w-full p-3 bg-secondary border ${
                        formTouched.message && !formState.message 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-accent focus:ring-highlight'
                      } rounded-md focus:outline-none focus:ring-2 transition-colors duration-300 resize-none`}
                      placeholder="Hi Navneet, I'd like to discuss..."
                    ></textarea>
                    {formTouched.message && !formState.message && (
                      <p className="text-red-500 text-xs mt-1">Please enter your message</p>
                    )}
                  </div>
                </div>
                
                <motion.button
                  type="submit"
                  className={`btn-primary w-full relative overflow-hidden ${formStatus === 'success' ? 'bg-green-500' : formStatus === 'error' ? 'bg-red-500' : ''}`}
                  disabled={formStatus === 'success'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">
                    {formStatus === 'success' 
                      ? 'Message Sent!' 
                      : formStatus === 'error'
                      ? 'Please Fill All Fields'
                      : 'Send Message'}
                  </span>
                </motion.button>
                
                {formStatus === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 text-center text-green-500 font-medium"
                  >
                    Thanks for reaching out! I'll get back to you soon.
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 