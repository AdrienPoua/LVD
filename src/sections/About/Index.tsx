'use client';

import H2 from '@/components/ui/H2';
import { cn } from '@/lib/utils';
import { Card } from './Card';
import { DotPattern } from '@/components/ui/dot-pattern';

export default function About() {
  return (
    <section className='relative bg-foreground pt-10'>
      <DotPattern
        width={8}
        height={8}
        className={cn('[mask-image:radial-gradient(1800px_circle_at_center,black,transparent)]')}
      />
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
    image: 'images/placeholder.png',
  },
  {
    label: 'Basé à Paris',
    description: 'Nous sommes basés à Paris pour vous accompagner dans vos projets',
    image: 'images/about/paris.png',
  },
  {
    label: 'Réactifs',
    description: 'Vous pouvez nous contacter 7/7, de 8h à 22h',
    image: 'images/about/available.png',
  },
  {
    label: 'Compétititfs',
    description: 'Les tarifs sont personnalisés et adaptés à vos besoins',
    image: 'images/about/competitif.png',
  },
  {
    label: 'Reconnu',
    description:
      " Un carnet d'adresse essentiellement fait de recommandations de partenaires, du bouche à oreille depuis plus de 6 ans",
    image: 'images/about/speak.png',
  },
];
