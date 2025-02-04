'use client';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn('grid-rows-[200px 200px 200px] grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3', className)}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className='group relative block h-full w-full p-2'
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className='absolute inset-0 block h-full w-full rounded-3xl bg-background'
                layoutId='hoverBackground'
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle className='relative'>
              <span className='relative z-10 font-playwrite text-3xl'>{item.title}</span>
              <span className='absolute -inset-x-2 -inset-y-1 z-0 origin-left -skew-x-12 scale-x-0 transform bg-accent transition-all duration-300 placeholder:inset-0 group-hover:scale-100'></span>
            </CardTitle>
            <CardDescription className='font-secondary text-2xl tracking-wide'>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        'relative z-20 h-full min-h-[200px] w-full overflow-hidden rounded-2xl border border-background bg-foreground p-4 group-hover:border-slate-700',
        className,
      )}
    >
      <div className='relative z-50'>
        <div className='p-4'>{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <h4 className={cn('mt-4 text-2xl font-bold tracking-wide text-background', className)}>{children}</h4>;
};
export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <p className={cn('mt-8 text-background', className)}>{children}</p>;
};
