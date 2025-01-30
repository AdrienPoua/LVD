'use client';

import { Package, Truck, Shield, Hammer, Box } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import LampTitle from '@/components/ui/lamp';
import Packaging from '@/components/lotties/Packaging';

export default function ServicesPage() {
  return (
    <div className='relative'>
      <Header />
      <main className='mb-10'>
        <Content />
      </main>
      <Footer />
    </div>
  );
}

const services = [
  {
    icon: Package,
    title: 'Emballage sur Mesure',
    description:
      "Solutions d'emballage personnalisées utilisant des matériaux de qualité muséale pour une protection optimale pendant le transport et le stockage.",
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80',
    svg: <Packaging />,
  },
  {
    icon: Truck,
    title: "Transport d'Art",
    description:
      'Services de transport spécialisés avec véhicules climatisés et manutentionnaires expérimentés. Gestion des expéditions locales, nationales et internationales.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80',
    svg: null,
  },
  {
    icon: Shield,
    title: 'Assurance & Rapports',
    description:
      "Couverture d'assurance complète et rapports détaillés de l'état des œuvres. Notre documentation numérique assure transparence et tranquillité d'esprit.",
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80',
    svg: null,
  },
  {
    icon: Hammer,
    title: 'Installation',
    description:
      "Services d'installation d'art professionnels par notre équipe qualifiée. Nous assurons la manipulation et le placement appropriés des œuvres.",
    image: 'https://images.unsplash.com/photo-1581922814484-0b48460b7010?auto=format&fit=crop&q=80',
    svg: null,
  },
  {
    icon: Box,
    title: 'Solutions de Stockage',
    description:
      'Installations de stockage sécurisées et climatisées pour les besoins à court et long terme. Nos entrepôts répondent aux normes muséales.',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80',
    svg: null,
  },
];

const Content = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-2 bg-background'>
      {services.map((service, index) => (
        <Row
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

const Row = ({
  image,
  index,
  title,
  description,
  svg,
}: {
  title: string;
  description: string;
  image: string;
  index: number;
  svg?: React.ReactNode;
}) => {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      className='mx-auto flex w-full max-w-7xl flex-col items-center gap-3 rounded-xl bg-foreground p-5 shadow-xl md:flex-row'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={`flex-1 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
        <Image src={image} alt={title} width={500} height={500} className='rounded-lg object-cover' />
      </div>
      <div className={`flex-1 ${isEven ? 'md:order-2' : 'md:order-1'} p-6`}>
        <h3 className='mb-2 font-serif text-3xl font-bold text-background'>{title}</h3>
        <p className='font-light text-background'>{description}</p>
        {svg && svg}
      </div>
    </motion.div>
  );
};
