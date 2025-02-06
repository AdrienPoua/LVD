import React from 'react';
import { cn } from '@/lib/utils';
import MainSVG from './MainSVG';
import AppearBottom from './Appear-bottom';

export default function H2({ children, className }: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <AppearBottom className={cn('relative flex items-center justify-center', 'mb-16 sm:mb-24 md:mb-32', className)}>
      <MainSVG width={300} height={250} className='h-[300px] w-[400px] md:h-[400px] md:w-[500px]' />
      <h2
        className={cn(
          'text-center text-4xl sm:text-5xl md:text-6xl',
          'relative translate-y-[-30px] sm:translate-y-[-40px] md:translate-y-[-50px]',
          'font-secondary',
        )}
      >
        {children}
      </h2>
    </AppearBottom>
  );
}
