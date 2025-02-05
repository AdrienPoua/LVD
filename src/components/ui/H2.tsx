import React from 'react';
import { cn } from '@/lib/utils';
import MainSVG from './MainSVG';

export default function H2({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <div
      className={cn('relative mb-32 flex items-center justify-center ', 'animate-view animate-from-bottom', className)}
    >
      <MainSVG width={500} height={400} />
      <h2 className={cn('text-6xl', 'relative translate-y-[-50px] font-secondary')}>{children}</h2>
    </div>
  );
}
