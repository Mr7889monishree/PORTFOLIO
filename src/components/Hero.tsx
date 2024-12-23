import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SocialLinks from './ui/SocialLinks';
import { useParallax } from '../hooks/useParallax';

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useParallax(parallaxRef);

  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={parallaxRef} className="relative h-screen overflow-hidden bg-black">
      <motion.div 
        className="absolute inset-0"
        style={{ 
          y: scrollY,
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.5)'
        }}
      />
      
      <div className="relative h-full flex flex-col items-center justify-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.img
            src="D:\Monishree-college-work\html,css,js projects\PERSONAL PORTFOLIO\images\monilogo.png"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto border-4 border-white/20 shadow-2xl mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            Monishree Rameshbabu
          </h1>
          
          <p className="text-2xl md:text-3xl text-white/80 mb-12">
            Crafting Digital Experiences Through Code
          </p>

          <SocialLinks />
        </motion.div>

        <motion.button
          onClick={scrollToNext}
          className="absolute bottom-12 p-2 rounded-full border border-white/20 backdrop-blur-sm"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  );
}