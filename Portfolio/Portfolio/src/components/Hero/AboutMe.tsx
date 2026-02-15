import { motion } from 'framer-motion';
import portpic from './portpic.png';
import portpic1 from './portpic1.png';


const Hero = () => {
  return (
    <section className="relative py-16 md:py-2 overflow-hidden">
      {/* Background elements */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1639762681057-408e52192e55?w=2000')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2
        }}
      ></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Mobile-first image (shown first on mobile, hidden on desktop) */}
          <div className="flex-1 block md:hidden mb-8 px-4">
            <img 
              src={portpic1}
              alt="Jitendra Kumar"
              className="w-full h-auto max-w-md mx-auto rounded-lg shadow-xl"
            />
          </div>

          {/* Left content (text content) */}
          <div className="flex-1 flex flex-col max-w-3xl mx-auto text-center md:text-left px-4 md:px-0">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              JITENDRA KUMAR
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl mb-12 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
            <h1> Engineer | AI & ML Enthusiast | Passionate about LLMs, MLOps | Building scalable AI systems, optimizing 
              models, and sharing insights through | Always exploring the intersection of AI, automation, and real-world impact!
            </h1>
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
            </motion.div>
          </div>

          {/* Desktop image (hidden on mobile) */}
          <div className="flex-1 hidden md:block pl-8 lg:pl-16">
            <img 
              src={portpic}
              alt="Jitendra Kumar"
              className="w-full h-auto max-w-lg mx-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
