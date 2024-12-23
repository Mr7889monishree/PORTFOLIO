import { motion, useTransform, MotionValue } from 'framer-motion';
import { Project } from '../../types';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
  progress: MotionValue<number>;
}

export function ProjectCard({ project, index, progress }: ProjectCardProps) {
  const isEven = index % 2 === 0;
  
  const translateX = useTransform(
    progress,
    [0, 1],
    [isEven ? -100 : 100, 0]
  );

  return (
    <motion.div
      style={{ x: translateX }}
      className={`flex flex-col md:flex-row items-center gap-12 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      <div className="w-full md:w-1/2">
        <div className="relative group">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-[400px] object-cover rounded-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
            <div className="absolute bottom-6 right-6 flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors"
                >
                  <Github className="w-6 h-6 text-black" />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors"
                >
                  <ExternalLink className="w-6 h-6 text-black" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 text-white">
        <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
        <p className="text-white/60 text-lg mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}