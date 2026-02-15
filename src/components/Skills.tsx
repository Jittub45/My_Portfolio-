"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Code2, Database, Cloud, Brain, Wrench } from "lucide-react";

const skillCategories = [
  {
    id: "ml",
    name: "Machine Learning",
    icon: Brain,
    skills: [
      { name: "CNNs", description: "Deep learning for computer vision tasks" },
      { name: "LSTMs", description: "Sequential data and time series modeling" },
      { name: "Transformers", description: "Attention-based architectures for NLP" },
      { name: "YOLO", description: "Real-time object detection" },
      { name: "RAG Systems", description: "Retrieval Augmented Generation" },
      { name: "XGBoost", description: "Gradient boosting for structured data" },
      { name: "Linear Regression", description: "Statistical modeling" },
      { name: "Logistic Regression", description: "Classification algorithms" },
    ],
  },
  {
    id: "languages",
    name: "Languages",
    icon: Code2,
    skills: [
      { name: "Python", description: "Primary language for ML and AI development" },
      { name: "Java", description: "Enterprise applications and Android" },
      { name: "SQL", description: "Database queries and data manipulation" },
      { name: "TypeScript", description: "Type-safe JavaScript development" },
    ],
  },
  {
    id: "frameworks",
    name: "Frameworks & Libraries",
    icon: Database,
    skills: [
      { name: "LangChain", description: "LLM application framework" },
      { name: "FastAPI", description: "High-performance Python APIs" },
      { name: "Flask", description: "Lightweight Python web framework" },
      { name: "PyTorch", description: "Deep learning framework" },
      { name: "TensorFlow", description: "ML model training and deployment" },
      { name: "OpenCV", description: "Computer vision library" },
    ],
  },
  {
    id: "devops",
    name: "DevOps & MLOps",
    icon: Cloud,
    skills: [
      { name: "Docker", description: "Containerization for reproducible environments" },
      { name: "Kubernetes", description: "Container orchestration basics" },
      { name: "GitHub Actions", description: "CI/CD automation" },
      { name: "MLflow", description: "ML experiment tracking and deployment" },
      { name: "AWS EC2", description: "Cloud compute instances" },
      { name: "AWS S3", description: "Cloud object storage" },
      { name: "MongoDB Atlas", description: "Cloud database service" },
    ],
  },
  {
    id: "tools",
    name: "Tools & Others",
    icon: Wrench,
    skills: [
      { name: "Git", description: "Version control" },
      { name: "Jupyter", description: "Interactive notebooks for ML" },
      { name: "AI Prompting", description: "LLM prompt engineering" },
      { name: "DSA", description: "400+ problems solved" },
    ],
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("ml");

  const activeSkills = skillCategories.find((cat) => cat.id === activeCategory)?.skills || [];

  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-[#2d3240] via-[#434f63] to-[#2d3240] relative">
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
            Skills<span className="text-[#f7b62a]">.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Tools and technologies I enjoy working with
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-8"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-[#f7b62a] to-[#6b7bd2] text-white shadow-lg shadow-[#f7b62a]/25"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
                }`}
              >
                <Icon size={18} />
                {category.name}
              </button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {activeSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="p-5 bg-white/5 border border-white/10 rounded-xl hover:border-[#f7b62a]/50 hover:bg-[#f7b62a]/5 transition-all group cursor-default"
            >
              <h4 className="text-lg font-semibold text-white group-hover:text-[#f7b62a] transition-colors">
                {skill.name}
              </h4>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
