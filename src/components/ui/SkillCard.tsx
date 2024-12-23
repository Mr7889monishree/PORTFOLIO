import { motion } from 'framer-motion';
import { Skill } from '../../types';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.05, y: -10 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
        <motion.div 
          className="flex justify-center mb-6"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          {skill.icon}
        </motion.div>
        
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">{skill.category}</h3>
        
        <div className="space-y-3">
          {skill.items.map((item) => (
            <motion.div
              key={item}
              whileHover={{ x: 10 }}
              className="flex items-center space-x-2"
            >
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
              <span className="text-white/70 hover:text-white transition-colors">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}