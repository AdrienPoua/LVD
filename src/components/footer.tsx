import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-foreground py-5'>
      <Container>
        <ContentContainer>
          <div className='space-y-4'>
            <h3 className='font-serif text-lg font-bold text-primary'>À Propos</h3>
            <p className='text-sm text-primary'>
              Spécialiste du transport et de la logistique d&apos;œuvres d&apos;art avec plus de 10 ans
              d&apos;expérience.
            </p>
          </div>
          <div className='space-y-4'>
            <h3 className='font-serif text-lg font-bold text-primary'>Services</h3>
            <ul className='space-y-2'>
              <li>
                <a href='/transport' className='text-sm text-primary hover:text-primary'>
                  Transport d&apos;Art
                </a>
              </li>
              <li>
                <a href='/services' className='text-sm text-primary hover:text-primary'>
                  Services Spécialisés
                </a>
              </li>
              <li>
                <a href='/contact' className='text-sm text-primary hover:text-primary'>
                  Demande de Devis
                </a>
              </li>
            </ul>
          </div>
          <div className='space-y-4'>
            <h3 className='font-serif text-lg font-bold text-primary'>Contact</h3>
            <ul className='space-y-2'>
              <li className='text-sm text-primary'>Email: contact@example.com</li>
              <li className='text-sm text-primary'>Tél: +33 1 23 45 67 89</li>
              <li className='text-sm text-primary'>Paris, France</li>
            </ul>
          </div>
          <div className='space-y-4'>
            <h3 className='font-serif text-lg font-bold text-primary'>Horaires</h3>
            <ul className='space-y-2'>
              <li className='text-sm text-primary'>Lun - Ven: 9h - 18h</li>
              <li className='text-sm text-primary'>Sam: 10h - 16h</li>
              <li className='text-sm text-primary'>Dim: Fermé</li>
            </ul>
          </div>
        </ContentContainer>
      </Container>
      <Sign />
    </footer>
  );
}

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className='mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8'>{children}</div>;
};

const ContentContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className='grid grid-cols-1 gap-8 md:grid-cols-4'>{children}</div>;
};

const Sign = () => {
  return (
    <div className='flex w-full justify-center border-t border-gray-200 py-5'>
      <Link href='https://www.linkedin.com/in/adrien-poua' target='_blank' className='relative w-fit text-accent'>
        Made with by Adrien POUA
        <Underline />
      </Link>
    </div>
  );
};

const Underline = () => {
  return (
    <div className='-z-10 inline-block from-accent via-foreground to-accent after:absolute after:-bottom-3 after:left-0 after:w-full after:rounded-lg after:bg-gradient-to-r after:p-1 after:shadow-xl after:filter'>
      <span className='absolute left-1/2 z-50 -translate-x-1/2'>❤</span>
    </div>
  );
};
