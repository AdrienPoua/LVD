'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <>
      <Header />
      <section className='bg-gray-50 py-16'>
        <div className='mx-auto max-w-7xl px-4'>
          <div className='mb-16 text-center'>
            <h1 className='mb-4 font-serif text-4xl font-bold text-primary md:text-5xl'>Contactez-Nous</h1>
            <p className='mx-auto max-w-2xl text-xl font-light text-primary'>
              Échangez avec notre équipe pour discuter de vos besoins en transport et manipulation d&apos;art
            </p>
          </div>

          <div className='grid grid-cols-1 gap-16 md:grid-cols-2'>
            {/* Informations de Contact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-8'
            >
              <h2 className='mb-6 font-serif text-2xl font-bold text-primary'>Informations de Contact</h2>

              <div className='space-y-6'>
                <div className='flex items-start gap-4'>
                  <MapPin className='mt-1 h-6 w-6 text-secondary' />
                  <div>
                    <h3 className='mb-2 font-serif text-lg font-semibold text-primary'>Adresse</h3>
                    <p className='font-light text-primary'>
                      123 Quartier des Arts
                      <br />
                      75001 Paris
                      <br />
                      France
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <Clock className='mt-1 h-6 w-6 text-secondary' />
                  <div>
                    <h3 className='mb-2 font-serif text-lg font-semibold text-primary'>Horaires d&apos;Ouverture</h3>
                    <p className='font-light text-primary'>
                      Lundi - Vendredi : 9h00 - 18h00
                      <br />
                      Samedi : Sur rendez-vous
                      <br />
                      Dimanche : Fermé
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <Phone className='mt-1 h-6 w-6 text-secondary' />
                  <div>
                    <h3 className='mb-2 font-serif text-lg font-semibold text-primary'>Téléphone</h3>
                    <p className='font-light text-primary'>+33 (0)1 XX XX XX XX</p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <Mail className='mt-1 h-6 w-6 text-secondary' />
                  <div>
                    <h3 className='mb-2 font-serif text-lg font-semibold text-primary'>Email</h3>
                    <p className='font-light text-primary'>contact@ldv-art.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Formulaire de Contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className='rounded-lg bg-white p-8 shadow-lg'
            >
              <h2 className='mb-6 font-serif text-2xl font-bold text-primary'>Envoyez-nous un Message</h2>

              <form className='space-y-6'>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                  <div>
                    <label className='mb-1 block text-sm font-medium text-gray-700'>Prénom</label>
                    <input
                      type='text'
                      className='w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-primary'
                    />
                  </div>
                  <div>
                    <label className='mb-1 block text-sm font-medium text-gray-700'>Nom</label>
                    <input
                      type='text'
                      className='w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-primary'
                    />
                  </div>
                </div>

                <div>
                  <label className='mb-1 block text-sm font-medium text-gray-700'>Email</label>
                  <input
                    type='email'
                    className='w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-primary'
                  />
                </div>

                <div>
                  <label className='mb-1 block text-sm font-medium text-gray-700'>Téléphone</label>
                  <input
                    type='tel'
                    className='w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-primary'
                  />
                </div>

                <div>
                  <label className='mb-1 block text-sm font-medium text-gray-700'>Message</label>
                  <textarea
                    rows={4}
                    className='w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-primary'
                  ></textarea>
                </div>

                <Button className='w-full bg-accent text-white hover:bg-accent/90'>Envoyer le Message</Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
