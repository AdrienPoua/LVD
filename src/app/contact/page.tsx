"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-primary">Contactez-Nous</h1>
            <p className="text-xl text-primary font-light max-w-2xl mx-auto">
              Échangez avec notre équipe pour discuter de vos besoins en transport et manipulation d&apos;art
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Informations de Contact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-bold font-serif text-primary mb-6">Informations de Contact</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-secondary mt-1" />
                  <div>
                    <h3 className="font-serif font-semibold text-lg text-primary mb-2">Adresse</h3>
                    <p className="text-primary font-light">
                      123 Quartier des Arts<br />
                      75001 Paris<br />
                      France
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-secondary mt-1" />
                  <div>
                    <h3 className="font-serif font-semibold text-lg text-primary mb-2">Horaires d&apos;Ouverture</h3>
                    <p className="text-primary font-light">
                      Lundi - Vendredi : 9h00 - 18h00<br />
                      Samedi : Sur rendez-vous<br />
                      Dimanche : Fermé
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-secondary mt-1" />
                  <div>
                    <h3 className="font-serif font-semibold text-lg text-primary mb-2">Téléphone</h3>
                    <p className="text-primary font-light">+33 (0)1 XX XX XX XX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-secondary mt-1" />
                  <div>
                    <h3 className="font-serif font-semibold text-lg text-primary mb-2">Email</h3>
                    <p className="text-primary font-light">contact@ldv-art.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Formulaire de Contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold font-serif text-primary mb-6">Envoyez-nous un Message</h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  ></textarea>
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                  Envoyer le Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}