import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NotFound = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ghostPosition, setGhostPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  useEffect(() => {
    // Make the ghost follow the mouse with a delay
    const timer = setTimeout(() => {
      const newX = ghostPosition.x + (mousePosition.x - ghostPosition.x) * 0.05;
      const newY = ghostPosition.y + (mousePosition.y - ghostPosition.y) * 0.05;
      setGhostPosition({ x: newX, y: newY });
    }, 20);
    
    return () => clearTimeout(timer);
  }, [mousePosition, ghostPosition]);

  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="z-10 text-center">
        <motion.h1 
          className="text-7xl md:text-9xl font-bold text-highlight mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          404
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Oops! You've found the spooky page...
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a 
            href="/" 
            className="btn-primary inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Return Home
          </a>
        </motion.div>
      </div>
      
      {/* Floating ghost that follows the cursor */}
      <motion.div
        className="absolute text-6xl md:text-8xl pointer-events-none"
        animate={{
          x: ghostPosition.x,
          y: ghostPosition.y,
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          rotate: {
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          },
        }}
        style={{ left: -40, top: -40 }}
      >
        👻
      </motion.div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="text-highlight">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 12h8"></path>
          <path d="M12 8v8"></path>
        </svg>
      </div>
      
      {/* Random floating spooky elements */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl md:text-4xl opacity-20"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight 
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            y: {
              repeat: Infinity,
              duration: Math.random() * 5 + 3,
              ease: "easeInOut",
            },
            rotate: {
              repeat: Infinity,
              duration: Math.random() * 10 + 20,
              ease: "linear",
            },
            opacity: {
              repeat: Infinity,
              duration: Math.random() * 5 + 3,
              ease: "easeInOut",
            },
          }}
        >
          {["👻", "💀", "🎃", "🕸️", "🕷️", "🦇", "⚰️"][Math.floor(Math.random() * 7)]}
        </motion.div>
      ))}
    </div>
  );
};

export default NotFound; 