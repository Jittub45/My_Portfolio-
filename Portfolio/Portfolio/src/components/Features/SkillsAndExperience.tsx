import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: "https://ext.same-assets.com/3883402804/3685068680.svg",
      title: "Machine Learning",
      description: "Transformer, LSTM, CNN, GRU, Time-Series Analysis "
    },
    {
      icon: "https://ext.same-assets.com/3883402804/3770033387.svg",
      title: "Tools and Frameworks:",
      description: "PyTorch, TensorFlow, MySQL, MongoDB, AWS, Docker, Flask "
    },
    {
      icon: "https://ext.same-assets.com/3883402804/104422289.svg",
      title: "Core Concept",
      description: "Data Structures & Algorithms, Mathematics, Probability & Statistics, OOPS "
    },
    {
      icon: "https://ext.same-assets.com/3883402804/758554022.svg",
      title: "Soft Skills",
      description: "Problem-Solving, Team Collaboration, Project Management, Adaptability "
    }
  ];

  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            SKILLS AND EXPERIENCE
          </motion.h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-karate-blue/20 p-4 rounded-full mb-6">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 h-12"
                />
              </div>
              <h4 className="text-xl font-bold mb-4 text-karate-purple">{feature.title}</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* "Best of all" Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
          CONTINUOUS LEARNING AND <span className="text-karate-purple">GROWTH</span>
          </h3>
          <h2 className="text-gray-400 text-sm italic">Committed to expanding my skill set and staying updated with the latest technologies and methodologies.</h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
