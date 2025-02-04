'use client';

import { Package, Truck, Shield, Hammer, Box } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Packaging from '@/components/lotties/Packaging';
import { Card } from './Card';
import HeroContainer from '@/components/layouts/HeroContainer';
import Transport from '@/components/lotties/Transport';
export default function ServicesPage() {
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
    description:
      "Le transport d'œuvre d'art est toujours une étape sensible, au-delà de la valeur monétaire, chaque œuvre a son histoire, ses spécificités et une valeur sentimentale unique. Ayant conscience de tous ces facteurs, nous mettons tout en œuvre à vos côtés pour que votre transport soit le plus sécurisé, de la prise en charge jusqu'à la livraison, à l'aide de nos véhicules adaptés et géolocalisés. Dédié ou en groupage, nous cherchons et vous proposons toutes les solutions adaptées à vos besoins.",
    image: '/images/services/camion.png',
    svg: <Transport />,
  },
  {
    title: 'Emballage sur Mesure',
    description:
      "Le conditionnement est une étape primordiale pour protéger les œuvres lors de leurs transports. Chez LDV ART nous vous proposons des matériaux de qualité adapté à la typologie de vos biens afin d'assurer leurs préservations lors du transport ou du stockage",
    image: '/images/services/packaging.png',
    svg: <Packaging />,
  },
  {
    title: 'Assurance & Rapports',
    description:
      "Conscient que vos biens sont uniques et d'une valeur importante aussi bien monétaire que sentimentale, LDV ART a donc choisi de souscrire une assurance adaptée « fine art ». Nous pouvons donc sur demande assurer vos œuvres à leur valeur réelle. Nos équipes sont également dotées d'un outil permettant de réaliser des constats d'états sur mesure de vos œuvres, à l'enlèvement et la livraison afin de garantir l'état de vos biens.",
      image: '/images/services/camion.png',
      svg: null,
  },
  {
    icon: Hammer,
    title: 'Installation',
    description:
      "Étape importante à la suite de votre transport, l’installation de vos œuvres nécessite une attention particulière. Nous pouvons vous accompagner sur cette prestation en vous proposant des régisseurs spécialisés qui sublimerons vos œuvres lors de leurs installations en s’adaptant à votre environnement.",
      image: '/images/services/camion.png',
      svg: null,
  },
  {
    title: 'Stockage',
    description:
      "Avec notre entrepôt privé, sécurisé et dédié au stockage d’œuvre d’art nous vous proposons de stocker vos œuvres sur une courte, moyenne ou longue durée.",
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
          image={service.image}
          svg={service.svg}
        />
      ))}
    </div>
  );
};


