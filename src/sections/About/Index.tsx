'use client';

import H2 from '@/components/ui/H2';
import { cn } from '@/lib/utils';
import { Card } from './Card';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className='relative bg-foreground px-4 pt-10'>
      <H2 className='text-background'>Qui Sommes-Nous ?</H2>
      <div className={cn('container mx-auto flex flex-col gap-12 sm:gap-16')}>
        <div className='relative grid w-full grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-16 lg:grid-cols-2'>
          {data.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: index % 2 === 0 ? -300 : 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={cn('flex flex-col items-center sm:items-start')}
            >
              <Card index={index} image={item.image} label={item.label} description={item.description} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const data = [
  {
    label: 'Une équipe de techniciens fixes',
    description: 'Formé au conditionnement, maniement et transport de vos œuvres',
    image: 'images/about/team.png',
  },
  {
    label: 'Basé à Paris',
    description: 'Nous sommes basés à Paris et transportons vos œuvres partout en France',
    image: 'images/about/paris.png',
  },
  {
    label: 'Une flotte de véhicules',
    description: "Nous disposons d'une flotte de véhicules pour vous accompagner dans vos projets",
    image: 'images/about/camion.png',
  },
  {
    label: 'Nos clients',
    description:
      'Que vous soyez collectionneur, artiste, musée, galerie ou tout autre acteur du monde de l’art, nous sommes là pour vous accompagner',
    image: 'images/about/speak.png',
  },
];
