'use client';

import H2 from '@/components/ui/H2';
import { cn } from '@/lib/utils';
import { Card } from './Card';

export default function About() {
  return (
    <section className='relative bg-foreground pt-10'>
      <H2 className='text-background'>Qui Sommes-Nous ?</H2>
      <div className={cn('flex-col items-center justify-center', 'container mx-auto', 'gap-16')}>
        <div className='relative w-full'>
          {data.map((item, index) => (
            <div
              key={index}
              className={cn(
                'animate-view',
                'flex flex-col',
                index % 2 === 0 ? `animate-from-left` : `animate-from-right`,
              )}
            >
              <Card index={index} image={item.image} label={item.label} description={item.description} />
            </div>
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
    description: 'Nous disposons d\'une flotte de véhicules pour vous accompagner dans vos projets',
    image: 'images/about/camion.png',
  },
  {
    label: 'Nos clients',
    description: 'Que vous soyez collectionneur, artiste, musée, galerie ou tout autre acteur du monde de l’art, nous sommes là pour vous accompagner',
    image: 'images/about/speak.png',
  },
];
