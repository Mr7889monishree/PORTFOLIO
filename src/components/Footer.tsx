import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { SocialLink } from './ui/SocialLink';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="relative bg-black text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12 mb-16"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6">Contact</h3>
            <div className="space-y-3 text-white/60">
              <p>Monishree Rameshbabu</p>
              <p>Chennai, India</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6">Connect</h3>
            <div className="flex space-x-4">
              <SocialLink href="mailto:monishreerameshbabu@gmail.com" icon={<Mail className="w-5 h-5" />} />
              <SocialLink href="https://www.linkedin.com/in/monishree-rameshbabu-226120263" icon={<Linkedin className="w-5 h-5" />} />
              <SocialLink href="https://github.com" icon={<Github className="w-5 h-5" />} />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6">Navigation</h3>
            <div className="space-y-3">
              {['About', 'Skills', 'Projects'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ x: 10 }}
                  className="block text-white/60 hover:text-white transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-white/10 text-center"
        >
          <p className="text-xl mb-4">Let's create something amazing together</p>
          <div className="text-white/60 flex items-center justify-center gap-2">
            © {currentYear} Monishree Rameshbabu. Made with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Heart className="w-4 h-4 text-red-500" />
            </motion.span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}