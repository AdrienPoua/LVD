"use client";

import { motion } from "framer-motion";
import { Truck, Globe, Clock, Shield } from "lucide-react";
import Image from "next/image";

export default function TransportPage() {
  const features = [
    {
      icon: Globe,
      title: "Couverture Mondiale",
      description: "Services d&apos;expédition internationaux avec gestion douanière et documentation."
    },
    {
      icon: Clock,
      title: "Transport Express",
      description: "Options de livraison express pour les besoins de transport urgents."
    },
    {
      icon: Shield,
      title: "Transit Sécurisé",
      description: "Mesures de sécurité avancées et systèmes de suivi en temps réel."
    },
    {
      icon: Truck,
      title: "Flotte Spécialisée",
      description: "Véhicules à température contrôlée conçus pour le transport d&apos;œuvres d&apos;art."
    }
  ];

  return (
    <div className="pt-16">
      {/* Section Héro */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
          alt="Transport d&apos;Art"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Services de Transport d&apos;Art</h1>
          <p className="text-xl font-light max-w-2xl mx-auto">
            Transport sûr et sécurisé pour vos œuvres d&apos;art précieuses
          </p>
        </div>
      </section>

      {/* Grille des Caractéristiques */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <feature.icon className="h-8 w-8 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-2 font-serif text-primary">{feature.title}</h3>
                <p className="text-primary font-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sections de Contenu */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="flex-1 relative h-[300px] md:h-[400px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?auto=format&fit=crop&q=80"
                  alt="Transport Spécialisé"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-1 space-y-4">
                <h2 className="text-3xl font-bold font-serif text-primary">Solutions de Transport Spécialisées</h2>
                <p className="text-primary text-lg font-light leading-relaxed">
                  Notre flotte de véhicules spécialisés est équipée de systèmes de contrôle climatique et de suspension pneumatique pour garantir que votre œuvre d'art arrive en parfait état. Chaque transport est soigneusement planifié et exécuté par notre équipe expérimentée.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row-reverse gap-8 items-center"
            >
              <div className="flex-1 relative h-[300px] md:h-[400px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1577083552431-6e5fd75a9160?auto=format&fit=crop&q=80"
                  alt="Logistique Mondiale"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-1 space-y-4">
                <h2 className="text-3xl font-bold font-serif text-primary">Réseau Logistique Mondial</h2>
                <p className="text-primary text-lg font-light leading-relaxed">
                  Grâce à notre vaste réseau de partenaires dans le monde entier, nous gérons tous les aspects de l'expédition internationale d'œuvres d'art, y compris le dédouanement, la documentation et l'assurance. Notre équipe assure des transitions fluides à travers les frontières.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}