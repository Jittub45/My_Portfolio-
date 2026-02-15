import { motion } from 'framer-motion';
import { useState } from 'react';

const Features = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const tabs = [
    { id: 'ai', label: 'AI/ML' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools' }
  ];

  const skills = {
    ai: [
      {
        name: "LangChain.js",
        description: "For building RAG pipelines and conversational AI with seamless LLM orchestration."
      },
      {
        name: "PyTorch",
        description: "For deep learning research and building production-ready neural networks."
      },
      {
        name: "YOLOv11",
        description: "For real-time object detection and computer vision applications."
      },
      {
        name: "OpenAI / GPT-4",
        description: "For building intelligent applications with state-of-the-art language models."
      }
    ],
    backend: [
      {
        name: "Next.js",
        description: "For building full-stack applications with server-side rendering and API routes."
      },
      {
        name: "Python",
        description: "For ML pipelines, data processing, and backend services."
      },
      {
        name: "Flask",
        description: "For lightweight APIs and model serving endpoints."
      }
    ],
    tools: [
      {
        name: "Astra DB",
        description: "For vector storage and semantic search in RAG applications."
      },
      {
        name: "Docker",
        description: "For containerization and consistent deployment environments."
      },
      {
        name: "AWS",
        description: "For cloud infrastructure, S3 storage, and scalable deployments."
      },
      {
        name: "Git",
        description: "For version control and collaborative development workflows."
      }
    ]
  };

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
          Skills
        </motion.h2>
        
        <motion.p
          className="text-gray-400 text-lg mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Tools and technologies I enjoy working with
        </motion.p>

        {/* Tabs */}
        <motion.div 
          className="flex gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-karate-purple text-white'
                  : 'bg-karate-navy/50 text-gray-400 hover:bg-karate-navy hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills[activeTab as keyof typeof skills].map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-karate-navy/50 border border-gray-700/50 rounded-2xl p-6 hover:border-karate-purple/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h4 className="text-lg font-bold text-white mb-3">{skill.name}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
