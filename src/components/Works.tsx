"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ExternalLink, Calendar, FileText, Cpu, Leaf, Settings, Eye, Bot, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    company: "Jetking Infotrain Limited",
    role: "Machine Learning Intern",
    period: "April 2025 - September 2025",
    duration: "6 months",
    location: "Champaran, Bihar",
    description: "Built document intelligence pipeline with LangChain & DeepSeek (92% accuracy) and optimized LSTM-XGBoost models using MLflow & Docker.",
    technologies: ["LangChain", "DeepSeek", "LSTM", "XGBoost", "MLflow", "Docker"],
  },
  {
    company: "Freelance",
    role: "AI Model Evaluator",
    period: "August 2024 - February 2025",
    duration: "7 months",
    location: "Champaran, Bihar",
    description: "Participated in large-scale LLM training and evaluation for projects like Laurelin Sun and Blue Wizard, enhancing model accuracy.",
    technologies: ["LLM Training", "Model Evaluation", "AI Research"],
  },
];

const projects = [
  {
    title: "Document Intelligence Pipeline",
    description: "RAG-based document processing system with LangChain and DeepSeek achieving 92% retrieval accuracy.",
    technologies: ["LangChain", "DeepSeek", "RAG", "Python", "FastAPI"],
    color: "from-[#f7b62a] to-[#6b7bd2]",
    icon: FileText,
    featured: true,
  },
  {
    title: "Solar Disaggregation (TPIN++)",
    description: "Three-Stage Transfer Learning Framework for Physics Informed Solar Disaggregation - Published Research.",
    technologies: ["Transfer Learning", "Physics-Informed ML", "Python", "TensorFlow"],
    color: "from-[#6b7bd2] to-[#f7b62a]",
    icon: Cpu,
    featured: true,
  },
  {
    title: "Crop Recommendation System",
    description: "Hybrid Uncertainty-Aware Model for Precision Crop Recommendation - Published Research.",
    technologies: ["Uncertainty Quantification", "ML", "Agriculture AI"],
    color: "from-[#f7b62a] to-[#434f63]",
    icon: Leaf,
    featured: false,
  },
  {
    title: "MLOps Pipeline",
    description: "Full CI/CD automation pipeline with Docker, MLflow, GitHub Actions for ML model deployment.",
    technologies: ["Docker", "MLflow", "GitHub Actions", "AWS", "FastAPI"],
    color: "from-[#6b7bd2] to-[#434f63]",
    icon: Settings,
    featured: false,
  },
  {
    title: "Computer Vision Pipeline",
    description: "YOLO-based object detection pipeline for real-time computer vision applications.",
    technologies: ["YOLO", "OpenCV", "Python", "PyTorch"],
    color: "from-[#f7b62a] to-[#6b7bd2]",
    icon: Eye,
    featured: false,
  },
  {
    title: "GenAI Agents",
    description: "RAG systems and Generative AI agents for intelligent document processing and Q&A.",
    technologies: ["LangChain", "OpenAI", "Vector DB", "Python"],
    color: "from-[#6b7bd2] to-[#f7b62a]",
    icon: Bot,
    featured: false,
  },
];

const Works = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <section id="works" className="py-16 bg-[#2d3240] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Works<span className="text-[#f7b62a]">.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Professional experience and side projects I&apos;ve worked on
          </p>
        </motion.div>

        {/* Experience Section - Timeline */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-[#f7b62a]" size={24} />
            <h3 className="text-2xl font-semibold text-white">Experience</h3>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#f7b62a] via-[#f7b62a] to-transparent hidden md:block" />
            
            {/* Mobile Line (left side) */}
            <div className="absolute left-4 w-0.5 h-full bg-gradient-to-b from-[#f7b62a] via-[#f7b62a] to-transparent md:hidden" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-[#f7b62a] rounded-full border-4 border-[#2d3240] z-10 shadow-lg shadow-[#f7b62a]/50" />
                  
                  {/* Content Card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-[45%] ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                    }`}
                  >
                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#f7b62a]/50 transition-all group hover:shadow-lg hover:shadow-[#f7b62a]/10">
                      {/* Date Badge */}
                      <div className={`flex items-center gap-2 text-[#f7b62a] text-sm mb-3 ${
                        index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                      }`}>
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      
                      <h4 className="text-xl font-semibold text-white group-hover:text-[#f7b62a] transition-colors mb-1">
                        {exp.company}
                      </h4>
                      <p className="text-[#f7b62a] font-medium mb-1">{exp.role}</p>
                      <p className="text-gray-500 text-sm mb-3">{exp.location}</p>
                      
                      <p className="text-gray-400 text-sm mb-4">
                        {exp.description}
                      </p>

                      <div className={`flex flex-wrap gap-2 ${
                        index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                      }`}>
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs bg-[#f7b62a]/10 text-[#f7b62a] rounded-full border border-[#f7b62a]/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-[45%]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <ExternalLink className="text-[#f7b62a]" size={24} />
            <h3 className="text-2xl font-semibold text-white">Latest Projects & Research</h3>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, index) => {
                const Icon = project.icon;
                const isFeatured = project.featured;
                
                return (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    layout
                    className={`group relative overflow-hidden rounded-3xl cursor-pointer ${
                      isFeatured ? "md:col-span-1 lg:row-span-1" : ""
                    }`}
                  >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Card Content */}
                  <div className="relative h-full p-8 bg-white/[0.03] border border-white/10 rounded-3xl group-hover:border-white/20 transition-all duration-300 flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${project.color} bg-opacity-20`}>
                        <Icon className="text-white" size={24} />
                      </div>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="p-2 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ArrowUpRight className="text-white" size={18} />
                      </motion.div>
                    </div>

                    {/* Title & Description */}
                    <h4 className={`text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${project.color} transition-all duration-300`}>
                      {project.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/10 group-hover:border-white/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1.5 text-xs font-medium bg-white/5 text-gray-500 rounded-full">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
            </AnimatePresence>
          </div>

          {/* See More / See Less Button */}
          {projects.length > 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center mt-10"
            >
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="group flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-medium hover:bg-[#f7b62a]/10 hover:border-[#f7b62a]/50 transition-all duration-300"
              >
                <span>{showAllProjects ? "Show Less" : `See More Projects`}</span>
                <motion.span
                  animate={{ rotate: showAllProjects ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#f7b62a]"
                >
                  {showAllProjects ? "↑" : "↓"}
                </motion.span>
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Works;
