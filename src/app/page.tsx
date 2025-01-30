'use client';

import HeroSection from '@/sections/Hero';
import About from '@/sections/About';
import { Services } from '@/sections/Services';
import Clients from '@/sections/Clients';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeroContainer from '@/components/layouts/HeroContainer';

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      <HeroContainer>
        <Header />
        <HeroSection />
      </HeroContainer>
      <Services />
      <About />
      <Clients />
      <Footer />
    </div>
  );
}
