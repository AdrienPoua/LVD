'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import MainSVG from './MainSVG';
export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Détecte le scroll
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center transition-opacity ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.9 }}
    >
      <MainSVG width={64} height={64} />
      {/* Icône flèche */}
      <ArrowUp className='relative h-6 w-6 text-white' />
    </motion.button>
  );
}
