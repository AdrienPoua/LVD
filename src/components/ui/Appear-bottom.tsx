'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export default function Index({ children, className }: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <motion.div
      className={cn('relative flex items-center justify-center', 'mb-16 sm:mb-24 md:mb-32', className)}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}
