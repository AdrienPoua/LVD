"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import H2 from "@/components/ui/H2"

const clients = [
  { label: "Thaddaeus Ropac", type: "Gallery", image: "/image.png" },
  { label: "Magda Danysz", type: "Gallery", image: "/image.png" },
  { label: "Galerie Zberro", type: "Gallery", image: "/image.png" },
  { label: "Galerie Strouk", type: "Gallery", image: "/image.png" },
  { label: "A2Z", type: "Gallery", image: "/image.png" },
  { label: "Eva Jospin", type: "Artiste", image: "/image.png" },
  { label: "JonOne", type: "Artiste", image: "/image.png" },
  { label: "L'Atlas", type: "Artiste", image: "/image.png" },
  { label: "Tanc", type: "Artiste", image: "/image.png" },
  { label: "Lionel Sabatté", type: "Artiste", image: "/image.png" },
  { label: "Musée en Herbe", type: "Institution", image: "/image.png" },
  { label: "Musée Yves Saint Laurent", type: "Institution", image: "/image.png" },
  { label: "Phuong", type: "Encadreur", image: "/image.png" },
  { label: "CBM", type: "Encadreur", image: "/image.png" },
]

export default function ClientSection8() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-foreground">
      <div className="container mx-auto px-4">
        <H2 className="text-center">Ils nous font confiance</H2>
        <div className="flex  justify-center pb-4">
          {clients.map((client, index) => (
            <Card key={client.label} client={client} expandedIndex={expandedIndex} setExpandedIndex={setExpandedIndex} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

const Card = ({ client, expandedIndex, setExpandedIndex, index }: { client: typeof clients[number], expandedIndex: number | null, setExpandedIndex: (index: number | null) => void, index: number }) => {
  return (
    <motion.div
      className="flex-shrink-0 w-64 h-96 mx-2 relative cursor-pointer"
      initial={{ width: "4rem" }}
      animate={{ width: expandedIndex === index ? "16rem" : "4rem" }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setExpandedIndex(expandedIndex === index ? null : index)}
    >
      <Image
        src={client.image || "/image.png"}
        alt={client.label}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
        <AnimatePresence>
          {expandedIndex === index ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-4 text-center"
            >
              <h3 className="font-semibold text-xl mb-2">{client.label}</h3>
              <p className="text-sm">{client.type}</p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="transform -rotate-90 whitespace-nowrap"
            >
              {client.label}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
