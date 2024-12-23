import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ProjectCard } from './ui/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="py-32 bg-black" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-white/60">
            Explore my recent work
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title}
              project={project}
              index={index}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}