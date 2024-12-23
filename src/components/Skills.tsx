import { motion } from 'framer-motion';
import { SkillCard } from './ui/SkillCard';
import { skills } from '../data/skills';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 to-black" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Technical Skills</h2>
          <p className="text-xl text-white/60">Technologies I work with</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <SkillCard key={skill.category} skill={skill} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}