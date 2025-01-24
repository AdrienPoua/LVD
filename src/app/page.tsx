"use client";

import HeroSection from "@/sections/Hero";
import About from "@/sections/About";
import { Services } from "@/sections/Services";
import Clients from "@/sections/Clients";
import Cta from "@/sections/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {



  return (
    <div className="flex flex-col min-h-screen">
      <div style={{ backgroundImage: 'url("/svg.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Header />
        <HeroSection />
      </div >
      <Services />
      <About />
      <Clients />
      <Cta />
      <Footer />
    </div >
  );
}