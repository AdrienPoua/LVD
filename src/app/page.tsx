"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Shield, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      icon: Package,
      title: "Emballage sur Mesure",
      description: "Solutions d'emballage personnalisées conçues pour protéger vos œuvres d'art pendant le transport et le stockage.",
    },
    {
      icon: Truck,
      title: "Transport d'Art",
      description: "Services de transport spécialisés pour œuvres d'art à l'échelle régionale, nationale et internationale.",
    },
    {
      icon: Shield,
      title: "Assurance & Rapports",
      description: "Couverture d'assurance complète et rapports détaillés de l'état des œuvres pour votre tranquillité d'esprit.",
    },
  ];

  const clients = {
    galleries: [
      "Thaddaeus Ropac",
      "Magda Danysz",
      "Galerie Zberro",
      "Galerie Strouk",
      "A2Z"
    ],
    artists: [
      "Eva Jospin",
      "JonOne",
      "L'Atlas",
      "Tanc",
      "Lionel Sabatté"
    ],
    institutions: [
      "Musée en Herbe",
      "Musée Yves Saint Laurent"
    ],
    encadreurs: [
      "Phuong",
      "CBM",
      "J'imagin"
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1594741158704-5a784b8e59fb?auto=format&fit=crop&q=80"
          alt="Galerie d'Art"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-overlay" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
            Spécialistes du Transport et de la Manipulation d'Art
          </h1>
          <p className="text-xl mb-8 font-light">
            Services logistiques d'art à Paris, faisant la confiance des galeries, musées et collectionneurs.
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-white"
            asChild
          >
            <Link href="/contact">
              Commencer <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* Qui sommes-nous Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-serif text-primary">Qui Sommes-Nous ?</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-primary text-lg font-light leading-relaxed mb-6">
                Depuis notre création, LDV ART s'est imposé comme un acteur majeur dans le transport et la manipulation d'œuvres d'art à Paris. Notre expertise unique combine passion pour l'art et excellence logistique.
              </p>
              <p className="text-primary text-lg font-light leading-relaxed">
                Notre équipe de professionnels qualifiés assure un service personnalisé, répondant aux exigences les plus strictes des galeries, musées, artistes et collectionneurs. Nous comprenons la valeur inestimable de chaque œuvre qui nous est confiée.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-serif text-primary">Nos Services</h2>
            <p className="text-primary max-w-2xl mx-auto font-light">
              Des solutions complètes de manipulation d'art adaptées à vos besoins spécifiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <service.icon className="h-12 w-12 text-secondary mb-6" />
                <h3 className="text-xl font-bold mb-4 font-serif text-primary">{service.title}</h3>
                <p className="text-primary mb-6 font-light">{service.description}</p>
                <Link
                  href={`/services#${service.title.toLowerCase().replace(" ", "-")}`}
                  className="text-secondary hover:text-secondary/80 font-medium inline-flex items-center"
                >
                  En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ils nous font confiance Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-serif text-primary">Ils Nous Font Confiance</h2>
            <p className="text-primary max-w-2xl mx-auto font-light">
              Découvrez les prestigieux clients qui nous accordent leur confiance pour la manipulation et le transport de leurs œuvres d'art.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6 font-serif text-secondary">Galeries</h3>
              <ul className="space-y-3">
                {clients.galleries.map((gallery) => (
                  <li key={gallery} className="text-primary font-light">{gallery}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 font-serif text-secondary">Artistes</h3>
              <ul className="space-y-3">
                {clients.artists.map((artist) => (
                  <li key={artist} className="text-primary font-light">{artist}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 font-serif text-secondary">Institutions</h3>
              <ul className="space-y-3">
                {clients.institutions.map((institution) => (
                  <li key={institution} className="text-primary font-light">{institution}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 font-serif text-secondary">Encadreurs</h3>
              <ul className="space-y-3">
                {clients.encadreurs.map((encadreur) => (
                  <li key={encadreur} className="text-primary font-light">{encadreur}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 font-serif">Prêt à Transporter Votre Art ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-light">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins en transport et manipulation d'art. Nous sommes là pour vous proposer une solution sur mesure.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white"
            asChild
          >
            <Link href="/contact">
              Nous Contacter <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}