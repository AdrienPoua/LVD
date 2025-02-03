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
