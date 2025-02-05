'use client';

import { Hammer } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Packaging from '@/components/lotties/Packaging';
import { Card } from './Card';
import HeroContainer from '@/components/layouts/HeroContainer';
import Transport from '@/components/lotties/Transport';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ServicesPage() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Get the hash from  URL
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
      }
    }
  }, [searchParams]);

  return (
    <HeroContainer variant='nude'>
      <Header />
      <main className='pt-32'>
        <Content />
      </main>
      <Footer variant='nude' />
    </HeroContainer>
  );
}

const services = [
  {
    title: "Transport d'Art",
    id: 'transport',
    description:
      "Le transport d'œuvre d'art est toujours une étape sensible, au-delà de la valeur monétaire, chaque œuvre a son histoire, ses spécificités et une valeur sentimentale unique. Ayant conscience de tous ces facteurs, nous mettons tout en œuvre à vos côtés pour que votre transport soit le plus sécurisé, de la prise en charge jusqu'à la livraison, à l'aide de nos véhicules adaptés et géolocalisés. Dédié ou en groupage, nous cherchons et vous proposons toutes les solutions adaptées à vos besoins.",
    image: '/images/services/camion.png',
    svg: <Transport />,
  },
  {
    title: 'Emballage sur Mesure',
    id: 'conditionnement',
    description:
      "Le conditionnement est une étape primordiale pour protéger les œuvres lors de leurs transports. Chez LDV ART nous vous proposons des matériaux de qualité adapté à la typologie de vos biens afin d'assurer leurs préservations lors du transport ou du stockage",
    image: '/images/services/packaging.png',
    svg: <Packaging />,
  },
  {
    title: 'Assurance & Rapports',
    id: 'assurance',
    description:
      "Conscient que vos biens sont uniques et d'une valeur importante aussi bien monétaire que sentimentale, LDV ART a donc choisi de souscrire une assurance adaptée « fine art ». Nous pouvons donc sur demande assurer vos œuvres à leur valeur réelle. Nos équipes sont également dotées d'un outil permettant de réaliser des constats d'états sur mesure de vos œuvres, à l'enlèvement et la livraison afin de garantir l'état de vos biens.",
    image: '/images/services/camion.png',
    svg: null,
  },
  {
    icon: Hammer,
    title: 'Régie',
    id: 'regie',
    description:
      "L'organisation de votre exposition d'art est une étape importante pour assurer la qualité de votre œuvre d'art. Nous vous proposons des solutions adaptées à vos besoins, qu'il s'agisse de la prise en charge, du transport ou de l'installation de vos œuvres.",
    image: '/images/services/camion.png',
    svg: null,
  },
  {
    title: 'Stockage',
    id: 'stockage',
    description:
      "Avec notre entrepôt privé, sécurisé et dédié au stockage d'œuvre d'art nous vous proposons de stocker vos œuvres sur une courte, moyenne ou longue durée.",
    image: '/images/services/camion.png',
    svg: null,
  },
  {
    title: 'Manutention',
    id: 'manutention',
    description:
      "La manutention est une étape importante dans le processus de transport d'œuvres d'art. Nous vous proposons des solutions adaptées à vos besoins, qu'il s'agisse de la prise en charge, du transport ou de l'installation de vos œuvres.",
    image: '/images/services/camion.png',
    svg: null,
  },
];

const Content = () => {
  return (
    <div className='grid grid-cols-1 gap-2'>
      {services.map((service, index) => (
        <Card
          key={service.title}
          index={index}
          title={service.title}
          description={service.description}
          id={service.id}
          image={service.image}
          svg={service.svg}
        />
      ))}
    </div>
  );
};
