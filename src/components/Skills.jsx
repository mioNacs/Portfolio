import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeading from './SectionHeading';

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      name: "Languages",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: [
        { name: "Python", level: 90, color: "#3776AB", icon: "🐍", secretTitle: "Snake Charmer" },
        { name: "JavaScript", level: 85, color: "#F7DF1E", icon: "⚡", secretTitle: "DOM Wizard" },
      ]
    },
    {
      name: "Frontend",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      skills: [
        { name: "React", level: 85, color: "#61DAFB", icon: "⚛️", secretTitle: "Component Composer" },
        { name: "Tailwind", level: 80, color: "#06B6D4", icon: "🌊", secretTitle: "Class Wizard" },
        { name: "HTML/CSS", level: 90, color: "#E34F26", icon: "🎨", secretTitle: "Style Sculptor" },
      ]
    },
    {
      name: "Backend",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      skills: [
        { name: "Node.js", level: 60, color: "#339933", icon: "🔄", secretTitle: "Learning: Server Sorcerer" },
        { name: "MongoDB", level: 35, color: "#47A248", icon: "🍃", secretTitle: "Learning: Document Wrangler" },
      ]
    },
    {
      name: "AI/ML",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      skills: [
        { name: "scikit-learn", level: 75, color: "#F7931E", icon: "🧠", secretTitle: "Prediction Prodigy" },
        { name: "TensorFlow", level: 70, color: "#FF6F00", icon: "📊", secretTitle: "Tensor Tamer" },
        { name: "NumPy", level: 85, color: "#013243", icon: "🔢", secretTitle: "Array Architect" },
      ]
    },
    {
      name: "Tools",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: [
        { name: "Git/GitHub", level: 85, color: "#F05032", icon: "🔄", secretTitle: "Time Traveler" },
        { name: "VSCode", level: 90, color: "#007ACC", icon: "📝", secretTitle: "Editor Enthusiast" },
        { name: "Premiere Pro", level: 75, color: "#9999FF", icon: "🎬", secretTitle: "Cut Commander" },
        { name: "Photoshop", level: 70, color: "#31A8FF", icon: "📸", secretTitle: "Pixel Perfectionist" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const SkillBadge = ({ skill, category }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <motion.div
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        variants={itemVariants}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
      >
        <div className={`bg-secondary p-6 rounded-xl border border-accent/20 shadow-lg 
                        relative overflow-hidden transition-all duration-300 h-full
                        ${isHovered ? 'transform scale-105 shadow-xl border-accent/60' : ''}`}>
          {/* Background glow effect */}
          <div className={`absolute inset-0 bg-gradient-to-br from-[${skill.color}]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
          
          {/* Floating animation for icon */}
          <motion.div 
            className="text-3xl mb-3"
            animate={isHovered ? { 
              y: [0, -8, 0],
              scale: [1, 1.2, 1]
            } : {}}
            transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
          >
            {skill.icon}
          </motion.div>
          
          <h3 className="text-lg font-bold text-white mb-1 relative z-10">{skill.name}</h3>
          
          {/* Skill level bar */}
          <div className="w-full bg-primary rounded-full h-2 mb-1">
            <motion.div 
              className="h-full rounded-full"
              style={{ 
                backgroundColor: skill.color,
                width: isHovered ? `${skill.level}%` : '0%'
              }}
              initial={{ width: '0%' }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-400">
            <span>Proficiency</span>
            <span>{skill.level}%</span>
          </div>
        </div>

        {/* Easter egg secret title tooltip - restored from original design */}
        {isHovered && skill.secretTitle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-highlight text-white text-xs font-bold px-3 py-1.5 rounded-md z-10 whitespace-nowrap shadow-lg"
          >
            {skill.secretTitle}
            <svg className="absolute text-highlight h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255">
              <polygon className="fill-current" points="0,0 127.5,127.5 255,0"></polygon>
            </svg>
          </motion.div>
        )}
      </motion.div>
    );
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-primary relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-secondary/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-secondary/20 to-transparent"></div>
        <div className="absolute w-96 h-96 rounded-full bg-highlight/5 -top-48 -right-48 blur-3xl"></div>
        <div className="absolute w-96 h-96 rounded-full bg-accent/5 -bottom-48 -left-48 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="My Skills" 
          subtitle="Technical skills I've developed through education, projects, and practical experience."
        />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={category.name} variants={itemVariants} className="mb-10">
              <div className="flex items-center mb-6">
                <div className="bg-secondary p-2 rounded-lg mr-3 text-highlight">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                <div className="ml-4 h-0.5 flex-grow bg-accent/20"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill) => (
                  <SkillBadge 
                    key={skill.name} 
                    skill={skill} 
                    category={category} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Easter egg hint - restored from original design */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-16 opacity-60 text-sm text-gray-400 font-mono"
        >
          * Hover over skills to reveal secret dev titles *
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 