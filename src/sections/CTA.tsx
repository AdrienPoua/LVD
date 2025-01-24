import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
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
  )
}