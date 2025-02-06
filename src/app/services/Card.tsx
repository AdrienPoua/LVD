import Image from 'next/image';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import type React from 'react';

interface CardProps {
  title: string;
  description: string;
  image: string;
  index: number;
  id: string;
  svg?: React.ReactNode;
  icon: LucideIcon;
}

export const Card = ({ image, index, title, description, svg, id, icon: Icon }: CardProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        'mx-auto w-full max-w-screen-2xl',
        'grid grid-cols-1 md:grid-cols-2',
        'rounded-xl bg-foreground shadow-lg transition-transform hover:scale-105 hover:shadow-xl',
        'overflow-hidden'
      )}
    >
      {isEven ? (
        <>
          <CardImage image={image} title={title} />
          <CardContent title={title} description={description} svg={svg} id={id} icon={Icon} />
        </>
      ) : (
        <>
          <CardContent title={title} description={description} svg={svg} id={id} icon={Icon} />
          <CardImage image={image} title={title} />
        </>
      )}
    </motion.div>
  );
};

const CardImage = ({ image, title }: { image: string; title: string }) => (
  <div className="relative h-full w-full">
    <Image
      src={image || '/placeholder.png'}
      alt={title}
      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
      width={500}
      height={500}
    />
  </div>
);

const CardContent = ({ title, description, svg, id, icon: Icon }: Omit<CardProps, 'image' | 'index'>) => (
  <div className="flex flex-col justify-center p-6 md:p-8 text-background">
    <div className="mb-10 flex items-center justify-center md:justify-start">
      <Icon className="mr-2 h-8 w-8 text-accent" />
      <h3 className="font-secondary text-3xl font-bold leading-[5rem] relative z-10 px-5"  id={id}>
        {title}
        <span className="bg-accent absolute inset-0 -skew-x-12 -z-10"/>
      </h3>
    </div>
    <p
      className="mb-6 text-lg leading-10 text-background/90"
      dangerouslySetInnerHTML={{ __html: description.replace(/\./g, '.<br/>') }}
    />
    {svg && <div className="mt-4">{svg}</div>}
  </div>
);
