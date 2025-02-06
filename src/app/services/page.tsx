'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroContainer from '@/components/layouts/HeroContainer';
import { Content } from './Content';
import { motion } from 'framer-motion';
import H2 from '@/components/ui/H2';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function ServicesPage() {
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }, []);

  return (
    <HeroContainer variant='nude'>
      <ScrollToTop />
      <Header />
      <motion.main
        className='pb-16 pt-32'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <H2>Nos Services</H2>
        <Content />
      </motion.main>
      <Footer variant='nude' />
    </HeroContainer>
  );
}
