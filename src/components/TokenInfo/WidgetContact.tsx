import { motion } from 'framer-motion';

const TokenInfo = () => {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>
        
        <motion.p
          className="text-gray-400 text-lg mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I would like to work with you ...
        </motion.p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* LinkedIn Card */}
          <motion.a
            href="https://www.linkedin.com/in/kumarjitendra1/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-karate-navy/50 border border-gray-700/50 rounded-2xl p-8 hover:border-karate-purple/50 transition-all duration-300 group flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-blue-600/20 p-4 rounded-xl">
              <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-karate-purple transition-colors">LinkedIn</h3>
              <p className="text-gray-400 text-sm">Click here to connect with me...</p>
            </div>
          </motion.a>

          {/* Email Card */}
          <motion.a
            href="mailto:jitendrakumaryadav2003@gmail.com?subject=Hello%20Jitendra&body=Hello%20Jitendra,%0A%0AI%20would%20like%20to%20talk%20with%20you..."
            className="bg-karate-navy/50 border border-gray-700/50 rounded-2xl p-8 hover:border-karate-purple/50 transition-all duration-300 group flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-karate-purple/20 p-4 rounded-xl">
              <svg className="w-8 h-8 text-karate-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-karate-purple transition-colors">Email</h3>
              <p className="text-gray-400 text-sm">Click here to send me an email...</p>
            </div>
          </motion.a>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* GitHub Stats */}
          <a 
            href="https://github.com/Jittub45" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-karate-navy/30 border border-gray-700/30 rounded-2xl p-6 hover:border-karate-purple/30 transition-all"
          >
            <h3 className="text-lg font-bold mb-4 text-gray-300">GitHub</h3>
            <img 
              alt="GitHub Stats" 
              src="https://github-readme-stats.vercel.app/api?username=Jittub45&show_icons=true&theme=transparent&hide_border=true&title_color=9b43fb&icon_color=9b43fb&text_color=ffffff"
              className="w-full"
            />
          </a>

          {/* LeetCode Stats */}
          <a 
            href="https://leetcode.com/Jittu_b45/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-karate-navy/30 border border-gray-700/30 rounded-2xl p-6 hover:border-karate-purple/30 transition-all"
          >
            <h3 className="text-lg font-bold mb-4 text-gray-300">LeetCode</h3>
            <img 
              alt="LeetCode Stats" 
              src="https://leetcard.jacoblin.cool/Jittu_b45?theme=dark&font=Nunito&ext=heatmap"
              className="w-full rounded-lg"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TokenInfo;
