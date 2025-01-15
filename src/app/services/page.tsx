"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Package, Truck, Shield, Hammer, Box, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useRef } from "react";

export default function ServicesPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const services = [
    {
      icon: Package,
      title: "Emballage sur Mesure",
      description: "Solutions d'emballage personnalisées utilisant des matériaux de qualité muséale pour une protection optimale pendant le transport et le stockage.",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80"
    },
    {
      icon: Truck,
      title: "Transport d'Art",
      description: "Services de transport spécialisés avec véhicules climatisés et manutentionnaires expérimentés. Gestion des expéditions locales, nationales et internationales.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
    },
    {
      icon: Shield,
      title: "Assurance & Rapports",
      description: "Couverture d'assurance complète et rapports détaillés de l'état des œuvres. Notre documentation numérique assure transparence et tranquillité d'esprit.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
    },
    {
      icon: Hammer,
      title: "Installation",
      description: "Services d'installation d'art professionnels par notre équipe qualifiée. Nous assurons la manipulation et le placement appropriés des œuvres.",
      image: "https://images.unsplash.com/photo-1581922814484-0b48460b7010?auto=format&fit=crop&q=80"
    },
    {
      icon: Box,
      title: "Solutions de Stockage",
      description: "Installations de stockage sécurisées et climatisées pour les besoins à court et long terme. Nos entrepôts répondent aux normes muséales.",
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="pt-16" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, 300]),
          }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1577083552431-6e5fd75a9160?auto=format&fit=crop&q=80"
            alt="Services d'Art"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary/80" />
        </motion.div>
        <div className="relative text-center text-white px-4 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4 font-serif"
          >
            Nos Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl font-light max-w-2xl mx-auto"
          >
            Des solutions complètes adaptées à vos besoins spécifiques
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <CardHeader className="relative h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <service.icon className="absolute bottom-4 left-4 h-8 w-8 text-white" />
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl font-bold mb-2 font-serif text-primary">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-primary mb-4">
                      {service.description}
                    </CardDescription>
                    <Button
                      variant="ghost"
                      className="text-primary hover:text-primary/80 p-0 hover:bg-transparent"
                    >
                      En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
              Prêt à Collaborer ?
            </h2>
            <p className="text-xl mb-8 font-light max-w-2xl mx-auto">
              Contactez-nous pour discuter de vos besoins spécifiques et obtenir un devis personnalisé.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white"
              asChild
            >
              <Link href="/contact">
                Demander un Devis <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}