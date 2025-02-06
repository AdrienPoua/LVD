import Link from 'next/link';

export default function Logo() {
  return (
    <Link href={'/'} className='flex items-center justify-center space-x-2'>
      <div className='flex flex-col items-center justify-center'>
        <span className='relative flex items-center justify-center font-secondary text-3xl font-bold'>
          LVD
          <div className=' text-sm tracking-widest text-accent'>art</div>
        </span>
        <span className='font-primary text-sm tracking-widest text-accent'>Logistique</span>
      </div>
    </Link>
  );
}
