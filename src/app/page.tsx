import HeroSection from '@/sections/Hero';
import About from '@/sections/About/Index';
import { Services } from '@/sections/Services';
import Clients from '@/sections/Clients';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeroContainer from '@/components/layouts/HeroContainer';
import Valeurs from '@/sections/Valeurs';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col relative'>
      <ScrollToTop />
      <HeroContainer>
        <Header />
        <HeroSection />
      </HeroContainer>
      <About />
      <Valeurs />
      <Services />
      <Clients />
      <Footer />
    </div>
  );
}
