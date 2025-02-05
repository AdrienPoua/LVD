export default function HeroSection() {
  return (
    <main className='flex h-[60svh] flex-col items-center justify-center'>
      <Content />
    </main>
  );
}

const test = () => {
  return <div>test</div>;
};

const Content = () => {
  return (
    <div>
      <h1 className='mb-6 text-center font-bold md:text-8xl font-secondary mt-44'>LVD ART </h1>
      <p className='mb-8 text-3xl font-light'>
        Services de transport et de logistique d&apos;art à Paris, pour les galeries, musées et collectionneurs.
      </p>
    </div>
  );
};
