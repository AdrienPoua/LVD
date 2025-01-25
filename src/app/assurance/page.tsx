"use client";

import { motion } from "framer-motion";
import { Shield, FileText, Camera, Lock } from "lucide-react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function InsurancePage() {
  const features = [
    {
      icon: Shield,
      title: "Couverture Complète",
      description: "Protection d'assurance complète pour les œuvres d'art pendant le transport et la manipulation."
    },
    {
      icon: FileText,
      title: "Documentation Détaillée",
      description: "Rapports d'état détaillés avant et après le transport."
    },
    {
      icon: Camera,
      title: "Archives Numériques",
      description: "Photographies de l'état des œuvres."
    },
    {
      icon: Lock,
      title: "Processus Sécurisé",
      description: "Protocoles de sécurité rigoureux tout au long du parcours."
    }
  ];

  return (
    <>
      <Header />
      <section className="relative h-[40vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
          alt="Services d'Assurance"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Assurance & Rapports</h1>
          <p className="text-xl font-light max-w-2xl mx-auto">
            Protection complète et documentation pour vos œuvres d&apos;art précieuses
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
                  src="https://images.unsplash.com/photo-1551135049-8a33b5883817?auto=format&fit=crop&q=80"
                  alt="Couverture d&apos;Assurance"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-1 space-y-4">
                <h2 className="text-3xl font-bold font-serif text-primary">Couverture d&apos;Assurance</h2>
                <p className="text-primary text-lg font-light leading-relaxed">
                  Nos polices d&apos;assurance complètes offrent une protection totale pour vos œuvres d&apos;art pendant le transport, la manipulation et le stockage. Nous collaborons avec les meilleurs assureurs d&apos;art pour garantir une couverture maximale et votre tranquillité d&apos;esprit.
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
                  src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&q=80"
                  alt="Rapports d&apos;État"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-1 space-y-4">
                <h2 className="text-3xl font-bold font-serif text-primary">Rapports d&apos;État</h2>
                <p className="text-primary text-lg font-light leading-relaxed">
                  Nos rapports d&apos;état détaillés comprennent des photographies et une évaluation de l&apos;état de votre œuvre d&apos;art avant et après le transport. Cette documentation assure la transparence et la responsabilité tout au long du processus.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}