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
      <section className='relative flex h-[40vh] items-center justify-center'>
        <Image
          src='https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80'
          alt="Services d'Assurance"
          fill
          className='object-cover'
          priority
        />
        <div className='hero-overlay absolute inset-0' />
        <div className='relative px-4 text-center text-white'>
          <h1 className='mb-4 font-serif text-4xl font-bold md:text-5xl'>Assurance & Rapports</h1>
          <p className='mx-auto max-w-2xl text-xl font-light'>
            Protection complète et documentation pour vos œuvres d&apos;art précieuses
          </p>
        </div>
      </section>

      {/* Grille des Caractéristiques */}
      <section className='bg-gray-50 py-16'>
        <div className='mx-auto max-w-7xl px-4'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='rounded-lg bg-white p-6 shadow-lg'
              >
                <feature.icon className='mb-4 h-8 w-8 text-secondary' />
                <h3 className='mb-2 font-serif text-xl font-bold text-primary'>{feature.title}</h3>
                <p className='font-light text-primary'>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sections de Contenu */}
      <section className='py-16'>
        <div className='mx-auto max-w-7xl px-4'>
          <div className='space-y-16'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='flex flex-col items-center gap-8 md:flex-row'
            >
              <div className='relative h-[300px] w-full flex-1 md:h-[400px]'>
                <Image
                  src='https://images.unsplash.com/photo-1551135049-8a33b5883817?auto=format&fit=crop&q=80'
                  alt="Couverture d'Assurance"
                  fill
                  className='rounded-lg object-cover'
                />
              </div>
              <div className='flex-1 space-y-4'>
                <h2 className='font-serif text-3xl font-bold text-primary'>Couverture d&apos;Assurance</h2>
                <p className='text-lg font-light leading-relaxed text-primary'>
                  Nos polices d&apos;assurance complètes offrent une protection totale pour vos œuvres d&apos;art
                  pendant le transport, la manipulation et le stockage. Nous collaborons avec les meilleurs assureurs
                  d&apos;art pour garantir une couverture maximale et votre tranquillité d&apos;esprit.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='flex flex-col items-center gap-8 md:flex-row-reverse'
            >
              <div className='relative h-[300px] w-full flex-1 md:h-[400px]'>
                <Image
                  src='https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&q=80'
                  alt="Rapports d'État"
                  fill
                  className='rounded-lg object-cover'
                />
              </div>
              <div className='flex-1 space-y-4'>
                <h2 className='font-serif text-3xl font-bold text-primary'>Rapports d&apos;État</h2>
                <p className='text-lg font-light leading-relaxed text-primary'>
                  Nos rapports d&apos;état détaillés comprennent des photographies et une évaluation de l&apos;état de
                  votre œuvre d&apos;art avant et après le transport. Cette documentation assure la transparence et la
                  responsabilité tout au long du processus.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
