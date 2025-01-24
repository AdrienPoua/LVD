
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground  pt-16">
      <Container>
        <ContentContainer>
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
                  Transport d&apos;Art
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
        </ContentContainer>
        <Sign />
      </Container>
    </footer>
  );
}

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
  );
}

const ContentContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {children}
    </div>
  );
}

const Sign = () => {
  return (
    <div className="border border-t-gray-200 flex justify-center w-full py-5">
      <Link
        href="https://www.linkedin.com/in/adrien-poua"
        target="_blank"
        className="text-accent relative w-fit"
      >
        Made with
        by
        Adrien POUA
        <Underline />
      </Link>
    </div>
  )
}

const Underline = () => {
  return (
    <div className="after:bg-gradient-to-r from-accent -z-10 to-accent via-foreground after:p-1 after:shadow-xl after:w-full after:rounded-lg after:filter after:absolute after:left-0 inline-block after:-bottom-3" >
      <span className="absolute left-1/2 -translate-x-1/2 z-50">❤</span>
    </div>
  )
}