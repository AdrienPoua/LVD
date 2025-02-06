'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroContainer from '@/components/layouts/HeroContainer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  return (
    <HeroContainer variant='nude'>
      <Header />
      <Section />
      <Footer variant='nude' />
    </HeroContainer>
  );
}

const Section = () => {
  return (
    <section className=' text-xl text-foreground py-44'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='mb-16 text-center'>
          <h1 className='mb-4 font-secondary text-6xl font-bold'>Contactez-Nous</h1>
        </div>

        <div className='grid grid-cols-1 gap-16 md:grid-cols-2'>
          {/* Informations de Contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-8'
          >
            <h2 className='relative mb-6 w-fit font-secondary text-3xl'>Informations </h2>

            <div className='space-y-6'>
              {[
                { icon: MapPin, title: 'Adresse', content: ['123 Quartier des Arts', '75001 Paris', 'France'] },
                {
                  icon: Clock,
                  title: "Horaires d'Ouverture",
                  content: ['Lundi - Vendredi : 9h00 - 18h00', 'Samedi : Sur rendez-vous', 'Dimanche : Fermé'],
                },
                { icon: Phone, title: 'Téléphone', content: ['+33 (0)1 XX XX XX XX'] },
                { icon: Mail, title: 'Email', content: ['contact@ldv-art.com'] },
              ].map((item, index) => (
                <div key={index} className='flex items-start gap-4'>
                  <item.icon className='mt-1 h-6 w-6 text-secondary' />
                  <div>
                    <h3 className='mb-2 font-secondary text-lg font-semibold'>{item.title} </h3>
                    {item.content.map((line, i) => (
                      <p key={i} className='font-light'>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Formulaire de Contact */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <Card>
              <CardHeader>
                <CardTitle className='text-2xl font-bold'>Envoyez-nous un message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className='space-y-6'>
                  <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                    <div>
                      <Label className='mb-1 block text-sm font-medium'>Prénom</Label>
                      <Input type='text' />
                    </div>
                    <div>
                      <Label className='mb-1 block text-sm font-medium'>Nom</Label>
                      <Input type='text' />
                    </div>
                  </div>

                  <div>
                    <Label className='mb-1 block text-sm font-medium'>Email</Label>
                    <Input type='email' />
                  </div>

                  <div>
                    <Label className='mb-1 block text-sm font-medium'>Téléphone</Label>
                    <Input type='tel' />
                  </div>

                  <div>
                    <Label className='mb-1 block text-sm font-medium'>Message</Label>
                    <Textarea rows={4} />
                  </div>
                  <Button className='w-full bg-accent text-white hover:bg-accent/90'>Envoyer</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
