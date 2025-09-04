import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import SectionHeading from './SectionHeading';

const YouTube = () => {
  const [showBehindScenes, setShowBehindScenes] = useState(false);
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
  
  const behindScenesFacts = [
    "I record most videos between 10 PM and 2 AM when my creativity peaks.",
    "I often re-record the introduction at least 5 times to get it right.",
    "My microphone setup includes a pop filter made from a coat hanger and a sock.",
    "I script my tutorials on paper before recording them.",
    "I've had to restart videos due to unexpected Windows updates.",
    "I keep a 'blooper reel' of all my mistakes that I might share someday.",
    "My first few videos were recorded with my phone propped up on a stack of books.",
    "I always keep coffee nearby, but I'm careful not to spill it on my keyboard (again).",
  ];
  
  // Get a random behind-the-scenes fact
  const randomFact = behindScenesFacts[Math.floor(Math.random() * behindScenesFacts.length)];

  return (
    <section id="youtube" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <SectionHeading 
            title="YouTube Channel" 
            subtitle="I create content about programming, AI, and technology. Join me on this learning journey!"
          />

          <motion.div variants={itemVariants} className="bg-primary p-6 rounded-lg shadow-xl">
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <iframe
                className="w-full rounded-lg shadow-lg"
                style={{ aspectRatio: '16/9' }}
                src="https://www.youtube.com/embed/H6Qm2T35Bt8?si=ZafKB-9zdi5rZyQZ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-highlight mb-4">@mioNacs</h3>
              <p className="text-gray-300 mb-6">
                I create content about programming, AI, and technology. Join me on this learning journey!
              </p>
              
              <div className="flex justify-center flex-wrap gap-4">
                <a
                  href="https://www.youtube.com/@mioNacs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                  Subscribe
                </a>
                
                {/* Hidden button */}
                <button
                  onClick={() => setShowBehindScenes(!showBehindScenes)}
                  className="relative group overflow-hidden rounded-md"
                >
                  <span className="block px-6 py-2 border-2 border-transparent bg-primary text-gray-500 hover:text-gray-300 font-semibold rounded-md transition-all duration-300">
                    🎬
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-highlight transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  <span className="absolute top-full left-0 w-full block px-3 py-1 bg-highlight text-white font-bold text-xs transition-all duration-200 transform translate-y-0 group-hover:-translate-y-full rounded-b-md">Behind the Scenes</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Behind the scenes content */}
          {showBehindScenes && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-8 bg-accent p-6 rounded-lg border border-highlight relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-highlight px-3 py-1 text-sm font-bold">
                EASTER EGG
              </div>
              <h3 className="text-xl font-bold text-highlight mb-4">Behind the Scenes</h3>
              <p className="text-gray-300 italic mb-4">"{randomFact}"</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">More secrets unlocked: 1/8</span>
                <button 
                  onClick={() => setShowBehindScenes(false)}
                  className="text-highlight hover:text-white transition-colors duration-300"
                >
                  Hide
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default YouTube; 