import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from './SectionHeading';

const TimelineItem = ({ date, title, description, isLeft }) => {
  return (
    <div className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} md:contents`}>
      <div className={`col-start-1 col-end-2 md:mx-auto relative ${isLeft ? 'md:mr-10' : 'md:ml-10'}`}>
        <div className="h-full w-6 flex items-center justify-center">
          <div className="h-full w-0.5 bg-gray-400 opacity-30 pointer-events-none"></div>
        </div>
        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-highlight shadow"></div>
      </div>
      <div
        className={`bg-secondary p-6 rounded-lg shadow-md border border-accent my-4 md:col-span-2 ${
          isLeft ? 'md:ml-10' : 'md:mr-10'
        }`}
      >
        <span className="inline-block px-2 py-1 text-xs font-semibold bg-accent text-white rounded mb-2">
          {date}
        </span>
        <h3 className="text-xl font-bold text-highlight mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const Community = () => {
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

  const events = [
    {
      date: "21 November 2024",
      title: "BitLinguals Founded",
      description: "Started the coding club with 25 members, focusing on Development fundamentals.",
    },
    {
      date: "30 November 2024",
      title: "First Session",
      description: "Organized a session for the members to get to know each other and the club.",
    },
    {
      date: "14 December 2024",
      title: "First Debate ",
      description: "Organized a debate session for the members to discuss the Difference between Online and Offline Learning.",
    },
    {
      date: "29 December 2024",
      title: "First Workshop",
      description: "Organized a workshop for the members to learn about the basics of Development.",
    },
    {
      date: "18 January 2025",
      title: "First Quiz",
      description: "Organized a quiz Competition for the members to test their knowledge.",
    },
    {
      date: "Present",
      title: "Growing Strong",
      description: "Continuing to expand with new projects, workshops, and collaborative learning initiatives.",
    },
  ];

  return (
    <section id="community" className="py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <SectionHeading 
            title="Community & Club" 
            subtitle="Building a coding community and helping others learn through collaboration." 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div variants={itemVariants} className="card">
              <h3 className="text-2xl font-bold text-highlight mb-4">BitLinguals</h3>
              <p className="text-gray-300 mb-4">
                As the founder of BitLinguals, I've created a space where students can learn coding
                through practical projects, peer collaboration, and knowledge sharing.
              </p>
              <p className="text-gray-300">
                Our weekly 3-hour sessions focus on learning by doing, effective communication,
                and building meaningful projects together.
              </p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-highlight font-bold">Members:</span>
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-accent border border-primary flex items-center justify-center text-xs font-bold animate-float"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    >
                      {['NR', 'SK', 'AK', 'RJ', 'VP'][i]}
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full bg-highlight border border-primary flex items-center justify-center text-xs font-bold">
                    20+
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="card flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-highlight mb-4">Our Focus</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-highlight mr-2">✓</span>
                    <span className="text-gray-300">Practical skill development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight mr-2">✓</span>
                    <span className="text-gray-300">Project-based learning approach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight mr-2">✓</span>
                    <span className="text-gray-300">Collaborative problem solving</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight mr-2">✓</span>
                    <span className="text-gray-300">Tech presentation skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight mr-2">✓</span>
                    <span className="text-gray-300">Hackathons and code jams</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 inline-block">
                <a href="https://mionacs.github.io/BLManagementSystem/" target="_blank" className="btn-outline">
                  Join Our Community
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-highlight mb-6 text-center">Club Timeline</h3>
            <div className="flex flex-col md:grid grid-cols-5 md:auto-cols-max">
              {events.map((event, index) => (
                <TimelineItem
                  key={event.date}
                  date={event.date}
                  title={event.title}
                  description={event.description}
                  isLeft={index % 2 === 0}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community; 