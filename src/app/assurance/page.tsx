'use client';

import { motion } from 'framer-motion';
import { Shield, FileText, Camera, Lock } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function InsurancePage() {
  const features = [
    {
      icon: Shield,
      title: 'Couverture Complète',
      description: "Protection d'assurance complète pour les œuvres d'art pendant le transport et la manipulation.",
    },
    {
      icon: FileText,
      title: 'Documentation Détaillée',
      description: "Rapports d'état détaillés avant et après le transport.",
    },
    {
      icon: Camera,
      title: 'Archives Numériques',
      description: "Photographies de l'état des œuvres.",
    },
    {
      icon: Lock,
      title: 'Processus Sécurisé',
      description: 'Protocoles de sécurité rigoureux tout au long du parcours.',
    },
  ];

  return (
    <>
      <Header />
      <div className='flex h-screen flex-col items-center justify-center'>
        <h1 className='text-center text-4xl'> ICI DETAILLER LES ASSURANCES POUR RASSURER LE CLIENT ?? </h1>
      </div>
      <Footer />
    </>
  );
}
