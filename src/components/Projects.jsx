import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import SectionHeading from './SectionHeading';
import SITCoders from '../assets/SITCoders.png';
import Look4Git from '../assets/Look4Git.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const projects = [
    {
      id: 1,
      title: "SITCoders Website",
      description: "College Community website featuring interactive UI, RBAC and CRUD features.",
      image: SITCoders,
      tags: ["React", "Tailwind CSS", "JavaScript"],
      link: "https://sitcoders.tech/",
      github: "https://github.com/mioNacs/SITCoders",
      features: [
        "Post creation and management",
        "Resource sharing",
        "RBAC",
        "CRUD operations",
        "Admin dashboard"
      ],
      futureFeatures: "Collaboration tools, real-time chat"
    },
    {
      id: 2,
      title: "Look4Git",
      description: "GitHub profile analyzer and visualizer. Compares profiles and visualizes data.",
      image: Look4Git,
      tags: ["React", "Chart.js", "GitHub API"],
      link: "https://mionacs.github.io/Look4Git/",
      github: "https://github.com/mioNacs/Look4Git",
      features: [
        "Profile Analysis",
        "Data vizualization",
        "Profile comparison",
        "Responsive design"
      ],
      goal: "To help developers understand and improve their GitHub presence"
    },
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
    hidden: { y: 50, opacity: 0 },
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

  const ProjectCard = ({ project }) => {
    const cardRef = useRef(null);
    const isCardInView = useInView(cardRef, { once: true, margin: "-50px" });

    return (
      <motion.div
        ref={cardRef}
        className="bg-secondary rounded-xl overflow-hidden shadow-lg group h-full flex flex-col border border-transparent hover:border-accent transition-all duration-300"
        variants={itemVariants}
        initial="hidden"
        animate={isCardInView ? "visible" : "hidden"}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
      >
        <div className="relative overflow-hidden ">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-70"></div>
          
          <div className="absolute top-4 right-4 bg-primary bg-opacity-80 backdrop-blur-sm rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-highlight transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
              aria-label="GitHub repository"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </motion.a>
          </div>
        </div>
        
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <motion.button
              onClick={() => setSelectedProject(project)}
              className="text-white hover:text-highlight text-sm flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span cla>Details</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.button>
          </div>
          
          <p className="text-gray-400 mb-4 text-sm line-clamp-3">{project.description}</p>
          
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 text-xs rounded-full bg-primary text-highlight border border-highlight/30"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-highlight hover:text-accent transition-colors"
              whileHover={{ x: 5 }}
              whileTap={{ x: 0 }}
            >
              <span>Visit Project</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </motion.a>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-primary relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-highlight/5 -top-48 -left-48 blur-3xl"></div>
        <div className="absolute w-96 h-96 rounded-full bg-accent/5 -bottom-48 -right-48 blur-3xl"></div>
        
        <div className="absolute right-0 top-0 w-1/3 h-1/3 opacity-30">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-highlight/20">
            <path fill="currentColor" d="M37.5,-65.1C50.2,-59.6,63.1,-52.4,71.6,-41.3C80.1,-30.2,84.2,-15.1,83.4,-0.4C82.7,14.2,77.1,28.4,68.6,40.4C60.1,52.4,48.8,62.2,35.9,68.4C23.1,74.6,8.6,77.3,-4.8,75.6C-18.2,73.9,-30.5,67.7,-42.8,59.8C-55.1,51.9,-67.3,42.2,-74.9,29.2C-82.5,16.2,-85.5,-0.1,-82.7,-15.2C-79.9,-30.3,-71.4,-44.2,-59.5,-52.3C-47.6,-60.4,-32.3,-62.6,-19.1,-67.7C-5.9,-72.8,5.2,-80.7,17,-78.9C28.8,-77,41.4,-65.4,37.5,-65.1Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="My Projects" 
          subtitle="Here are some of the projects I've worked on. Each one represents a learning journey and problem-solving adventure." 
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 max-w-[70%] mx-auto gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <motion.a 
            href="https://github.com/mioNacs" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-secondary text-white py-3 px-6 rounded-full shadow-lg hover:bg-secondary-dark transition-colors duration-300 group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 15px rgba(74, 222, 128, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">More Projects on GitHub</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </motion.a>
        </div>
      </div>
      
      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="bg-secondary w-full max-w-4xl rounded-2xl overflow-hidden relative"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: 'spring', damping: 15 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary"></div>
                
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
                  aria-label="Close details"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{selectedProject.title}</h3>
                  
                  <div className="flex space-x-4">
                    <motion.a 
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-sm transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      <span>GitHub</span>
                    </motion.a>
                    
                    <motion.a 
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white bg-highlight hover:bg-highlight/80 px-4 py-2 rounded-full text-sm transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-8">{selectedProject.description}</p>
                
                <div className="mb-8">
                  <h4 className="text-white text-lg font-semibold mb-4">Key Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-highlight mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {selectedProject.futureFeatures && (
                  <div className="mb-6 px-4 py-3 bg-primary bg-opacity-50 rounded-lg">
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Future Plans</h4>
                    <p className="text-sm text-gray-400 italic">{selectedProject.futureFeatures}</p>
                  </div>
                )}
                
                {selectedProject.goal && (
                  <div className="mb-6 px-4 py-3 bg-primary bg-opacity-50 rounded-lg">
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Goal</h4>
                    <p className="text-sm text-gray-400 italic">{selectedProject.goal}</p>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-sm rounded-full bg-primary text-highlight border border-highlight/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects; 