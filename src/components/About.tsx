import { motion } from 'framer-motion';
import { Code2, Rocket, Brain } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const highlights = [
    {
      icon: <Code2 className="w-6 h-6 text-indigo-500" />,
      title: "Clean Code Advocate",
      description: "Writing maintainable, efficient, and scalable code is my passion."
    },
    {
      icon: <Rocket className="w-6 h-6 text-purple-500" />,
      title: "Innovation Driven",
      description: "Always exploring new technologies and pushing boundaries."
    },
    {
      icon: <Brain className="w-6 h-6 text-pink-500" />,
      title: "Problem Solver",
      description: "Turning complex challenges into elegant solutions."
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-white to-gray-50" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <img
                src="C:\Users\monis\OneDrive\Desktop\project\monishree.jpeg"
                alt="Coding"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent rounded-2xl" />
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-indigo-100 rounded-full z-0 blur-2xl opacity-60" />
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-purple-100 rounded-full z-0 blur-2xl opacity-60" />
          </div>

          <motion.div
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About Me
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                I am a passionate software developer with a strong foundation in computer science.
                My journey in tech has been driven by a desire to create meaningful digital experiences
                that make a difference.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I specialize in full-stack development and have experience working with modern web
                technologies. I'm constantly learning and exploring new technologies to stay at the
                forefront of web development.
              </p>
            </motion.div>

            <div className="grid gap-6 mt-12">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100"
                >
                  <div className="p-3 rounded-lg bg-gray-50">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}