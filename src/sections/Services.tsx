import H2 from '@/components/ui/H2';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { DotPattern } from '@/components/ui/dot-pattern';
import { cn } from '@/lib/utils';

export function Services() {
  return (
    <section className='relative bg-foreground'>
      <DotPattern
        width={8}
        height={8}
        className={cn('[mask-image:radial-gradient(500px_circle_at_center,black,transparent)]')}
      />
      <H2 className=''>Nos Services</H2>
      <Container>
        <HoverEffect items={services} />
      </Container>
      <svg viewBox='0 0 1440 320' xmlns='http://www.w3.org/2000/svg'>
        <path
          fill='hsl(196 46% 21%)'
          d='M0,256L48,240C96,224,192,192,288,186.7C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg>
    </section>
  );
}

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className='container mx-auto flex flex-col items-center justify-center'>{children}</div>;
};

const services = [
  {
    title: "Transport d'Art",
    description: 'Services de transport spécialisés',
    link: '/services',
  },
  {
    title: 'Conditionnement sur mesure',
    description: "Solutions d'emballage personnalisées",
    link: '/services',
  },

  {
    title: 'Stockage',
    description: 'Services de transport',
    link: '/services',
  },
  {
    title: 'Régie et installation',
    description:
      "Services de transport spécialisés pour œuvres d'art à l'échelle régionale, nationale et internationale.",
    link: '/services',
  },
  {
    title: 'Manutention',
    description:
      "Services de transport spécialisés pour œuvres d'art à l'échelle régionale, nationale et internationale.",
    link: '/services',
  },
  {
    title: 'Assurance et rapports',
    description: "Couverture d'assurance complète fine art",
    link: '/services',
  },
];
