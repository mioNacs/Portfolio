import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [eggRevealed, setEggRevealed] = useState(false);
  const [showSecretsModal, setShowSecretsModal] = useState(false);
  const [secretInput, setSecretInput] = useState('');
  const [secretEffect, setSecretEffect] = useState(null);
  const secretInputRef = useRef(null);
  
  // Check for konami code sequence
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  const konamiString = "↑↑↓↓←→←→BA";
  
  // Handles the input in the secret code text field
  const handleSecretInput = (e) => {
    const value = e.target.value;
    setSecretInput(value);
    
    // Check for mioNacs
    if (value.toLowerCase() === 'mionacs') {
      setSecretEffect('theme');
      // Reset after showing effect
      setTimeout(() => setSecretEffect(null), 2000);
    }
    
    // Check for konami code (simplified text version for the input field)
    if (value.toLowerCase() === 'konami code') {
      setSecretEffect('glitch');
      // Reset after showing effect
      setTimeout(() => setSecretEffect(null), 2000);
    }
  };
  
  const revealEgg = () => {
    setEggRevealed(true);
    setTimeout(() => setEggRevealed(false), 3000);
  };

  const focusSecretInput = () => {
    if (secretInputRef.current) {
      secretInputRef.current.focus();
    }
  };
  
  return (
    <footer className="bg-primary py-8 border-t border-accent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-r from-transparent via-highlight to-transparent opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-r from-transparent via-accent to-transparent opacity-20"></div>
      </div>
      
      {/* Easter egg animated elements */}
      {eggRevealed && (
        <>
          <motion.div 
            className="absolute"
            initial={{ top: -100, left: "50%" }}
            animate={{ 
              top: ["0%", "100%"],
              left: ["30%", "70%", "30%", "70%", "30%"]
            }}
            transition={{ duration: 3, ease: "easeInOut" }}
          >
            <span className="text-5xl">👻</span>
          </motion.div>
          
          <motion.div 
            className="absolute"
            initial={{ bottom: -100, right: "50%" }}
            animate={{ 
              bottom: ["0%", "100%"],
              right: ["30%", "70%", "30%", "70%", "30%"]
            }}
            transition={{ duration: 3, ease: "easeInOut" }}
          >
            <span className="text-5xl">🎃</span>
          </motion.div>
        </>
      )}
      
      {/* Secrets Modal */}
      <AnimatePresence>
        {showSecretsModal && (
          <motion.div 
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSecretsModal(false)}
          >
            <motion.div 
              className={`bg-secondary p-6 rounded-lg shadow-xl border border-accent max-w-md w-full mx-4 ${secretEffect === 'glitch' ? 'animate-glitch' : ''}`}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={e => e.stopPropagation()}
              style={{
                backgroundColor: secretEffect === 'theme' ? '#f8fafc' : '',
                color: secretEffect === 'theme' ? '#1e293b' : ''
              }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className={`text-xl font-bold ${secretEffect === 'theme' ? 'text-highlight' : 'text-highlight'}`}>Hidden Secrets</h3>
                <button 
                  onClick={() => setShowSecretsModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              
              <ul className="space-y-4 text-gray-300 mb-6">
                <li className="flex items-start">
                  <span className="text-highlight mr-2 text-lg">→</span>
                  <div>
                    <p>Type "<span className="text-highlight">mioNacs</span>" anywhere on the site to toggle dark/light theme</p>
                    <p className="text-xs text-gray-400 mt-1">(Just type the letters while browsing any page)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-2 text-lg">→</span>
                  <div>
                    <p>Enter <span className="text-highlight">Konami code</span> for glitch mode</p>
                    <p className="text-xs text-gray-400 mt-1">(↑ ↑ ↓ ↓ ← → ← → B A)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-2 text-lg">→</span>
                  <div>
                    <p>Check <span className="text-highlight">👻</span> page for spooky surprise</p>
                    <p className="text-xs text-gray-400 mt-1">(Click the ghost icon at the bottom of the page)</p>
                  </div>
                </li>
              </ul>
              
              <div className="bg-primary/50 p-3 rounded-lg mb-5">
                <div className="text-sm text-white mb-2">Try typing a secret code here:</div>
                <div className="flex items-center">
                  <input
                    ref={secretInputRef}
                    type="text"
                    value={secretInput}
                    onChange={handleSecretInput}
                    className={`bg-primary px-3 py-2 rounded-l border border-accent/30 text-white w-full focus:outline-none focus:border-highlight ${secretEffect ? 'border-highlight' : ''}`}
                    placeholder="Type mioNacs or konami code"
                  />
                  <button 
                    onClick={() => {
                      setSecretInput('');
                      setSecretEffect(null);
                    }}
                    className="bg-highlight text-primary px-3 py-2 rounded-r"
                  >
                    Clear
                  </button>
                </div>

                {secretEffect && (
                  <motion.div 
                    className="mt-3 text-center p-2 rounded"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <p className="text-highlight font-bold">
                      {secretEffect === 'theme' ? '🎨 Theme changed!' : ''}
                      {secretEffect === 'glitch' ? '🔍 Glitch mode activated!' : ''}
                      {secretEffect === 'spooky' ? '👻 Boo!' : ''}
                    </p>
                  </motion.div>
                )}
                
                <div className="text-xs text-gray-400 mt-2">
                  Note: This is just for practice. The actual codes work anywhere on the site.
                </div>
              </div>
              
              <div onClick={focusSecretInput} className="text-sm text-highlight text-center cursor-pointer hover:underline">
                Start typing to try it out!
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <span className="text-highlight font-mono text-2xl font-bold mr-2">
              mioNacs
            </span>
            <p className="text-gray-400 text-sm">
              © {currentYear} Navneet Raj. All Rights Reserved.
            </p>
          </motion.div>
          
          <div className="text-gray-400 text-sm">
            <span className="font-mono">
              // Made with 
              <span className="text-highlight mx-1 animate-pulse">♥</span> 
              and <span className="text-highlight mx-1 group relative cursor-help">
                ☕
                <span className="absolute opacity-0 group-hover:opacity-100 -top-16 left-1/2 transform -translate-x-1/2 bg-highlight text-white text-xs px-3 py-2 rounded transition-opacity duration-300 w-40 text-center shadow-lg z-10">
                  Coffee Stats:
                  <ul className="mt-1 list-disc pl-4 text-left">
                    <li>Max 200ml per cup</li>
                    <li>3-4 times a week</li>
                    <li>Mostly dark roast</li>
                  </ul>
                  <svg className="absolute left-1/2 transform -translate-x-1/2 top-full h-2 w-4" viewBox="0 0 24 12">
                    <path fill="currentColor" d="M12 12L0 0h24z" />
                  </svg>
                </span>
              </span>
            </span>
          </div>
          
          <div className="flex space-x-4">
            <motion.a
              href="#home"
              className="text-gray-400 hover:text-highlight transition-colors duration-300"
              whileHover={{ y: -5, scale: 1.1 }}
              aria-label="Back to top"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 15l-6-6-6 6"/>
              </svg>
            </motion.a>
            
            <motion.button
              onClick={() => {
                setShowSecretsModal(true);
                setSecretInput('');
                setSecretEffect(null);
              }}
              className="text-gray-400 hover:text-highlight transition-colors duration-300 relative"
              whileHover={{ y: -5, scale: 1.1, rotate: [0, 10, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
              aria-label="View secrets"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <path d="M12 17h0"/>
              </svg>
            </motion.button>
          </div>
        </div>
        
        {/* Easter egg: Ghost 404 link */}
        <div className="text-center mt-6 relative">
          <motion.a 
            href="/404-ghost"
            className="inline-block text-gray-600 hover:text-gray-400 text-xs transition-colors duration-300 relative"
            aria-label="Spooky 404 page"
            whileHover={{ 
              scale: 1.5,
              transition: { duration: 0.3 }
            }}
            onClick={(e) => {
              e.preventDefault();
              revealEgg();
              setSecretEffect('spooky');
              setTimeout(() => setSecretEffect(null), 2000);
            }}
          >
            <span className="opacity-30 hover:opacity-70 transition-opacity duration-300 text-xl">👻</span>
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-highlight group-hover:w-full transition-all duration-300"></span>
          </motion.a>
        </div>
        
        {/* Secret source code comment */}
        <div className="text-center mt-6 opacity-20 hover:opacity-40 transition-opacity text-xs text-gray-500 font-mono">
          {/* <!-- Hello curious dev! Thanks for inspecting. More secrets await. --> */}
          &lt;!-- console.log("secretCode: darkmode") --&gt;
        </div>
      </div>
    </footer>
  );
};

export default Footer; 