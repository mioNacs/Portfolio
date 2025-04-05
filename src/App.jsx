import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import YouTube from './components/YouTube';
import Community from './components/Community';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';
import './index.css';
import './App.css';

function App() {
  const [easterEggs, setEasterEggs] = useState({
    konami: false,
    mioNacs: false,
  });
  
  // Konami code sequence: ↑ ↑ ↓ ↓ ← → ← → B A
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  const mioNacsCode = ['m', 'i', 'o', 'N', 'a', 'c', 's'];
  
  const [keysPressed, setKeysPressed] = useState([]);
  
  useEffect(() => {
    // Add console easter egg
    console.log("%cHello Inspector 👀", "color: #e94560; font-size: 24px; font-weight: bold;");
    console.log("%cYou found an easter egg! There are more hidden in the site...", "color: #0f3460; font-size: 16px;");
    
    const handleKeyDown = (e) => {
      setKeysPressed(prev => {
        const updatedKeys = [...prev, e.key];
        
        // Check for mioNacs code
        const mioNacsString = updatedKeys.slice(-mioNacsCode.length).join('');
        if (mioNacsString === mioNacsCode.join('')) {
          setEasterEggs(prev => ({ ...prev, mioNacs: !prev.mioNacs }));
        }
        
        // Check for Konami code
        if (updatedKeys.slice(-konamiCode.length).every((key, i) => key === konamiCode[i])) {
          setEasterEggs(prev => ({ ...prev, konami: !prev.konami }));
        }
        
        // Keep array at reasonable size
        return updatedKeys.slice(-20);
      });
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  return (
    <AnimatePresence>
      <div className={`min-h-screen ${easterEggs.konami ? 'glitch-mode' : ''} ${easterEggs.mioNacs ? 'theme-alternate' : ''}`}>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <YouTube />
        <Community />
        <Contact />
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
