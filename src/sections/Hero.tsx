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
      <h1 className='mb-6 text-center font-bold md:text-8xl'>LVD ART </h1>
      <p className='mb-8 font-secondary text-3xl font-light'>
        Services de transport et de logistique d&apos;art à Paris, faisant la confiance des galeries, musées et
        collectionneurs.
      </p>
    </div>
  );
};
