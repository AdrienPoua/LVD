'use client';

import { useState, useEffect } from 'react';
import H2 from '@/components/ui/H2';
import { motion } from 'framer-motion';
import AppearBottom from '@/components/ui/Appear-bottom';

export default function Valeurs() {
  return (
    <section className='relative bg-foreground pb-20 pt-32'>
      <H2 className='relative z-10 mb-10 text-center text-background'>Nos valeurs</H2>
      <Canvas>
        {data.map((item, index) => (
          <AppearBottom key={index}>
            <Card label={item.label} description={item.description} index={index} />
          </AppearBottom>
        ))}
      </Canvas>
    </section>
  );
}

const data = [
  {
    label: 'Réactivité',
    description: 'Disponibles 7j/7, de 8h à 22h, nous répondons rapidement à vos demandes urgentes.',
  },
  {
    label: 'Fiabilité',
    description: 'Nous garantissons le respect strict des délais pour vos événements et expositions.',
  },
  {
    label: 'Sécurité',
    description: "Nous préservons l'intégrité de vos œuvres d'art grâce aux meilleures pratiques de sécurité.",
  },
  {
    label: 'Ponctualité',
    description: "Chaque transport est planifié avec précision afin d'assurer une livraison à temps.",
  },
  {
    label: 'Adaptabilité',
    description: 'Nous nous ajustons à vos exigences spécifiques pour offrir des solutions sur mesure.',
  },
  {
    label: 'Transparence',
    description: 'Nous maintenons une communication claire et honnête à chaque étape de notre collaboration.',
  },
];

const Card = ({ label, description, index }: { label: string; description: string; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    // Generate a random rotation between -10 and 10 degrees
    setRotation(Math.random() * 20 - 10);
  }, []);

  return (
    <motion.div
      className='animate-view animate-from-bottom w-[300px] cursor-pointer'
      initial={{ opacity: 0, scale: 0, rotate: isHovered ? 0 : rotation }}
      animate={{ opacity: 1, scale: 1, rotate: isHovered ? 0 : rotation }}
      transition={{ duration: 0.8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className='relative'>
        <motion.svg
          xmlns='http://www.w3.org/2000/svg'
          width='200'
          height='200'
          fill='none'
          viewBox='0 0 200 200'
          version='1.1'
          className='h-full w-full'
          animate={{
            rotate: isHovered ? 0 : rotation,
          }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
        >
          <motion.path
            d='M99.994 200v-15.561C49.058 184.439 0 150.932 0 100h15.55c0-50.932 33.508-100 84.444-100v15.561C150.929 15.561 200 49.068 200 100h-15.549c0 50.932-33.522 100-84.457 100Z'
            fill='url(#SvgjsRadialGradient15578)'
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          <defs>
            <radialGradient cx='50%' cy='50%' id='SvgjsRadialGradient15578'>
              <stop stopOpacity='1' stopColor='rgba(255, 255, 255)' offset='0.646015625' />
              <stop stopOpacity='1' stopColor='rgba(209, 165, 55)' offset='0.671015625' />
              <stop stopOpacity='1' stopColor='rgba(209, 165, 55)' offset='1' />
            </radialGradient>
          </defs>
        </motion.svg>

        <div className='absolute inset-0 flex flex-col items-center justify-center p-4 text-center'>
          <h3 className='mb-2 font-secondary text-xl font-bold text-background'>{label}</h3>
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
            className='text-background'
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

const Canvas = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='container mx-auto flex flex-col items-center justify-items-center py-10 md:grid md:grid-cols-3'>
      {children}
    </div>
  );
};
