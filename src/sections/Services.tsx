import H2 from '@/components/ui/H2';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { cn } from '@/lib/utils';

export function Services() {
  return (
    <section
      className='relative bg-foreground pb-56'
      style={{ backgroundImage: 'url("/svg/heroBanner.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <TopTransition />
      <H2 className='mt-56'>Nos Services</H2>
      <div
        className={cn(
          'container mx-auto flex flex-col items-center justify-center',
          'gap-16',
          'animate-view animate-from-bottom',
        )}
      >
        <HoverEffect items={services} />
      </div>
      <BottomTransition />
    </section>
  );
}

const TopTransition = () => {
  return (
    <svg viewBox='0 100 1440 320' className='absolute bottom-0 translate-y-1/2' xmlns='http://www.w3.org/2000/svg'>
      <path
        fill='white'
        d='M0,192C48,224,96,256,192,256C288,256,384,224,480,208C576,192,672,192,768,208C864,224,960,256,1056,256C1152,256,1248,224,1344,208C1392,200,1440,192,1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
      ></path>
    </svg>
  );
};

const BottomTransition = () => {
  return (
    <svg
      viewBox='0 100 1440 320'
      className='absolute top-0 -translate-y-1/2 rotate-180'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill='white'
        d='M0,256L48,240C96,224,192,192,288,186.7C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
      ></path>
    </svg>
  );
};
const services = [
  {
    title: "Transport d'Art",
    description: 'Services de transport spécialisés',
    link: '/services#transport',
  },
  {
    title: 'Conditionnement',
    description: "Solutions d'emballage personnalisées",
    link: '/services#conditionnement',
  },

  {
    title: 'Stockage',
    description: 'Services de stockage',
    link: '/services#stockage',
  },
  {
    title: 'Régie',
    description:
      "Organise et coordonne",
    link: '/services#regie',
  },
  {
    title: 'Manutention',
    description:
      "Prise en charge, transport et l'installation",
    link: '/services#manutention',
  },
  {
    title: 'Assurance et rapports',
    description: "Couverture d'assurance complète fine art",
    link: '/services#assurance',
  },
];
