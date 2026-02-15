"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Sparkles, X, ExternalLink, Download } from "lucide-react";

const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isResumeOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isResumeOpen]);
  const resumeUrl = "/Jitendra_Kumar_Resume.pdf";
  const resumeEmbedUrl = "/Jitendra_Kumar_Resume.pdf#toolbar=0&navpanes=0&scrollbar=0";

  return (
    <>
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#2d3240] via-[#434f63] to-[#2d3240]">
      {/* Static ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f7b62a]/10 via-transparent to-[#6b7bd2]/10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 pt-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <Sparkles className="text-[#f7b62a]" size={20} />
              <span className="text-[#f7b62a] font-medium">Open to opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-white mb-4"
            >
              Jitendra Kumar
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#f7b62a] to-[#6b7bd2] mb-6"
            >
              Machine Learning Engineer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg max-w-xl mb-8 leading-relaxed"
            >
              I build scalable, production-ready AI systems. From RAG systems & GenAI agents 
              to YOLO-based computer vision pipelines. I work end-to-end across the ML lifecycle 
              - from data ingestion & model development to deploying systems using MLOps tools.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {["RAG Systems", "NLP", "Computer Vision", "MLOps", "Python", "Java"].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-[#f7b62a]/20 hover:border-[#f7b62a]/50 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4"
            >
              <a
                href="#works"
                className="px-8 py-3 bg-gradient-to-r from-[#f7b62a] to-[#6b7bd2] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#f7b62a]/25 transition-all"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Resume */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              {/* Resume Preview - Clickable */}
              <div 
                onClick={() => setIsResumeOpen(true)}
                className="cursor-pointer group"
              >
                <div className="relative p-3 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-[#f7b62a]/50 hover:shadow-[0_8px_32px_rgba(247,182,42,0.2)] transition-all duration-300">
                  {/* Liquid Glass Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-2xl opacity-50" />
                  {/* Embedded Resume Preview */}
                  <div className="w-72 h-96 overflow-hidden relative rounded-xl">
                    <iframe
                      src={resumeEmbedUrl}
                      className="w-full h-full border-0 pointer-events-none"
                      title="Resume Preview"
                    />
                    {/* Overlay for click */}
                    <div className="absolute inset-0 group-hover:bg-[#f7b62a]/20 transition-all duration-300 flex items-center justify-center">
                      <span className="px-4 py-2 bg-black/80 backdrop-blur-sm rounded-full text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Click to Expand
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-[#f7b62a]/10 hover:border-[#f7b62a]/50 transition-all"
                >
                  <ExternalLink size={18} />
                  View
                </button>
                <a
                  href={resumeUrl}
                  download="Jitendra_Kumar_Resume.pdf"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#f7b62a] to-[#6b7bd2] text-white font-medium rounded-full hover:shadow-lg hover:shadow-[#f7b62a]/25 transition-all"
                >
                  <Download size={18} />
                  Download
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-gray-400"
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Resume Modal */}
    <AnimatePresence>
      {isResumeOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-8 bg-black/90 backdrop-blur-sm"
          onClick={() => setIsResumeOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl h-[85vh] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsResumeOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-[#2d3240]/80 hover:bg-[#2d3240] rounded-full text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Resume Iframe */}
            <iframe
              src={resumeEmbedUrl}
              className="w-full h-full border-0"
              title="Resume"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

export default Hero;
