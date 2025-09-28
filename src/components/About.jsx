import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeading from './SectionHeading';

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const stats = [
    { value: "5th", label: "Semester B.Tech" },
    { value: "3+", label: "Years Coding" },
    { value: "20+", label: "Club Members" }
  ];
  
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Sityog Institute of Technology",
      period: "2022 - Present",
      description: "Focused on programming, algorithms, and AI/ML with practical applications through BitLinguals coding club."
    },
    {
      degree: "High School",
      institution: "Higher Secondary School",
      period: "2019 - 2021",
      description: "Specialized in science and mathematics with a focus on computer applications."
    }
  ];
  
  const experience = [
    {
      position: "Founder & President",
      company: "BitLinguals Coding Club",
      period: "2024 - Present",
      description: "Lead weekly 3-hour coding sessions focused on peer learning and practical skill development for 20+ student members."
    },
    {
      position: "Content Creator",
      company: "YouTube Channel",
      period: "2024 - Present",
      description: "Create educational content focused on programming, AI concepts, and technology tutorials to help other students learn."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-primary relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-20 bg-gradient-to-r from-transparent via-highlight/5 to-transparent top-0"></div>
        <div className="absolute w-full h-20 bg-gradient-to-r from-transparent via-accent/5 to-transparent bottom-0"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-highlight opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="About Me" 
          subtitle="CS student with a passion for AI/ML, coding communities, and content creation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column: Bio & Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="bg-secondary p-8 rounded-xl border border-accent/20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-bl-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-highlight/10 rounded-tr-full -ml-20 -mb-20"></div>
              
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Hello there!</h3>
              
              <div className="space-y-4 relative z-10">
                <p className="text-gray-300 leading-relaxed">
                  I'm a 5th Semester B.Tech CSE student at Sityog Institute of Technology with a passion for AI/ML, coding communities, and content creation.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  As the founder of BitLinguals, the coding club at my college, I lead weekly 3-hour sessions focused on peer learning and practical skill development.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My goal is to build technologies that solve real-world problems while fostering a community of passionate developers. When not coding, I create educational content for my YouTube channel.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-secondary p-6 rounded-xl border border-accent/20 shadow-lg text-center relative overflow-hidden group"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-highlight/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h4 className="text-3xl font-bold text-highlight mb-1 relative z-10">{stat.value}</h4>
                  <p className="text-sm text-gray-400 relative z-10">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              variants={itemVariants} 
              className="flex flex-wrap justify-center gap-4 pt-4"
            >
              <motion.a 
                href="https://drive.google.com/file/d/1lOaM96BQ9EBmuF8nLG0dG5k0bu4VjlmD/view?usp=sharing" 
                target="_blank"
                className="inline-flex items-center px-6 py-3 bg-highlight text-primary font-medium rounded-full shadow-lg hover:bg-highlight/90 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Download Resume</span>
              </motion.a>
              
              <motion.a 
                href="https://www.youtube.com/@mioNacs" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-secondary text-white font-medium rounded-full shadow-lg border border-accent/30 hover:border-accent transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
                <span>YouTube Channel</span>
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Right column: Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="bg-secondary p-8 rounded-xl border border-accent/20 shadow-xl relative">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-highlight" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="7"></circle>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                </svg>
                Education
              </h3>
              
              <div className="space-y-6">
                {education.map((item, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-highlight/30 pb-6 last:pb-0">
                    <div className="absolute left-[-8px] top-0 w-3.5 h-3.5 bg-highlight rounded-full"></div>
                    <h4 className="text-xl font-bold text-white">{item.degree}</h4>
                    <div className="flex flex-wrap items-center text-sm text-gray-400 mb-2">
                      <span className="mr-3">{item.institution}</span>
                      <span className="bg-primary/80 px-2 py-0.5 rounded text-highlight/80 text-xs">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-secondary p-8 rounded-xl border border-accent/20 shadow-xl relative">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-highlight" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
                Activities
              </h3>
              
              <div className="space-y-6">
                {experience.map((item, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-highlight/30 pb-6 last:pb-0">
                    <div className="absolute left-[-8px] top-0 w-3.5 h-3.5 bg-highlight rounded-full"></div>
                    <h4 className="text-xl font-bold text-white">{item.position}</h4>
                    <div className="flex flex-wrap items-center text-sm text-gray-400 mb-2">
                      <span className="mr-3">{item.company}</span>
                      <span className="bg-primary/80 px-2 py-0.5 rounded text-highlight/80 text-xs">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 