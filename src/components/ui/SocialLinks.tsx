import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    href: "mailto:monishreerameshbabu@gmail.com",
    icon: <Mail className="w-6 h-6" />,
    label: "Email"
  },
  {
    href: "https://www.linkedin.com/in/monishree-rameshbabu-226120263",
    icon: <Linkedin className="w-6 h-6" />,
    label: "LinkedIn"
  },
  {
    href: "https://github.com",
    icon: <Github className="w-6 h-6" />,
    label: "GitHub"
  }
];

export default function SocialLinks() {
  return (
    <div className="flex gap-6">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-3 bg-white/10 rounded-full backdrop-blur-sm 
                   hover:bg-white/20 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ y: -5 }}
        >
          {link.icon}
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 
                         opacity-0 group-hover:opacity-100 transition-opacity
                         text-sm whitespace-nowrap">
            {link.label}
          </span>
        </motion.a>
      ))}
    </div>
  );
}