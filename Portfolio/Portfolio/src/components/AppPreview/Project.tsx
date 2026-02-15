import { motion } from 'framer-motion';

const AppPreview = () => {
  
  const projects = [
    {
      image: "https://astconsulting.in/wp-content/uploads/2025/03/from-pixels-to-predictions-unveiling-the-power-of-machine-vision-in-defect-detection-featured.jpg",
      title: "Defect Detection using Computer Vision",
      description: "AI-powered defect detection system using deep learning & computer vision for automated quality inspection.",
      technologies: ["Python", "OpenCV", "TensorFlow", "PyTorch", "MongoDB", "Docker"],
      key_features: [
        "Implemented CNN-based models for image classification.",
        "Automated real-time defect detection using IoT cameras.",
        "Deployed using Flask API & containerized with Docker."
      ],
      github_repo: "https://github.com/your-repo-link1",
      demo_link: "https://your-demo-link1.com",
      delay: 0.1
    },
    {
      image: "https://i.ytimg.com/vi/bAOdXTDuha8/maxresdefault.jpg",
      title: "Gender & Age Detection with CNNs",
      description: "Developed a deep learning model to predict gender & age from facial images using CNN architectures and openCv.",
      technologies: ["Python", "OpenCV", "TensorFlow", "Keras", "Flask", "AWS S3"],
      key_features: [
        "Trained on UTKFace dataset for age & gender classification.",
        "Achieved 96% accuracy after hyperparameter tuning.",
        "Deployed using AWS for cloud-based inference."
      ],
      github_repo: "https://github.com/your-repo-link2",
      demo_link: "https://your-demo-link2.com",
      delay: 0.3
    },
    {
      image:  "https://raw.githubusercontent.com/Masterx-AI/Project_Titanic_Survival_Prediction_/main/titanic.jpg",
      title: "Titanic Survival Prediction - Kaggle Dataset",
      description: "Machine learning model to predict Titanic passenger survival based on given multiple features in Kaggle competition.",
      technologies: ["Python", "Pandas","NumPy", "Scikit-Learn", "XGBoost", "Matplotlib"],
      key_features: [
        "Engineered features for better model performance.",
        "Applied XGBoost & Random Forest, achieving 85% accuracy.",
        "Visualized survival trends using Matplotlib & Seaborn."
      ],
      github_repo: "https://github.com/your-repo-link3",
      demo_link: "https://your-demo-link3.com",
      delay: 0.5
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">

      <h2 className="text-center text-3xl md:text-4xl font-bold mb-6 uppercase">
              project
            </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center bg-gray-900 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: project.delay }}
            >
              <div className="relative w-full max-w-[340px] mb-4">
                <div className="absolute inset-0 bg-purple-500 rounded-[16px] blur-md opacity-20 transform translate-y-2"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="relative z-10 w-full rounded-[16px] border-2 border-gray-700 shadow-md"
                />
              </div>
              <h5 className="text-md md:text-lg font-semibold text-white mb-2">
                {project.title}
              </h5>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-300 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-gray-800 px-2 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="text-gray-400 text-s text-left mb-4">
                {project.key_features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
              <div className="flex gap-4">
                <a
                  href={project.github_repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-sm"
                >
                  GitHub Repo
                </a>
                <a
                  href={project.demo_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline text-sm"
                >
                  Demo Link
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
