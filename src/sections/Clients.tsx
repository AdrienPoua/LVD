'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import H2 from '@/components/ui/H2';

const clients = [
  { label: 'Thaddaeus Ropac', type: 'Gallery', image: '/images/placeholder.png' },
  { label: 'Magda Danysz', type: 'Gallery', image: '/images/placeholder.png' },
  { label: 'Galerie Zberro', type: 'Gallery', image: '/images/placeholder.png' },
  { label: 'Galerie Strouk', type: 'Gallery', image: '/images/placeholder.png' },
  { label: 'A2Z', type: 'Gallery', image: '/images/placeholder.png' },
  { label: 'Eva Jospin', type: 'Artiste', image: '/images/placeholder.png' },
  { label: 'JonOne', type: 'Artiste', image: '/images/placeholder.png' },
  { label: "L'Atlas", type: 'Artiste', image: '/images/placeholder.png' },
  { label: 'Tanc', type: 'Artiste', image: '/images/placeholder.png' },
  { label: 'Lionel Sabatté', type: 'Artiste', image: '/images/placeholder.png' },
  { label: 'Musée en Herbe', type: 'Institution', image: '/images/placeholder.png' },
  { label: 'Musée Yves Saint Laurent', type: 'Institution', image: '/images/placeholder.png' },
  { label: 'Phuong', type: 'Encadreur', image: '/images/placeholder.png' },
  { label: 'CBM', type: 'Encadreur', image: '/images/placeholder.png' },
];

export default function ClientSection8() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className='bg-foreground py-16'>
      <div className='container mx-auto px-4'>
        <H2 className='text-center'>Ils nous font confiance</H2>
        <div className='flex justify-center pb-4'>
          {clients.map((client, index) => (
            <Card
              key={client.label}
              client={client}
              expandedIndex={expandedIndex}
              setExpandedIndex={setExpandedIndex}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const Card = ({
  client,
  expandedIndex,
  setExpandedIndex,
  index,
}: {
  client: (typeof clients)[number];
  expandedIndex: number | null;
  setExpandedIndex: (index: number | null) => void;
  index: number;
}) => {
  return (
    <motion.div
      className='relative mx-2 h-96 w-64 flex-shrink-0 cursor-pointer'
      initial={{ width: '4rem' }}
      animate={{ width: expandedIndex === index ? '16rem' : '4rem' }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setExpandedIndex(expandedIndex === index ? null : index)}
    >
      <Image
        src={client.image || '/images/placeholder.png'}
        alt={client.label}
        layout='fill'
        objectFit='cover'
        className='rounded-lg'
      />
      <div className='absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-50'>
        <AnimatePresence>
          {expandedIndex === index ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='p-4 text-center'
            >
              <h3 className='mb-2 text-xl font-semibold'>{client.label}</h3>
              <p className='text-sm'>{client.type}</p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='-rotate-90 transform whitespace-nowrap'
            >
              {client.label}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
