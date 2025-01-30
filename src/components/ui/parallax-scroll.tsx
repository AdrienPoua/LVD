'use client';

import { useScroll, useTransform, motion, useSpring, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export const ParallaxScroll = ({ clients }: { clients: { label: string; type: string; image: string }[] }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ['start start', 'end start'],
  });

  const springConfig = { stiffness: 300, damping: 30, restDelta: 0.001 };

  const translateFirst = useSpring(useTransform(scrollYProgress, [0, 1], [0, -200]), springConfig);
  const translateSecond = useSpring(useTransform(scrollYProgress, [0, 1], [0, 200]), springConfig);
  const translateThird = useSpring(useTransform(scrollYProgress, [0, 1], [0, -200]), springConfig);

  const third = Math.ceil(clients.length / 3);
  const firstPart = clients.slice(0, third);
  const secondPart = clients.slice(third, 2 * third);
  const thirdPart = clients.slice(2 * third);

  return (
    <div
      className={cn('scrollbar-hidden no-scrollbar h-[50rem] w-full items-start overflow-hidden overflow-y-auto')}
      ref={gridRef}
    >
      <CardContainer>
        <Column
          clients={firstPart}
          translate={translateFirst}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
          startIndex={0}
        />
        <Column
          clients={secondPart}
          translate={translateSecond}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
          startIndex={third}
        />
        <Column
          clients={thirdPart}
          translate={translateThird}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
          startIndex={2 * third}
        />
      </CardContainer>
    </div>
  );
};

const Column = ({
  clients,
  translate,
  hoveredIndex,
  setHoveredIndex,
  startIndex,
}: {
  clients: { label: string; type: string; image: string }[];
  translate: any;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
  startIndex: number;
}) => {
  return (
    <motion.div style={{ y: translate }} className='grid gap-10'>
      {clients.map((client, index) => (
        <Card
          key={startIndex + index}
          client={client}
          index={startIndex + index}
          isHovered={hoveredIndex === startIndex + index}
          setHovered={() => setHoveredIndex(startIndex + index)}
          setUnhovered={() => setHoveredIndex(null)}
        />
      ))}
    </motion.div>
  );
};

const Card = ({
  client,
  index,
  isHovered,
  setHovered,
  setUnhovered,
}: {
  client: { label: string; type: string; image: string };
  index: number;
  isHovered: boolean;
  setHovered: () => void;
  setUnhovered: () => void;
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={cardRef}
      className='relative overflow-hidden rounded-lg transition-all duration-300 ease-in-out'
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      onMouseEnter={setHovered}
      onMouseLeave={setUnhovered}
    >
      <ImageCustom src={client.image || '/placeholder.svg'} alt={client.label} />
      <TypeBand>{client.type}</TypeBand>
      <Title>{client.label}</Title>
    </motion.div>
  );
};

const ImageCustom = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className='relative h-80 w-full'>
      <Image
        src={src || '/placeholder.svg'}
        alt={alt}
        layout='fill'
        objectFit='cover'
        objectPosition='left top'
        className='transition-all duration-300 ease-in-out'
      />
    </div>
  );
};

const CardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8'>
      {children}
    </div>
  );
};

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className='absolute inset-x-0 bottom-0 bg-black bg-opacity-50 py-2 text-center text-xl font-bold text-white'>
      {children}
    </p>
  );
};

const TypeBand = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className='absolute inset-x-0 top-0 flex h-10 w-full items-center justify-center bg-accent text-xl font-bold text-white'>
      {children}
    </p>
  );
};
