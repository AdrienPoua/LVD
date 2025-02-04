'use client';
import Link from 'next/link';
import { UnderlineEffect } from '@/components/ui/UnderlineEffect';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function Footer({ variant = 'bg' }: { variant?: 'bg' | 'nude' }) {
    const router = useRouter();
    return (
      <footer
      className='relative py-5 text-foreground'
      style={
        variant === 'bg'
          ? { backgroundImage: 'url("/svg/heroBanner.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }
          : {}
      }
    >
      {variant === 'bg' && <TopTransition />}
      <div className={cn('mx-auto max-w-7xl px-4 py-5', variant === 'bg' ? 'pt-72' : '')}>
        <div className={cn('grid grid-cols-1 gap-8 md:grid-cols-4')}>
          <Column>
            <H3>À Propos</H3>
            <p className='font-secondary text-xl'>
              Spécialiste du transport et de la logistique d&apos;œuvres d&apos;art avec plus de 6 ans
              d&apos;expérience.
            </p>
          </Column>
          <Column>
            <H3>Services</H3>
            <ul className='space-y-2'>
              <Li>
                <CustomLink href='/transport'>Transport d&apos;Art</CustomLink>
              </Li>
              <Li>
                <CustomLink href='/services'>Services Spécialisés</CustomLink>
              </Li>
              <Li>
                <CustomLink href='/contact'>Demande de Devis</CustomLink>
              </Li>
            </ul>
          </Column>
          <Column>
            <H3>Contact</H3>
            <button className="inset-0 absolute" onClick={() => router.push('/contact')}/>
            <ul className='space-y-2'>
              <Li onClick={() => window.open('mailto:contact@ldv-art.com', '_blank')}>Email: contact@ldv-art.com</Li>
              <Li>Tél: +33 1 23 45 67 89</Li>
              <Li>Paris, France</Li>
            </ul>
          </Column>
          <Column>
            <H3>Horaires</H3>
            <ul className='space-y-2'>
              <Li>Lun - Ven: 9h - 18h</Li>
              <Li>Sam: 10h - 16h</Li>
              <Li>Dim: Fermé</Li>
            </ul>
          </Column>
        </div>
      </div>
      <div className={cn('flex w-full justify-center border-t border-accent py-5')}>
        <Link href='https://www.linkedin.com/in/adrien-poua' target='_blank' className='relative w-fit text-accent'>
          Made by Adrien POUA
          <Underline />
        </Link>
      </div>
    </footer>
  );
}

const TopTransition = () => {
  return (
    <svg viewBox='0 0 1440 320' xmlns='http://www.w3.org/2000/svg' className='absolute top-0 rotate-180'>
      <path
        fill='white'
        d='M0,256L48,240C96,224,192,192,288,186.7C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
      ></path>
    </svg>
  );
};

const H3 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className='text-2xl font-bold text-accent transition-all duration-300 group-hover:text-foreground'>
      {children}
    </h3>
  );
};
const CustomLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
  return (
    <Link href={href} className='group relative'>
      {children}
      <UnderlineEffect variant='foreground' />
    </Link>
  );
};

const Column = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='group z-50 space-y-4 rounded-lg p-4 transition-all duration-300 hover:bg-accent relative'>{children}</div>
  );
};

const Li = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => {
  return (
    <li className='font-secondary text-xl'>{onClick ? <button onClick={onClick}>{children}</button> : children}</li>
  );
};

const Underline = () => {
  return (
    <div className='-z-10 inline-block from-accent via-foreground to-accent after:absolute after:-bottom-3 after:left-0 after:w-full after:rounded-lg after:bg-gradient-to-r after:p-1 after:shadow-xl after:filter'>
      <span className='absolute left-1/2 z-50 -translate-x-1/2'>❤</span>
    </div>
  );
};
