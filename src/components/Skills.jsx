import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { FaNodeJs, FaPython } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { SiJavascript, SiReact, SiTailwindcss, SiHtml5, SiCss3, SiGit, SiGithub, SiNextdotjs} from 'react-icons/si';
import { VscCopilot, VscVscode } from 'react-icons/vsc';

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
        { name: "Python", level: 75, color: "#3776AB", icon: FaPython, secretTitle: "Snake Charmer" },
        { name: "JavaScript", level: 85, color: "#F7DF1E", icon: SiJavascript, secretTitle: "DOM Wizard" },
      ]
    },
    {
      name: "Frameworks/Libraries",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      skills: [
        { name: "React", level: 85, color: "#61DAFB", icon: SiReact, secretTitle: "Component Composer" },
        { name: "Next.js", level: 75, color: "#717171", icon: SiNextdotjs, secretTitle: "Full-Stack Wizard" },
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
        { name: "Tailwind", level: 80, color: "#06B6D4", icon: SiTailwindcss, secretTitle: "Class Wizard" },
        { name: "HTML", level: 90, color: "#E34F26", icon: SiHtml5, secretTitle: "Style Sculptor" },
        { name: "CSS", level: 80, color: "#1572B6", icon: SiCss3, secretTitle: "Style Sculptor" },
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
        { name: "Node.js", level: 60, color: "#339933", icon: FaNodeJs, secretTitle: "Server Sorcerer" },
        { name: "MongoDB", level: 65, color: "#47A248", icon: SiMongodb, secretTitle: "Document Wrangler" },
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
        { name: "Git/GitHub", level: 85, color: "#F05032", icon: SiGithub, secretTitle: "Time Traveler" },
        { name: "VSCode", level: 90, color: "#007ACC", icon: VscVscode, secretTitle: "Editor Enthusiast" },
        { name: "Copilot", level: 75, color: "#9999FF", icon: VscCopilot, secretTitle: "Lets Vibe" },
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
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
      >
        {/* Glassmorphism card */}
        <div className={`relative flex items-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 
                        transition-all duration-500 h-full group-hover:bg-white/10 group-hover:border-white/20
                        shadow-xl group-hover:shadow-2xl`}>
          
          {/* Animated gradient border */}
          <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                          bg-gradient-to-r from-transparent via-[${skill.color}]/30 to-transparent 
                          animate-pulse`}></div>
          
          {/* Skill icon with floating effect */}
          <motion.div 
            className="relative z-10 flex items-center justify-center w-16 h-16 rounded-xl mb-4 mx-auto"
            style={{ backgroundColor: `${skill.color}15` }}
            animate={isHovered ? { 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="text-3xl" style={{ color: skill.color }}>
              {typeof skill.icon === 'string' ? skill.icon : <skill.icon />}
            </div>
          </motion.div>
          
          {/* Skill name */}
          <h3 className="text-xl font-bold text-white mb-3 text-center relative z-10">
            {skill.name}
          </h3>
          
          {/* Circular progress indicator */}
          <div className="relative w-24 h-24 mx-auto mb-4">
            <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-white/10"
              />
              {/* Progress circle */}
              <motion.circle
                cx="50"
                cy="50"
                r="40"
                stroke={skill.color}
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 40}`}
                strokeDashoffset={`${2 * Math.PI * 40 * (1 - skill.level / 100)}`}
                initial={{ strokeDashoffset: `${2 * Math.PI * 40}` }}
                animate={{ strokeDashoffset: `${2 * Math.PI * 40 * (1 - skill.level / 100)}` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="drop-shadow-lg"
              />
            </svg>
            {/* Percentage text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">
                {skill.level}%
              </span>
            </div>
          </div>
          
        </div>

        {/* Enhanced tooltip with glassmorphism */}
        {isHovered && skill.secretTitle && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-20"
          >
            <div className="bg-black/80 backdrop-blur-md border border-white/20 text-white text-sm font-semibold 
                          px-4 py-2 rounded-xl shadow-2xl whitespace-nowrap">
              {skill.secretTitle}
              {/* Arrow */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    );
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-highlight/20 to-accent/20 blur-3xl -top-48 -right-48"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-l from-purple-500/20 to-blue-500/20 blur-3xl -bottom-48 -left-48"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
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
          className="space-y-16"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={category.name} variants={itemVariants} className="mb-12">
              
              {/* Enhanced category header */}
              <motion.div 
                className="relative mb-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-gradient-to-r from-highlight/20 to-accent/20 backdrop-blur-lg 
                                border border-white/20 p-4 rounded-2xl mr-4 text-white shadow-xl">
                    {category.icon}
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-white mb-1">{category.name}</h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-highlight to-accent rounded-full mx-auto"></div>
                  </div>
                </div>
              </motion.div>
              
              {/* Skills grid with responsive layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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

        {/* Enhanced footer message */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-20"
        >
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 inline-block">
            <p className="text-gray-300 font-medium">
              🎯 Hover over skills to discover secret developer titles
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 