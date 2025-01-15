import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-serif text-primary">À Propos</h3>
            <p className="text-sm text-primary">
              Spécialisés dans le transport et la logistique d'œuvres d'art avec plus de 20 ans d'expérience.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-serif text-primary">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/transport" className="text-sm text-primary hover:text-primary">
                  Transport d'Art
                </a>
              </li>
              <li>
                <a href="/services" className="text-sm text-primary hover:text-primary">
                  Services Spécialisés
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-primary hover:text-primary">
                  Demande de Devis
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-serif text-primary">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-primary">Email: contact@example.com</li>
              <li className="text-sm text-primary">Tél: +33 1 23 45 67 89</li>
              <li className="text-sm text-primary">Paris, France</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-serif text-primary">Horaires</h3>
            <ul className="space-y-2">
              <li className="text-sm text-primary">Lun - Ven: 9h - 18h</li>
              <li className="text-sm text-primary">Sam: 10h - 16h</li>
              <li className="text-sm text-primary">Dim: Fermé</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Votre Entreprise. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}