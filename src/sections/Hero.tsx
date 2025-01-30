export default function HeroSection() {
  return (
    <main className='flex h-[80svh] flex-col items-center justify-center'>
      <Content />
    </main>
  );
}

const Content = () => {
  return (
    <div>
      <h1 className='mb-6 text-center text-4xl font-bold md:text-8xl'>
        Spécialistes du Transport et <br /> de la Manipulation d&apos;Art{' '}
      </h1>
      <p className='mb-8 text-3xl font-light'>
        Services logistiques d&apos;art à Paris, faisant la confiance des galeries, musées et collectionneurs.
      </p>
    </div>
  );
};
