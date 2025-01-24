"use client";

import { Package, Truck, Shield, Hammer, Box } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import H1 from "@/components/ui/H1";
import Image from "next/image";
import LampTitle from "@/components/ui/lamp";

export default function ServicesPage() {
  return (
    <div className="relative" >
        <Header />
      <main>
        <LampTitle title="Nos Services" />
        <Content />
      </main>
      <Footer />
    </div>
  );
}

const services = [
  {
    icon: Package,
    title: "Emballage sur Mesure",
    description:
      "Solutions d'emballage personnalisées utilisant des matériaux de qualité muséale pour une protection optimale pendant le transport et le stockage.",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80",
  },
  {
    icon: Truck,
    title: "Transport d'Art",
    description:
      "Services de transport spécialisés avec véhicules climatisés et manutentionnaires expérimentés. Gestion des expéditions locales, nationales et internationales.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
  },
  {
    icon: Shield,
    title: "Assurance & Rapports",
    description:
      "Couverture d'assurance complète et rapports détaillés de l'état des œuvres. Notre documentation numérique assure transparence et tranquillité d'esprit.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80",
  },
  {
    icon: Hammer,
    title: "Installation",
    description:
      "Services d'installation d'art professionnels par notre équipe qualifiée. Nous assurons la manipulation et le placement appropriés des œuvres.",
    image:
      "https://images.unsplash.com/photo-1581922814484-0b48460b7010?auto=format&fit=crop&q=80",
  },
  {
    icon: Box,
    title: "Solutions de Stockage",
    description:
      "Installations de stockage sécurisées et climatisées pour les besoins à court et long terme. Nos entrepôts répondent aux normes muséales.",
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80",
  },
];

const Content = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {
        services.map((service, index) => (
          <Row key={service.title} index={index} content={<div><h2>{service.title}</h2><p>{service.description}</p></div>}
            image={service.image} />
        ))
      }
    </div>
  );
};

const Row = ({ content, image, index }: { content: React.ReactNode, image: string, index: number }) => {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 py-12 items-center gap-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className={`flex-1 ${isEven ? "md:order-1" : "md:order-2"}`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Image src={image} alt={services[index].title} width={500} height={500} />
      </motion.div>
      <div className={`flex-1 ${isEven ? "md:order-2" : "md:order-1"}`}>{content}</div>
    </motion.div>
  );
}