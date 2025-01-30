export default function HeroSection() {
  return (
    <main className="flex flex-col items-center justify-center h-[80svh]">
      <Content />
    </main>
  )
}

const Content = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-8xl font-bold mb-6 text-center">Spécialistes du Transport et <br /> de la Manipulation d&apos;Art </h1>
      <p className="text-3xl mb-8 font-light">
        Services logistiques d&apos;art à Paris, faisant la confiance des galeries, musées et collectionneurs.
      </p>
    </div>
  )
}
