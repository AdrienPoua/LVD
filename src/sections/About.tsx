'use client';

import H2 from '@/components/ui/H2';

export default function About() {
  return (
    <section className='bg-background pt-10'>
      <H2>Qui Sommes-Nous ?</H2>
      <Container>
        <Content />
      </Container>
      <BottomSVG />
    </section>
  );
}

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className='container mx-auto flex max-w-3xl flex-col items-center justify-center'>{children}</div>;
};

const Content = () => {
  return (
    <p className='text-xl tracking-wide'>
      Notre équipe de professionnels qualifiés assure un service personnalisé, répondant aux exigences les plus strictes
      des galeries, musées, artistes et collectionneurs. Nous comprenons la valeur inestimable de chaque œuvre qui nous
      est confiée.
    </p>
  );
};

const BottomSVG = () => {
  return (
    <svg viewBox='0 0 1440 320' xmlns='http://www.w3.org/2000/svg' className='bg-background'>
      <path
        fill='#ffff'
        d='M0,256L48,240C96,224,192,192,288,186.7C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
      ></path>
    </svg>
  );
};
