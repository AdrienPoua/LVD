import H2 from "@/components/ui/H2";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";


export default function Clients() {
  return (
    <section className="bg-foreground">
      <Container>
        <H2>Ils Nous Font Confiance</H2>
        <ParallaxScroll clients={clients} />;
      </Container>
    </section>
  )
}



const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  )
}

const clients = [
  {
    label: "Thaddaeus Ropac",
    type: "Gallery",
    image: "/image.webp"
  },
  {
    label: "Magda Danysz",
    type: "Gallery",
    image: "/image.webp"
  },
  {
    label: "Galerie Zberro",
    type: "Gallery",
    image: "/image.webp"
  },
  {
    label: "Galerie Strouk",
    type: "Gallery",
    image: "/image.webp"
  },
  {
    label: "A2Z",
    type: "Gallery",
    image: "/image.webp"
  },
  {
    label: "Eva Jospin",
    type: "Artiste",
    image: "/image.webp"
  },
  {
    label: "JonOne",
    type: "Artiste",
    image: "/image.webp"
  },
  {
    label: "L'Atlas",
    type: "Artiste",
    image: "/image.webp"
  },
  {
    label: "Tanc",
    type: "Artiste",
    image: "/image.webp"
  },
  {
    label: "Lionel Sabatté",
    type: "Artiste",
    image: "/image.webp"
  },
  {
    label: "Musée en Herbe",
    type: "Institution",
    image: "/image.webp"
  },
  {
    label: "Musée Yves Saint Laurent",
    type: "Institution",
    image: "/image.webp"
  },
  {
    label: "Phuong",
    type: "Encadreur",
    image: "/image.webp"
  },
  {
    label: "CBM",
    type: "Encadreur",
    image: "/image.webp"
  },
  {
    label: "J'imagin",
    type: "Encadreur",
    image: "/image.webp"
  }
];