import { cn } from '@/lib/utils';

export const UnderlineEffect = ({ variant = 'accent' }: { variant?: 'accent' | 'foreground' }) => {
  return (
    <span
      className={cn(
        'absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transition-transform duration-200',
        'group-hover:scale-x-100',
        variant === 'foreground' ? 'bg-foreground' : 'bg-accent',
      )}
    />
  );
};
