export function GridPattern() {
  return (
    <svg className='absolute inset-0 h-full w-full' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <pattern id='grid' width='32' height='32' patternUnits='userSpaceOnUse'>
          <path d='M0 32V.5H1.5V32zm32 0V.5H30.5V32zm0-32H.5V1.5H32z' fill='none' stroke='currentColor' opacity='0.2' />
        </pattern>
      </defs>
      <rect width='100%' height='100%' fill='url(#grid)' />
    </svg>
  );
}
