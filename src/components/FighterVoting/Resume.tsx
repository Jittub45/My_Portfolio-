import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import portpic from './Jitendra_Resume_Cv-1.png';

const FighterVoting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-karate-navy/50 to-karate-darkblue z-0"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">
              RESUME: A CONCISE SUMMARY OF MY SKILLS, PROJECTS, AND EXPERIENCE
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              My resume is a concise summary of my skills, experience, education,
              and achievements, showcasing my qualifications for a job.
            </p>

            {/* Dashboard Button */}
            <div>
              <a
                href="https://github.com/Jittub45/My-Site/blob/main/Jitendra_Resume_Cv-1.png"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block karate-btn-primary"
              >
                &nbsp;&nbsp;Resume &nbsp;&nbsp;
              </a>
            </div>
          </motion.div>

          {/* Image/Video */}
          <motion.div
            className="flex-1 flex items-center justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full max-w-[400px] mx-auto">
              {/* Phone Frame */}
              <div className="relative w-full h-full aspect-[/26] overflow-hidden rounded-[24px] border-4 border-karate-blue shadow-2xl flex items-center justify-center">
                <motion.img 
                  src={portpic}
                  alt="Jitendra Kumar"
                  className="w-full h-auto max-w-lg mx-auto rounded-lg shadow-xl cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setIsModalOpen(true)}
                  whileHover={{ scale: 1.02 }}
                />
              </div>
              
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-karate-purple opacity-20 blur-xl rounded-[30px] -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="relative max-w-xl w-full max-h-[90vh]"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={portpic} 
                alt="Jitendra Kumar - Full Resume" 
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />
              <button
                className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-200 transition-colors"
                onClick={() => setIsModalOpen(false)}
              >
                <span className="text-2xl">×</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FighterVoting;