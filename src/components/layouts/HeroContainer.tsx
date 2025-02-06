import { cn } from '@/lib/utils';

export default function HeroContainer({
  children,
  variant = 'transition',
  className,
}: {
  children: React.ReactNode;
  variant?: 'transition' | 'nude';
  className?: string;
}) {
  return (
    <div
      className={cn('relative', className)}
      style={{ backgroundImage: 'url("/svg/heroBanner.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {children}
      {variant === 'transition' && <BottomTransition />}
    </div>
  );
}

const BottomTransition = () => {
  return (
    <svg viewBox='0 0 1440 320' xmlns='http://www.w3.org/2000/svg' className='translate-y-1 md:translate-y-10'>
      <path
        fill='currentColor'
        d='M0,256L48,240C96,224,192,192,288,186.7C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
      ></path>
    </svg>
  );
};
