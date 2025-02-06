export default function HeroSection() {
  return (
    <main className='flex h-[60svh] flex-col items-center justify-center px-4 text-center'>
      <Content />
    </main>
  );
}

const Content = () => {
  return (
    <div>
      <h1 className='mb-6 mt-20 font-secondary text-5xl font-bold sm:mt-32 sm:text-6xl md:mt-44 md:text-8xl'>
        LVD ART
      </h1>
      <p className='mb-8 max-w-4xl text-lg font-light sm:text-xl md:text-2xl lg:text-3xl'>
        Services de <span className='text-accent'>transport </span>et de{' '}
        <span className='text-accent'>logistique </span> d&apos;art à Paris, pour les galeries, musées et
        collectionneurs.
      </p>
    </div>
  );
};
