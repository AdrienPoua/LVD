import H2 from "@/components/ui/H2";

export default function Clients() {
  return (
    <section className="py-24">
      <Container>
        <H2>Ils Nous Font Confiance</H2>
    {
      clients.map
    }
      </Container>
    </section>
  )
}


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

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  )
}


const items = ({ label }: { label: string }) => {
  return (
    <div>
      <h3 className="">
        {label}
      </h3>
    </div>
  )
}