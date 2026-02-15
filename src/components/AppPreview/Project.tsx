import { motion } from 'framer-motion';

const AppPreview = () => {
  
  const experiences = [
    {
      company: "Liat.ai",
      role: "AI Intern",
      type: "Internship",
      year: "2025",
      description: "Player Re-Identification pipeline using YOLOv11"
    }
  ];

  const projects = [
    {
      title: "PitLane AI",
      description: "F1 RAG Chatbot with real-time data...",
      technologies: ["Next.js", "LangChain.js", "Astra DB", "OpenAI"],
      github: "https://github.com/Jittub45/PitLane-RAG-AI-",
      demo: "https://pitlane-ai-professional-memorable.onrender.com/"
    },
    {
      title: "Player Re-ID",
      description: "Sports video player tracking system...",
      technologies: ["Python", "YOLOv11", "OpenCV", "PyTorch"],
      github: "https://github.com/Jittub45/Player_Reidentification",
      demo: "https://github.com/Jittub45/Player_Reidentification"
    },
    {
      title: "Age & Gender Detection",
      description: "CNN-based facial analysis model...",
      technologies: ["TensorFlow", "Keras", "OpenCV", "Flask"],
      github: "https://github.com/Jittub45",
      demo: "https://github.com/Jittub45"
    }
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Works
        </motion.h2>

        {/* Experience Cards */}
        <div className="mb-16">
          <motion.h3 
            className="text-xl text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Work
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-karate-navy/50 border border-gray-700/50 rounded-2xl p-6 hover:border-karate-purple/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-white">{exp.company}</h4>
                  <span className="text-karate-purple text-sm">{exp.year}</span>
                </div>
                <p className="text-gray-400 text-sm mb-2">{exp.role}</p>
                <span className="inline-block bg-karate-purple/20 text-karate-purple text-xs px-3 py-1 rounded-full">
                  {exp.type}
                </span>
              </motion.div>
            ))}
            
            {/* LinkedIn CTA Card */}
            <motion.a
              href="https://www.linkedin.com/in/kumarjitendra1/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-karate-purple/20 to-karate-blue/20 border border-karate-purple/30 rounded-2xl p-6 flex items-center justify-center hover:border-karate-purple/60 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-center">
                <span className="text-karate-purple font-semibold group-hover:underline">LinkedIn</span>
                <p className="text-gray-400 text-sm mt-1">Open for opportunities</p>
              </div>
            </motion.a>
          </div>
        </div>

        {/* Projects */}
        <div>
          <motion.h3 
            className="text-xl text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Latest side/freelance projects
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-karate-navy/50 border border-gray-700/50 rounded-2xl p-6 hover:border-karate-purple/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-karate-purple transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-gray-800/80 text-gray-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-karate-purple hover:underline text-sm"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-karate-aqua hover:underline text-sm"
                  >
                    Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
