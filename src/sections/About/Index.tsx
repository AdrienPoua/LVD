'use client';

import H2 from '@/components/ui/H2';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { TruckAnimation } from './TruckAnimation';
import { Card } from './Card';
import { TransitionSVG } from './TransitionSVG';



export default function About() {
  return (
    <section className="relative pt-10" style={{ backgroundImage: 'url("/svg/heroBanner.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }  }

    >
      <TopTransition/>
      <H2>Qui Sommes-Nous ?</H2>
      <div className={cn('flex-col items-center justify-center', 'container mx-auto', 'gap-16')}>
        {
          data.map((item, index) => (
            <Card key={index} index={index} label={item.label} description={item.description} animation={item.animation} />
          ))
        }
      </div>
    </section>
  );
}

const TopTransition = () => {
  return (
    <svg viewBox='0 100 1440 320' xmlns='http://www.w3.org/2000/svg' className='rotate-180 -translate-y-1/2 absolute top-0'>
    <path
      fill='white'
      d='M0,256L48,240C96,224,192,192,288,186.7C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
    ></path>
  </svg>
  )
}



const data = [
  {
    label: 'Une équipe de techniciens fixes',
    description: 'Formé au conditionnement, maniement et transport de vos œuvres',
    animation: TruckAnimation,
  },
  {
    label: 'Basé à Paris',
    description: 'Nous sommes basés à Paris pour vous accompagner dans vos projets',
  },
  {
    label: 'Réactifs',
    description: 'Vous pouvez nous contacter 7/7, de 8h à 22h',
  },
  {
    label: 'Compétititfs',
    description: 'Les tarifs sont personnalisés et adaptés à vos besoins',
  },
  {
    label: "Reconnu",
    description: ' Un carnet d"adresse essentiellement fait de recommandations de partenaires, du bouche à oreille depuis plus de 6 ans',
  },

];

