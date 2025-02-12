import { cn } from '@/lib/utils';
import Image from 'next/image';

interface CardProps {
  label: string;
  index: number;
  description?: string;
  image: string;
}

export const Card = ({ label, index, description, image }: CardProps) => {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-lg shadow-md transition-all duration-100 hover:scale-105 hover:shadow-background',
        'flex h-full w-full flex-col md:flex-row md:items-center',
        'cursor-pointer text-background',
        'mb-8 md:mb-12',
      )}
    >
      <div
        className={cn(
          'relative aspect-video w-full md:w-1/2',
          'overflow-hidden',
          index % 2 === 0 ? 'md:order-1' : 'md:order-2',
        )}
      >
        <Image
          src={image || '/placeholder.svg'}
          alt={label}
          className='rounded-lg object-cover object-top'
          width={1000}
          height={1000}
        />
      </div>
      <div
        className={cn(
          'flex flex-col justify-center space-y-4 p-6 md:p-8',
          'w-full md:w-1/2',
          index % 2 === 0 ? 'md:order-2' : 'md:order-1',
        )}
      >
        <h3 className='text-3xl font-semibold'>{label}</h3>
        {description && <p className='text-xl text-muted-foreground'>{description}</p>}
      </div>
    </div>
  );
};
